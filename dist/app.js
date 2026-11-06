const systems = [
  {name:'周易八卦',cat:'易学',symbol:'☯',desc:'六十四卦、十翼与象数义理',intro:'以阴阳爻画为基本语言，观察事物在时间、位置与关系中的变化。学习重点不是背诵吉凶，而是理解“变”发生的条件。',concepts:['阴阳与爻位','八卦取象','卦变与互卦','时、位、中、应'],books:['《周易》经传','《周易本义》','《易学启蒙》'],route:'阴阳爻画 → 八卦取象 → 六十四卦 → 十翼义理'},
  {name:'甲子易术',cat:'易学',symbol:'甲',desc:'六十甲子与时空周期推演',intro:'以十天干与十二地支相配构成六十甲子，用来标记年、月、日、时，并观察周期、五行与方位之间的联系。',concepts:['十干十二支','六十甲子','纳音五行','刑冲合害'],books:['《五行大义》','《协纪辨方书》','《三命通会》'],route:'干支识读 → 五行生克 → 六十甲子 → 节气历法'},
  {name:'六爻',cat:'易学',symbol:'䷀',desc:'纳甲装卦、六亲世应与旺衰',intro:'以六次取爻成卦，将地支、六亲、世应等信息装入卦中，结合月日旺衰分析一件具体事情的结构与变化。',concepts:['纳甲装卦','世爻与应爻','六亲六神','月建日辰'],books:['《增删卜易》','《卜筮正宗》','《易隐》'],route:'摇卦定爻 → 纳甲装卦 → 取用神 → 察旺衰动变'},
  {name:'风水堪舆',cat:'堪舆',symbol:'坎',desc:'形势、理气与居住环境观察',intro:'从地形、水势、朝向、采光与空间秩序观察人与环境的关系。传统形势与理气应和现代建筑安全、通风及生活需求共同考量。',concepts:['龙穴砂水','坐向分金','九宫方位','采光通风'],books:['《葬书》','《青囊经》','《地理五诀》'],route:'环境安全 → 形势观察 → 坐向九宫 → 理气流派辨析'},
  {name:'梅花易数',cat:'易学',symbol:'梅',desc:'以象、数、时、物灵活起卦',intro:'以当下的时间、数字、声音或所见之物取象起卦，重视体用、生克与外应，适合训练敏锐而有边界的象数思维。',concepts:['先天卦数','体卦用卦','五行生克','外应取象'],books:['《梅花易数》','《皇极经世》','《周易》'],route:'熟记八卦 → 学会起卦 → 分清体用 → 对照外应复盘'},
  {name:'四柱八字',cat:'命理',symbol:'命',desc:'干支十神、格局与大运流年',intro:'以出生年、月、日、时的干支构成四柱，观察五行气势、十神关系与岁运变化。精确排盘必须使用出生地、真太阳时与节气。',concepts:['四柱排定','十神关系','旺衰格局','大运流年'],books:['《渊海子平》','《三命通会》','《滴天髓》'],route:'排四柱 → 定十神 → 察月令旺衰 → 结合岁运验证'},
  {name:'大六壬',cat:'三式',symbol:'壬',desc:'天地盘、四课三传与神将',intro:'三式之一，以月将加时布天地盘，由日干支起四课、发三传，再参十二天将分析事态的来去与层次。',concepts:['月将加时','天地盘','四课三传','十二天将'],books:['《六壬大全》','《大六壬指南》','《御定六壬直指》'],route:'地盘天盘 → 四课 → 九宗门发三传 → 神将类象'},
  {name:'奇门遁甲',cat:'三式',symbol:'奇',desc:'九宫八门九星与时空选择',intro:'以洛书九宫为框架，将天盘、地盘、人盘、神盘叠合，观察特定时空中的条件配置，常用于态势分析与择时。',concepts:['阴遁阳遁','九宫八门','九星八神','值符值使'],books:['《遁甲演义》','《奇门遁甲统宗》','《御定奇门宝鉴》'],route:'九宫基础 → 起局规则 → 门星神仪 → 用神与格局'},
  {name:'紫微斗数',cat:'命理',symbol:'紫',desc:'十二宫垣、星曜组合与四化',intro:'依出生年月日时安命身宫与诸星曜，通过十二宫、三方四正和四化关系阅读人生主题。不同流派安星规则需保持一致。',concepts:['命宫身宫','十四主星','三方四正','禄权科忌'],books:['《紫微斗数全书》','《紫微斗数全集》','《斗数骨髓赋》'],route:'安命身宫 → 识主星 → 看三方四正 → 参四化限运'},
  {name:'太乙神数',cat:'三式',symbol:'太',desc:'太乙九宫与数理周期',intro:'三式之一，以太乙行宫和主客算等数理结构观察较长周期的时势变化。体系宏大，宜先具备干支、九宫与历法基础。',concepts:['太乙行宫','主客定算','十六神','积年与局数'],books:['《太乙金镜式经》','《太乙统宗宝鉴》','《御定太乙金镜式经》'],route:'九宫干支 → 积年定局 → 太乙行宫 → 主客算与十六神'},
  {name:'小六壬',cat:'易学',symbol:'六',desc:'六神速断与日常取象',intro:'以大安、留连、速喜、赤口、小吉、空亡六种状态循环推演，结构轻便，适合作为认识取象与记录验证的入门练习。',concepts:['六神次序','月日时起课','宫位类象','三宫联读'],books:['《小六壬课例》','《六壬时课》','民间课诀汇编'],route:'熟记六神 → 月日时起课 → 三宫合看 → 建立验证记录'},
  {name:'春秋太卜',cat:'易学',symbol:'卜',desc:'先秦卜筮传统与筮占源流',intro:'从《周礼》太卜之职与《左传》《国语》的筮例，理解先秦卜筮如何服务礼制、决策与历史叙事。',concepts:['龟卜与筮占','三易传统','卦辞援引','筮例语境'],books:['《周礼·春官》','《左传》筮例','《国语》筮例'],route:'礼制背景 → 龟筮差异 → 阅读筮例 → 对照易传'},
  {name:'符箓文化',cat:'道法',symbol:'符',desc:'道教符箓的历史、形制与文献研究',intro:'符箓是道教仪式、书写和文献传统的一部分。可从历史源流、字形结构、科仪语境与地方民俗研究，不能脱离现实条件宣称治疗、避险或改变客观结果。',concepts:['盟威与灵宝传统','符头符身符脚','云篆与道教书写','科仪语境与辨伪'],books:['《道法会元》','《上清灵宝大法》','《正统道藏》相关符图'],route:'道教史基础 → 文献版本 → 形制术语 → 民俗田野与辨伪'},
];
const books = ['周易经传导读','梅花易数','增删卜易','卜筮正宗','三命通会','滴天髓','渊海子平','奇门遁甲统宗','御定六壬直指','紫微斗数全书','太乙金镜式经','协纪辨方书'];
const trigramNames = ['','乾','兑','离','震','巽','坎','艮','坤'];
const trigramSymbols = ['','☰','☱','☲','☳','☴','☵','☶','☷'];
const kingWen = {
  '1-1':[1,'乾为天'],'8-8':[2,'坤为地'],'6-4':[3,'水雷屯'],'7-6':[4,'山水蒙'],'6-1':[5,'水天需'],'1-6':[6,'天水讼'],'8-6':[7,'地水师'],'6-8':[8,'水地比'],
  '5-1':[9,'风天小畜'],'1-2':[10,'天泽履'],'8-1':[11,'地天泰'],'1-8':[12,'天地否'],'1-3':[13,'天火同人'],'3-1':[14,'火天大有'],'8-7':[15,'地山谦'],'4-8':[16,'雷地豫'],
  '2-4':[17,'泽雷随'],'7-5':[18,'山风蛊'],'8-2':[19,'地泽临'],'5-8':[20,'风地观'],'3-4':[21,'火雷噬嗑'],'7-3':[22,'山火贲'],'7-8':[23,'山地剥'],'8-4':[24,'地雷复'],
  '1-4':[25,'天雷无妄'],'7-1':[26,'山天大畜'],'7-4':[27,'山雷颐'],'2-5':[28,'泽风大过'],'6-6':[29,'坎为水'],'3-3':[30,'离为火'],'2-7':[31,'泽山咸'],'4-5':[32,'雷风恒'],
  '1-7':[33,'天山遁'],'4-1':[34,'雷天大壮'],'3-8':[35,'火地晋'],'8-3':[36,'地火明夷'],'5-3':[37,'风火家人'],'3-2':[38,'火泽睽'],'6-7':[39,'水山蹇'],'4-6':[40,'雷水解'],
  '7-2':[41,'山泽损'],'5-4':[42,'风雷益'],'2-1':[43,'泽天夬'],'1-5':[44,'天风姤'],'2-8':[45,'泽地萃'],'8-5':[46,'地风升'],'2-6':[47,'泽水困'],'6-5':[48,'水风井'],
  '2-3':[49,'泽火革'],'3-5':[50,'火风鼎'],'4-4':[51,'震为雷'],'7-7':[52,'艮为山'],'5-7':[53,'风山渐'],'4-2':[54,'雷泽归妹'],'4-3':[55,'雷火丰'],'3-7':[56,'火山旅'],
  '5-5':[57,'巽为风'],'2-2':[58,'兑为泽'],'5-6':[59,'风水涣'],'6-2':[60,'水泽节'],'5-2':[61,'风泽中孚'],'4-7':[62,'雷山小过'],'6-3':[63,'水火既济'],'3-6':[64,'火水未济']
};
const guaThemes=['刚健进取','厚德承载','草创维艰','启蒙求教','守正待时','慎争辨理','统众有纪','亲比相辅','小有积蓄','谨慎履行','交泰通达','闭塞守正','和同于人','丰盛持有','谦抑受益','和乐预备','随时而动','整治积弊','临事教思','观下瞻上','决断障碍','文饰有度','剥落守静','复归正道','真实无妄','蓄养其德','颐养正道','非常担当','重险习坎','光明依附','感应相通','恒久有常','退避保全','壮而守礼','进而自明','晦明自守','齐家有序','求同存异','遇险反身','解除困难','损己益道','增益共享','果决防患','邂逅防微','聚众协力','积小升进','困中守志','养人不穷','革故鼎新','鼎新养贤','震动修省','知止安静','渐进有序','归妹守位','丰盛戒盈','羁旅守柔','谦入申命','和悦相劝','涣散重聚','节制有度','诚信感通','小事可为','功成慎终','未成待续'];
const phaseFor=n=>n<=16?'开端':n<=32?'修己':n<=48?'应世':'变通';
const hexagrams=Object.entries(kingWen).map(([key,value])=>{const [upper,lower]=key.split('-').map(Number),[number,name]=value;return {number,name,upper,lower,theme:guaThemes[number-1],phase:phaseFor(number),glyph:String.fromCodePoint(0x4DC0+number-1)}}).sort((a,b)=>a.number-b.number);
const stems=['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
const branches=['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const elements=['木','木','火','火','土','土','金','金','水','水'];
const animals=['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪'];

const grid=document.querySelector('#system-grid');
function renderSystems(filter='all',query=''){
  const q=query.trim().toLowerCase();
  grid.innerHTML=systems.filter(s=>(filter==='all'||s.cat===filter)&&(!q||`${s.name}${s.cat}${s.desc}`.toLowerCase().includes(q))).map((s,i)=>`<article class="system-card" style="--i:${i}"><div class="symbol">${s.symbol}</div><span class="category">${s.cat} · SYSTEM</span><h3>${s.name}</h3><p>${s.desc}</p><button class="system-open" type="button" data-system="${s.name}" aria-label="查看${s.name}体系">详解 <span>↗</span></button></article>`).join('')||'<p class="no-result">未找到相关术数。</p>';
}
renderSystems();
document.querySelectorAll('.chip').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderSystems(btn.dataset.filter,document.querySelector('#system-search').value)}));
document.querySelector('#system-search').addEventListener('input',e=>renderSystems(document.querySelector('.chip.active').dataset.filter,e.target.value));

