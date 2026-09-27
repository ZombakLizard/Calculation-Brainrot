"use strict";

/* ============================ i18n ============================ */
const TRANSLATIONS = {
  ru: {
    profile: "Профиль", username: "Имя пользователя",
    usernameHint: "Английские буквы, цифры и _ (от 3 до 16 символов)",
    aka: "a.k.a.", akaHint: "Второе имя, не должно совпадать с первым",
    gender: "Ваш пол", male: "Мужской", female: "Женский",
    language: "Язык", clearProgress: "Очистить прогресс",
    dataSaved: "Данные сохранены!",
    calculationHistory: "История расчетов", clear: "Очистить",
    historyEmpty: "История расчетов пуста",
    description: 'Поможет рассчитать, за какой срок окупятся вложения в Brainrot. Введите значения в поля ниже и нажмите кнопку "Рассчитать"',
    brainrotCost: "Стоимость Brainrot", noSuffix: "Без суффикса",
    chooseCostSuffix: "Выберите суффикс стоимости",
    incomePerSecond: "Доход в секунду", chooseIncomeSuffix: "Выберите суффикс дохода",
    rebirthBoost: "Буст от перерождений", choose: "Выбрать",
    chooseMultiplier: "Выберите множитель",
    friendsBoost: "Буст от друзей", choosePercentage: "Выберите процент",
    calculate: "Рассчитать", calculationResult: "Результат расчета:",
    enterValues: 'Введите значения и нажмите "Рассчитать"',
    copyResult: "Скопировать результат",
    noticeTitle: "Обратите внимание",
    noticeRoblox: "Данный сайт работает только для игры Steal a Brainrot в Roblox",
    noticeBrainrot: "Brainrot - питомец или предмет в игре",
    informationSources: "Источники информации",
    sourcesText: "Данные о бустах от перерождений взяты из источника:",
    invalidFormat: "Неверный формат. Пример: 875, 1.5 или 1,5",
    resultText: "Окупится примерно за:",
    neverPays: "При нулевом доходе вложения никогда не окупятся",
    copied: "Скопировано!", copyFailed: "Не удалось скопировать",
    seconds: "сек", minutes: "мин", hours: "ч", days: "дн",
    clearConfirm: "Очистить весь сохранённый прогресс (профиль и историю)?",
  },
  en: {
    profile: "Profile", username: "Username",
    usernameHint: "Latin letters, digits and _ (3 to 16 characters)",
    aka: "a.k.a.", akaHint: "Second name, must not match the first",
    gender: "Your gender", male: "Male", female: "Female",
    language: "Language", clearProgress: "Clear progress",
    dataSaved: "Data saved!",
    calculationHistory: "Calculation history", clear: "Clear",
    historyEmpty: "History is empty",
    description: 'Calculates how long it takes for a Brainrot purchase to pay off. Enter values below and press "Calculate"',
    brainrotCost: "Brainrot cost", noSuffix: "No suffix",
    chooseCostSuffix: "Choose cost suffix",
    incomePerSecond: "Income per second", chooseIncomeSuffix: "Choose income suffix",
    rebirthBoost: "Rebirth boost", choose: "Choose",
    chooseMultiplier: "Choose multiplier",
    friendsBoost: "Friends boost", choosePercentage: "Choose percentage",
    calculate: "Calculate", calculationResult: "Result:",
    enterValues: 'Enter values and press "Calculate"',
    copyResult: "Copy result",
    noticeTitle: "Please note",
    noticeRoblox: "This site only works for the Roblox game Steal a Brainrot",
    noticeBrainrot: "Brainrot is a pet/item in the game",
    informationSources: "Information sources",
    sourcesText: "Rebirth boost data was taken from:",
    invalidFormat: "Invalid format. Example: 875, 1.5 or 1,5",
    resultText: "Pays off in approximately:",
    neverPays: "With zero income the purchase will never pay off",
    copied: "Copied!", copyFailed: "Copy failed",
    seconds: "s", minutes: "min", hours: "h", days: "d",
    clearConfirm: "Clear all saved progress (profile and history)?",
  },
  uk: {
    profile: "Профіль", username: "Ім'я користувача",
    usernameHint: "Англійські літери, цифри та _ (від 3 до 16 символів)",
    aka: "a.k.a.", akaHint: "Друге ім'я, не повинно збігатися з першим",
    gender: "Ваша стать", male: "Чоловіча", female: "Жіноча",
    language: "Мова", clearProgress: "Очистити прогрес",
    dataSaved: "Дані збережено!",
    calculationHistory: "Історія розрахунків", clear: "Очистити",
    historyEmpty: "Історія розрахунків порожня",
    description: 'Допоможе розрахувати, за який термін окупляться вкладення в Brainrot. Введіть значення нижче та натисніть "Розрахувати"',
    brainrotCost: "Вартість Brainrot", noSuffix: "Без суфікса",
    chooseCostSuffix: "Оберіть суфікс вартості",
    incomePerSecond: "Дохід за секунду", chooseIncomeSuffix: "Оберіть суфікс доходу",
    rebirthBoost: "Буст від переродження", choose: "Обрати",
    chooseMultiplier: "Оберіть множник",
    friendsBoost: "Буст від друзів", choosePercentage: "Оберіть відсоток",
    calculate: "Розрахувати", calculationResult: "Результат розрахунку:",
    enterValues: 'Введіть значення та натисніть "Розрахувати"',
    copyResult: "Скопіювати результат",
    noticeTitle: "Зверніть увагу",
    noticeRoblox: "Цей сайт працює лише для гри Steal a Brainrot у Roblox",
    noticeBrainrot: "Brainrot - вихованець або предмет у грі",
    informationSources: "Джерела інформації",
    sourcesText: "Дані про бусти від переродження взято з джерела:",
    invalidFormat: "Невірний формат. Приклад: 875, 1.5 або 1,5",
    resultText: "Окупиться приблизно за:",
    neverPays: "При нульовому доході вкладення ніколи не окупляться",
    copied: "Скопійовано!", copyFailed: "Не вдалося скопіювати",
    seconds: "с", minutes: "хв", hours: "г", days: "дн",
    clearConfirm: "Очистити весь збережений прогрес (профіль та історію)?",
  },
  hi: {
    profile: "प्रोफाइल", username: "उपयोगकर्ता नाम",
    usernameHint: "अंग्रेज़ी अक्षर, अंक और _ (3 से 16 अक्षर)",
    aka: "a.k.a.", akaHint: "दूसरा नाम, पहले जैसा नहीं होना चाहिए",
    gender: "आपका लिंग", male: "पुरुष", female: "महिला",
    language: "भाषा", clearProgress: "प्रगति साफ़ करें",
    dataSaved: "डेटा सहेजा गया!",
    calculationHistory: "गणना इतिहास", clear: "साफ़ करें",
    historyEmpty: "इतिहास खाली है",
    description: 'यह गणना करता है कि Brainrot में निवेश कितने समय में वसूल होगा। नीचे मान दर्ज करें और "गणना करें" दबाएँ',
    brainrotCost: "Brainrot की कीमत", noSuffix: "कोई प्रत्यय नहीं",
    chooseCostSuffix: "कीमत का प्रत्यय चुनें",
    incomePerSecond: "प्रति सेकंड आय", chooseIncomeSuffix: "आय का प्रत्यय चुनें",
    rebirthBoost: "रीबर्थ बूस्ट", choose: "चुनें",
    chooseMultiplier: "गुणक चुनें",
    friendsBoost: "दोस्तों से बूस्ट", choosePercentage: "प्रतिशत चुनें",
    calculate: "गणना करें", calculationResult: "परिणाम:",
    enterValues: 'मान दर्ज करें और "गणना करें" दबाएँ',
    copyResult: "परिणाम कॉपी करें",
    noticeTitle: "कृपया ध्यान दें",
    noticeRoblox: "यह साइट केवल Roblox के Steal a Brainrot गेम के लिए काम करती है",
    noticeBrainrot: "Brainrot गेम में एक पालतू/वस्तु है",
    informationSources: "जानकारी के स्रोत",
    sourcesText: "रीबर्थ बूस्ट डेटा इस स्रोत से लिया गया है:",
    invalidFormat: "गलत प्रारूप। उदाहरण: 875, 1.5 या 1,5",
    resultText: "लगभग इतने समय में वसूल होगा:",
    neverPays: "शून्य आय पर निवेश कभी वसूल नहीं होगा",
    copied: "कॉपी हो गया!", copyFailed: "कॉपी नहीं हो सका",
    seconds: "से", minutes: "मि", hours: "घं", days: "दि",
    clearConfirm: "सारी सहेजी गई प्रगति (प्रोफाइल और इतिहास) साफ़ करें?",
  },
};

