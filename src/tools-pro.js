import { astro, version as iztroVersion } from "iztro";

const byId = (id) => document.getElementById(id);

const formatStar = (star) => {
  const marks = [star.brightness, star.mutagen].filter(Boolean).join(" · ");
  return `<span><b>${star.name}</b>${marks ? `<small>${marks}</small>` : ""}</span>`;
};

function initZiweiCalculator() {
  const form = byId("ziwei-form");
  if (!form) return;

  const dateInput = byId("ziwei-birth-date");
  const empty = byId("ziwei-empty");
  const result = byId("ziwei-result");
  const summary = byId("ziwei-chart-summary");
  const grid = byId("ziwei-chart-grid");
  dateInput.max = new Date().toISOString().slice(0, 10);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const solarDate = dateInput.value;
    if (!solarDate) {
      dateInput.focus();
      return;
    }

    try {
      const timeIndex = Number(byId("ziwei-time-index").value);
      const gender = byId("ziwei-gender").value;
      const chart = astro.bySolar(solarDate, timeIndex, gender, true, "zh-CN");
      const palaces = Array.isArray(chart.palaces) ? chart.palaces : [];
      if (palaces.length !== 12) throw new Error("命盘宫位数据不完整");

      summary.innerHTML = `
        <div><span>公历</span><b>${chart.solarDate}</b></div>
        <div><span>农历</span><b>${chart.lunarDate}</b></div>
        <div><span>四柱</span><b>${chart.chineseDate}</b></div>
        <div><span>时辰</span><b>${chart.time} · ${chart.timeRange}</b></div>
        <div><span>五行局</span><b>${chart.fiveElementsClass}</b></div>
        <div><span>命主 / 身主</span><b>${chart.soul} / ${chart.body}</b></div>`;

      const westernSign = String(chart.sign || "");
      grid.innerHTML = palaces.map((palace, index) => {
        const major = palace.majorStars?.length
          ? palace.majorStars.map(formatStar).join("")
          : "<span><b>无主星</b><small>借对宫参考</small></span>";
        const minor = (palace.minorStars || []).slice(0, 3).map((star) => star.name).join(" · ");
        const bodyMark = palace.isBodyPalace ? "<em>身宫</em>" : "";
        return `<article class="personal-palace p${index + 1}">
          <header><strong>${palace.name}</strong><small>${palace.heavenlyStem}${palace.earthlyBranch}</small>${bodyMark}</header>
          <div class="palace-stars">${major}</div>
          ${minor ? `<p>${minor}</p>` : ""}
          <div class="palace-foot"><span>${palace.changsheng12 || ""}</span><span>${palace.boshi12 || ""}</span></div>
        </article>`;
      }).join("") + `<div class="personal-chart-center"><span>紫微斗数基础命盘</span><strong>${gender} · ${chart.zodiac}年</strong><p>${westernSign}${westernSign.endsWith("座") ? "" : "座"}<br>${chart.earthlyBranchOfSoulPalace}宫安命 · ${chart.earthlyBranchOfBodyPalace}宫安身</p><small>排盘引擎 iztro ${iztroVersion}</small></div>`;

      empty.hidden = true;
      result.hidden = false;
      result.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } catch (error) {
      result.hidden = true;
      empty.hidden = false;
      empty.innerHTML = `<b>暂时无法生成命盘</b><span>${error.message || "请检查日期与时辰后重试。"}</span>`;
    }
  });
}

const roomChecks = {
  "客厅": ["主要通道是否顺畅", "沙发区是否有稳定靠背", "窗边是否存在强眩光", "杂物是否阻挡日常动线"],
  "卧室": ["床头是否稳固且避开松动物件", "镜面是否造成夜间反光", "遮光与晨间采光是否可调", "空调风是否直吹睡眠区"],
  "书房": ["桌面照度是否足够", "座位背后是否常有人走动", "屏幕是否出现窗户反光", "电线与纸张是否妨碍活动"],
  "商铺": ["入口是否清晰易达", "招牌与门面是否被遮挡", "顾客动线是否形成拥堵", "收银与消防通道是否冲突"],
  "庭院": ["排水坡向是否清楚", "树木根系是否影响建筑", "夜间照明是否覆盖台阶", "围栏与通道是否牢固"],
  "建筑外观": ["墙面是否有裂缝或渗水痕迹", "檐口与高处物件是否牢固", "入口与道路视线是否安全", "排水口是否堵塞或倒灌"]
};

function lightLabel(value) {
  if (value < 70) return "偏暗";
  if (value > 190) return "偏亮";
  return "适中";
}

function temperatureLabel(value) {
  if (value > 22) return "偏暖";
  if (value < -22) return "偏冷";
  return "中性";
}

