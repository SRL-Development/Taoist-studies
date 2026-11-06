(() => {
 const gallery=document.getElementById('talisman-atlas');if(!gallery)return;
 document.querySelector('.talisman-study')?.remove();
 const source='https://commons.wikimedia.org/wiki/File:NLC416-12jh003951-48665_奇門遁甲統宗.pdf';
 const records=[
 {name:'九星直符图',page:33,leaf:'卷一 · 原叶十五',kind:'原书图式',use:'用于辨认九星与宫位的关系，并配合直符直使诀学习奇门排布。',boundary:'此处“直符”是奇门术语，不是求财、安家的佩带符。图在原页上半部。'},
 {name:'八门直使图',page:33,leaf:'卷一 · 原叶十五',kind:'原书图式',use:'用于辨认八门在图式中的布局，并与同页直符直使诀对读。',boundary:'图在原页下半部；本页保留整页，未重绘、拼接或改变笔画。'},
 {name:'三奇神咒',page:35,leaf:'卷一 · 原叶十七',kind:'原书神咒文字',use:'原书分别列乙奇、丙奇、丁奇咒文，属于该书的神咒材料。',boundary:'本条是原文页，不是手画符式。按底本分类，不另画一个不存在于本页的符号。'},
 {name:'三奇六仪续文',page:36,leaf:'卷一 · 原叶十八',kind:'原书术法文字',use:'对六乙、六丙、六丁等情形的传统说明，需与前后页连读。',boundary:'原书对吉凶的描述是历史术数观点，不等于已经验证的作用。'},
 {name:'直符加时干法',page:45,leaf:'卷二 · 原叶七',kind:'原书排布局法',use:'说明用时之干临于地盘何宫，再将天盘直符加于此宫的排布方法。',boundary:'这是起局规则。不可据标题把“直符”解读成护身符。'},
 {name:'日奇布五符法',page:51,leaf:'卷二 · 原叶十三',kind:'原书五符文字',use:'原书列出五行、天曹、地府等十二项名称及顺行说明，供日奇排布参照。',boundary:'本页是文字条目，没有可据以复刻的求财符形。本次不自行补绘。'}
 ];
 gallery.innerHTML=`<div class="platform-title"><p class="eyebrow">国家图书馆藏 · 1925年文明书局本</p><h2>奇门原书图式与符法</h2><p>以下直接展示所选底本的原页扫描，附用途、卷次与页码。原书中的直符图、排布局法、神咒与佩带符不是同一概念；本区按原页实际内容标识。</p><p>此前自绘的祈愿图形已退出本专题，避免被误认为古籍符式。全408页和图版均随网站本地部署，阅读时无需访问境外图片站。</p><button class="button ink" id="read-qimen-source">阅读整本408页</button> <a href="./books/qimen-tongzong-1925.pdf" download>下载原版 PDF</a></div><div class="qimen-primary-grid">${records.map((r,i)=>`<article class="qimen-primary-card"><a href="./assets/qimen/page-${String(r.page).padStart(3,'0')}.jpg" target="_blank"><img src="./assets/qimen/page-${String(r.page).padStart(3,'0')}.jpg" alt="${r.name}所在原页" loading="lazy"></a><small>${r.kind} · 扫描第${r.page}页</small><h3>${r.name}</h3><p>${r.use}</p><p>${r.boundary}</p><p>${r.leaf}</p><button class="button ink" data-qimen-page="${r.page}">原页放大与前后文 →</button></article>`).join('')}</div><div class="reference-strip"><h3>底本与图版记录</h3><p>《奇门遁甲统宗》，秦慎安校勘，文明书局发行，1925年，4册十二卷。国家图书馆藏；扫描文件标识 NLC416-12jh003951-48665，408页。依来源页面的公有领域扫描标识收录。展示图片由原 PDF 栅格化，整本 PDF 保留原文件；扫描页码不等于原书叶码。</p><a href="${source}" target="_blank" rel="noopener">底本出处与公有领域说明（仅供核验，阅读无需打开）↗</a></div>`;
 gallery.querySelector('#read-qimen-source').onclick=()=>window.openClassic('奇门遁甲统宗');gallery.querySelectorAll('[data-qimen-page]').forEach(b=>b.onclick=()=>window.openClassic('奇门遁甲统宗',Number(b.dataset.qimenPage)));
})();