const systemDialog=document.querySelector('#system-dialog');
function openSystem(name){const s=systems.find(x=>x.name===name);if(!s)return;document.querySelector('#system-dialog-symbol').textContent=s.symbol;document.querySelector('#system-dialog-category').textContent=`${s.cat}体系`;document.querySelector('#system-dialog-title').textContent=s.name;document.querySelector('#system-dialog-intro').textContent=s.intro;document.querySelector('#system-dialog-concepts').innerHTML=s.concepts.map(x=>`<li>${x}</li>`).join('');document.querySelector('#system-dialog-books').innerHTML=s.books.map(x=>`<li>${x}</li>`).join('');document.querySelector('#system-dialog-route').textContent=s.route;const action=document.querySelector('#system-dialog-action'),hasSpecial=['符箓文化','紫微斗数'].includes(name);action.href=hasSpecial?'#special':'#tools';action.innerHTML=hasSpecial?'查看专题研习 <span>→</span>':'进入相关工具 <span>→</span>';systemDialog.showModal();}
grid.addEventListener('click',e=>{const button=e.target.closest('.system-open');if(button)openSystem(button.dataset.system)});
document.querySelectorAll('.special-system-open').forEach(button=>button.addEventListener('click',()=>openSystem(button.dataset.system)));

const ziweiPalaces=[
  {name:'命宫',theme:'自我定位',desc:'观察一个人的基本取向与整张盘的阅读起点；不能把单一星曜直接等同于人格结论。'},
  {name:'兄弟宫',theme:'同辈协作',desc:'讨论手足、同辈与资源协作，也要结合现实中的关系质量和沟通方式。'},
  {name:'夫妻宫',theme:'亲密关系',desc:'关注伴侣互动、承诺与相处模式，不用于替代双方真实沟通或作绝对婚姻判断。'},
  {name:'子女宫',theme:'创造传承',desc:'传统上讨论子女缘分，也可延伸观察照顾、创作、教学与传承主题。'},
  {name:'财帛宫',theme:'资源价值',desc:'观察取得、管理和使用资源的方式；不构成投资建议或财富保证。'},
  {name:'疾厄宫',theme:'身心习惯',desc:'用于传统命理中的身心倾向研习，不能用于诊断疾病或替代专业医疗。'},
  {name:'迁移宫',theme:'外部环境',desc:'观察外出、变动、异地发展与人在外部环境中的适应方式。'},
  {name:'交友宫',theme:'社交合作',desc:'讨论朋友、同事、合作网络与人际边界，旧称仆役宫。'},
  {name:'官禄宫',theme:'事业责任',desc:'观察事业角色、能力施展与责任结构，不把职业选择简化为单宫吉凶。'},
  {name:'田宅宫',theme:'居所根基',desc:'讨论居住环境、家庭根基与不动产观念，现实决策仍需法律和财务评估。'},
  {name:'福德宫',theme:'内在满足',desc:'观察精神状态、休息方式与价值追求，是理解内在生活的重要宫位。'},
  {name:'父母宫',theme:'长辈制度',desc:'讨论父母长辈、支持系统，也可延伸至制度、文书与上级关系。'}
];
let activeZiwei=0;
const ziweiGrid=document.querySelector('#ziwei-palace-grid');
function renderZiwei(){ziweiGrid.innerHTML=ziweiPalaces.map((p,i)=>`<button class="ziwei-palace p${i+1} ${i===activeZiwei?'active':''}" type="button" data-palace="${i}"><b>${p.name}</b><small>${p.theme}</small></button>`).join('')+`<div class="ziwei-center"><span>宫义研习</span><strong id="ziwei-active-name">${ziweiPalaces[activeZiwei].name}</strong><p id="ziwei-active-desc">${ziweiPalaces[activeZiwei].desc}</p><small>${activeZiwei+1} / 12</small></div>`;}
function selectZiwei(index){activeZiwei=(Number(index)+12)%12;renderZiwei()}
ziweiGrid.addEventListener('click',e=>{const button=e.target.closest('.ziwei-palace');if(button)selectZiwei(button.dataset.palace)});
document.querySelector('#next-palace').addEventListener('click',()=>selectZiwei(activeZiwei+1));
renderZiwei();

