import { existsSync, readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const html=readFileSync(new URL('../dist/index.html',import.meta.url),'utf8');
for(const match of html.matchAll(/(?:src|href)="\.\/([^"]+)"/g)){
  assert.ok(existsSync(new URL('../dist/'+match[1],import.meta.url)),`Missing asset: ${match[1]}`);
}
for(const file of ['platform.css','talisman-catalog.css']) assert.ok(existsSync(new URL('../dist/'+file,import.meta.url)),file);
assert.ok(!html.includes('fonts.googleapis.com'),'Google fonts dependency');
console.log('PASS: local HTML assets and font independence');
