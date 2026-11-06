import assert from 'node:assert/strict';
const base=(process.argv[2]||'http://127.0.0.1:8080').replace(/\/$/,'');
async function get(path){const response=await fetch(base+path,{signal:AbortSignal.timeout(10000),redirect:'manual'});return {response,text:await response.text()};}
try {
  const h=await get('/healthz');assert.equal(h.response.status,200);assert.equal(h.text.trim(),'ok');
  const home=await get('/');assert.equal(home.response.status,200,'home without login redirect');
  assert.match(home.text,/玄道易术/);assert.match(home.text,/ziwei-form/);assert.match(home.text,/fengshui-photo/);
  assert.doesNotMatch(home.text,/fonts\.googleapis\.com/);
  for(const path of ['/styles.css','/platform.css','/talisman-catalog.css','/app.js','/folk.js','/tools-pro.js','/platform.js','/talisman-catalog.js','/views.js']){
    const a=await get(path);assert.equal(a.response.status,200,path);assert.ok(a.text.length>10,path);assert.doesNotMatch(a.text.slice(0,100),/<!doctype html>/i,path);
  }
  assert.equal((await get('/missing-deployment-check.js')).response.status,404);
  console.log(`PASS: health, HTML, assets, tools and 404 at ${base}`);
}catch(error){console.error(`FAIL: ${error.message}`);process.exitCode=1;}