let activeGuaPhase='all';
const guaGrid=document.querySelector('#gua-grid');
function renderHexagrams(){const q=document.querySelector('#gua-search').value.trim();const list=hexagrams.filter(g=>(activeGuaPhase==='all'||g.phase===activeGuaPhase)&&(!q||`${g.number}${g.name}${g.theme}${trigramNames[g.upper]}${trigramNames[g.lower]}`.includes(q)));document.querySelector('#gua-count').textContent=list.length;guaGrid.innerHTML=list.map(g=>`<button class="gua-card" type="button" data-gua="${g.number}" aria-label="查看第${g.number}卦${g.name}"><span class="gua-number">${String(g.number).padStart(2,'0')}</span><b>${g.glyph}</b><strong>${g.name}</strong><small>${trigramNames[g.upper]}上 · ${trigramNames[g.lower]}下</small><em>${g.theme}</em></button>`).join('')||'<p class="no-result">没有找到相符的卦象。</p>'}
document.querySelector('#gua-search').addEventListener('input',renderHexagrams);
document.querySelectorAll('.gua-chip').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.gua-chip').forEach(x=>x.classList.remove('active'));btn.classList.add('active');activeGuaPhase=btn.dataset.phase;renderHexagrams()}));
const guaDialog=document.querySelector('#gua-dialog');let currentGua=null;
const phaseReadings={开端:'处于事物发端与建构阶段，重点在辨明基础条件、组织秩序，并为下一步变化留下余地。',修己:'此段多关乎修养、关系与持续行动。读卦时可先反观自身位置，再观察内外是否相应。',应世:'此段强调进退、聚散与处境选择。宜同时观察环境限制、合作对象和行动时机。',变通:'此段集中呈现革新、节制、诚信与完成之道。变化已深，尤其要留意转折后的善后。'};
function openGua(number){const g=hexagrams.find(x=>x.number===Number(number));if(!g)return;currentGua=g;document.querySelector('#gua-dialog-glyph').textContent=g.glyph;document.querySelector('#gua-dialog-number').textContent=`第${g.number}卦 · ${g.phase}篇`;document.querySelector('#gua-dialog-title').textContent=g.name;document.querySelector('#gua-dialog-structure').textContent=`${trigramSymbols[g.upper]} ${trigramNames[g.upper]}上 · ${trigramSymbols[g.lower]} ${trigramNames[g.lower]}下`;document.querySelector('#gua-dialog-theme').textContent=g.theme;document.querySelector('#gua-dialog-reading').textContent=phaseReadings[g.phase];const saved=JSON.parse(localStorage.getItem('bookmarkedGuas')||'[]');document.querySelector('#bookmark-status').textContent=saved.includes(g.number)?'已收藏':'';guaDialog.showModal()}
guaGrid.addEventListener('click',e=>{const card=e.target.closest('.gua-card');if(card)openGua(card.dataset.gua)});
document.querySelector('#bookmark-gua').addEventListener('click',()=>{if(!currentGua)return;const saved=JSON.parse(localStorage.getItem('bookmarkedGuas')||'[]');const index=saved.indexOf(currentGua.number);if(index>=0){saved.splice(index,1);document.querySelector('#bookmark-status').textContent='已取消收藏'}else{saved.push(currentGua.number);document.querySelector('#bookmark-status').textContent='已收藏到本设备 ✓'}localStorage.setItem('bookmarkedGuas',JSON.stringify(saved))});
renderHexagrams();

