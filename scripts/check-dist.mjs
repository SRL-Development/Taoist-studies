import { existsSync, readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const html=readFileSync(new URL('../dist/index.html',import.meta.url),'utf8');
for(const match of html.matchAll(/(?:src|href)="\.\/([^"]+)"/g)){
  assert.ok(existsSync(new URL('../dist/'+match[1],import.meta.url)),`Missing asset: ${match[1]}`);
}
for(const file of ['platform.css','talisman-catalog.css']) assert.ok(existsSync(new URL('../dist/'+file,import.meta.url)),file);
assert.ok(!html.includes('fonts.googleapis.com'),'Google fonts dependency');
console.log('PASS: local HTML assets and font independence');
const manifest=JSON.parse(readFileSync(new URL('../dist/books/text-manifest.json',import.meta.url),'utf8'));
assert.equal(manifest.length,11,'11 local text books');
for(const book of manifest){
 const data=JSON.parse(readFileSync(new URL('../dist/books/'+book.file,import.meta.url),'utf8'));
 assert.ok(data.chapters.length>0,book.name);
 assert.ok(data.chapters.reduce((n,c)=>n+c.text.length,0)>10000,book.name+' must contain substantive text');
 assert.ok(data.chapters.every(c=>c.source),book.name+' sources');
}
for(let page=1;page<=408;page++)assert.ok(existsSync(new URL('../dist/assets/qimen/page-'+String(page).padStart(3,'0')+'.jpg',import.meta.url)),'Missing scan page '+page);
const pdf=readFileSync(new URL('../dist/books/qimen-tongzong-1925.pdf',import.meta.url));
assert.equal(pdf.subarray(0,5).toString(),'%PDF-');
assert.ok(!html.includes('src="./talisman-catalog.js"'),'old illustrative catalog must not load');
console.log('PASS: 11 local books, 408 scan pages, PDF and authentic catalog entry');
