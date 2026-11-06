const folkNotes = [
  {
    category: '阳宅观察',
    title: '先看安全，再谈格局',
    lead: '一处住宅最先要观察的，不是“旺不旺”，而是它能否让人安全、舒适地生活。',
    body: [
      '传统阳宅经验常把采光、通风、干湿、出入与人的感受联系起来。换成现代语言，就是日照、空气质量、排水、消防疏散、噪声和隐私。',
      '记录时先写可验证的事实，再写个人感受，最后才整理传统说法。把三者分开，可以避免用一个玄妙名词遮住真正的问题。'
    ],
    checklist: ['消防出口是否通畅', '墙地面有无渗水霉斑', '白天主要房间的自然采光', '夜间噪声与道路影响']
  },
  {
    category: '阳宅观察',
    title: '门、路与日常动线',
    lead: '门是空间转换之处，道路是生活流动之处；所谓“气口”，可以先从真实动线理解。',
    body: [
      '入户处若堆积杂物、照明不足或与车辆路线冲突，日常使用就会产生压力。观察门路时，重点记录人从公共空间进入私人空间的全过程。',
      '传统形势描述可作为观察提示，但改善方案仍应优先解决照明、防滑、无障碍、门锁和隐私等具体问题。'
    ],
    checklist: ['入口照明与门锁', '雨天是否积水打滑', '访客与家庭成员动线', '卧室和卫生间的隐私']
  },
  {
    category: '形势水法',
    title: '看山先看坡，看水先看排',
    lead: '山水形势很有画面感，但现场观察必须先回到地质、坡度、洪涝与排水。',
    body: [
      '背山面水并不自动等于适宜居住。山体可能有落石、滑坡和挡光风险，水体也可能带来洪涝、潮湿和蚊虫问题。',
      '好的形势记录，应包含等高关系、雨水去向、历史水位与当地灾害记录。涉及建造时必须由地质、规划和结构专业人员判断。'
    ],
    checklist: ['坡脚有无裂缝或落石', '暴雨后的水流方向', '当地历史最高水位', '挡土墙和排水设施状况']
  },
  {
    category: '形势水法',
    title: '院落为什么讲藏风聚气',
    lead: '“藏风聚气”可作为传统空间经验来读：既要避免强风直冲，也不能完全封闭。',
    body: [
      '院落、天井和巷道会改变风速、日照与温度。某些传统聚落的转折入口、照壁和围合，兼具隐私、防风与组织空间的作用。',
      '分析具体院落时，可在不同时间记录风向、阴影和温度，而不是只凭一次到访就下结论。'
    ],
    checklist: ['早中晚日照范围', '主导风向与穿堂风', '院内热湿积聚位置', '公共与私密空间边界']
  },
  {
    category: '民俗故事',
    title: '老宅传说要怎样记录',
    lead: '传说的价值在于地方记忆，不在于把每个故事都证明为超自然事件。',
    body: [
      '访谈时应注明讲述者、时间、地点和故事来源，区分亲历、转述与后来的网络加工。不同版本之间的差异，本身就是民俗研究的重要材料。',
      '涉及真实人物时应保护隐私，不以“闹鬼”“受诅咒”等标签伤害屋主、社区或逝者家属。'
    ],
    checklist: ['记录讲述者与日期', '标明亲历或转述', '寻找不同版本互证', '隐去敏感身份与地址']
  },
  {
    category: '民俗故事',
    title: '罗盘之前先画一张图',
    lead: '方向工具只能告诉你朝向，不能替你理解现场。先画平面草图，往往更接近问题本身。',
    body: [
      '草图不必精美，但要标出北向、出入口、道路、水沟、主要房间和明显高差。随后再记录指南针读数与测量条件。',
      '手机和罗盘都可能受金属、电器与磁场干扰。重复测量、交叉核对，比追求一个看似精确的单次数字更可靠。'
    ],
    checklist: ['标出北向和测量位置', '绘制道路与出入口', '记录金属和电器干扰', '在不同位置重复测量']
  },
  {
    category: '行业辨伪',
    title: '恐吓式“化解”是危险信号',
    lead: '先制造恐惧，再出售唯一解决方案，是许多骗局共同的结构。',
    body: [
      '若有人声称不立即购买高价物品就会发生灾祸，或要求保密、借贷、转账，应立即暂停。真正的建筑问题可以被检查，法律和健康问题也有相应专业渠道。',
      '保留聊天、合同和付款记录；涉及财产损失时及时联系平台、银行或警方。不要因为羞耻感放弃求助。'
    ],
    checklist: ['是否使用灾祸恐吓', '是否拒绝书面合同', '是否催促借贷或私下转账', '是否阻止咨询家人或专业人士']
  },
  {
    category: '行业辨伪',
    title: '案例复盘：事实、解释、结果',
    lead: '一个有用的案例至少分成三栏：发生了什么、怎样解释、后来怎样。',
    body: [
      '只记录“调整后变好了”容易受到选择性记忆影响。应同时记录其他可能原因、未改善的部分和观察时间。',
      '民俗案例可以启发观察，但不能替代对照、测量与长期记录。允许结论保持开放，往往比急于断吉凶更诚实。'
    ],
    checklist: ['写下调整前的客观状态', '列出至少两个替代解释', '设定复查日期', '同时记录有效与无效结果']
  }
];

