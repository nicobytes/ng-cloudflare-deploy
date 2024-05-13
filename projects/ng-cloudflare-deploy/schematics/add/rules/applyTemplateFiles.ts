import {
  apply,
  applyTemplates,
  mergeWith,
  move,
  strings,
  url,
  Rule,
  filter,
  chain,
  Tree
} from '@angular-devkit/schematics';
import { workspaces, normalize, join } from '@angular-devkit/core';

interface Params {
  project: workspaces.ProjectDefinition,
  projectName: string;
}

export default function applyTemplateFiles({project, projectName}: Params): Rule {
  return (tree: Tree) => {
    tree.delete(join(normalize(project.root), 'server.ts'));

    const templateTsCode = apply(url('./files'), [
      filter(path => path.endsWith('.ts.template')),
      applyTemplates({}),
      move(normalize(project.root)),
    ]);

    const templateJsonCode = apply(url('./files'), [
      filter(path => path.endsWith('.json.template')),
      applyTemplates({}),
      move(join(normalize(project.root), 'src')),
    ]);

    const templateTomlCode = apply(url('./files'), [
      filter(path => path.endsWith('.toml.template')),
      applyTemplates({
        classify: strings.classify,
        name: projectName,
      }),
      move(normalize(project.root)),
    ]);

    return chain([
      mergeWith(templateTsCode),
      mergeWith(templateJsonCode),
      mergeWith(templateTomlCode),
    ]);
  }
}
