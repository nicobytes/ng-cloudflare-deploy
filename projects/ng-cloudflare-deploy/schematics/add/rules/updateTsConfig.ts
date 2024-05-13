import { Tree, SchematicsException, Rule } from '@angular-devkit/schematics';
import { workspaces } from '@angular-devkit/core';
import { JSONFile } from '@schematics/angular/utility/json-file';

interface Params {
  buildTarget: workspaces.TargetDefinition;
}

export default function updateTsConfig({ buildTarget }: Params): Rule {
  return async (tree: Tree) => {
    const tsConfigPath = buildTarget.options?.['tsConfig'] as string ?? undefined;
    if (!tsConfigPath || typeof tsConfigPath !== 'string') {
      throw new SchematicsException('tsConfigPath does not exist');
    }

    const tsConfig = new JSONFile(tree, tsConfigPath);
    const typePath = ['compilerOptions', 'types'];
    const types = new Set((tsConfig.get(typePath) as string[] | undefined) ?? []);
    const key = '@cloudflare/workers-types/2023-07-01';
    if (!types.has(key)) {
      types.add(key);
      tsConfig.modify(typePath, [...types]);
    }
  }
}