let currentLang = localStorage.getItem("brainrotLang") || "ru";

function t(key){
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) ||
         (TRANSLATIONS.ru[key]) || key;
}

function applyLanguage(lang){
  if (!TRANSLATIONS[lang]) lang = "ru";
  currentLang = lang;
  localStorage.setItem("brainrotLang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang][key] !== undefined) el.textContent = TRANSLATIONS[lang][key];
  });

  document.querySelectorAll(".language-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Keep the current result / errors in sync with the new language
  renderResult(lastResultState);
  refreshHistoryPanel();
}

/* ======================= number parsing ======================= */
// Accepts "875", "1.5", "1,5", " 12 " — fixes the "always invalid" bug
// caused by an overly strict / broken regex in the original script.
const NUMBER_RE = /^\s*\d+(?:[.,]\d+)?\s*$/;

function parseLocaleNumber(raw){
  if (typeof raw !== "string") return NaN;
  const trimmed = raw.trim();
  if (trimmed === "" || !NUMBER_RE.test(trimmed)) return NaN;
  return parseFloat(trimmed.replace(",", "."));
}

function validateInput(inputEl, errorEl){
  const value = inputEl.value;
  if (value.trim() === ""){
    inputEl.classList.remove("invalid");
    errorEl.textContent = "";
    return null; // empty is not an error until Calculate is pressed
  }
  const num = parseLocaleNumber(value);
  if (isNaN(num) || num < 0){
    inputEl.classList.add("invalid");
    errorEl.textContent = t("invalidFormat");
    return NaN;
  }
  inputEl.classList.remove("invalid");
  errorEl.textContent = "";
  return num;
}

