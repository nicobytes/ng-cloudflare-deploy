import {BuilderContext, BuilderOutput, createBuilder} from '@angular-devkit/architect';
import { Schema } from './schema';
import {promises as fs} from 'fs';


// Copy the files over so that they can be uploaded by the pages publish command.
export default createBuilder(( builderConfig: Schema, context: BuilderContext): Promise<BuilderOutput> => {
  context.logger.info(`Executing deploy...`);
  export const root = path.resolve(dirname, "..");
  export const client = path.resolve(root, "dist/browser");
  export const ssr = path.resolve(root, "dist/server");
  export const cloudflare = path.resolve(root, "dist/cloudflare");
  export const worker = path.resolve(cloudflare, "_worker.js");
  fs.cpSync(client, cloudflare, { recursive: true });
  fs.cpSync(ssr, worker, { recursive: true });
  fs.renameSync(join(worker, "server.mjs"), join(worker, "index.js"));
  return Promise.resolve({success: true});
});