const yearGanzhi=year=>{const si=((year-4)%10+10)%10,bi=((year-4)%12+12)%12,pos=((year-4)%60+60)%60+1;return {name:stems[si]+branches[bi],stem:stems[si],branch:branches[bi],element:elements[si],animal:animals[bi],pos}};
function updateToday(){const now=new Date();const gz=yearGanzhi(now.getFullYear());document.querySelector('#today-date').textContent=`${gz.name}年 · ${now.getMonth()+1}月${now.getDate()}日`;document.querySelector('#today-ganzhi').textContent=`${gz.element}${gz.animal}之年`;}
updateToday();

document.querySelectorAll('.tool-tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.tool-tab').forEach(t=>{t.classList.remove('active');t.setAttribute('aria-selected','false')});document.querySelectorAll('.tool-panel').forEach(p=>{p.classList.remove('active');p.hidden=true});tab.classList.add('active');tab.setAttribute('aria-selected','true');const panel=document.querySelector(`#tool-${tab.dataset.tool}`);panel.hidden=false;panel.classList.add('active')}));

const normalize=(n,m)=>((Math.abs(parseInt(n,10)||1)-1)%m)+1;
const hexagramFor=(upper,lower)=>{const u=normalize(upper,8),l=normalize(lower,8),entry=kingWen[`${u}-${l}`];return {glyph:String.fromCodePoint(0x4DC0+entry[0]-1),name:entry[1]}};
function castMeihua(a,b){const u=normalize(a,8),l=normalize(b,8),moving=normalize(Number(a)+Number(b),6),hex=hexagramFor(u,l);document.querySelector('#meihua-result').innerHTML=`<div class="hexagram-mark">${hex.glyph}</div><p>本卦</p><h3>${hex.name}</h3><small>${trigramSymbols[u]} ${trigramNames[u]}上 · ${trigramSymbols[l]} ${trigramNames[l]}下 · 第${['','一','二','三','四','五','六'][moving]}爻动</small><div class="result-note">体用提示：先看动静与内外，再联系所问之事。结果仅供研习。</div>`;}
document.querySelector('#cast-meihua').addEventListener('click',()=>castMeihua(document.querySelector('#upper-num').value,document.querySelector('#lower-num').value));
document.querySelector('#use-time').addEventListener('click',()=>{const n=new Date(),a=n.getFullYear()+n.getMonth()+1+n.getDate(),b=a+n.getHours();document.querySelector('#upper-num').value=a;document.querySelector('#lower-num').value=b;castMeihua(a,b)});
castMeihua(document.querySelector('#upper-num').value,document.querySelector('#lower-num').value);