/* ============================ setup ============================ */
document.addEventListener("DOMContentLoaded", () => {
  setupSuffixMenus();
  setupSelectMenus();
  setupInputValidation();
  setupProfilePanel();
  setupHistoryPanel();
  setupCalculate();
  setupCopyButton();
  setupMusic();
  applyLanguage(currentLang);
  renderHistoryList();
});

/* ==================== suffix / select menus ==================== */
function isMobile(){ return window.innerWidth <= 600; }

function closeAllMenus(){
  document.querySelectorAll(".vertical-menu.open").forEach(m => m.classList.remove("open"));
  document.querySelectorAll(".suffix-btn.open, .select-btn.open").forEach(b => b.classList.remove("open"));
}

function bindMenuToggle(buttonEl, menuEl, titleKey){
  buttonEl.addEventListener("click", (e) => {
    e.stopPropagation();
    if (isMobile()){
      openMobileMenu(menuEl, titleKey);
    } else {
      const wasOpen = menuEl.classList.contains("open");
      closeAllMenus();
      if (!wasOpen){
        menuEl.classList.add("open");
        buttonEl.classList.add("open");
      }
    }
  });
}

function setupSuffixMenus(){
  bindMenuToggle(
    document.getElementById("cost-suffix-btn"),
    document.getElementById("cost-suffix-menu"),
    "chooseCostSuffix"
  );
  bindMenuToggle(
    document.getElementById("income-suffix-btn"),
    document.getElementById("income-suffix-menu"),
    "chooseIncomeSuffix"
  );

  document.querySelectorAll("#cost-suffix-menu .menu-item").forEach(item => {
    item.addEventListener("click", () => selectSuffix("cost", item));
  });
  document.querySelectorAll("#income-suffix-menu .menu-item").forEach(item => {
    item.addEventListener("click", () => selectSuffix("income", item));
  });
}

