import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist/server',{recursive:true});
await mkdir('dist/.openai/drizzle',{recursive:true});
await copyFile('src/worker.mjs','dist/server/index.js');
await copyFile('migrations/0001_initial.sql','dist/.openai/drizzle/0001_initial.sql');
console.log('Built static app, Worker API, and database migration.');
