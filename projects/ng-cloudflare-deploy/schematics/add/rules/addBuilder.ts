import { Rule, Tree } from '@angular-devkit/schematics';
import { workspaces } from '@angular-devkit/core';
import { writeWorkspace } from '@schematics/angular/utility';

interface Params {
  project: workspaces.ProjectDefinition;
  workspace: workspaces.WorkspaceDefinition;
}

export default function addBuilder({ project, workspace }: Params): Rule {
  return async (tree: Tree) => {
    project.targets.add({
      name: 'deploy',
      builder: '@nicobytes/ng-cf-deploy:deploy',
      options: {},
    });
    await writeWorkspace(tree, workspace);
  }
}