function selectSuffix(kind, item){
  const btn = document.getElementById(`${kind}-suffix-btn`);
  const label = document.getElementById(`${kind}-suffix-value`);
  const suffix = item.dataset.suffix;
  label.textContent = suffix ? item.querySelector("span").textContent : t("noSuffix");
  btn.dataset.multiplier = item.dataset.multiplier;
  closeAllMenus();
  closeMobileMenu();
}

function setupSelectMenus(){
  bindMenuToggle(
    document.getElementById("rebirth-btn"),
    document.getElementById("rebirth-menu"),
    "chooseMultiplier"
  );
  bindMenuToggle(
    document.getElementById("friends-btn"),
    document.getElementById("friends-menu"),
    "choosePercentage"
  );

  document.querySelectorAll("#rebirth-menu .menu-item").forEach(item => {
    item.addEventListener("click", () => {
      document.getElementById("rebirth-value").textContent = "x" + item.dataset.value;
      document.getElementById("rebirth-value").dataset.value = item.dataset.value;
      closeAllMenus();
      closeMobileMenu();
    });
  });

  document.querySelectorAll("#friends-menu .menu-item").forEach(item => {
    item.addEventListener("click", () => {
      const pct = Math.round((parseFloat(item.dataset.value) - 1) * 100);
      document.getElementById("friends-value").textContent = pct + "%";
      document.getElementById("friends-value").dataset.value = item.dataset.value;
      closeAllMenus();
      closeMobileMenu();
    });
  });

  document.addEventListener("click", closeAllMenus);
}

/* ======================= mobile menu sheet ======================= */
let mobileMenuSourceItems = null;

function openMobileMenu(menuEl, titleKey){
  const overlay = document.getElementById("mobile-menu-overlay");
  const sheet = document.getElementById("mobile-menu");
  const title = document.getElementById("mobile-menu-title");
  const itemsWrap = document.getElementById("mobile-menu-items");

  title.textContent = t(titleKey);
  itemsWrap.innerHTML = "";
  mobileMenuSourceItems = menuEl;

  menuEl.querySelectorAll(".menu-item").forEach(orig => {
    const clone = orig.cloneNode(true);
    clone.addEventListener("click", () => orig.dispatchEvent(new Event("click", { bubbles: true })));
    itemsWrap.appendChild(clone);
  });

  overlay.classList.add("open");
  sheet.classList.add("open");
}

function closeMobileMenu(){
  document.getElementById("mobile-menu-overlay").classList.remove("open");
  document.getElementById("mobile-menu").classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("mobile-menu-overlay").addEventListener("click", closeMobileMenu);
});

/* ========================= input validation ========================= */
function setupInputValidation(){
  const cost = document.getElementById("cost");
  const income = document.getElementById("income");
  const costErr = document.getElementById("cost-error");
  const incomeErr = document.getElementById("income-error");

  cost.addEventListener("input", () => validateInput(cost, costErr));
  income.addEventListener("input", () => validateInput(income, incomeErr));
}

/* ============================ calculate ============================ */
let lastResultState = null;

function formatDuration(totalSeconds){
  if (!isFinite(totalSeconds)) return null;
  let seconds = Math.round(totalSeconds);
  const days = Math.floor(seconds / 86400); seconds -= days * 86400;
  const hours = Math.floor(seconds / 3600); seconds -= hours * 3600;
  const minutes = Math.floor(seconds / 60); seconds -= minutes * 60;

  const parts = [];
  if (days) parts.push(`${days} ${t("days")}`);
  if (hours) parts.push(`${hours} ${t("hours")}`);
  if (minutes) parts.push(`${minutes} ${t("minutes")}`);
  if (!days && !hours) parts.push(`${seconds} ${t("seconds")}`);
  return parts.join(" ");
}

