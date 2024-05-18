import { Rule, chain } from '@angular-devkit/schematics';
import { addDependency, DependencyType, InstallBehavior } from '@schematics/angular/utility';

export default function addCFDependencies(): Rule {
  return () => {
    return chain([
      addDependency('wrangler', 'beta', {
        type: DependencyType.Dev,
        install: InstallBehavior.Auto
      }),
      addDependency('@cloudflare/workers-types', 'latest', {
        type: DependencyType.Dev,
        install: InstallBehavior.Auto
      }),
      addDependency('@miniflare/tre', 'next', {
        type: DependencyType.Dev,
        install: InstallBehavior.Auto
      })
    ]);
  }
}
