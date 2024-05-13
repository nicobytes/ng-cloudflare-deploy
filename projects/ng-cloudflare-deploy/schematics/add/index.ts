import { Tree, SchematicsException, chain } from '@angular-devkit/schematics';
import { readWorkspace } from '@schematics/angular/utility';
import { Schema } from './schema';
import { addCFDependencies, applyTemplateFiles, updateAngularJson, updateTsConfig, addBuilder } from './rules';


export default function (options: Schema) {
  return async (tree: Tree) => {
    const workspace = await readWorkspace(tree);
    const project = workspace.projects.get(options.project);

    if (!project) {
      throw new SchematicsException(
        `The specified Angular project: ${options.project} is not defined in this workspace.`
      );
    }

    const buildTarget = project.targets.get('build');
    if (!buildTarget) {
      throw new SchematicsException('build target does not exist');
    }

    return chain([
      addCFDependencies(),
      applyTemplateFiles({ project, projectName: options.project }),
      updateAngularJson({ workspace, buildTarget }),
      updateTsConfig({ buildTarget }),
      addBuilder({project, workspace})
    ]);
  }
}