function renderResult(state){
  const resultEl = document.getElementById("result");
  const deathWarning = document.getElementById("death-warning");
  const timeUnits = document.getElementById("time-units");
  const copyBtn = document.getElementById("copy-result-btn");

  if (!state){
    resultEl.textContent = t("enterValues");
    deathWarning.style.display = "none";
    timeUnits.style.display = "none";
    copyBtn.style.display = "none";
    return;
  }

  if (state.neverPays){
    resultEl.textContent = "∞";
    deathWarning.textContent = t("neverPays");
    deathWarning.style.display = "block";
    timeUnits.style.display = "none";
    copyBtn.style.display = "none";
    return;
  }

  resultEl.textContent = `${t("resultText")} ${formatDuration(state.seconds)}`;
  deathWarning.style.display = "none";
  timeUnits.textContent = `(${Math.round(state.seconds).toLocaleString()} ${t("seconds")})`;
  timeUnits.style.display = "block";
  copyBtn.style.display = "flex";
}

function setupCalculate(){
  document.getElementById("calculate").addEventListener("click", () => {
    const costInput = document.getElementById("cost");
    const incomeInput = document.getElementById("income");
    const costErr = document.getElementById("cost-error");
    const incomeErr = document.getElementById("income-error");

    const costNum = parseLocaleNumber(costInput.value);
    const incomeNum = parseLocaleNumber(incomeInput.value);

    let hasError = false;
    if (isNaN(costNum) || costNum < 0){
      costInput.classList.add("invalid");
      costErr.textContent = t("invalidFormat");
      hasError = true;
    } else {
      costInput.classList.remove("invalid");
      costErr.textContent = "";
    }
    if (isNaN(incomeNum) || incomeNum < 0){
      incomeInput.classList.add("invalid");
      incomeErr.textContent = t("invalidFormat");
      hasError = true;
    } else {
      incomeInput.classList.remove("invalid");
      incomeErr.textContent = "";
    }
    if (hasError){
      lastResultState = null;
      renderResult(null);
      return;
    }

    const costMultiplier = parseFloat(document.getElementById("cost-suffix-btn").dataset.multiplier || "1");
    const incomeMultiplier = parseFloat(document.getElementById("income-suffix-btn").dataset.multiplier || "1");
    const rebirth = parseFloat(document.getElementById("rebirth-value").dataset.value || "1");
    const friends = parseFloat(document.getElementById("friends-value").dataset.value || "1");

    const totalCost = costNum * costMultiplier;
    const totalIncome = incomeNum * incomeMultiplier * rebirth * friends;

    let state;
    if (totalIncome <= 0){
      state = { neverPays: true };
    } else {
      state = { neverPays: false, seconds: totalCost / totalIncome };
    }

    lastResultState = state;
    renderResult(state);
    saveHistoryEntry({ totalCost, totalIncome, state, ts: Date.now() });
  });
}

function setupCopyButton(){
  document.getElementById("copy-result-btn").addEventListener("click", async () => {
    const resultEl = document.getElementById("result");
    const timeUnits = document.getElementById("time-units");
    const copyErr = document.getElementById("copy-error");
    const text = `${resultEl.textContent} ${timeUnits.textContent}`.trim();
    try {
      await navigator.clipboard.writeText(text);
      copyErr.style.color = "var(--accent-2)";
      copyErr.textContent = t("copied");
    } catch (e) {
      copyErr.style.color = "var(--danger)";
      copyErr.textContent = t("copyFailed");
    }
    setTimeout(() => { copyErr.textContent = ""; }, 2500);
  });
}

/* ============================= history ============================= */
const HISTORY_KEY = "brainrotHistory";

function getHistory(){
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; }
  catch (e) { return []; }
}

function saveHistoryEntry(entry){
  const history = getHistory();
  history.unshift(entry);
  while (history.length > 30) history.pop();
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  renderHistoryList();
}

function renderHistoryList(){
  const wrap = document.getElementById("history-items");
  const history = getHistory();
  wrap.innerHTML = "";

  if (history.length === 0){
    const empty = document.createElement("div");
    empty.className = "history-empty";
    empty.id = "history-empty";
    empty.textContent = t("historyEmpty");
    wrap.appendChild(empty);
    return;
  }

  history.forEach(entry => {
    const item = document.createElement("div");
    item.className = "history-item";
    const date = new Date(entry.ts);
    const dateStr = date.toLocaleString();
    const resultText = entry.state.neverPays
      ? t("neverPays")
      : `${t("resultText")} ${formatDuration(entry.state.seconds)}`;
    item.innerHTML = `<div class="history-item-date">${dateStr}</div><div>${resultText}</div>`;
    wrap.appendChild(item);
  });
}

