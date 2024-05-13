import { Rule, chain } from '@angular-devkit/schematics';
import { addDependency, DependencyType, InstallBehavior } from '@schematics/angular/utility';

export default function addCFDependencies(): Rule {
  return () => {
    return chain([
      addDependency('wrangler', '3.53.0', {
        type: DependencyType.Dev,
        install: InstallBehavior.Auto
      }),
      addDependency('@cloudflare/workers-types', '4.20240320.1', {
        type: DependencyType.Dev,
        install: InstallBehavior.Auto
      }),
      addDependency('@miniflare/tre', '3.0.0-next.14', {
        type: DependencyType.Dev,
        install: InstallBehavior.Auto
      })
    ]);
  }
}
