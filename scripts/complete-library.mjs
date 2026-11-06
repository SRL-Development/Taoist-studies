import {readFile,writeFile} from 'node:fs/promises';
const list=JSON.parse(await readFile('dist/books/mirror-manifest.json','utf8'));
for(const [id,name,path,label] of [
 [0,'周易经传导读','易藏/易经/周易正义.md','周易正义（含经文与古注）'],
 [5,'滴天髓','易藏/术数/滴天髓阐微.md','滴天髓阐微（含原文与注）'],
 [8,'紫微斗数全书','道藏/正统道藏续道藏/紫微斗数.md','紫微斗数（道藏录入本，非所标全书版本）']
]){
 const url='https://raw.githubusercontent.com/daizhige-org/daizhigev20/data/'+path.split('/').map(encodeURIComponent).join('/');const r=await fetch(url,{signal:AbortSignal.timeout(30000)});if(!r.ok)throw Error(path+' '+r.status);const text=(await r.text()).replace(/^---[\s\S]*?---\s*/,'').replace(/^.*《滴天髓》为中国传统命理学.*$/m,'');const lines=text.split('\n');let buf='',part=1;const chapters=[];const source='https://github.com/daizhige-org/daizhigev20/blob/data/'+path;
 for(const line of lines){buf+=line+'\n';if(buf.length>14000){chapters.push({title:label+' · 分段'+part++,text:buf,source});buf='';}}if(buf.trim())chapters.push({title:label+' · 分段'+part,text:buf,source});
 const file='text/classic-'+id+'.json';await writeFile('dist/books/'+file,JSON.stringify({name,chapters,source,scope:'现收版本：'+label+'；阅读分段非原书卷界，未逐字校勘',license:'古籍公开文本转录，版本、注者与来源以原页为准；非现代白话译本。'}));list.push({name,file,chapters:chapters.length,source,edition:label});console.log(name,text.length);
}
await writeFile('dist/books/text-manifest.json',JSON.stringify(list,null,2));