function refreshHistoryPanel(){ renderHistoryList(); }

function setupHistoryPanel(){
  const btn = document.getElementById("history-btn");
  const panel = document.getElementById("history-panel");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    panel.classList.toggle("open");
    document.getElementById("profile-panel").classList.remove("open");
  });
  document.getElementById("clear-history-btn").addEventListener("click", () => {
    localStorage.removeItem(HISTORY_KEY);
    renderHistoryList();
  });
}

/* ============================= profile ============================= */
const PROFILE_KEY = "brainrotProfile";
const USERNAME_RE = /^[A-Za-z0-9_]{3,16}$/;

function loadProfile(){
  try { return JSON.parse(localStorage.getItem(PROFILE_KEY)) || {}; }
  catch (e) { return {}; }
}

function saveProfile(profile){
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  const saved = document.getElementById("profile-saved");
  saved.classList.add("show");
  clearTimeout(saveProfile._t);
  saveProfile._t = setTimeout(() => saved.classList.remove("show"), 1800);
}

function setupProfilePanel(){
  const btn = document.getElementById("profile-btn");
  const panel = document.getElementById("profile-panel");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    panel.classList.toggle("open");
    document.getElementById("history-panel").classList.remove("open");
  });

  const usernameInput = document.getElementById("username-input");
  const akaInput = document.getElementById("aka-input");
  const profile = loadProfile();
  if (profile.username) usernameInput.value = profile.username;
  if (profile.aka) akaInput.value = profile.aka;
  if (profile.gender){
    document.querySelectorAll(".gender-btn").forEach(b => b.classList.toggle("active", b.dataset.gender === profile.gender));
  }

  function persist(){
    saveProfile({
      username: usernameInput.value.trim(),
      aka: akaInput.value.trim(),
      gender: document.querySelector(".gender-btn.active")?.dataset.gender || null,
    });
  }

  [usernameInput, akaInput].forEach(input => {
    input.addEventListener("input", () => {
      const valid = input.value.trim() === "" || USERNAME_RE.test(input.value.trim());
      input.classList.toggle("invalid", !valid);
      if (valid) persist();
    });
  });

  document.querySelectorAll(".gender-btn").forEach(gBtn => {
    gBtn.addEventListener("click", () => {
      document.querySelectorAll(".gender-btn").forEach(b => b.classList.remove("active"));
      gBtn.classList.add("active");
      persist();
    });
  });

  document.querySelectorAll(".language-btn").forEach(lBtn => {
    lBtn.addEventListener("click", () => applyLanguage(lBtn.dataset.lang));
  });

  document.getElementById("clear-progress-btn").addEventListener("click", () => {
    if (!confirm(t("clearConfirm"))) return;
    localStorage.removeItem(PROFILE_KEY);
    localStorage.removeItem(HISTORY_KEY);
    usernameInput.value = "";
    akaInput.value = "";
    document.querySelectorAll(".gender-btn").forEach(b => b.classList.remove("active"));
    renderHistoryList();
  });
}

/* ============================== music ============================== */
function setupMusic(){
  const audio = document.getElementById("bg-music");
  const toggle = document.getElementById("music-toggle");
  audio.loop = true;
  audio.volume = 0.4;

  function startPlayback(){
    const playPromise = audio.play();
    if (playPromise !== undefined){
      playPromise.catch(() => {
        // Autoplay blocked by the browser — resume on first user interaction.
        const resume = () => {
          audio.play().catch(() => {});
          ["click", "keydown", "touchstart"].forEach(ev => document.removeEventListener(ev, resume));
        };
        ["click", "keydown", "touchstart"].forEach(ev => document.addEventListener(ev, resume, { once: true }));
      });
    }
  }

  startPlayback();

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    audio.muted = !audio.muted;
    toggle.classList.toggle("muted", audio.muted);
    toggle.innerHTML = audio.muted
      ? '<i class="fas fa-volume-mute"></i>'
      : '<i class="fas fa-volume-up"></i>';
    if (!audio.muted && audio.paused) startPlayback();
  });
}
