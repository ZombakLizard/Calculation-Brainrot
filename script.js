document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    /* ------------------------------ Elements ------------------------------ */

    const calculateBtn = document.getElementById('calculate');
    const costInput = document.getElementById('cost');
    const incomeInput = document.getElementById('income');
    const costError = document.getElementById('cost-error');
    const incomeError = document.getElementById('income-error');
    const resultDiv = document.getElementById('result');
    const deathWarningDiv = document.getElementById('death-warning');
    const timeUnitsDiv = document.getElementById('time-units');
    const copyResultBtn = document.getElementById('copy-result-btn');
    const copyResultIcon = copyResultBtn.querySelector('i');
    const copyResultLabel = copyResultBtn.querySelector('span');
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
    const mobileMenuTitle = document.getElementById('mobile-menu-title');
    const mobileMenuItems = document.getElementById('mobile-menu-items');

    /* ------------------------------ State ------------------------------ */

    let selectedCostSuffix = '';
    let selectedCostSuffixMultiplier = 1;
    let selectedIncomeSuffix = '';
    let selectedIncomeSuffixMultiplier = 1;
    let selectedFriendsValue = 1.5;
    let selectedRebirthValue = 1;

    let currentMobileMenuType = null;
    let activePanel = null;

    let currentResult = '';
    let lastResultSeconds = null;
    let hasResult = false;
    let deathWarningVisible = false;

    const DEFAULT_LANGUAGE = 'en';

    let userData = {
        username: '',
        aka: '',
        gender: null,
        language: DEFAULT_LANGUAGE
    };

    /* --------------------------- Translations --------------------------- */

    const translations = {
        en: {
            profile: 'Profile',
            username: 'Username',
            usernamePlaceholder: 'Enter username',
            usernameHint: 'English letters, numbers and _ (3 to 16 characters)',
            aka: 'a.k.a.',
            akaPlaceholder: 'Enter second name',
            akaHint: 'Second name, must not match the first',
            gender: 'Your gender',
            male: 'Male',
            female: 'Female',
            language: 'Language',
            clearProgress: 'Clear progress',
            dataSaved: 'Data saved!',

            brainrotCost: 'Brainrot cost',
            incomePerSecond: 'Income per second',
            rebirthBoost: 'Rebirth boost',
            friendsBoost: 'Friends boost',
            choose: 'Choose',
            calculate: 'Calculate',

            noSuffix: 'No suffix',
            kilo: 'k (kilo)',
            million: 'm (million)',
            billion: 'b (billion)',
            quadrillion: 'qa (quadrillion)',

            costPlaceholder: 'Example: 875, 1.5, 15',
            incomePlaceholder: 'Example: 50, 2.5, 100',

            chooseCostSuffix: 'Choose cost suffix',
            chooseIncomeSuffix: 'Choose income suffix',
            chooseMultiplier: 'Choose multiplier',
            choosePercentage: 'Choose percentage',
            chooseValue: 'Choose a value',

            calculationResult: 'Calculation result:',
            enterValues: 'Enter values and press "Calculate"',
            copyResult: 'Copy result',
            copied: 'Copied',

            calculationHistory: 'Calculation history',
            clear: 'Clear',
            historyEmpty: 'Calculation history is empty',

            informationSources: 'Information sources',
            description: 'Will help calculate how long it will take for your Brainrot investment to pay off. Enter the values in the fields below and press the "Calculate" button.',

            noteTitle: 'Please note',
            noteGame: 'This website works only for the game <strong>Steal a Brainrot</strong> in Roblox',
            noteBrainrot: 'Brainrot is a pet or an item in the game',
            sourcesText: 'Data about rebirth boosts is taken from: <a href="https://stealabrainrot.fandom.com/wiki/Rebirth" target="_blank">Steal a Brainrot Wiki - Rebirth</a>',

            deathWarning: '⚠️ You will most likely die before this Brainrot pays off! ⚠️',

            errorEmpty: 'Please enter a value',
            errorFormat: 'Invalid format. Examples: 875, 1.5, 15',
            errorNumber: 'Enter a valid number',
            errorNegative: 'The number cannot be negative',
            errorFixFields: 'Fix the errors in the input fields',
            errorZero: 'Error: income and rebirth boost cannot be zero',
            errorDenominator: 'Error: denominator is zero',
            errorTooBig: 'Error: the result is too large or invalid',
            errorCopy: 'Copy failed. Please try again.',
            errorGender: 'Choose your gender in the profile',

            confirmClearHistory: 'Are you sure you want to clear the calculation history?',
            confirmClearProgress: 'Are you sure you want to clear all progress? This action cannot be undone! All your data will be deleted.',
            alertCleared: 'All data has been cleared!',

            perSecond: '/sec',

            unitMillennia: 'millennia',
            unitCenturies: 'centuries',
            unitYears: 'years',
            unitMonths: 'months',
            unitWeeks: 'weeks',
            unitDays: 'days',
            unitHours: 'hours',
            unitMinutes: 'minutes',
            unitSeconds: 'seconds',
            unitMilliseconds: 'milliseconds',

            shortMillennia: 'kyr',
            shortCenturies: 'cent',
            shortYears: 'y',
            shortMonths: 'mo',
            shortWeeks: 'w',
            shortDays: 'd',
            shortHours: 'h',
            shortMinutes: 'min',
            shortSeconds: 's',
            shortMilliseconds: 'ms'
        },
        ru: {
            profile: 'Профиль',
            username: 'Имя пользователя',
            usernamePlaceholder: 'Введите имя',
            usernameHint: 'Английские буквы, цифры и _ (от 3 до 16 символов)',
            aka: 'a.k.a.',
            akaPlaceholder: 'Введите второе имя',
            akaHint: 'Второе имя, не должно совпадать с первым',
            gender: 'Ваш пол',
            male: 'Мужской',
            female: 'Женский',
            language: 'Язык',
            clearProgress: 'Очистить прогресс',
            dataSaved: 'Данные сохранены!',

            brainrotCost: 'Стоимость Brainrot',
            incomePerSecond: 'Доход в секунду',
            rebirthBoost: 'Буст от перерождений',
            friendsBoost: 'Буст от друзей',
            choose: 'Выбрать',
            calculate: 'Рассчитать',

            noSuffix: 'Без суффикса',
            kilo: 'k (кило)',
            million: 'm (миллион)',
            billion: 'b (миллиард)',
            quadrillion: 'qa (квадриллион)',

            costPlaceholder: 'Пример: 875, 1.5, 15',
            incomePlaceholder: 'Пример: 50, 2.5, 100',

            chooseCostSuffix: 'Выберите суффикс стоимости',
            chooseIncomeSuffix: 'Выберите суффикс дохода',
            chooseMultiplier: 'Выберите множитель',
            choosePercentage: 'Выберите процент',
            chooseValue: 'Выберите значение',

            calculationResult: 'Результат расчета:',
            enterValues: 'Введите значения и нажмите "Рассчитать"',
            copyResult: 'Скопировать результат',
            copied: 'Скопировано',

            calculationHistory: 'История расчетов',
            clear: 'Очистить',
            historyEmpty: 'История расчетов пуста',

            informationSources: 'Источники информации',
            description: 'Поможет рассчитать, за какой срок окупятся вложения в Brainrot. Введите значения в поля ниже и нажмите кнопку "Рассчитать"',

            noteTitle: 'Обратите внимание',
            noteGame: 'Данный сайт работает только для игры <strong>Steal a Brainrot</strong> в Roblox',
            noteBrainrot: 'Brainrot — питомец или предмет в игре',
            sourcesText: 'Данные о бустах от перерождений взяты из источника: <a href="https://stealabrainrot.fandom.com/wiki/Rebirth" target="_blank">Steal a Brainrot Wiki - Rebirth</a>',

            deathWarning: '⚠️ Скорее всего вы умрете, когда Brainrot окупит себя! ⚠️',

            errorEmpty: 'Пожалуйста, введите значение',
            errorFormat: 'Некорректный формат. Примеры: 875, 1.5, 15',
            errorNumber: 'Введите корректное число',
            errorNegative: 'Число не может быть отрицательным',
            errorFixFields: 'Исправьте ошибки в полях ввода',
            errorZero: 'Ошибка: доход и буст перерождений не могут быть равны нулю',
            errorDenominator: 'Ошибка: знаменатель равен нулю',
            errorTooBig: 'Ошибка: результат слишком большой или недопустимый',
            errorCopy: 'Ошибка копирования. Попробуйте снова.',
            errorGender: 'Выберите ваш пол в профиле',

            confirmClearHistory: 'Вы уверены, что хотите очистить историю расчетов?',
            confirmClearProgress: 'Вы уверены, что хотите очистить весь прогресс? Это действие нельзя отменить! Все ваши данные будут удалены.',
            alertCleared: 'Все данные успешно очищены!',

            perSecond: '/сек',

            unitMillennia: 'тысячелетий',
            unitCenturies: 'веков',
            unitYears: 'лет',
            unitMonths: 'месяцев',
            unitWeeks: 'недель',
            unitDays: 'дней',
            unitHours: 'часов',
            unitMinutes: 'минут',
            unitSeconds: 'секунд',
            unitMilliseconds: 'миллисекунд',

            shortMillennia: 'тыс',
            shortCenturies: 'в',
            shortYears: 'г',
            shortMonths: 'мес',
            shortWeeks: 'нед',
            shortDays: 'д',
            shortHours: 'ч',
            shortMinutes: 'мин',
            shortSeconds: 'сек',
            shortMilliseconds: 'мс'
        }
    };

    /* ---------------------------- Constants ---------------------------- */

    const TIME_CONSTANTS = {
        secondsPerMinute: 60,
        minutesPerHour: 60,
        hoursPerDay: 24,
        daysPerWeek: 7,
        daysPerMonth: 30.436875,
        daysPerYear: 365.2425,
        yearsPerCentury: 100,
        yearsPerMillennium: 1000
    };

    const DEATH_WARNING_THRESHOLD = {
        years: 122,
        days: 164
    };

    const DEATH_WARNING_THRESHOLD_DAYS = DEATH_WARNING_THRESHOLD.years * TIME_CONSTANTS.daysPerYear + DEATH_WARNING_THRESHOLD.days;

    const MAX_HISTORY_ITEMS = 15;
    const MAX_HISTORY_STORAGE = 50;

    /* ----------------------------- Storage ----------------------------- */

    function readStorage(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (e) {
            console.warn('Cannot read storage key:', key, e);
            return fallback;
        }
    }

    let calculationHistory = readStorage('brainrot-history', []);
    if (!Array.isArray(calculationHistory)) calculationHistory = [];

    /* --------------------------- Translations --------------------------- */

    function translate(key, lang) {
        const currentLang = lang || userData.language;
        const dictionary = translations[currentLang] || translations[DEFAULT_LANGUAGE];
        if (Object.prototype.hasOwnProperty.call(dictionary, key)) return dictionary[key];
        return translations[DEFAULT_LANGUAGE][key] || key;
    }

    function applyTranslations(lang) {
        const currentLang = translations[lang] ? lang : DEFAULT_LANGUAGE;
        document.documentElement.lang = currentLang;

        document.querySelectorAll('[data-i18n]').forEach(function (element) {
            const value = translate(element.getAttribute('data-i18n'), currentLang);
            if (element.tagName === 'INPUT') {
                element.placeholder = value;
            } else {
                element.textContent = value;
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach(function (element) {
            element.innerHTML = translate(element.getAttribute('data-i18n-html'), currentLang);
        });

        updateDynamicTexts();
        updateHistoryDisplay();
    }

    function updateLanguageButtons() {
        languageBtns.forEach(function (btn) {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === userData.language) {
                btn.classList.add('active');
            }
        });
    }

    function changeLanguage(lang) {
        if (!translations[lang]) return;
        userData.language = lang;
        updateLanguageButtons();
        applyTranslations(lang);
        saveUserData();
    }

    function updateDynamicTexts() {
        costSuffixValue.textContent = selectedCostSuffix === '' ? translate('noSuffix') : selectedCostSuffix;
        incomeSuffixValue.textContent = selectedIncomeSuffix === '' ? translate('noSuffix') : selectedIncomeSuffix;

        if (!hasResult) {
            resultDiv.textContent = translate('enterValues');
            resultDiv.style.color = 'var(--primary-color)';
            return;
        }

        if (lastResultSeconds !== null) {
            const formatted = formatExtendedTime(lastResultSeconds);
            currentResult = formatted.formatted;
            resultDiv.innerHTML = formatted.formatted;

            if (lastResultSeconds > 1 && formatted.timeUnits) {
                timeUnitsDiv.innerHTML = formatted.timeUnits;
                timeUnitsDiv.style.display = 'flex';
            } else {
                timeUnitsDiv.style.display = 'none';
            }

            if (formatted.showDeathWarning) {
                deathWarningDiv.textContent = translate('deathWarning');
                deathWarningDiv.style.display = 'block';
                deathWarningVisible = true;
            } else {
                deathWarningDiv.style.display = 'none';
                deathWarningVisible = false;
            }
        }
    }

    /* ----------------------------- Profile ----------------------------- */

    function loadUserData() {
        const savedUserData = readStorage('brainrot-user-data', null);
        if (!savedUserData || typeof savedUserData !== 'object') return;

        userData = Object.assign({}, userData, savedUserData);
        if (!translations[userData.language]) userData.language = DEFAULT_LANGUAGE;

        if (userData.username) usernameInput.value = userData.username;
        if (userData.aka) akaInput.value = userData.aka;

        if (userData.gender) {
            genderBtns.forEach(function (btn) {
                btn.classList.remove('active');
                if (btn.getAttribute('data-gender') === userData.gender) {
                    btn.classList.add('active');
                }
            });
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
        setTimeout(function () { profileSaved.classList.remove('show'); }, 2000);
    }

    function validateUsername(username) {
        if (username.length < 3 || username.length > 16) return false;
        return /^[a-zA-Z0-9_]+$/.test(username);
    }

    /* ----------------------------- History ----------------------------- */

    function saveHistory() {
        localStorage.setItem('brainrot-history', JSON.stringify(calculationHistory));
        updateHistoryDisplay();
    }

    function updateHistoryDisplay() {
        historyItems.innerHTML = '';

        if (calculationHistory.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'history-empty';
            empty.textContent = translate('historyEmpty');
            historyItems.appendChild(empty);
            return;
        }

        const locale = userData.language === 'ru' ? 'ru-RU' : 'en-GB';
        const recentHistory = calculationHistory.slice(-MAX_HISTORY_ITEMS).reverse();

        recentHistory.forEach(function (item, index) {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.dataset.index = calculationHistory.length - 1 - index;

            const date = new Date(item.timestamp);
            const dateStr = isNaN(date.getTime()) ? '' : date.toLocaleString(locale, {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });

            const params = item.params;
            const formattedResult = (typeof item.result.seconds === 'number')
                ? formatExtendedTime(item.result.seconds).formatted
                : item.result.formatted;

            historyItem.innerHTML =
                '<div class="history-item-date">' +
                    '<span>' + dateStr + '</span>' +
                    '<span>#' + (calculationHistory.length - index) + '</span>' +
                '</div>' +
                '<div class="history-item-result">' + formattedResult + '</div>' +
                '<div class="history-item-params">' +
                    '<div>' + translate('brainrotCost') + ': ' + params.cost + params.costSuffix + '</div>' +
                    '<div>' + translate('incomePerSecond') + ': ' + params.income + params.incomeSuffix + translate('perSecond') + '</div>' +
                    '<div>' + translate('rebirthBoost') + ': x' + params.rebirth + '</div>' +
                    '<div>' + translate('friendsBoost') + ': ' + Math.round((params.friends - 1) * 100) + '%</div>' +
                '</div>';

            historyItem.addEventListener('click', function () {
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
        selectedCostSuffixMultiplier = suffixToMultiplier(params.costSuffix);
        costSuffixValue.textContent = params.costSuffix === '' ? translate('noSuffix') : params.costSuffix;

        costSuffixItems.forEach(function (item) {
            item.classList.remove('selected');
            if (item.getAttribute('data-suffix') === params.costSuffix) item.classList.add('selected');
        });

        selectedIncomeSuffix = params.incomeSuffix;
        selectedIncomeSuffixMultiplier = suffixToMultiplier(params.incomeSuffix);
        incomeSuffixValue.textContent = params.incomeSuffix === '' ? translate('noSuffix') : params.incomeSuffix;

        incomeSuffixItems.forEach(function (item) {
            item.classList.remove('selected');
            if (item.getAttribute('data-suffix') === params.incomeSuffix) item.classList.add('selected');
        });

        selectedRebirthValue = params.rebirth;
        rebirthValue.textContent = 'x' + params.rebirth;

        rebirthItems.forEach(function (item) {
            item.classList.remove('selected');
            if (parseFloat(item.getAttribute('data-value')) === params.rebirth) item.classList.add('selected');
        });

        selectedFriendsValue = params.friends;
        friendsValue.textContent = Math.round((params.friends - 1) * 100) + '%';

        friendsItems.forEach(function (item) {
            item.classList.remove('selected');
            if (parseFloat(item.getAttribute('data-value')) === params.friends) item.classList.add('selected');
        });

        if (typeof historyItem.result.seconds === 'number') {
            const formatted = formatExtendedTime(historyItem.result.seconds);
            resultDiv.innerHTML = formatted.formatted;
            currentResult = formatted.formatted;
            lastResultSeconds = historyItem.result.seconds;

            if (historyItem.result.seconds > 1 && formatted.timeUnits) {
                timeUnitsDiv.innerHTML = formatted.timeUnits;
                timeUnitsDiv.style.display = 'flex';
            } else {
                timeUnitsDiv.style.display = 'none';
            }

            deathWarningVisible = formatted.showDeathWarning;
            deathWarningDiv.textContent = translate('deathWarning');
            deathWarningDiv.style.display = formatted.showDeathWarning ? 'block' : 'none';
        } else {
            resultDiv.innerHTML = historyItem.result.formatted;
            currentResult = historyItem.result.formatted;
            lastResultSeconds = null;

            if (historyItem.result.timeUnits) {
                timeUnitsDiv.innerHTML = historyItem.result.timeUnits;
                timeUnitsDiv.style.display = 'flex';
            } else {
                timeUnitsDiv.style.display = 'none';
            }

            deathWarningVisible = !!historyItem.result.showDeathWarning;
            deathWarningDiv.textContent = translate('deathWarning');
            deathWarningDiv.style.display = deathWarningVisible ? 'block' : 'none';
        }

        hasResult = true;
        copyResultBtn.style.display = 'flex';
        resultDiv.style.transform = 'scale(1.05)';
        setTimeout(function () { resultDiv.style.transform = 'scale(1)'; }, 300);
    }

    function addToHistory(params, result) {
        calculationHistory.push({
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
                totalDays: result.totalDays,
                seconds: result.seconds
            }
        });

        if (calculationHistory.length > MAX_HISTORY_STORAGE) {
            calculationHistory = calculationHistory.slice(-MAX_HISTORY_STORAGE);
        }
        saveHistory();
    }

    function clearHistory() {
        if (confirm(translate('confirmClearHistory'))) {
            calculationHistory = [];
            saveHistory();
        }
    }

    function clearProgress() {
        if (!confirm(translate('confirmClearProgress'))) return;

        userData = {
            username: '',
            aka: '',
            gender: null,
            language: DEFAULT_LANGUAGE
        };

        usernameInput.value = '';
        akaInput.value = '';
        usernameInput.style.borderColor = '';
        akaInput.style.borderColor = '';

        genderBtns.forEach(function (btn) { btn.classList.remove('active'); });

        updateLanguageButtons();
        applyTranslations(DEFAULT_LANGUAGE);
        saveUserData();

        alert(translate('alertCleared'));
    }

    /* ------------------------------ Copy ------------------------------ */

    function buildCopyText(time) {
        if (userData.language === 'ru') {
            return userData.gender === 'male'
                ? 'Я рассчитал стоимость моего Brainrot и выяснил, что он окупится за ' + time + '. Я сделал это на сайте "Calculation Brainrot" zombaklizard.github.io/Calculation-Brainrot'
                : 'Я рассчитала стоимость моего Brainrot и выяснила, что он окупится за ' + time + '. Я сделала это на сайте "Calculation Brainrot" zombaklizard.github.io/Calculation-Brainrot';
        }

        return 'I calculated the cost of my Brainrot and found out that it will pay off in ' + time + '. I did it on the "Calculation Brainrot" website zombaklizard.github.io/Calculation-Brainrot';
    }

    function copyResult() {
        if (!userData.gender) {
            copyResultBtn.classList.add('error');
            copyError.textContent = translate('errorGender');
            setTimeout(function () {
                copyResultBtn.classList.remove('error');
                copyError.textContent = '';
            }, 2000);
            return;
        }

        const textToCopy = buildCopyText(currentResult);

        navigator.clipboard.writeText(textToCopy).then(function () {
            copyResultBtn.classList.add('success');
            copyResultIcon.className = 'fas fa-check';
            copyResultLabel.textContent = translate('copied');

            setTimeout(function () {
                copyResultBtn.classList.remove('success');
                copyResultIcon.className = 'fas fa-copy';
                copyResultLabel.textContent = translate('copyResult');
            }, 2000);
        }).catch(function (err) {
            console.error('Copy error:', err);
            copyError.textContent = translate('errorCopy');
        });
    }

    /* --------------------------- Input handling --------------------------- */

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
        errorElement.textContent = '';

        if (!value) {
            errorElement.textContent = translate('errorEmpty');
            return { isValid: false, value: 0 };
        }

        if (!/^[0-9]+(?:\.[0-9]+)?$/.test(value)) {
            errorElement.textContent = translate('errorFormat');
            return { isValid: false, value: 0 };
        }

        const numericValue = parseFloat(value);
        if (isNaN(numericValue)) {
            errorElement.textContent = translate('errorNumber');
            return { isValid: false, value: 0 };
        }

        if (numericValue < 0) {
            errorElement.textContent = translate('errorNegative');
            return { isValid: false, value: 0 };
        }

        return { isValid: true, value: numericValue };
    }

    function suffixToMultiplier(suffix) {
        switch (suffix) {
            case 'k': return 1000;
            case 'm': return 1000000;
            case 'b': return 1000000000;
            case 'qa': return 1000000000000;
            default: return 1;
        }
    }

    /* ------------------------------ Format ------------------------------ */

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

        const units = [
            { value: millennia, shortKey: 'shortMillennia', fullKey: 'unitMillennia' },
            { value: centuries, shortKey: 'shortCenturies', fullKey: 'unitCenturies' },
            { value: years, shortKey: 'shortYears', fullKey: 'unitYears' },
            { value: months, shortKey: 'shortMonths', fullKey: 'unitMonths' },
            { value: weeks, shortKey: 'shortWeeks', fullKey: 'unitWeeks' },
            { value: days, shortKey: 'shortDays', fullKey: 'unitDays' },
            { value: hours, shortKey: 'shortHours', fullKey: 'unitHours' },
            { value: minutes, shortKey: 'shortMinutes', fullKey: 'unitMinutes' },
            { value: secs, shortKey: 'shortSeconds', fullKey: 'unitSeconds' }
        ];

        let formattedResult = '';
        let firstNonZeroIndex = -1;

        for (let i = 0; i < units.length; i++) {
            if (units[i].value > 0) {
                firstNonZeroIndex = i;
                break;
            }
        }

        if (firstNonZeroIndex === -1) {
            formattedResult = ms + ' ' + translate('shortMilliseconds');
        } else {
            formattedResult = units[firstNonZeroIndex].value + ' ' + translate(units[firstNonZeroIndex].shortKey);

            for (let i = firstNonZeroIndex + 1; i < units.length; i++) {
                if (units[i].value > 0) {
                    formattedResult += ' ' + units[i].value + ' ' + translate(units[i].shortKey);
                    break;
                }
            }
        }

        let timeUnitsHTML = '';
        units.forEach(function (unit) {
            if (unit.value > 0) {
                timeUnitsHTML +=
                    '<div class="time-unit">' +
                        '<span class="value">' + unit.value + '</span> ' +
                        '<span class="label">' + translate(unit.fullKey) + '</span>' +
                    '</div>';
            }
        });

        if (seconds < 1 && ms > 0) {
            timeUnitsHTML +=
                '<div class="time-unit">' +
                    '<span class="value">' + ms + '</span> ' +
                    '<span class="label">' + translate('unitMilliseconds') + '</span>' +
                '</div>';
        }

        const totalDays = seconds / (TIME_CONSTANTS.secondsPerMinute * TIME_CONSTANTS.minutesPerHour * TIME_CONSTANTS.hoursPerDay);

        return {
            formatted: formattedResult,
            timeUnits: timeUnitsHTML,
            showDeathWarning: totalDays >= DEATH_WARNING_THRESHOLD_DAYS,
            totalDays: totalDays,
            seconds: seconds
        };
    }

    /* ---------------------------- Calculation ---------------------------- */

    function calculateBrainrot() {
        costError.textContent = '';
        incomeError.textContent = '';
        copyError.textContent = '';
        resultDiv.style.color = 'var(--primary-color)';
        deathWarningDiv.style.display = 'none';
        deathWarningVisible = false;
        timeUnitsDiv.style.display = 'none';

        const costValidation = validateFullInput(costInput, costError);
        const incomeValidation = validateFullInput(incomeInput, incomeError);

        if (!costValidation.isValid || !incomeValidation.isValid) {
            resultDiv.textContent = translate('errorFixFields');
            resultDiv.style.color = 'var(--error-color)';
            copyResultBtn.style.display = 'none';
            hasResult = false;
            return;
        }

        const a = costValidation.value * selectedCostSuffixMultiplier;
        const b = incomeValidation.value * selectedIncomeSuffixMultiplier;
        const c = selectedRebirthValue;
        const d = selectedFriendsValue;

        if (a < 0 || b < 0 || c < 0 || d < 0) {
            resultDiv.textContent = translate('errorNegative');
            resultDiv.style.color = 'var(--error-color)';
            copyResultBtn.style.display = 'none';
            hasResult = false;
            return;
        }

        if (b === 0 || c === 0) {
            resultDiv.textContent = translate('errorZero');
            resultDiv.style.color = 'var(--error-color)';
            copyResultBtn.style.display = 'none';
            hasResult = false;
            return;
        }

        const denominator = b * c * d;

        if (denominator === 0) {
            resultDiv.textContent = translate('errorDenominator');
            resultDiv.style.color = 'var(--error-color)';
            copyResultBtn.style.display = 'none';
            hasResult = false;
            return;
        }

        const result = a / denominator;

        if (!isFinite(result) || isNaN(result)) {
            resultDiv.textContent = translate('errorTooBig');
            resultDiv.style.color = 'var(--error-color)';
            copyResultBtn.style.display = 'none';
            hasResult = false;
            return;
        }

        const formattedResult = formatExtendedTime(result);
        resultDiv.style.color = 'var(--primary-color)';
        resultDiv.style.transform = 'scale(1.05)';
        resultDiv.innerHTML = formattedResult.formatted;
        currentResult = formattedResult.formatted;
        lastResultSeconds = result;
        hasResult = true;

        if (result > 1 && formattedResult.timeUnits) {
            timeUnitsDiv.innerHTML = formattedResult.timeUnits;
            timeUnitsDiv.style.display = 'flex';
        }

        if (formattedResult.showDeathWarning) {
            deathWarningDiv.textContent = translate('deathWarning');
            deathWarningDiv.style.display = 'block';
            deathWarningVisible = true;
        }

        copyResultBtn.style.display = 'flex';

        addToHistory({
            cost: costValidation.value,
            costSuffix: selectedCostSuffix,
            income: incomeValidation.value,
            incomeSuffix: selectedIncomeSuffix,
            rebirth: selectedRebirthValue,
            friends: selectedFriendsValue
        }, formattedResult);

        setTimeout(function () { resultDiv.style.transform = 'scale(1)'; }, 300);
    }

    /* ------------------------------ Panels ------------------------------ */

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
        document.querySelectorAll('.vertical-menu, .history-panel, .profile-panel, .mobile-menu-overlay, .mobile-menu').forEach(function (panel) {
            if (!panel.classList.contains(exceptClass)) panel.classList.remove('active');
        });
    }

    function closeAllPanels() {
        document.querySelectorAll('.vertical-menu, .history-panel, .profile-panel, .mobile-menu-overlay, .mobile-menu').forEach(function (panel) {
            panel.classList.remove('active');
        });
        activePanel = null;
        currentMobileMenuType = null;
    }

    /* --------------------------- Mobile menu --------------------------- */

    function openMobileMenu(menuType, title, items) {
        currentMobileMenuType = menuType;
        mobileMenuTitle.textContent = title;
        mobileMenuItems.innerHTML = '';

        items.forEach(function (item) {
            const menuItem = document.createElement('div');
            menuItem.className = 'mobile-menu-item';
            menuItem.innerHTML = item.innerHTML;

            if (menuType === 'cost-suffix' || menuType === 'income-suffix') {
                const suffix = item.getAttribute('data-suffix');
                const isSelected = (menuType === 'cost-suffix' && suffix === selectedCostSuffix) ||
                                   (menuType === 'income-suffix' && suffix === selectedIncomeSuffix);

                menuItem.dataset.suffix = suffix;
                menuItem.dataset.multiplier = item.getAttribute('data-multiplier');
                if (isSelected) menuItem.classList.add('selected');

                menuItem.addEventListener('click', function () {
                    const chosenSuffix = this.dataset.suffix;
                    const multiplier = parseFloat(this.dataset.multiplier);

                    if (menuType === 'cost-suffix') {
                        selectedCostSuffix = chosenSuffix;
                        selectedCostSuffixMultiplier = multiplier;
                        costSuffixValue.textContent = chosenSuffix === '' ? translate('noSuffix') : chosenSuffix;
                        costSuffixItems.forEach(function (i) {
                            i.classList.remove('selected');
                            if (i.getAttribute('data-suffix') === chosenSuffix) i.classList.add('selected');
                        });
                    } else {
                        selectedIncomeSuffix = chosenSuffix;
                        selectedIncomeSuffixMultiplier = multiplier;
                        incomeSuffixValue.textContent = chosenSuffix === '' ? translate('noSuffix') : chosenSuffix;
                        incomeSuffixItems.forEach(function (i) {
                            i.classList.remove('selected');
                            if (i.getAttribute('data-suffix') === chosenSuffix) i.classList.add('selected');
                        });
                    }

                    closeAllPanels();
                });
            } else if (menuType === 'friends') {
                const value = parseFloat(item.getAttribute('data-value'));
                menuItem.dataset.value = value;
                if (value === selectedFriendsValue) menuItem.classList.add('selected');

                menuItem.addEventListener('click', function () {
                    const chosenValue = parseFloat(this.dataset.value);
                    selectedFriendsValue = chosenValue;
                    friendsValue.textContent = Math.round((chosenValue - 1) * 100) + '%';

                    friendsItems.forEach(function (i) {
                        i.classList.remove('selected');
                        if (parseFloat(i.getAttribute('data-value')) === chosenValue) i.classList.add('selected');
                    });

                    closeAllPanels();
                });
            } else if (menuType === 'rebirth') {
                const value = parseFloat(item.getAttribute('data-value'));
                menuItem.dataset.value = value;
                if (value === selectedRebirthValue) menuItem.classList.add('selected');

                menuItem.addEventListener('click', function () {
                    const chosenValue = parseFloat(this.dataset.value);
                    selectedRebirthValue = chosenValue;
                    rebirthValue.textContent = 'x' + chosenValue;

                    rebirthItems.forEach(function (i) {
                        i.classList.remove('selected');
                        if (parseFloat(i.getAttribute('data-value')) === chosenValue) i.classList.add('selected');
                    });

                    closeAllPanels();
                });
            }

            mobileMenuItems.appendChild(menuItem);
        });

        mobileMenuOverlay.classList.add('active');
        mobileMenu.classList.add('active');
    }

    /* --------------------------- Event listeners --------------------------- */

    function initEventListeners() {
        costSuffixBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (window.innerWidth <= 1024) {
                openMobileMenu('cost-suffix', translate('chooseCostSuffix'), Array.from(costSuffixItems));
            } else {
                openMenu(costSuffixMenu);
            }
        });

        incomeSuffixBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (window.innerWidth <= 1024) {
                openMobileMenu('income-suffix', translate('chooseIncomeSuffix'), Array.from(incomeSuffixItems));
            } else {
                openMenu(incomeSuffixMenu);
            }
        });

        friendsBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (window.innerWidth <= 1024) {
                openMobileMenu('friends', translate('choosePercentage'), Array.from(friendsItems));
            } else {
                openMenu(friendsMenu);
            }
        });

        rebirthBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (window.innerWidth <= 1024) {
                openMobileMenu('rebirth', translate('chooseMultiplier'), Array.from(rebirthItems));
            } else {
                openMenu(rebirthMenu);
            }
        });

        costSuffixItems.forEach(function (item) {
            item.addEventListener('click', function () {
                const suffix = this.getAttribute('data-suffix');
                const multiplier = parseFloat(this.getAttribute('data-multiplier'));

                selectedCostSuffix = suffix;
                selectedCostSuffixMultiplier = multiplier;
                costSuffixValue.textContent = suffix === '' ? translate('noSuffix') : suffix;

                costSuffixItems.forEach(function (i) { i.classList.remove('selected'); });
                this.classList.add('selected');
                closeAllPanels();
            });
        });

        incomeSuffixItems.forEach(function (item) {
            item.addEventListener('click', function () {
                const suffix = this.getAttribute('data-suffix');
                const multiplier = parseFloat(this.getAttribute('data-multiplier'));

                selectedIncomeSuffix = suffix;
                selectedIncomeSuffixMultiplier = multiplier;
                incomeSuffixValue.textContent = suffix === '' ? translate('noSuffix') : suffix;

                incomeSuffixItems.forEach(function (i) { i.classList.remove('selected'); });
                this.classList.add('selected');
                closeAllPanels();
            });
        });

        friendsItems.forEach(function (item) {
            item.addEventListener('click', function () {
                const value = parseFloat(this.getAttribute('data-value'));
                selectedFriendsValue = value;
                friendsValue.textContent = Math.round((value - 1) * 100) + '%';

                friendsItems.forEach(function (i) { i.classList.remove('selected'); });
                this.classList.add('selected');
                closeAllPanels();
            });
        });

        rebirthItems.forEach(function (item) {
            item.addEventListener('click', function () {
                const value = parseFloat(this.getAttribute('data-value'));
                selectedRebirthValue = value;
                rebirthValue.textContent = 'x' + value;

                rebirthItems.forEach(function (i) { i.classList.remove('selected'); });
                this.classList.add('selected');
                closeAllPanels();
            });
        });

        historyBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleHistoryPanel();
        });

        profileBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleProfilePanel();
        });

        clearHistoryBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            clearHistory();
        });

        clearProgressBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            clearProgress();
        });

        copyResultBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            copyResult();
        });

        languageBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                changeLanguage(this.getAttribute('data-lang'));
            });
        });

        genderBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                userData.gender = this.getAttribute('data-gender');
                genderBtns.forEach(function (b) { b.classList.remove('active'); });
                this.classList.add('active');
                saveUserData();
            });
        });

        usernameInput.addEventListener('input', function () {
            const newValue = this.value.replace(/[^a-zA-Z0-9_]/g, '').substring(0, 16);
            if (newValue !== this.value) this.value = newValue;
            userData.username = newValue;
            saveUserData();
        });

        akaInput.addEventListener('input', function () {
            const newValue = this.value.replace(/[^a-zA-Z0-9_]/g, '').substring(0, 16);
            if (newValue !== this.value) this.value = newValue;
            userData.aka = newValue;
            saveUserData();
        });

        usernameInput.addEventListener('blur', function () {
            const username = this.value.trim();
            this.style.borderColor = (username && !validateUsername(username)) ? 'var(--error-color)' : '';
        });

        akaInput.addEventListener('blur', function () {
            const aka = this.value.trim();
            this.style.borderColor = (aka && userData.username === aka) ? 'var(--error-color)' : '';
        });

        document.addEventListener('click', function (e) {
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

        mobileMenuOverlay.addEventListener('click', closeAllPanels);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeAllPanels();
        });

        calculateBtn.addEventListener('click', calculateBrainrot);

        [costInput, incomeInput].forEach(function (input) {
            input.addEventListener('keydown', function (e) {
                validateNumberInput(this, e);
            });

            input.addEventListener('paste', function (e) {
                e.preventDefault();
                const clipboard = (e.clipboardData || window.clipboardData);
                const cleanedText = clipboard.getData('text').replace(/[^0-9.]/g, '');
                const start = this.selectionStart;
                const end = this.selectionEnd;
                this.value = this.value.substring(0, start) + cleanedText + this.value.substring(end);
                this.setSelectionRange(start + cleanedText.length, start + cleanedText.length);

                validateFullInput(this, input === costInput ? costError : incomeError);
            });

            input.addEventListener('blur', function () {
                validateFullInput(this, input === costInput ? costError : incomeError);
            });

            input.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') calculateBrainrot();
            });
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 1024 && mobileMenu.classList.contains('active')) {
                closeAllPanels();
            }
        });
    }

    /* ------------------------------- Init ------------------------------- */

    function init() {
        costSuffixItems.forEach(function (item) {
            if (item.getAttribute('data-suffix') === selectedCostSuffix) item.classList.add('selected');
        });

        incomeSuffixItems.forEach(function (item) {
            if (item.getAttribute('data-suffix') === selectedIncomeSuffix) item.classList.add('selected');
        });

        friendsItems.forEach(function (item) {
            if (parseFloat(item.getAttribute('data-value')) === selectedFriendsValue) item.classList.add('selected');
        });

        rebirthItems.forEach(function (item) {
            if (parseFloat(item.getAttribute('data-value')) === selectedRebirthValue) item.classList.add('selected');
        });

        loadUserData();
        updateLanguageButtons();
        applyTranslations(userData.language);
        initEventListeners();
        updateHistoryDisplay();
    }

    init();
});
