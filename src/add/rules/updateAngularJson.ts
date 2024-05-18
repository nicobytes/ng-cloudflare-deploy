import { Tree, SchematicsException, Rule } from '@angular-devkit/schematics';
import { workspaces } from '@angular-devkit/core';
import { writeWorkspace } from '@schematics/angular/utility';

interface Params {
  workspace: workspaces.WorkspaceDefinition;
  buildTarget: workspaces.TargetDefinition;
}

export default function updateAngularJson({ workspace, buildTarget }: Params): Rule {
  return async (tree: Tree) => {
    const assets = buildTarget.options?.['assets'] as string[] | undefined;
    if (!assets) {
      throw new SchematicsException('assets does not exist');
    }

    if (!assets.includes('src/_routes.json')) {
      assets.push('src/_routes.json');
      await writeWorkspace(tree, workspace);
    }
  }
}
