import { parseHTML } from 'linkedom';
import { mkdir, writeFile } from 'node:fs/promises';
const works=[['周易经传导读','周易'],['梅花易数','梅花易數'],['增删卜易','增刪卜易'],['卜筮正宗','卜筮正宗'],['三命通会','三命通會'],['滴天髓','滴天髓'],['渊海子平','淵海子平'],['御定六壬直指','御定六壬直指'],['紫微斗数全书','紫微斗數全書'],['太乙金镜式经','太乙金鏡式經 (四庫全書本)'],['协纪辨方书','欽定協紀辨方書 (四庫全書本)']];
await mkdir('dist/books/text',{recursive:true});
const manifest=[];
async function page(title){const u=new URL('https://zh.wikisource.org/w/api.php');u.search=new URLSearchParams({action:'parse',page:title,prop:'text|links|revid',format:'json',redirects:'1'});for(let retry=0;retry<3;retry++){try{const r=await fetch(u,{signal:AbortSignal.timeout(30000)});if(!r.ok)throw Error(r.status);const j=await r.json();if(j.error)throw Error(j.error.info);return j.parse;}catch(e){if(retry===2)throw e;}}}
await Promise.all(works.map(async([name,title],i)=>{
 const chapters=[],visited=new Set(),queue=[title];let failure='';
 while(queue.length&&visited.size<220){const t=queue.shift();if(visited.has(t))continue;visited.add(t);try{const p=await page(t);const {document}=parseHTML(p.text['*']);document.querySelectorAll('script,style,table,.mw-editsection,.noprint,.navbox,.licenseContainer,.ws-noexport,header,footer').forEach(e=>e.remove());const content=document.querySelector('.mw-parser-output')||document;const text=content.textContent.replace(/\[編輯\]/g,'').replace(/\n[ \t]+/g,'\n').replace(/\n{3,}/g,'\n\n').trim();if(text.length>100)chapters.push({title:t,text,source:'https://zh.wikisource.org/wiki/'+encodeURIComponent(t),revision:p.revid});for(const l of p.links||[]){const n=l['*'];if(l.ns===0&&('exists'in l)&&n.startsWith(title+'/')&&!visited.has(n)&&!queue.includes(n))queue.push(n);}console.log(name,t,text.length);}catch(e){failure+=t+': '+e.message+'; ';}}
 const id='classic-'+i,file='text/'+id+'.json';const record={name,title,chapters,source:'https://zh.wikisource.org/wiki/'+encodeURIComponent(title),license:'古籍原作属公有领域；维基文库录入与编校依其 CC BY-SA 4.0 条款保留来源、版本号与授权。未逐字校勘，录入本可能含编者按语。',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',importedAt:new Date().toISOString(),scope:failure?'部分收录（存在抓取失败）':'已收录来源页及同名子页；不保证底本完整',failure};
 if(chapters.length)await writeFile('dist/books/'+file,JSON.stringify(record));manifest.push({name,file:chapters.length?file:null,chapters:chapters.length,source:record.source,error:failure});
}));
await writeFile('dist/books/text-manifest.json',JSON.stringify(manifest,null,2));