let lines=[];
function renderLines(){const stack=document.querySelector('#yao-stack');stack.innerHTML=lines.length?lines.map(v=>`<div class="yao ${v%2?'yang':'yin'} ${v===6||v===9?'moving':''}" title="${v===6?'老阴':v===7?'少阳':v===8?'少阴':'老阳'}"></div>`).join(''):'<span class="empty-line">等待起卦</span>';document.querySelector('#shake-count').textContent=Math.min(lines.length+1,6);document.querySelector('#line-tip').textContent=lines.length===6?'卦象已成：圆圈标记动爻，可结合所问之事记录与复盘。':`已得 ${lines.length} 爻，还需 ${6-lines.length} 爻。`;document.querySelector('#shake-line').disabled=lines.length===6;}
document.querySelector('#shake-line').addEventListener('click',()=>{const values=new Uint8Array(3);crypto.getRandomValues(values);const total=[...values].reduce((sum,x)=>sum+(x%2?3:2),0);lines.push(total);renderLines()});
document.querySelector('#reset-lines').addEventListener('click',()=>{lines=[];renderLines()});

function calculateYear(){const y=Math.round(Number(document.querySelector('#year-input').value));if(!Number.isFinite(y)||y<1)return;const gz=yearGanzhi(y);document.querySelector('#year-result').innerHTML=`<span class="big-ganzhi">${gz.name}</span><p>${gz.element}${gz.animal}之年</p><small>六十甲子第 ${gz.pos} 位 · 以公历年份简算</small>`;}
document.querySelector('#calc-year').addEventListener('click',calculateYear);calculateYear();

