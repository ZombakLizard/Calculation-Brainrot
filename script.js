document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        ru: {
            "profile": "Профиль",
            "username": "Имя пользователя",
            "usernameHint": "Английские буквы, цифры и _ (от 3 до 16 символов)",
            "aka": "a.k.a.",
            "akaHint": "Второе имя, не должно совпадать с первым",
            "gender": "Ваш пол",
            "male": "Мужской",
            "female": "Женский",
            "language": "Язык",
            "clearProgress": "Очистить прогресс",
            "dataSaved": "Данные сохранены!",
            "brainrotCost": "Стоимость Brainrot",
            "incomePerSecond": "Доход в секунду",
            "rebirthBoost": "Буст от перерождений",
            "friendsBoost": "Буст от друзей",
            "choose": "Выбрать",
            "calculate": "Рассчитать",
            "noSuffix": "Без суффикса",
            "chooseCostSuffix": "Выберите суффикс стоимости",
            "chooseIncomeSuffix": "Выберите суффикс дохода",
            "chooseMultiplier": "Выберите множитель",
            "choosePercentage": "Выберите процент",
            "calculationResult": "Результат расчета:",
            "enterValues": "Введите значения и нажмите \"Рассчитать\"",
            "copyResult": "Скопировать результат",
            "copied": "Скопировано",
            "calculationHistory": "История расчетов",
            "clear": "Очистить",
            "historyEmpty": "История расчетов пуста",
            "informationSources": "Источники информации",
            "sourcesText": "Данные о бустах от перерождений взяты из источника: ",
            "description": "Поможет рассчитать, за какой срок окупятся вложения в Brainrot. Введите значения в поля ниже и нажмите кнопку \"Рассчитать\"",
            "noticeTitle": "Обратите внимание",
            "noticeRoblox": "Данный сайт работает только для игры Steal a Brainrot в Roblox",
            "noticeBrainrot": "Brainrot - питомец или предмет в игре",
            "bypassLink": "Способы обхода блокировок Roblox в РФ",
            "deathWarning": "⚠️ Скорее всего вы умрете, когда Brainrot окупит себя! ⚠️",
            "fixErrors": "Исправьте ошибки в полях ввода",
            "enterValue": "Пожалуйста, введите значение",
            "invalidFormat": "Некорректный формат. Примеры: 875, 1.5, 15",
            "enterValidNumber": "Введите корректное число",
            "numberNegative": "Число не может быть отрицательным",
            "denominatorZero": "Ошибка: доход и буст перерождений не могут быть равны нулю",
            "resultTooLarge": "Ошибка: результат слишком большой или недопустимый",
            "copyError": "Ошибка копирования. Попробуйте снова.",
            "selectGender": "Выберите ваш пол в профиле",
            "clearHistoryConfirm": "Вы уверены, что хотите очистить историю расчетов?",
            "clearProgressConfirm": "Вы уверены, что хотите очистить весь прогресс? Это действие нельзя отменить! Все ваши данные будут удалены.",
            "dataCleared": "Все данные успешно очищены!",
            "thousands": "тыс",
            "centuries": "в",
            "years": "г",
            "months": "мес",
            "weeks": "нед",
            "days": "д",
            "hours": "ч",
            "minutes": "мин",
            "seconds": "сек",
            "milliseconds": "мс",
            "millennia": "тысячелетий",
            "centuriesFull": "веков",
            "yearsFull": "лет",
            "monthsFull": "месяцев",
            "weeksFull": "недель",
            "daysFull": "дней",
            "hoursFull": "часов",
            "minutesFull": "минут",
            "secondsFull": "секунд",
            "millisecondsFull": "миллисекунд"
        },
        en: {
            "profile": "Profile",
            "username": "Username",
            "usernameHint": "English letters, numbers and _ (3 to 16 characters)",
            "aka": "a.k.a.",
            "akaHint": "Second name, must not match the first",
            "gender": "Your gender",
            "male": "Male",
            "female": "Female",
            "language": "Language",
            "clearProgress": "Clear progress",
            "dataSaved": "Data saved!",
            "brainrotCost": "Brainrot Cost",
            "incomePerSecond": "Income per second",
            "rebirthBoost": "Rebirth boost",
            "friendsBoost": "Friends boost",
            "choose": "Choose",
            "calculate": "Calculate",
            "noSuffix": "No suffix",
            "chooseCostSuffix": "Choose cost suffix",
            "chooseIncomeSuffix": "Choose income suffix",
            "chooseMultiplier": "Choose multiplier",
            "choosePercentage": "Choose percentage",
            "calculationResult": "Calculation result:",
            "enterValues": "Enter values and press \"Calculate\"",
            "copyResult": "Copy result",
            "copied": "Copied",
            "calculationHistory": "Calculation history",
            "clear": "Clear",
            "historyEmpty": "Calculation history is empty",
            "informationSources": "Information sources",
            "sourcesText": "Data on rebirth boosts is taken from: ",
            "description": "Will help calculate how long it will take for your Brainrot investment to pay off. Enter the values in the fields below and press the \"Calculate\" button.",
            "noticeTitle": "Please note",
            "noticeRoblox": "This site only works for the game Steal a Brainrot on Roblox",
            "noticeBrainrot": "Brainrot is a pet or item in the game",
            "bypassLink": "Ways to bypass Roblox blockages in Russia",
            "deathWarning": "⚠️ You will most likely die before Brainrot pays for itself! ⚠️",
            "fixErrors": "Fix errors in input fields",
            "enterValue": "Please enter a value",
            "invalidFormat": "Invalid format. Examples: 875, 1.5, 15",
            "enterValidNumber": "Enter a valid number",
            "numberNegative": "Number cannot be negative",
            "denominatorZero": "Error: income and rebirth boost cannot be zero",
            "resultTooLarge": "Error: result is too large or invalid",
            "copyError": "Copy error. Please try again.",
            "selectGender": "Select your gender in the profile",
            "clearHistoryConfirm": "Are you sure you want to clear the calculation history?",
            "clearProgressConfirm": "Are you sure you want to clear all progress? This action cannot be undone! All your data will be deleted.",
            "dataCleared": "All data has been successfully cleared!",
            "thousands": "th",
            "centuries": "c",
            "years": "y",
            "months": "mo",
            "weeks": "w",
            "days": "d",
            "hours": "h",
            "minutes": "m",
            "seconds": "s",
            "milliseconds": "ms",
            "millennia": "millennia",
            "centuriesFull": "centuries",
            "yearsFull": "years",
            "monthsFull": "months",
            "weeksFull": "weeks",
            "daysFull": "days",
            "hoursFull": "hours",
            "minutesFull": "minutes",
            "secondsFull": "seconds",
            "millisecondsFull": "milliseconds"
        },
        uk: {
            "profile": "Профіль",
            "username": "Ім'я користувача",
            "usernameHint": "Англійські літери, цифри та _ (від 3 до 16 символів)",
            "aka": "a.k.a.",
            "akaHint": "Друге ім'я, не повинно збігатися з першим",
            "gender": "Ваша стать",
            "male": "Чоловіча",
            "female": "Жіноча",
            "language": "Мова",
            "clearProgress": "Очистити прогрес",
            "dataSaved": "Дані збережено!",
            "brainrotCost": "Вартість Brainrot",
            "incomePerSecond": "Дохід в секунду",
            "rebirthBoost": "Буст від перероджень",
            "friendsBoost": "Буст від друзів",
            "choose": "Вибрати",
            "calculate": "Розрахувати",
            "noSuffix": "Без суфікса",
            "chooseCostSuffix": "Виберіть суфікс вартості",
            "chooseIncomeSuffix": "Виберіть суфікс доходу",
            "chooseMultiplier": "Виберіть множник",
            "choosePercentage": "Виберіть відсоток",
            "calculationResult": "Результат розрахунку:",
            "enterValues": "Введіть значення та натисніть \"Розрахувати\"",
            "copyResult": "Скопіювати результат",
            "copied": "Скопійовано",
            "calculationHistory": "Історія розрахунків",
            "clear": "Очистити",
            "historyEmpty": "Історія розрахунків порожня",
            "informationSources": "Джерела інформації",
            "sourcesText": "Дані про бусти від перероджень взято з джерела: ",
            "description": "Допоможе розрахувати, за який термін окупляться вкладення в Brainrot. Введіть значення в поля нижче та натисніть кнопку \"Розрахувати\".",
            "noticeTitle": "Зверніть увагу",
            "noticeRoblox": "Даний сайт працює тільки для гри Steal a Brainrot у Roblox",
            "noticeBrainrot": "Brainrot - це улюбленець або предмет у грі",
            "bypassLink": "Способи обходу блокувань Roblox у РФ",
            "deathWarning": "⚠️ Швидше за все ви помрете, коли Brainrot окупить себе! ⚠️",
            "fixErrors": "Виправте помилки в полях введення",
            "enterValue": "Будь ласка, введіть значення",
            "invalidFormat": "Неправильний формат. Приклади: 875, 1.5, 15",
            "enterValidNumber": "Введіть коректне число",
            "numberNegative": "Число не може бути від'ємним",
            "denominatorZero": "Помилка: дохід та буст перероджень не можуть дорівнювати нулю",
            "resultTooLarge": "Помилка: результат занадто великий або неприпустимий",
            "copyError": "Помилка копіювання. Спробуйте ще раз.",
            "selectGender": "Виберіть вашу стать у профілі",
            "clearHistoryConfirm": "Ви впевнені, що хочете очистити історію розрахунків?",
            "clearProgressConfirm": "Ви впевнені, що хочете очистити весь прогрес? Цю дію не можна скасувати! Всі ваші дані будуть видалені.",
            "dataCleared": "Всі дані успішно очищено!",
            "thousands": "тис",
            "centuries": "в",
            "years": "р",
            "months": "міс",
            "weeks": "тиж",
            "days": "д",
            "hours": "год",
            "minutes": "хв",
            "seconds": "сек",
            "milliseconds": "мс",
            "millennia": "тисячоліть",
            "centuriesFull": "століть",
            "yearsFull": "років",
            "monthsFull": "місяців",
            "weeksFull": "тижнів",
            "daysFull": "днів",
            "hoursFull": "годин",
            "minutesFull": "хвилин",
            "secondsFull": "секунд",
            "millisecondsFull": "мілісекунд"
        },
        hi: {
            "profile": "प्रोफ़ाइल",
            "username": "उपयोगकर्ता नाम",
            "usernameHint": "अंग्रेजी अक्षर, संख्याएँ और _ (3 से 16 वर्ण)",
            "aka": "a.k.a.",
            "akaHint": "दूसरा नाम, पहले से मेल नहीं खाना चाहिए",
            "gender": "आपका लिंग",
            "male": "पुरुष",
            "female": "महिला",
            "language": "भाषा",
            "clearProgress": "प्रगति साफ़ करें",
            "dataSaved": "डेटा सहेजा गया!",
            "brainrotCost": "Brainrot की लागत",
            "incomePerSecond": "प्रति सेकंड आय",
            "rebirthBoost": "पुनर्जन्म बूस्ट",
            "friendsBoost": "दोस्तों का बूस्ट",
            "choose": "चुनें",
            "calculate": "गणना करें",
            "noSuffix": "बिना प्रत्यय",
            "chooseCostSuffix": "लागत प्रत्यय चुनें",
            "chooseIncomeSuffix": "आय प्रत्यय चुनें",
            "chooseMultiplier": "गुणक चुनें",
            "choosePercentage": "प्रतिशत चुनें",
            "calculationResult": "गणना परिणाम:",
            "enterValues": "मान दर्ज करें और \"गणना करें\" दबाएं",
            "copyResult": "परिणाम कॉपी करें",
            "copied": "कॉपी किया गया",
            "calculationHistory": "गणना इतिहास",
            "clear": "साफ़ करें",
            "historyEmpty": "गणना इतिहास खाली है",
            "informationSources": "सूचना स्रोत",
            "sourcesText": "पुनर्जन्म बूस्ट पर डेटा स्रोत से लिया गया है: ",
            "description": "Brainrot में निवेश का भुगतान कितने समय में होगा, इसकी गणना करने में मदद करेगा। नीचे दिए गए फ़ील्ड में मान दर्ज करें और \"गणना करें\" बटन दबाएं।",
            "noticeTitle": "कृपया ध्यान दें",
            "noticeRoblox": "यह साइट केवल Roblox पर Steal a Brainrot गेम के लिए काम करती है",
            "noticeBrainrot": "Brainrot गेम में एक पालतू जानवर या वस्तु है",
            "bypassLink": "रूस में Roblox ब्लॉकेज को बायपास करने के तरीके",
            "deathWarning": "⚠️ Brainrot के भुगतान से पहले आपकी मृत्यु होने की संभावना है! ⚠️",
            "fixErrors": "इनपुट फ़ील्ड में त्रुटियाँ ठीक करें",
            "enterValue": "कृपया एक मान दर्ज करें",
            "invalidFormat": "अमान्य प्रारूप। उदाहरण: 875, 1.5, 15",
            "enterValidNumber": "एक वैध संख्या दर्ज करें",
            "numberNegative": "संख्या ऋणात्मक नहीं हो सकती",
            "denominatorZero": "त्रुटि: आय और पुनर्जन्म बूस्ट शून्य नहीं हो सकते",
            "resultTooLarge": "त्रुटि: परिणाम बहुत बड़ा या अमान्य है",
            "copyError": "कॉपी त्रुटि। कृपया पुनः प्रयास करें।",
            "selectGender": "प्रोफ़ाइल में अपना लिंग चुनें",
            "clearHistoryConfirm": "क्या आप वाकई गणना इतिहास साफ़ करना चाहते हैं?",
            "clearProgressConfirm": "क्या आप वाकई सभी प्रगति साफ़ करना चाहते हैं? यह क्रिया पूर्ववत नहीं की जा सकती! आपका सारा डेटा हटा दिया जाएगा।",
            "dataCleared": "सभी डेटा सफलतापूर्वक साफ़ कर दिया गया है!",
            "thousands": "ह",
            "centuries": "श",
            "years": "व",
            "months": "म",
            "weeks": "स",
            "days": "द",
            "hours": "घ",
            "minutes": "मि",
            "seconds": "से",
            "milliseconds": "मि.से",
            "millennia": "हजार साल",
            "centuriesFull": "सदियों",
            "yearsFull": "साल",
            "monthsFull": "महीने",
            "weeksFull": "हफ्ते",
            "daysFull": "दिन",
            "hoursFull": "घंटे",
            "minutesFull": "मिनट",
            "secondsFull": "सेकंड",
            "millisecondsFull": "मिलीसेकंड"
        }
    };

    const calculateBtn = document.getElementById('calculate');
    const costInput = document.getElementById('cost');
    const incomeInput = document.getElementById('income');
    const costError = document.getElementById('cost-error');
    const incomeError = document.getElementById('income-error');
    const resultDiv = document.getElementById('result');
    const deathWarningDiv = document.getElementById('death-warning');
    const timeUnitsDiv = document.getElementById('time-units');
    const copyResultBtn = document.getElementById('copy-result-btn');
    const copyError = document.getElementById('copy-error');
    
    const costSuffixBtn = document.getElementById('cost-suffix-btn');
    const costSuffixValue = document.getElementById('cost-suffix-value');
    const costSuffixMenu = document.getElementById('cost-suffix-menu');
    const costSuffixItems = costSuffixMenu.querySelectorAll('.menu-item');
    
    const incomeSuffixBtn = document.getElementById('income-suffix-btn');
    const incomeSuffixValue = document.getElementById('income-suffix-value');
    const incomeSuffixMenu = document.getElementById('income-suffix-menu');
    const incomeSuffixItems = incomeSuffixMenu.querySelectorAll('.menu-item');
    
    const friendsBtn = document.getElementById('friends-btn');
    const friendsValue = document.getElementById('friends-value');
    const friendsMenu = document.getElementById('friends-menu');
    const friendsItems = friendsMenu.querySelectorAll('.menu-item');
    
    const rebirthBtn = document.getElementById('rebirth-btn');
    const rebirthValue = document.getElementById('rebirth-value');
    const rebirthMenu = document.getElementById('rebirth-menu');
    const rebirthItems = rebirthMenu.querySelectorAll('.menu-item');
    
    const historyBtn = document.getElementById('history-btn');
    const historyPanel = document.getElementById('history-panel');
    const historyItems = document.getElementById('history-items');
    const historyEmpty = document.getElementById('history-empty');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    
    const profileBtn = document.getElementById('profile-btn');
    const profilePanel = document.getElementById('profile-panel');
    const usernameInput = document.getElementById('username-input');
    const akaInput = document.getElementById('aka-input');
    const genderBtns = document.querySelectorAll('.gender-btn');
    const profileSaved = document.getElementById('profile-saved');
    const languageBtns = document.querySelectorAll('.language-btn');
    
    const clearProgressBtn = document.getElementById('clear-progress-btn');
    
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuHeader = document.getElementById('mobile-menu-header');
    const mobileMenuTitle = document.getElementById('mobile-menu-title');
    const mobileMenuItems = document.getElementById('mobile-menu-items');

    let selectedCostSuffix = '';
    let selectedCostSuffixMultiplier = 1;
    let selectedIncomeSuffix = '';
    let selectedIncomeSuffixMultiplier = 1;
    let selectedFriendsValue = 1.5;
    let selectedRebirthValue = 1;
    
    let currentMobileMenuType = null;
    
    let userData = {
        username: '',
        aka: '',
        gender: null,
        language: 'ru'
    };
    
    let currentResult = '';
    
    const TIME_CONSTANTS = {
        millisecondsPerSecond: 1000,
        secondsPerMinute: 60,
        minutesPerHour: 60,
        hoursPerDay: 24,
        daysPerWeek: 7,
        daysPerMonth: 30.436875,
        daysPerYear: 365.2425,
        yearsPerCentury: 100,
        yearsPerMillennium: 1000
    };
    
    const DEATH_WARNING_THRESHOLD_DAYS = 122 * TIME_CONSTANTS.daysPerYear + 164;
    
    let activePanel = null;
    
    let calculationHistory = JSON.parse(localStorage.getItem('brainrot-history')) || [];
    const MAX_HISTORY_ITEMS = 15;

    function translate(key, lang = null) {
        const currentLang = lang || userData.language;
        if (translations[currentLang] && translations[currentLang][key]) {
            return translations[currentLang][key];
        }
        return translations['ru'][key] || key;
    }
    
    function applyTranslations(lang = null) {
        const currentLang = lang || userData.language;
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = translate(key, currentLang);
            if (element.tagName === 'INPUT') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        updateHistoryDisplay();
        
        // Обновляем тексты в death warning
        const deathWarningText = translate('deathWarning');
        if (deathWarningDiv.style.display === 'block') {
            deathWarningDiv.textContent = deathWarningText;
        }
        
        // Обновляем placeholder
        costInput.placeholder = translate('invalidFormat');
        incomeInput.placeholder = translate('invalidFormat');
    }
    
    function changeLanguage(lang) {
        userData.language = lang;
        
        languageBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        
        applyTranslations(lang);
        saveUserData();
    }
    
    function loadUserData() {
        const savedUserData = localStorage.getItem('brainrot-user-data');
        if (savedUserData) {
            const parsedData = JSON.parse(savedUserData);
            userData = {
                ...userData,
                ...parsedData
            };
            
            if (userData.username) usernameInput.value = userData.username;
            if (userData.aka) akaInput.value = userData.aka;
            
            if (userData.gender) {
                genderBtns.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('data-gender') === userData.gender) {
                        btn.classList.add('active');
                    }
                });
            }
            
            if (userData.language) {
                languageBtns.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('data-lang') === userData.language) {
                        btn.classList.add('active');
                    }
                });
                applyTranslations(userData.language);
            }
        }
    }
    
    function saveUserData() {
        if (userData.username && userData.aka && userData.username === userData.aka) {
            akaInput.style.borderColor = 'var(--error-color)';
        } else {
            akaInput.style.borderColor = '';
        }
        
        localStorage.setItem('brainrot-user-data', JSON.stringify(userData));
        profileSaved.classList.add('show');
        setTimeout(() => profileSaved.classList.remove('show'), 2000);
    }
    
    function validateUsername(username) {
        if (username.length < 3 || username.length > 16) return false;
        const regex = /^[a-zA-Z0-9_]+$/;
        return regex.test(username);
    }
    
    function saveHistory() {
        localStorage.setItem('brainrot-history', JSON.stringify(calculationHistory));
        updateHistoryDisplay();
    }
    
    function updateHistoryDisplay() {
        historyItems.innerHTML = '';
        
        if (calculationHistory.length === 0) {
            historyEmpty.style.display = 'block';
            return;
        }
        
        historyEmpty.style.display = 'none';
        const recentHistory = calculationHistory.slice(-MAX_HISTORY_ITEMS).reverse();
        
        recentHistory.forEach((item, index) => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.dataset.index = calculationHistory.length - 1 - index;
            
            const date = new Date(item.timestamp);
            const dateStr = date.toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            const params = item.params;
            
            historyItem.innerHTML = `
                <div class="history-item-date">
                    <span>${dateStr}</span>
                    <span>#${calculationHistory.length - index}</span>
                </div>
                <div class="history-item-result">${item.result.formatted}</div>
                <div class="history-item-params">
                    <div>${translate('brainrotCost')}: ${params.cost}${params.costSuffix}</div>
                    <div>${translate('incomePerSecond')}: ${params.income}${params.incomeSuffix}/сек</div>
                    <div>${translate('rebirthBoost')}: x${params.rebirth}</div>
                    <div>${translate('friendsBoost')}: ${Math.round((params.friends - 1) * 100)}%</div>
                </div>
            `;
            
            historyItem.addEventListener('click', function() {
                loadCalculationFromHistory(item);
                closeAllPanels();
            });
            
            historyItems.appendChild(historyItem);
        });
    }
    
    function loadCalculationFromHistory(historyItem) {
        const params = historyItem.params;
        
        costInput.value = params.cost;
        incomeInput.value = params.income;
        
        selectedCostSuffix = params.costSuffix;
        selectedCostSuffixMultiplier = params.costSuffix === 'k' ? 1000 : 
                                      params.costSuffix === 'm' ? 1000000 : 
                                      params.costSuffix === 'b' ? 1000000000 : 
                                      params.costSuffix === 'qa' ? 1000000000000 : 1;
        
        costSuffixValue.textContent = params.costSuffix === '' ? translate('noSuffix') : params.costSuffix;
        
        costSuffixItems.forEach(item => {
            item.classList.remove('selected');
            if (item.getAttribute('data-suffix') === params.costSuffix) {
                item.classList.add('selected');
            }
        });
        
        selectedIncomeSuffix = params.incomeSuffix;
        selectedIncomeSuffixMultiplier = params.incomeSuffix === 'k' ? 1000 : 
                                        params.incomeSuffix === 'm' ? 1000000 : 
                                        params.incomeSuffix === 'b' ? 1000000000 : 
                                        params.incomeSuffix === 'qa' ? 1000000000000 : 1;
        
        incomeSuffixValue.textContent = params.incomeSuffix === '' ? translate('noSuffix') : params.incomeSuffix;
        
        incomeSuffixItems.forEach(item => {
            item.classList.remove('selected');
            if (item.getAttribute('data-suffix') === params.incomeSuffix) {
                item.classList.add('selected');
            }
        });
        
        selectedRebirthValue = params.rebirth;
        rebirthValue.textContent = `x${params.rebirth}`;
        
        rebirthItems.forEach(item => {
            item.classList.remove('selected');
            if (parseFloat(item.getAttribute('data-value')) === params.rebirth) {
                item.classList.add('selected');
            }
        });
        
        selectedFriendsValue = params.friends;
        const percentValue = Math.round((params.friends - 1) * 100);
        friendsValue.textContent = `${percentValue}%`;
        
        friendsItems.forEach(item => {
            item.classList.remove('selected');
            if (parseFloat(item.getAttribute('data-value')) === params.friends) {
                item.classList.add('selected');
            }
        });
        
        resultDiv.innerHTML = historyItem.result.formatted;
        currentResult = historyItem.result.formatted;
        
        if (historyItem.result.timeUnits) {
            timeUnitsDiv.innerHTML = historyItem.result.timeUnits;
            timeUnitsDiv.style.display = "flex";
        } else {
            timeUnitsDiv.style.display = "none";
        }
        
        if (historyItem.result.showDeathWarning) {
            deathWarningDiv.textContent = translate('deathWarning');
            deathWarningDiv.style.display = "block";
        } else {
            deathWarningDiv.style.display = "none";
        }
        
        copyResultBtn.style.display = "flex";
        resultDiv.style.transform = "scale(1.05)";
        setTimeout(() => resultDiv.style.transform = "scale(1)", 300);
    }
    
    function addToHistory(params, result) {
        const historyItem = {
            timestamp: new Date().toISOString(),
            params: {
                cost: params.cost,
                costSuffix: params.costSuffix,
                income: params.income,
                incomeSuffix: params.incomeSuffix,
                rebirth: params.rebirth,
                friends: params.friends
            },
            result: {
                formatted: result.formatted,
                timeUnits: result.timeUnits,
                showDeathWarning: result.showDeathWarning,
                totalDays: result.totalDays
            }
        };
        
        calculationHistory.push(historyItem);
        if (calculationHistory.length > 50) calculationHistory = calculationHistory.slice(-50);
        saveHistory();
    }
    
    function clearHistory() {
        if (confirm(translate('clearHistoryConfirm'))) {
            calculationHistory = [];
            saveHistory();
        }
    }
    
    function clearProgress() {
        if (confirm(translate('clearProgressConfirm'))) {
            userData = {
                username: '',
                aka: '',
                gender: null,
                language: 'ru'
            };
            
            usernameInput.value = '';
            akaInput.value = '';
            
            genderBtns.forEach(btn => btn.classList.remove('active'));
            
            languageBtns.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-lang') === 'ru') {
                    btn.classList.add('active');
                }
            });
            
            applyTranslations('ru');
            
            saveUserData();
            
            alert(translate('dataCleared'));
        }
    }
    
    function copyResult() {
        if (!userData.gender) {
            copyResultBtn.classList.add('error');
            copyError.textContent = translate('selectGender');
            setTimeout(() => {
                copyResultBtn.classList.remove('error');
                copyError.textContent = "";
            }, 2000);
            return;
        }
        
        const genderText = userData.gender === 'male' ? 
            (userData.language === 'ru' ? 'рассчитал' : 
             userData.language === 'en' ? 'calculated' :
             userData.language === 'uk' ? 'розрахував' : 'गणना की') : 
            (userData.language === 'ru' ? 'рассчитала' : 
             userData.language === 'en' ? 'calculated' :
             userData.language === 'uk' ? 'розрахувала' : 'गणना की');
        
        const genderText2 = userData.gender === 'male' ? 
            (userData.language === 'ru' ? 'сделал' : 
             userData.language === 'en' ? 'did' :
             userData.language === 'uk' ? 'зробив' : 'किया') : 
            (userData.gender === 'ru' ? 'сделала' : 
             userData.language === 'en' ? 'did' :
             userData.language === 'uk' ? 'зробила' : 'किया');
        
        const genderSuffix = userData.gender === 'female' && userData.language === 'ru' ? 'а' : '';
        
        const textToCopy = `я ${genderText} стоимость моего Brainrot и выяснил${genderSuffix}, что он окупится за ${currentResult}

я ${genderText2} это на сайте "Calculation Brainrot"

zombaklizard.github.io/Calculation_Brainrot/brainrot.html`;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            copyResultBtn.classList.add('success');
            copyResultBtn.innerHTML = `<i class="fas fa-check"></i> ${translate('copied')}`;
            setTimeout(() => {
                copyResultBtn.classList.remove('success');
                copyResultBtn.innerHTML = `<i class="fas fa-copy"></i> ${translate('copyResult')}`;
            }, 2000);
        }).catch(err => {
            console.error('Ошибка копирования: ', err);
            copyError.textContent = translate('copyError');
        });
    }
    
    function validateNumberInput(input, e) {
        const value = input.value;
        const key = e.key;
        
        if (e.ctrlKey || e.altKey || e.metaKey || 
            key === 'Backspace' || key === 'Delete' || 
            key === 'Tab' || key === 'Enter' || 
            key === 'ArrowLeft' || key === 'ArrowRight' || 
            key === 'ArrowUp' || key === 'ArrowDown' ||
            key === 'Home' || key === 'End') return true;
        
        if (key >= '0' && key <= '9') return true;
        
        if (key === '.' || key === ',') {
            e.preventDefault();
            if (!value.includes('.')) {
                const start = input.selectionStart;
                const end = input.selectionEnd;
                input.value = value.substring(0, start) + '.' + value.substring(end);
                input.setSelectionRange(start + 1, start + 1);
            }
            return false;
        }
        
        e.preventDefault();
        return false;
    }
    
    function validateFullInput(input, errorElement) {
        const value = input.value.trim();
        errorElement.textContent = "";
        
        if (!value) {
            errorElement.textContent = translate('enterValue');
            return { isValid: false, value: 0 };
        }
        
        const regex = /^[0-9]+(?:\.[0-9]+)?$/;
        if (!regex.test(value)) {
            errorElement.textContent = translate('invalidFormat');
            return { isValid: false, value: 0 };
        }
        
        const numericValue = parseFloat(value);
        if (isNaN(numericValue)) {
            errorElement.textContent = translate('enterValidNumber');
            return { isValid: false, value: 0 };
        }
        
        if (numericValue < 0) {
            errorElement.textContent = translate('numberNegative');
            return { isValid: false, value: 0 };
        }
        
        return { isValid: true, value: numericValue };
    }
    
    function formatExtendedTime(seconds) {
        let remainingSeconds = seconds;
        
        const secondsInMillennium = TIME_CONSTANTS.daysPerYear * TIME_CONSTANTS.yearsPerMillennium * 24 * 3600;
        const millennia = Math.floor(remainingSeconds / secondsInMillennium);
        remainingSeconds %= secondsInMillennium;
        
        const secondsInCentury = TIME_CONSTANTS.daysPerYear * TIME_CONSTANTS.yearsPerCentury * 24 * 3600;
        const centuries = Math.floor(remainingSeconds / secondsInCentury);
        remainingSeconds %= secondsInCentury;
        
        const secondsInYear = TIME_CONSTANTS.daysPerYear * 24 * 3600;
        const years = Math.floor(remainingSeconds / secondsInYear);
        remainingSeconds %= secondsInYear;
        
        const secondsInMonth = TIME_CONSTANTS.daysPerMonth * 24 * 3600;
        const months = Math.floor(remainingSeconds / secondsInMonth);
        remainingSeconds %= secondsInMonth;
        
        const secondsInWeek = TIME_CONSTANTS.daysPerWeek * 24 * 3600;
        const weeks = Math.floor(remainingSeconds / secondsInWeek);
        remainingSeconds %= secondsInWeek;
        
        const secondsInDay = 24 * 3600;
        const days = Math.floor(remainingSeconds / secondsInDay);
        remainingSeconds %= secondsInDay;
        
        const secondsInHour = 3600;
        const hours = Math.floor(remainingSeconds / secondsInHour);
        remainingSeconds %= secondsInHour;
        
        const secondsInMinute = 60;
        const minutes = Math.floor(remainingSeconds / secondsInMinute);
        remainingSeconds %= secondsInMinute;
        
        const secs = Math.floor(remainingSeconds);
        const ms = Math.round((remainingSeconds - secs) * 1000);
        
        let formattedResult = '';
        const units = [
            { value: millennia, label: translate('thousands'), fullLabel: translate('millennia') },
            { value: centuries, label: translate('centuries'), fullLabel: translate('centuriesFull') },
            { value: years, label: translate('years'), fullLabel: translate('yearsFull') },
            { value: months, label: translate('months'), fullLabel: translate('monthsFull') },
            { value: weeks, label: translate('weeks'), fullLabel: translate('weeksFull') },
            { value: days, label: translate('days'), fullLabel: translate('daysFull') },
            { value: hours, label: translate('hours'), fullLabel: translate('hoursFull') },
            { value: minutes, label: translate('minutes'), fullLabel: translate('minutesFull') },
            { value: secs, label: translate('seconds'), fullLabel: translate('secondsFull') }
        ];
        
        let firstNonZeroIndex = -1;
        for (let i = 0; i < units.length; i++) {
            if (units[i].value > 0) {
                firstNonZeroIndex = i;
                break;
            }
        }
        
        if (firstNonZeroIndex === -1) {
            formattedResult = `${ms} ${translate('milliseconds')}`;
        } else {
            formattedResult = `${units[firstNonZeroIndex].value} ${units[firstNonZeroIndex].label}`;
            
            for (let i = firstNonZeroIndex + 1; i < units.length; i++) {
                if (units[i].value > 0) {
                    formattedResult += ` ${units[i].value} ${units[i].label}`;
                    break;
                }
            }
        }
        
        let timeUnitsHTML = '';
        units.forEach(unit => {
            if (unit.value > 0) {
                timeUnitsHTML += `
                    <div class="time-unit">
                        <span class="value">${unit.value}</span>
                        <span class="label">${unit.fullLabel}</span>
                    </div>`;
            }
        });
        
        if (seconds < 1 && ms > 0) {
            timeUnitsHTML += `
                <div class="time-unit">
                    <span class="value">${ms}</span>
                    <span class="label">${translate('millisecondsFull')}</span>
                </div>`;
        }
        
        const totalDays = seconds / (TIME_CONSTANTS.secondsPerMinute * TIME_CONSTANTS.minutesPerHour * TIME_CONSTANTS.hoursPerDay);
        let showDeathWarning = totalDays >= DEATH_WARNING_THRESHOLD_DAYS;
        
        return {
            formatted: formattedResult,
            timeUnits: timeUnitsHTML,
            showDeathWarning: showDeathWarning,
            totalDays: totalDays,
            seconds: seconds
        };
    }
    
    function calculateBrainrot() {
        costError.textContent = "";
        incomeError.textContent = "";
        resultDiv.style.color = "var(--primary-color)";
        deathWarningDiv.style.display = "none";
        timeUnitsDiv.style.display = "none";
        copyError.textContent = "";
        
        const costValidation = validateFullInput(costInput, costError);
        const incomeValidation = validateFullInput(incomeInput, incomeError);
        
        if (!costValidation.isValid || !incomeValidation.isValid) {
            resultDiv.textContent = translate('fixErrors');
            resultDiv.style.color = "var(--error-color)";
            copyResultBtn.style.display = "none";
            return;
        }
        
        const a = costValidation.value * selectedCostSuffixMultiplier;
        const b = incomeValidation.value * selectedIncomeSuffixMultiplier;
        const c = selectedRebirthValue;
        const d = selectedFriendsValue;
        
        if (a < 0 || b < 0 || c < 0 || d < 0) {
            resultDiv.textContent = translate('numberNegative');
            resultDiv.style.color = "var(--error-color)";
            copyResultBtn.style.display = "none";
            return;
        }
        
        if (b === 0 || c === 0) {
            resultDiv.textContent = translate('denominatorZero');
            resultDiv.style.color = "var(--error-color)";
            copyResultBtn.style.display = "none";
            return;
        }
        
        let denominator = b * c * d;
        
        if (denominator === 0) {
            resultDiv.textContent = translate('denominatorZero');
            resultDiv.style.color = "var(--error-color)";
            copyResultBtn.style.display = "none";
            return;
        }
        
        const result = a / denominator;
        
        if (!isFinite(result) || isNaN(result)) {
            resultDiv.textContent = translate('resultTooLarge');
            resultDiv.style.color = "var(--error-color)";
            copyResultBtn.style.display = "none";
            return;
        }
        
        const formattedResult = formatExtendedTime(result);
        resultDiv.style.color = "var(--primary-color)";
        resultDiv.style.transform = "scale(1.05)";
        resultDiv.innerHTML = formattedResult.formatted;
        currentResult = formattedResult.formatted;
        
        if (result > 1 && formattedResult.timeUnits) {
            timeUnitsDiv.innerHTML = formattedResult.timeUnits;
            timeUnitsDiv.style.display = "flex";
        }
        
        if (formattedResult.showDeathWarning) {
            deathWarningDiv.textContent = translate('deathWarning');
            deathWarningDiv.style.display = "block";
        }
        
        copyResultBtn.style.display = "flex";
        
        const historyParams = {
            cost: costValidation.value,
            costSuffix: selectedCostSuffix,
            income: incomeValidation.value,
            incomeSuffix: selectedIncomeSuffix,
            rebirth: selectedRebirthValue,
            friends: selectedFriendsValue
        };
        
        addToHistory(historyParams, formattedResult);
        setTimeout(() => resultDiv.style.transform = "scale(1)", 300);
    }
    
    function openMenu(menu) {
        if (activePanel && activePanel !== menu) activePanel.classList.remove('active');
        if (activePanel === menu) {
            menu.classList.remove('active');
            activePanel = null;
        } else {
            menu.classList.add('active');
            activePanel = menu;
        }
    }
    
    function toggleHistoryPanel() {
        closeAllPanelsExcept('history-panel');
        if (historyPanel.classList.contains('active')) {
            historyPanel.classList.remove('active');
            activePanel = null;
        } else {
            historyPanel.classList.add('active');
            activePanel = historyPanel;
            updateHistoryDisplay();
        }
    }
    
    function toggleProfilePanel() {
        closeAllPanelsExcept('profile-panel');
        if (profilePanel.classList.contains('active')) {
            profilePanel.classList.remove('active');
            activePanel = null;
        } else {
            profilePanel.classList.add('active');
            activePanel = profilePanel;
        }
    }
    
    function closeAllPanelsExcept(exceptClass) {
        const panels = document.querySelectorAll('.vertical-menu, .history-panel, .profile-panel, .mobile-menu-overlay, .mobile-menu');
        panels.forEach(panel => {
            if (!panel.classList.contains(exceptClass)) {
                panel.classList.remove('active');
            }
        });
    }
    
    function closeAllPanels() {
        const panels = document.querySelectorAll('.vertical-menu, .history-panel, .profile-panel, .mobile-menu-overlay, .mobile-menu');
        panels.forEach(panel => panel.classList.remove('active'));
        activePanel = null;
        currentMobileMenuType = null;
    }
    
    function openMobileMenu(menuType, title, items, currentValue) {
        currentMobileMenuType = menuType;
        mobileMenuTitle.textContent = title;
        mobileMenuItems.innerHTML = '';
        
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'mobile-menu-item';
            
            if (menuType === 'cost-suffix' || menuType === 'income-suffix') {
                const suffix = item.getAttribute('data-suffix');
                const isSelected = (menuType === 'cost-suffix' && suffix === selectedCostSuffix) || 
                                  (menuType === 'income-suffix' && suffix === selectedIncomeSuffix);
                menuItem.innerHTML = item.innerHTML;
                menuItem.dataset.suffix = suffix;
                menuItem.dataset.multiplier = item.getAttribute('data-multiplier');
                if (isSelected) menuItem.classList.add('selected');
                
                menuItem.addEventListener('click', function() {
                    const suffix = this.dataset.suffix;
                    const multiplier = parseFloat(this.dataset.multiplier);
                    
                    if (menuType === 'cost-suffix') {
                        selectedCostSuffix = suffix;
                        selectedCostSuffixMultiplier = multiplier;
                        costSuffixValue.textContent = suffix === '' ? translate('noSuffix') : suffix;
                        
                        costSuffixItems.forEach(i => i.classList.remove('selected'));
                        item.classList.add('selected');
                    } else {
                        selectedIncomeSuffix = suffix;
                        selectedIncomeSuffixMultiplier = multiplier;
                        incomeSuffixValue.textContent = suffix === '' ? translate('noSuffix') : suffix;
                        
                        incomeSuffixItems.forEach(i => i.classList.remove('selected'));
                        item.classList.add('selected');
                    }
                    
                    closeAllPanels();
                });
            } else if (menuType === 'friends') {
                const value = parseFloat(item.getAttribute('data-value'));
                const isSelected = value === selectedFriendsValue;
                menuItem.innerHTML = item.innerHTML;
                menuItem.dataset.value = value;
                if (isSelected) menuItem.classList.add('selected');
                
                menuItem.addEventListener('click', function() {
                    const value = parseFloat(this.dataset.value);
                    selectedFriendsValue = value;
                    const percentValue = Math.round((value - 1) * 100);
                    friendsValue.textContent = `${percentValue}%`;
                    
                    friendsItems.forEach(i => i.classList.remove('selected'));
                    item.classList.add('selected');
                    
                    closeAllPanels();
                });
            } else if (menuType === 'rebirth') {
                const value = parseFloat(item.getAttribute('data-value'));
                const isSelected = value === selectedRebirthValue;
                menuItem.innerHTML = item.innerHTML;
                menuItem.dataset.value = value;
                if (isSelected) menuItem.classList.add('selected');
                
                menuItem.addEventListener('click', function() {
                    const value = parseFloat(this.dataset.value);
                    selectedRebirthValue = value;
                    rebirthValue.textContent = `x${value}`;
                    
                    rebirthItems.forEach(i => i.classList.remove('selected'));
                    item.classList.add('selected');
                    
                    closeAllPanels();
                });
            }
            
            mobileMenuItems.appendChild(menuItem);
        });
        
        mobileMenuOverlay.classList.add('active');
        mobileMenu.classList.add('active');
    }
    
    function initEventListeners() {
        costSuffixBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.innerWidth <= 1024) {
                openMobileMenu('cost-suffix', translate('chooseCostSuffix'), Array.from(costSuffixItems), selectedCostSuffix);
            } else {
                openMenu(costSuffixMenu);
            }
        });
        
        incomeSuffixBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.innerWidth <= 1024) {
                openMobileMenu('income-suffix', translate('chooseIncomeSuffix'), Array.from(incomeSuffixItems), selectedIncomeSuffix);
            } else {
                openMenu(incomeSuffixMenu);
            }
        });
        
        friendsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.innerWidth <= 1024) {
                openMobileMenu('friends', translate('choosePercentage'), Array.from(friendsItems), selectedFriendsValue);
            } else {
                openMenu(friendsMenu);
            }
        });
        
        rebirthBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.innerWidth <= 1024) {
                openMobileMenu('rebirth', translate('chooseMultiplier'), Array.from(rebirthItems), selectedRebirthValue);
            } else {
                openMenu(rebirthMenu);
            }
        });
        
        costSuffixItems.forEach(item => {
            item.addEventListener('click', function() {
                const suffix = this.getAttribute('data-suffix');
                const multiplier = parseFloat(this.getAttribute('data-multiplier'));
                
                selectedCostSuffix = suffix;
                selectedCostSuffixMultiplier = multiplier;
                costSuffixValue.textContent = suffix === '' ? translate('noSuffix') : suffix;
                
                costSuffixItems.forEach(i => i.classList.remove('selected'));
                this.classList.add('selected');
                closeAllPanels();
            });
        });
        
        incomeSuffixItems.forEach(item => {
            item.addEventListener('click', function() {
                const suffix = this.getAttribute('data-suffix');
                const multiplier = parseFloat(this.getAttribute('data-multiplier'));
                
                selectedIncomeSuffix = suffix;
                selectedIncomeSuffixMultiplier = multiplier;
                incomeSuffixValue.textContent = suffix === '' ? translate('noSuffix') : suffix;
                
                incomeSuffixItems.forEach(i => i.classList.remove('selected'));
                this.classList.add('selected');
                closeAllPanels();
            });
        });
        
        friendsItems.forEach(item => {
            item.addEventListener('click', function() {
                const value = parseFloat(this.getAttribute('data-value'));
                selectedFriendsValue = value;
                const percentValue = Math.round((value - 1) * 100);
                friendsValue.textContent = `${percentValue}%`;
                
                friendsItems.forEach(i => i.classList.remove('selected'));
                this.classList.add('selected');
                closeAllPanels();
            });
        });
        
        rebirthItems.forEach(item => {
            item.addEventListener('click', function() {
                const value = parseFloat(this.getAttribute('data-value'));
                selectedRebirthValue = value;
                rebirthValue.textContent = `x${value}`;
                
                rebirthItems.forEach(i => i.classList.remove('selected'));
                this.classList.add('selected');
                closeAllPanels();
            });
        });
        
        historyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleHistoryPanel();
        });
        
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleProfilePanel();
        });
        
        clearHistoryBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            clearHistory();
        });
        
        clearProgressBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            clearProgress();
        });
        
        copyResultBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            copyResult();
        });
        
        languageBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);
            });
        });
        
        genderBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const gender = this.getAttribute('data-gender');
                userData.gender = gender;
                genderBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                saveUserData();
            });
        });
        
        usernameInput.addEventListener('input', function() {
            let value = this.value;
            let newValue = value.replace(/[^a-zA-Z0-9_]/g, '');
            if (newValue !== value) {
                this.value = newValue;
            }
            
            if (newValue.length > 16) {
                this.value = newValue.substring(0, 16);
                newValue = this.value;
            }
            
            userData.username = newValue;
            saveUserData();
        });
        
        akaInput.addEventListener('input', function() {
            let value = this.value;
            let newValue = value.replace(/[^a-zA-Z0-9_]/g, '');
            if (newValue !== value) {
                this.value = newValue;
            }
            
            if (newValue.length > 16) {
                this.value = newValue.substring(0, 16);
                newValue = this.value;
            }
            
            userData.aka = newValue;
            saveUserData();
        });
        
        usernameInput.addEventListener('blur', function() {
            const username = this.value.trim();
            if (username && !validateUsername(username)) {
                this.style.borderColor = 'var(--error-color)';
            } else {
                this.style.borderColor = '';
            }
        });
        
        akaInput.addEventListener('blur', function() {
            const aka = this.value.trim();
            if (aka && userData.username === aka) {
                this.style.borderColor = 'var(--error-color)';
            } else {
                this.style.borderColor = '';
            }
        });
        
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.select-button') && 
                !e.target.closest('.cost-input-container') &&
                !e.target.closest('.income-input-container') &&
                !e.target.closest('.history-panel') &&
                !e.target.closest('.history-btn') &&
                !e.target.closest('.profile-panel') &&
                !e.target.closest('.profile-btn') &&
                !e.target.closest('.mobile-menu') &&
                !e.target.closest('.mobile-menu-overlay')) {
                closeAllPanels();
            }
        });
        
        mobileMenuOverlay.addEventListener('click', function() {
            closeAllPanels();
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeAllPanels();
            }
        });
        
        calculateBtn.addEventListener('click', calculateBrainrot);
        
        const inputs = [costInput, incomeInput];
        inputs.forEach(input => {
            input.addEventListener('keydown', function(e) {
                validateNumberInput(this, e);
            });
            
            input.addEventListener('paste', function(e) {
                e.preventDefault();
                const pastedText = (e.clipboardData || window.clipboardData).getData('text');
                const cleanedText = pastedText.replace(/[^0-9.]/g, '');
                const start = this.selectionStart;
                const end = this.selectionEnd;
                this.value = this.value.substring(0, start) + cleanedText + this.value.substring(end);
                this.setSelectionRange(start + cleanedText.length, start + cleanedText.length);
                
                const errorElement = input.id === 'cost' ? costError : incomeError;
                validateFullInput(input, errorElement);
            });
            
            input.addEventListener('blur', function() {
                const errorElement = input.id === 'cost' ? costError : incomeError;
                validateFullInput(input, errorElement);
            });
            
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') calculateBrainrot();
            });
        });
        
        window.addEventListener('resize', function() {
            if (window.innerWidth > 1024) {
                if (mobileMenu.classList.contains('active')) {
                    closeAllPanels();
                }
            }
        });
    }
    
    function init() {
        costSuffixItems.forEach(item => {
            if (item.getAttribute('data-suffix') === selectedCostSuffix) item.classList.add('selected');
        });
        
        incomeSuffixItems.forEach(item => {
            if (item.getAttribute('data-suffix') === selectedIncomeSuffix) item.classList.add('selected');
        });
        
        friendsItems.forEach(item => {
            if (parseFloat(item.getAttribute('data-value')) === selectedFriendsValue) item.classList.add('selected');
        });
        
        rebirthItems.forEach(item => {
            if (parseFloat(item.getAttribute('data-value')) === selectedRebirthValue) item.classList.add('selected');
        });
        
        loadUserData();
        initEventListeners();
        updateHistoryDisplay();
    }
    
    init();
});