let activeFolkFilter = '全部';
const folkGrid = document.querySelector('#folk-note-grid');
const folkSearch = document.querySelector('#folk-search');
const folkDialog = document.querySelector('#folk-note-dialog');

function renderFolkNotes() {
  const query = folkSearch.value.trim();
  const list = folkNotes.filter(note =>
    (activeFolkFilter === '全部' || note.category === activeFolkFilter) &&
    (!query || `${note.title}${note.lead}${note.category}`.includes(query))
  );

  folkGrid.innerHTML = list.map(note => {
    const index = folkNotes.indexOf(note);
    return `<button class="folk-note-card" type="button" data-folk-note="${index}">
      <span>${String(index + 1).padStart(2, '0')} · ${note.category}</span>
      <h3>${note.title}</h3>
      <p>${note.lead}</p>
      <b>展开笔记 →</b>
    </button>`;
  }).join('') || '<p class="no-result">没有找到相符的笔记。</p>';
}

function openFolkNote(index) {
  const note = folkNotes[Number(index)];
  if (!note) return;
  document.querySelector('#folk-dialog-category').textContent = note.category;
  document.querySelector('#folk-dialog-title').textContent = note.title;
  document.querySelector('#folk-dialog-lead').textContent = note.lead;
  document.querySelector('#folk-dialog-body').innerHTML = note.body.map(p => `<p>${p}</p>`).join('');
  document.querySelector('#folk-dialog-checklist').innerHTML = note.checklist.map(item => `<li>${item}</li>`).join('');
  folkDialog.showModal();
}

document.querySelectorAll('[data-folk-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-folk-filter]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    activeFolkFilter = button.dataset.folkFilter;
    renderFolkNotes();
  });
});

folkSearch.addEventListener('input', renderFolkNotes);
folkGrid.addEventListener('click', event => {
  const card = event.target.closest('[data-folk-note]');
  if (card) openFolkNote(card.dataset.folkNote);
});

globalSearch.addEventListener('input', event => {
  const query = event.target.value.trim();
  const matches = [
    ...systems.map(item => ({ name: item.name, type: item.cat, kind: 'system' })),
    ...books.map(name => ({ name, type: '古籍', kind: 'book' })),
    ...hexagrams.map(item => ({ name: `第${item.number}卦 · ${item.name}`, search: `${item.name}${item.theme}${item.number}`, type: item.theme, kind: 'gua', id: item.number })),
    ...folkNotes.map((item, id) => ({ name: item.title, search: `${item.title}${item.lead}`, type: item.category, kind: 'folk', id }))
  ].filter(item => !query || `${item.name}${item.search || ''}${item.type}`.includes(query));

  document.querySelector('#search-results').innerHTML = matches.slice(0, 10).map(item =>
    `<button class="search-item" type="button" data-kind="${item.kind}" data-name="${item.name}" ${item.id !== undefined ? `data-id="${item.id}"` : ''}><span>${item.name}</span><small>${item.type} →</small></button>`
  ).join('') || '<p>未找到内容，换个关键词试试。</p>';
});

document.querySelector('#search-results').addEventListener('click', event => {
  const item = event.target.closest('[data-kind="folk"]');
  if (item) openFolkNote(item.dataset.id);
});

renderFolkNotes();