const studyPlan=[
  {day:'一',title:'识阴阳',detail:'读懂阴爻、阳爻与两仪四象'},
  {day:'二',title:'记八卦',detail:'熟悉八卦的自然取象与方位'},
  {day:'三',title:'认干支',detail:'通读十天干、十二地支与五行'},
  {day:'四',title:'读一卦',detail:'选择一卦，从卦名读到大象'},
  {day:'五',title:'试起卦',detail:'完成一次梅花或六爻起卦记录'},
  {day:'六',title:'回原典',detail:'精读一段经文并写下自己的理解'},
  {day:'七',title:'做复盘',detail:'回看一周札记，分清事实与联想'}
];
let studyState=JSON.parse(localStorage.getItem('studyPlanV1')||'[]');
function renderStudyPlan(){document.querySelector('#study-tasks').innerHTML=studyPlan.map((task,i)=>`<label class="study-task ${studyState.includes(i)?'done':''}"><input type="checkbox" data-task="${i}" ${studyState.includes(i)?'checked':''}><span class="day-mark">第${task.day}日</span><span><strong>${task.title}</strong><small>${task.detail}</small></span><i>✓</i></label>`).join('');const done=studyState.length,percent=Math.round(done/studyPlan.length*100);document.querySelector('#progress-number').textContent=`${percent}%`;document.querySelector('#progress-ring').style.setProperty('--progress',`${percent*3.6}deg`);document.querySelector('#progress-summary').textContent=done===0?'尚未开始':done===7?'七日筑基已完成':`已完成 ${done} / 7 项`;}
document.querySelector('#study-tasks').addEventListener('change',e=>{if(!e.target.matches('input[type="checkbox"]'))return;const i=Number(e.target.dataset.task);studyState=e.target.checked?[...new Set([...studyState,i])]:studyState.filter(x=>x!==i);studyState.sort((a,b)=>a-b);localStorage.setItem('studyPlanV1',JSON.stringify(studyState));renderStudyPlan()});
renderStudyPlan();
const noteField=document.querySelector('#study-note');noteField.value=localStorage.getItem('studyNote')||'';
document.querySelector('#save-note').addEventListener('click',()=>{localStorage.setItem('studyNote',noteField.value.trim());document.querySelector('#note-status').textContent='已保存到本设备 ✓';setTimeout(()=>document.querySelector('#note-status').textContent='保存在本设备',1800)});
document.querySelector('#system-dialog-action').addEventListener('click',()=>systemDialog.close());

