import {BuilderContext, BuilderOutput, createBuilder} from '@angular-devkit/architect';

export default createBuilder((context: BuilderContext): Promise<BuilderOutput> => {
  context.reportStatus(`Executing deploy...`);
  return Promise.resolve({success: true});
});
