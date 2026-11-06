import { readFile,writeFile,mkdir } from 'node:fs/promises';
await mkdir('dist/books/text',{recursive:true});
const names=[['周易经传导读',null],['梅花易数','梅花易数'],['增删卜易','增删卜易'],['卜筮正宗','卜筮正宗'],['三命通会','三命通会'],['滴天髓',null],['渊海子平','渊海子平'],['御定六壬直指','六壬直指御定'],['紫微斗数全书',null],['太乙金镜式经','太乙金镜式经'],['协纪辨方书','钦定协纪辨方书']];
const manifest=[];
for(let i=0;i<names.length;i++){
 const [name,filename]=names[i];if(!filename)continue;
 const source='https://github.com/ytzeng1/fengshui_data/blob/main/'+encodeURIComponent(filename+'.txt');const url='https://raw.githubusercontent.com/ytzeng1/fengshui_data/main/'+encodeURIComponent(filename+'.txt');const r=await fetch(url,{signal:AbortSignal.timeout(30000)});if(!r.ok)throw Error(filename+' '+r.status);const text=await r.text();if(text.length<500)throw Error('Empty '+name);
 const paragraphs=text.split(/\n/),chapters=[];let buffer='',part=1;for(const p of paragraphs){buffer+=p+'\n';if(buffer.length>14000){chapters.push({title:'阅读分段 '+part++,text:buffer,source});buffer='';}}if(buffer.trim())chapters.push({title:'阅读分段 '+part,text:buffer,source});
 const file='text/classic-'+i+'.json';await writeFile('dist/books/'+file,JSON.stringify({name,chapters,source,license:'古籍原作公有领域；公开文本镜像来源见链接。未逐字校勘，保留原转录，分段为阅读便利而非原书卷界。',scope:'镜像文本收录；底本与完整性尚待逐页校勘'}));manifest.push({name,file,chapters:chapters.length,source});console.log(name,text.length);
}
await writeFile('dist/books/mirror-manifest.json',JSON.stringify(manifest,null,2));