function analyzePixels(imageData, width, height) {
  const data = imageData.data;
  let luminance = 0;
  let red = 0;
  let blue = 0;
  let dark = 0;
  let bright = 0;
  let leftLight = 0;
  let rightLight = 0;
  let leftCount = 0;
  let rightCount = 0;
  let edges = 0;
  let edgeCount = 0;

  for (let y = 0; y < height; y += 2) {
    for (let x = 0; x < width; x += 2) {
      const index = (y * width + x) * 4;
      const r = data[index];
      const g = data[index + 1];
      const b = data[index + 2];
      const light = .2126 * r + .7152 * g + .0722 * b;
      luminance += light;
      red += r;
      blue += b;
      if (light < 60) dark++;
      if (light > 205) bright++;
      if (x < width / 2) { leftLight += light; leftCount++; }
      else { rightLight += light; rightCount++; }

      if (x + 2 < width) {
        const next = index + 8;
        const nextLight = .2126 * data[next] + .7152 * data[next + 1] + .0722 * data[next + 2];
        if (Math.abs(light - nextLight) > 38) edges++;
        edgeCount++;
      }
    }
  }

  const count = leftCount + rightCount;
  return {
    light: Math.round(luminance / count),
    darkRatio: Math.round(dark / count * 100),
    brightRatio: Math.round(bright / count * 100),
    temperature: Math.round((red - blue) / count),
    balance: Math.round(Math.abs(leftLight / leftCount - rightLight / rightCount)),
    edgeRatio: Math.round(edges / edgeCount * 100)
  };
}

function recommendations(metrics) {
  const notes = [];
  if (metrics.light < 70) notes.push("画面整体偏暗：建议白天复拍，并检查主要活动区是否需要补充柔和照明。");
  else if (metrics.light > 190 || metrics.brightRatio > 35) notes.push("高光区域较多：可能存在逆光或眩光，现场观察窗面、镜面和屏幕反射。");
  else notes.push("整体亮度处于常见可观察范围，仍需在早晚两个时段复核自然采光。");

  if (metrics.balance > 28) notes.push("左右明暗差异较明显，可检查单侧强光、遮挡或照明分布不均。");
  if (metrics.darkRatio > 45) notes.push("暗部占比较高，照片可能遗漏角落细节；可补拍入口、角落和主要通道。");
  if (metrics.edgeRatio > 24) notes.push("画面线条与边缘较密，可能视觉信息偏多；可现场检查杂物、线缆与动线拥挤。");
  else if (metrics.edgeRatio < 5) notes.push("画面细节较少或略虚，建议保持手机稳定并补拍近景。");
  if (metrics.temperature > 22) notes.push("画面偏暖，可能受暖色灯影响；判断墙面与采光时可在自然光下再拍一张。");
  else if (metrics.temperature < -22) notes.push("画面偏冷，可能受冷色灯或白平衡影响；颜色判断需以现场肉眼为准。");
  return notes;
}

function renderPhotoAnalysis(metrics, room) {
  const notes = recommendations(metrics);
  const checks = roomChecks[room] || roomChecks["客厅"];
  byId("photo-analysis").innerHTML = `
    <div class="analysis-title"><span>环境图像初筛</span><strong>${room}</strong></div>
    <div class="metric-grid">
      <div><strong>${metrics.light}</strong><span>平均亮度 · ${lightLabel(metrics.light)}</span></div>
      <div><strong>${metrics.balance}</strong><span>左右明暗差 · ${metrics.balance > 28 ? "较明显" : "较均衡"}</span></div>
      <div><strong>${metrics.edgeRatio}%</strong><span>视觉边缘密度</span></div>
      <div><strong>${temperatureLabel(metrics.temperature)}</strong><span>画面色温倾向</span></div>
    </div>
    <div class="analysis-list"><h4>画面观察</h4><ul>${notes.map((note) => `<li>${note}</li>`).join("")}</ul></div>
    <div class="analysis-list field-review"><h4>到现场再核对</h4><ul>${checks.map((item) => `<li>${item}</li>`).join("")}</ul></div>`;
}

function initPhotoScreening() {
  const input = byId("fengshui-photo");
  if (!input) return;
  const preview = byId("photo-preview");
  const canvas = byId("photo-canvas");
  const clear = byId("clear-photo");
  const placeholder = document.querySelector(".photo-preview-wrap .camera-mark");
  const placeholderCopy = document.querySelector(".photo-preview-wrap > p");

  const reset = () => {
    input.value = "";
    preview.removeAttribute("src");
    preview.hidden = true;
    placeholder.hidden = false;
    placeholderCopy.hidden = false;
    clear.hidden = true;
    byId("photo-analysis").innerHTML = "<b>尚未选择照片</b><p>本功能不识别人脸、不上传原图，也不根据一张照片断定“吉凶”。</p>";
  };

  input.addEventListener("change", () => {
    const file = input.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      byId("photo-analysis").innerHTML = "<b>文件格式不支持</b><p>请选择 JPG、PNG 或 WEBP 等图片文件。</p>";
      return;
    }
    if (file.size > 15 * 1024 * 1024) {
      byId("photo-analysis").innerHTML = "<b>照片过大</b><p>请选择 15MB 以内的图片。</p>";
      return;
    }

    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      const scale = Math.min(1, 420 / Math.max(image.naturalWidth, image.naturalHeight));
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      const context = canvas.getContext("2d", { willReadFrequently: true });
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      const data = context.getImageData(0, 0, canvas.width, canvas.height);
      const metrics = analyzePixels(data, canvas.width, canvas.height);
      preview.src = url;
      preview.hidden = false;
      placeholder.hidden = true;
      placeholderCopy.hidden = true;
      clear.hidden = false;
      renderPhotoAnalysis(metrics, byId("photo-space-type").value);
      URL.revokeObjectURL(url);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      byId("photo-analysis").innerHTML = "<b>无法读取照片</b><p>请换一张图片后重试。</p>";
    };
    image.src = url;
  });

  byId("photo-space-type").addEventListener("change", () => {
    if (input.files?.length) input.dispatchEvent(new Event("change"));
  });
  clear.addEventListener("click", reset);
}

initZiweiCalculator();
initPhotoScreening();