const searchDialog=document.querySelector('#search-dialog'),globalSearch=document.querySelector('#global-search');
document.querySelectorAll('.search-trigger').forEach(b=>b.addEventListener('click',()=>{searchDialog.showModal();setTimeout(()=>globalSearch.focus(),50)}));
globalSearch.addEventListener('input',e=>{const q=e.target.value.trim();const matches=[...systems.map(s=>({name:s.name,type:s.cat,kind:'system'})),...books.map(name=>({name,type:'古籍',kind:'book'})),...hexagrams.map(g=>({name:`第${g.number}卦 · ${g.name}`,search:`${g.name}${g.theme}${g.number}`,type:g.theme,kind:'gua',id:g.number}))].filter(x=>!q||`${x.name}${x.search||''}${x.type}`.includes(q));document.querySelector('#search-results').innerHTML=matches.slice(0,10).map(x=>`<button class="search-item" type="button" data-kind="${x.kind}" data-name="${x.name}" ${x.id?`data-id="${x.id}"`:''}><span>${x.name}</span><small>${x.type} →</small></button>`).join('')||'<p>未找到内容，换个关键词试试。</p>'});

const reader=document.querySelector('#reader-dialog');let currentBook='';
document.querySelectorAll('.read-button').forEach(b=>b.addEventListener('click',()=>window.openClassic(b.dataset.book)));
document.querySelector('#save-progress').addEventListener('click',()=>window.saveClassicPosition());
document.querySelector('#search-results').addEventListener('click',e=>{const item=e.target.closest('.search-item');if(!item)return;searchDialog.close();if(item.dataset.kind==='system')openSystem(item.dataset.name);if(item.dataset.kind==='gua')openGua(item.dataset.id);if(item.dataset.kind==='book')window.openClassic(item.dataset.name);});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>document.querySelectorAll('.desktop-nav a').forEach(x=>x.classList.toggle('active',x.getAttribute('href')===a.getAttribute('href')))));
