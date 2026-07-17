/*
==========================================================
Baby Companion
Siehe APP_VERSION weiter unten für die aktuelle Version.
Änderungen: siehe CHANGELOG.md

Vanilla JavaScript
Offline First
Local Storage
PWA Ready

==========================================================
*/

"use strict";

/* ==========================================================
   LANGUAGE / I18N
========================================================== */

const LANG_STORAGE_KEY = "baby_lang";

const translations = {

    de: {

        tagline: "Premium Baby Tracker",

        chooseLanguageLabel: "Sprache wählen",
        licenseIntro: "Vielen Dank für deinen Kauf.<br><br>Bitte gib deinen Aktivierungscode ein.",
        licensePlaceholder: "Aktivierungscode",
        licenseActivateButton: "Aktivieren",
        licenseErrorText: "Ungültiger Aktivierungscode.",

        onboardingTitle: "Willkommen 👋",
        onboardingSubtitle: "Erstelle zuerst das Profil deines Babys.",
        labelName: "Name",
        babyNamePlaceholder: "z. B. Emma",
        labelBirthDate: "Geburtsdatum",
        createBabyButton: "Baby anlegen",

        quickSleep: "Schlaf",
        quickBreastfeeding: "Stillen",
        quickBottle: "Flasche",
        quickDiaper: "Windel",

        statSleepToday: "Schlaf heute",
        statBreastfeedingToday: "Stillen heute",
        statBottleToday: "Flasche heute",
        statDiaperToday: "Windeln heute",
        statLastWeight: "Letztes Gewicht",
        statLastHeight: "Letzte Größe",

        filterAll: "Alle",
        filterSleep: "😴 Schlaf",
        filterBreastfeeding: "🤱 Stillen",
        filterBottle: "🍼 Flasche",
        filterDiaper: "💩 Windel",
        filterWeight: "⚖️ Gewicht",
        filterHeight: "📏 Größe",

        timelineSubtitle: "Alle Einträge",

        homeRecentTitle: "Letzte 24 Stunden",
        homeRecentSubtitle: "Kürzliche Aktivität",
        homeRecentEmptyState: "Noch keine Einträge in den letzten 24 Stunden.",

        timelineTitleAll: "Verlauf",
        timelineTitleSleep: "Verlauf · Schlaf",
        timelineTitleBreastfeeding: "Verlauf · Stillen",
        timelineTitleBottle: "Verlauf · Flasche",
        timelineTitleDiaper: "Verlauf · Windeln",
        timelineTitleWeight: "Verlauf · Gewicht",
        timelineTitleHeight: "Verlauf · Größe",
        emptyStateNoEntries: "Keine Einträge gefunden.",

        searchPlaceholder: "Einträge durchsuchen...",
        dateRangeToday: "Heute",
        dateRangeWeek: "7 Tage",
        dateRangeMonth: "30 Tage",
        dateRangeCustom: "Zeitraum",
        dateFromLabel: "Von",
        dateToLabel: "Bis",
        applyRangeButton: "Anwenden",

        statsPageTitle: "Statistik",
        statsPageSubtitle: "Kleine Übersicht",
        statAvgSleepPerDay: "Ø Schlaf / Tag",
        statAvgBottlePerDay: "Ø Flasche / Tag",
        statAverage: "Durchschnitt",
        statDailyAverage: "Tagesdurchschnitt",
        statLast7Days: "Letzte 7 Tage",
        statLast30Days: "Letzte 30 Tage",
        statLongestSleep: "Längster Schlaf",
        statShortestSleep: "Kürzester Schlaf",
        statWeekOverview: "Wochenübersicht",
        statMonthOverview: "Monatsübersicht",
        statAvgDuration: "Ø Dauer",
        statSessionsCount: "Anzahl",
        statTotalMinutes: "Minuten gesamt",
        statDiaperCount: "Anzahl (30 Tage)",
        statDiaperAvgPerDay: "Ø pro Tag",
        statWeightChange: "Veränderung",
        statGrowthSinceFirst: "Wachstum",
        statNoDataYet: "Noch keine Daten vorhanden.",

        settingsTitle: "Einstellungen",
        settingsSubtitle: "App & Daten",
        settingsLanguageTitle: "Sprache",
        settingsLanguageText: "Wähle die Sprache der App.",
        settingsAppearanceTitle: "Darstellung",
        settingsAppearanceText: "Zwischen hellem und dunklem Design wechseln.",
        toggleThemeButton: "🌙 Dark Mode umschalten",
        settingsBackupTitle: "Datensicherung",
        settingsBackupText: "Alle Einträge lokal sichern oder wiederherstellen.",
        exportDataButton: "💾 Daten exportieren",
        exportCsvButton: "📊 CSV exportieren",
        importDataButton: "📂 Daten importieren",
        settingsResetTitle: "Zurücksetzen",
        settingsResetText: "Alle gespeicherten Daten werden dauerhaft gelöscht.",
        resetDataButton: "🗑️ Alle Daten löschen",
        settingsAboutTitle: "Über",
        aboutTagline: "Offline Baby Tracker",

        fabAriaLabel: "Neuen Eintrag hinzufügen",

        navHomeLabel: "Home",
        navStatsLabel: "Statistik",
        navTimelineLabel: "Verlauf",
        navSettingsLabel: "Einstellungen",

        modalNewEntryTitle: "Neuer Eintrag",
        closeAriaLabel: "Schließen",
        labelCategory: "Kategorie",
        catOptSleep: "😴 Schlaf",
        catOptBreastfeeding: "🤱 Stillen",
        catOptBottle: "🍼 Flasche",
        catOptDiaper: "💩 Windel",
        catOptWeight: "⚖️ Gewicht",
        catOptHeight: "📏 Größe",
        catOptNote: "📝 Notiz",
        labelNote: "Notiz",
        notePlaceholder: "Optionale Notiz...",
        saveButton: "Speichern",
        cancelButton: "Abbrechen",

        labelHours: "Stunden",
        labelMinutes: "Minuten",
        labelSide: "Seite",
        sideLeft: "Links",
        sideRight: "Rechts",
        sideBoth: "Beide",
        labelAmountMl: "Menge (ml)",
        labelDiaper: "Windel",
        diaperPee: "Pipi",
        diaperPoo: "Stuhl",
        diaperBoth: "Pipi + Stuhl",
        labelWeightKg: "Gewicht (kg)",
        labelHeightCm: "Größe (cm)",
        noteInfoText: "Für eine Notiz sind keine weiteren Angaben erforderlich.",

        categorySleep: "Schlaf",
        categoryBreastfeeding: "Stillen",
        categoryBottle: "Flasche",
        categoryDiaper: "Windel",
        categoryWeight: "Gewicht",
        categoryHeight: "Größe",
        categoryTemperature: "Temperatur",
        categoryMedicine: "Medikament",
        categoryNote: "Notiz",

        toastFillAllFields: "Bitte alle Felder ausfüllen.",
        toastEntryUpdated: "Eintrag aktualisiert.",
        toastEntrySaved: "Eintrag gespeichert.",
        toastBackupExported: "Backup exportiert",
        toastNoDataToExport: "Keine Daten zum Exportieren.",
        toastCsvExported: "CSV exportiert.",
        toastBackupImported: "Backup importiert",
        toastAllDataDeleted: "Alle Daten wurden gelöscht.",
        toastEntryDeleted: "Eintrag gelöscht.",

        confirmDeleteAllData: "Alle Daten wirklich löschen?",
        confirmDeleteEntry: "Eintrag wirklich löschen?",
        alertInvalidBackupFile: "Ungültige Backup-Datei.",

        timeYesterday: "gestern",

        ageUnderOneMonth: "unter 1 Monat",
        ageOneMonth: "1 Monat",
        ageMonths: "{n} Monate",

        greetingNight: "🌙 Gute Nacht",
        greetingMorning: "☀️ Guten Morgen",
        greetingDay: "🌤️ Guten Tag",
        greetingEvening: "🌙 Guten Abend",

        insightMilestoneWeek1: "Eine Woche gemeinsam ❤️",
        insightMilestoneWeek2: "Heute ist dein Baby genau 2 Wochen alt.",
        insightMilestoneDay30: "Heute ist Tag 30 gemeinsam.",
        insightMilestoneDay100: "Happy 100. Tag! 🎉",
        insightMilestoneMonth1: "Ein ganzer Monat gemeinsam ❤️",
        insightMilestoneMonth6: "Happy 6 Monate! 🎂",
        insightMilestoneYear1: "Happy 1. Geburtstag! 🎈",
        insightMilestoneMonths: "Happy {n} Monate!",

        insightTrendSleepRegular: "Der Schlaf ist diese Woche regelmäßiger geworden.",
        insightTrendFeedingPredictable: "Die Fütterungen werden diese Woche vorhersehbarer.",
        insightTrendConsistentTracking: "Du hast diese Woche sehr regelmäßig dokumentiert.",

        insightStreakMilestone: "{n}-Tage-Tracking-Serie! 🔥",
        insightStreakOneMore: "Noch ein Tag bis zur nächsten Serie.",
        insightStreakBuilding: "Du trackst seit {n} Tagen in Folge – tolle Routine!",

        insightSleepNewRecord: "Neuer Rekord: {duration} am Stück geschlafen.",
        insightSleepLongerThanAvg: "Gestern hat dein Baby {duration} länger geschlafen als üblich.",
        insightSleepLongestThisWeek: "Der längste Schlaf diese Woche war {duration}.",

        insightFeedingIntervalsShorter: "Die Abstände zwischen den Mahlzeiten wurden zuletzt kürzer.",
        insightFeedingEarlierFirst: "Die erste Mahlzeit heute war früher als gestern.",
        insightFeedingYesterdayCount: "Gestern gab es {n} Mahlzeiten.",

        insightDiaperStreak: "Du dokumentierst seit {n} Tagen in Folge Windelwechsel.",
        insightDiaperYesterdayCount: "Gestern hast du {n} Windelwechsel notiert.",

        insightGrowthNewMilestone: "Ein neuer Gewichts-Meilenstein wurde erreicht.",
        insightGrowthSteadyIncrease: "Das Gewicht steigt stetig.",
        insightGrowthUpToDate: "Die Wachstumsdaten sind schön aktuell.",
        insightGrowthHistoryBuilding: "Die Wachstumshistorie deines Babys wächst schön.",

        insightEncourage1: "Jeder Eintrag hilft, die Routine deines Babys besser zu verstehen.",
        insightEncourage2: "Kleine Gewohnheiten schaffen wertvolle Erinnerungen.",
        insightEncourage3: "Du machst das wunderbar.",
        insightEncourage4: "Heute zu dokumentieren hilft dir morgen.",
        insightEncourage5: "Du baust gerade eine wunderschöne Erinnerung an das erste Jahr auf.",
        insightEncourage6: "Jeder kleine Moment zählt.",

        csvDate: "Datum",
        csvTime: "Uhrzeit",
        csvCategory: "Kategorie",
        csvDetails: "Details",
        csvNote: "Notiz"

    },

    en: {

        tagline: "Premium Baby Tracker",

        chooseLanguageLabel: "Choose language",
        licenseIntro: "Thank you for your purchase.<br><br>Please enter your activation code.",
        licensePlaceholder: "Activation code",
        licenseActivateButton: "Activate",
        licenseErrorText: "Invalid activation code.",

        onboardingTitle: "Welcome 👋",
        onboardingSubtitle: "First, create your baby's profile.",
        labelName: "Name",
        babyNamePlaceholder: "e.g. Emma",
        labelBirthDate: "Date of birth",
        createBabyButton: "Create baby",

        quickSleep: "Sleep",
        quickBreastfeeding: "Breastfeeding",
        quickBottle: "Bottle",
        quickDiaper: "Diaper",

        statSleepToday: "Sleep today",
        statBreastfeedingToday: "Breastfeeding today",
        statBottleToday: "Bottle today",
        statDiaperToday: "Diapers today",
        statLastWeight: "Last weight",
        statLastHeight: "Last height",

        filterAll: "All",
        filterSleep: "😴 Sleep",
        filterBreastfeeding: "🤱 Breastfeeding",
        filterBottle: "🍼 Bottle",
        filterDiaper: "💩 Diaper",
        filterWeight: "⚖️ Weight",
        filterHeight: "📏 Height",

        timelineSubtitle: "All entries",

        homeRecentTitle: "Last 24 hours",
        homeRecentSubtitle: "Recent activity",
        homeRecentEmptyState: "No entries in the last 24 hours yet.",

        timelineTitleAll: "History",
        timelineTitleSleep: "History · Sleep",
        timelineTitleBreastfeeding: "History · Breastfeeding",
        timelineTitleBottle: "History · Bottle",
        timelineTitleDiaper: "History · Diapers",
        timelineTitleWeight: "History · Weight",
        timelineTitleHeight: "History · Height",
        emptyStateNoEntries: "No entries found.",

        searchPlaceholder: "Search entries...",
        dateRangeToday: "Today",
        dateRangeWeek: "7 days",
        dateRangeMonth: "30 days",
        dateRangeCustom: "Custom",
        dateFromLabel: "From",
        dateToLabel: "To",
        applyRangeButton: "Apply",

        statsPageTitle: "Statistics",
        statsPageSubtitle: "Quick overview",
        statAvgSleepPerDay: "Avg. sleep / day",
        statAvgBottlePerDay: "Avg. bottle / day",
        statAverage: "Average",
        statDailyAverage: "Daily average",
        statLast7Days: "Last 7 days",
        statLast30Days: "Last 30 days",
        statLongestSleep: "Longest sleep",
        statShortestSleep: "Shortest sleep",
        statWeekOverview: "Week overview",
        statMonthOverview: "Month overview",
        statAvgDuration: "Avg. duration",
        statSessionsCount: "Count",
        statTotalMinutes: "Total minutes",
        statDiaperCount: "Count (30 days)",
        statDiaperAvgPerDay: "Avg. per day",
        statWeightChange: "Change",
        statGrowthSinceFirst: "Growth",
        statNoDataYet: "No data yet.",

        settingsTitle: "Settings",
        settingsSubtitle: "App & data",
        settingsLanguageTitle: "Language",
        settingsLanguageText: "Choose the app language.",
        settingsAppearanceTitle: "Appearance",
        settingsAppearanceText: "Switch between light and dark design.",
        toggleThemeButton: "🌙 Toggle dark mode",
        settingsBackupTitle: "Backup",
        settingsBackupText: "Back up or restore all entries locally.",
        exportDataButton: "💾 Export data",
        exportCsvButton: "📊 Export CSV",
        importDataButton: "📂 Import data",
        settingsResetTitle: "Reset",
        settingsResetText: "All saved data will be permanently deleted.",
        resetDataButton: "🗑️ Delete all data",
        settingsAboutTitle: "About",
        aboutTagline: "Offline Baby Tracker",

        fabAriaLabel: "Add new entry",

        navHomeLabel: "Home",
        navStatsLabel: "Stats",
        navTimelineLabel: "History",
        navSettingsLabel: "Settings",

        modalNewEntryTitle: "New entry",
        closeAriaLabel: "Close",
        labelCategory: "Category",
        catOptSleep: "😴 Sleep",
        catOptBreastfeeding: "🤱 Breastfeeding",
        catOptBottle: "🍼 Bottle",
        catOptDiaper: "💩 Diaper",
        catOptWeight: "⚖️ Weight",
        catOptHeight: "📏 Height",
        catOptNote: "📝 Note",
        labelNote: "Note",
        notePlaceholder: "Optional note...",
        saveButton: "Save",
        cancelButton: "Cancel",

        labelHours: "Hours",
        labelMinutes: "Minutes",
        labelSide: "Side",
        sideLeft: "Left",
        sideRight: "Right",
        sideBoth: "Both",
        labelAmountMl: "Amount (ml)",
        labelDiaper: "Diaper",
        diaperPee: "Pee",
        diaperPoo: "Poop",
        diaperBoth: "Pee + poop",
        labelWeightKg: "Weight (kg)",
        labelHeightCm: "Height (cm)",
        noteInfoText: "No further details are needed for a note.",

        categorySleep: "Sleep",
        categoryBreastfeeding: "Breastfeeding",
        categoryBottle: "Bottle",
        categoryDiaper: "Diaper",
        categoryWeight: "Weight",
        categoryHeight: "Height",
        categoryTemperature: "Temperature",
        categoryMedicine: "Medicine",
        categoryNote: "Note",

        toastFillAllFields: "Please fill in all fields.",
        toastEntryUpdated: "Entry updated.",
        toastEntrySaved: "Entry saved.",
        toastBackupExported: "Backup exported",
        toastNoDataToExport: "No data to export.",
        toastCsvExported: "CSV exported.",
        toastBackupImported: "Backup imported",
        toastAllDataDeleted: "All data has been deleted.",
        toastEntryDeleted: "Entry deleted.",

        confirmDeleteAllData: "Really delete all data?",
        confirmDeleteEntry: "Really delete this entry?",
        alertInvalidBackupFile: "Invalid backup file.",

        timeYesterday: "yesterday",

        ageUnderOneMonth: "under 1 month",
        ageOneMonth: "1 month",
        ageMonths: "{n} months",

        greetingNight: "🌙 Good night",
        greetingMorning: "☀️ Good morning",
        greetingDay: "🌤️ Good afternoon",
        greetingEvening: "🌙 Good evening",

        insightMilestoneWeek1: "One week together already ❤️",
        insightMilestoneWeek2: "Today your baby is exactly 2 weeks old.",
        insightMilestoneDay30: "Today marks Day 30 together.",
        insightMilestoneDay100: "Happy 100th Day! 🎉",
        insightMilestoneMonth1: "One whole month together ❤️",
        insightMilestoneMonth6: "Happy 6 Months! 🎂",
        insightMilestoneYear1: "Happy 1st Birthday! 🎈",
        insightMilestoneMonths: "Happy {n} Months!",

        insightTrendSleepRegular: "Sleep became more regular this week.",
        insightTrendFeedingPredictable: "Feeding routines are becoming more predictable.",
        insightTrendConsistentTracking: "Daily tracking has been very consistent.",

        insightStreakMilestone: "{n}-day tracking streak! 🔥",
        insightStreakOneMore: "One more day to reach your next streak milestone.",
        insightStreakBuilding: "You've tracked your baby for {n} consecutive days.",

        insightSleepNewRecord: "New record: {duration} of sleep at once.",
        insightSleepLongerThanAvg: "Yesterday your baby slept {duration} longer than usual.",
        insightSleepLongestThisWeek: "This week's longest sleep was {duration}.",

        insightFeedingIntervalsShorter: "Feeding intervals became shorter over the last few days.",
        insightFeedingEarlierFirst: "Today's first feeding happened earlier than yesterday.",
        insightFeedingYesterdayCount: "Yesterday your baby had {n} feedings.",

        insightDiaperStreak: "You've tracked diaper changes for {n} consecutive days.",
        insightDiaperYesterdayCount: "Yesterday you logged {n} diaper changes.",

        insightGrowthNewMilestone: "A new weight milestone was recorded.",
        insightGrowthSteadyIncrease: "Weight has increased steadily.",
        insightGrowthUpToDate: "Growth entries are nicely up to date.",
        insightGrowthHistoryBuilding: "Your baby's growth history is building nicely.",

        insightEncourage1: "Every entry helps you understand your baby's routine.",
        insightEncourage2: "Small habits create valuable memories.",
        insightEncourage3: "You're doing a wonderful job.",
        insightEncourage4: "Keeping track today helps tomorrow.",
        insightEncourage5: "You're building a beautiful record of your baby's first year.",
        insightEncourage6: "Every little moment matters.",

        csvDate: "Date",
        csvTime: "Time",
        csvCategory: "Category",
        csvDetails: "Details",
        csvNote: "Note"

    }

};

function detectDefaultLang(){

    const browserLang = (navigator.language || "de").toLowerCase();

    return browserLang.startsWith("en") ? "en" : "de";

}

function getLang(){

    return localStorage.getItem(LANG_STORAGE_KEY) || detectDefaultLang();

}

function setLang(lang){

    if(lang !== "de" && lang !== "en"){

        return;

    }

    localStorage.setItem(LANG_STORAGE_KEY, lang);

    applyTranslations();

}

function t(key, vars){

    const lang = getLang();

    let text =
        (translations[lang] && translations[lang][key]) ??
        (translations.de[key] ?? key);

    if(vars){

        Object.keys(vars).forEach(varKey => {

            text = text.replace(`{${varKey}}`, vars[varKey]);

        });

    }

    return text;

}

function sideLabel(value){

    switch(value){

        case "left":
            return t("sideLeft");

        case "right":
            return t("sideRight");

        case "both":
            return t("sideBoth");

        default:
            return "-";

    }

}

function diaperLabel(value){

    switch(value){

        case "pee":
            return t("diaperPee");

        case "poo":
            return t("diaperPoo");

        case "both":
            return t("diaperBoth");

        default:
            return t("labelDiaper");

    }

}

function getLocale(){

    return getLang() === "en" ? "en-US" : "de-DE";

}

function updateLangSwitcherUI(){

    document
        .querySelectorAll(".langChip")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.lang === getLang()
            );

        });

}

function applyTranslations(){

    const lang = getLang();

    document.documentElement.lang = lang;

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            element.textContent = t(element.dataset.i18n);

        });

    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            element.placeholder = t(element.dataset.i18nPlaceholder);

        });

    document
        .querySelectorAll("[data-i18n-aria-label]")
        .forEach(element => {

            element.setAttribute(
                "aria-label",
                t(element.dataset.i18nAriaLabel)
            );

        });

    document
        .querySelectorAll("[data-i18n-html]")
        .forEach(element => {

            element.innerHTML = t(element.dataset.i18nHtml);

        });

    updateLangSwitcherUI();

    if(typeof renderDynamicFields === "function"){

        renderDynamicFields();

    }

    if(state && state.profile){

        updateDashboard();

    }

    const statisticsPageElement =
        document.getElementById("statisticsPage");

    if(statisticsPageElement && !statisticsPageElement.classList.contains("hidden")){

        updateStatisticsPage();

    }

}

function bindLangSwitcher(){

    document
        .querySelectorAll(".langChip")
        .forEach(button => {

            button.addEventListener("click", () => {

                setLang(button.dataset.lang);

            });

        });

}

/* ==========================================================
   APP VERSION
   Bei jedem Release erhöhen. Wird in den Einstellungen
   angezeigt. Der Cache-Name im Service Worker sollte bei
   funktionalen Änderungen unabhängig davon ebenfalls erhöht
   werden (siehe service-worker.js, CACHE_VERSION).
========================================================== */

const APP_VERSION = "1.3.1";

/* ==========================================================
   TIMING / MATH CONSTANTS
========================================================== */

const TOAST_DURATION_MS = 2500;

const RESET_RELOAD_DELAY_MS = 600;

const MS_PER_DAY = 24 * 60 * 60 * 1000;

const MINUTES_PER_HOUR = 60;

const SEARCH_DEBOUNCE_MS = 250;

const STATS_WEEK_DAYS = 7;

const STATS_MONTH_DAYS = 30;

const TIMELINE_CARD_STAGGER_MS = 30;

const TIMELINE_CARD_STAGGER_MAX_MS = 240;

/* ==========================================================
   STORAGE KEYS
========================================================== */

const STORAGE = {

    PROFILE: "baby_profile",

    ENTRIES: "baby_entries",

    LICENSE: "baby_license"

};

/* ==========================================================
   LICENSE
========================================================== */

const LICENSE_HASH = "QkMtOUs3UC0yMDI2";

function getLicenseCode(){

    return atob(LICENSE_HASH);

}

function isActivated(){

    return localStorage.getItem(STORAGE.LICENSE) === "activated";

}

function showLicense(){

    document
        .getElementById("licenseOverlay")
        .classList
        .remove("hidden");

    document.body.style.overflow = "hidden";

}

function hideLicense(){

    document
        .getElementById("licenseOverlay")
        .classList
        .add("hidden");

    document.body.style.overflow = "";

}

function activateLicense(){

    const input = document
        .getElementById("licenseInput");

    const error = document
        .getElementById("licenseError");

    if(
    input.value
        .trim()
        .toUpperCase() === getLicenseCode()
){

        localStorage.setItem(
            STORAGE.LICENSE,
            "activated"
        );

        hideLicense();

if(state.profile){

    openDashboard();

}else{

    showOnboarding();

}

return;

    }

    error.classList.remove("hidden");

}

/* ==========================================================
   APPLICATION STATE
========================================================== */

const state = {

    profile: null,

    entries: [],

    editingId: null

};

/* ==========================================================
   DOM ELEMENTS
========================================================== */

const splashScreen =
    document.getElementById("splashScreen");

const onboarding =
    document.getElementById("onboarding");

const dashboard =
    document.getElementById("dashboard");

const profileForm =
    document.getElementById("profileForm");

const babyName =
    document.getElementById("babyName");

const birthDate =
    document.getElementById("birthDate");

const welcomeTitle =
    document.getElementById("welcomeTitle");

const babyAge =
    document.getElementById("babyAge");

const timeline =
    document.getElementById("timeline");

const fabButton =
    document.getElementById("fabButton");

const entryModal =
    document.getElementById("entryModal");

const closeModalButton =
    document.getElementById("closeModal");

const cancelButton =
    document.getElementById("cancelButton");

const entryForm =
    document.getElementById("entryForm");

const entryType =
    document.getElementById("entryType");

const dynamicFields =
    document.getElementById("dynamicFields");

const entryNote =
    document.getElementById("entryNote");

const toast =
    document.getElementById("toast");

const timelineSearchInput =
    document.getElementById("timelineSearch");

const customDateRangeEl =
    document.getElementById("customDateRange");

const dateFromInput =
    document.getElementById("dateFrom");

const dateToInput =
    document.getElementById("dateTo");

const applyDateRangeButton =
    document.getElementById("applyDateRange");

/* ==========================================================
   APPLICATION START
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        if("serviceWorker" in navigator){

            navigator.serviceWorker.register("./service-worker.js");

        }

        init();

    }

);
/* ==========================================================
   APP INFO
========================================================== */

function updateAppVersionDisplay() {

    const versionElement =
        document.getElementById("appVersion");

    if (versionElement) {

        versionElement.textContent = `Version ${APP_VERSION}`;

    }

}

/* ==========================================================
   THEME
========================================================== */

function applyTheme(theme) {

    document.body.classList.toggle(

        "dark",

        theme === "dark"

    );

    localStorage.setItem(

        "theme",

        theme

    );

}

function loadTheme() {

    const theme =
        localStorage.getItem("theme") || "light";

    applyTheme(theme);

}

function toggleTheme() {

    applyTheme(

        document.body.classList.contains("dark")
            ? "light"
            : "dark"

    );

}
/* ==========================================================
   BACKUP
========================================================== */

function exportData() {

    const backup = {

        version: 1,

        createdAt: new Date().toISOString(),

        data: state

    };

    const blob = new Blob(

        [

            JSON.stringify(

                backup,

                null,

                2

            )

        ],

        {

            type: "application/json"

        }

    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download =
        "baby-companion-backup.json";

    link.click();

    URL.revokeObjectURL(url);

    showToast(t("toastBackupExported"));

}

function exportCsv(entries = state.entries) {

    if (!entries.length) {

        showToast(t("toastNoDataToExport"));

        return;

    }

    const rows = [];

    rows.push([
        t("csvDate"),
        t("csvTime"),
        t("csvCategory"),
        t("csvDetails"),
        t("csvNote")
    ]);

    entries.forEach(entry => {

        const date = new Date(entry.createdAt);

        rows.push([

    date.toLocaleDateString(getLocale()),

    date.toLocaleTimeString(getLocale(),{
        hour:"2-digit",
        minute:"2-digit"
    }),

    getCategoryName(entry.type),

    getTimelineDetails(entry),

    entry.note || ""

]);

    });

    const csv = rows
        .map(row =>
            row
                .map(value =>
                    `"${String(value ?? "").replace(/"/g,'""')}"`
                )
                .join(";")
        )
        .join("\n");

    const blob = new Blob(
        [csv],
        {
            type:"text/csv;charset=utf-8;"
        }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "baby-companion.csv";

    link.click();

    URL.revokeObjectURL(url);

    showToast(t("toastCsvExported"));

}

function importData(file) {

    if (!file) {

        return;

    }

    const reader = new FileReader();

    reader.onload = event => {

        try {

            const backup = JSON.parse(

                event.target.result

            );

            if (!backup.data) {

                throw new Error();

            }

            // state ist const – wir übernehmen die importierten Felder
            // direkt in das bestehende Objekt statt es zu ersetzen.
            // So bleiben alle Referenzen (z.B. im Closure) gültig.
            Object.assign(state, {

                profile: backup.data.profile ?? null,

                entries: backup.data.entries ?? [],

                editingId: null

            });

            saveStorage();

            if (state.profile) {

                openDashboard();

            } else {

                showOnboarding();

            }

            showToast(

                t("toastBackupImported")

            );

        } catch {

            alert(

                t("alertInvalidBackupFile")

            );

        }

    };

    reader.readAsText(file);

}

function resetAllData() {

    if (!confirm(t("confirmDeleteAllData"))) {

        return;

    }

    localStorage.removeItem(STORAGE.PROFILE);

    localStorage.removeItem(STORAGE.ENTRIES);

    showToast(t("toastAllDataDeleted"));

    setTimeout(() => {

        location.reload();

    }, RESET_RELOAD_DELAY_MS);

}

function init(){

    loadTheme();

    updateAppVersionDisplay();

    loadStorage();

    applyTranslations();

    bindEvents();

    bindLangSwitcher();

    renderDynamicFields();

      // Lizenzprüfung
    if(isActivated()){

        hideLicense();

    }else{

        showLicense();

    }

    // Aktivierungsbutton verbinden
    document
        .getElementById("activateButton")
        ?.addEventListener(
            "click",
            activateLicense
        );


    if(state.profile){

        openDashboard();

    }else{

        showOnboarding();

    }

}

/* ==========================================================
   EVENT LISTENERS
========================================================== */

function bindEvents(){

    profileForm.addEventListener(

        "submit",

        handleProfileSubmit

    );

    fabButton.addEventListener(

        "click",

        () => openModal()

    );

    closeModalButton.addEventListener(

        "click",

        closeModal

    );

    cancelButton.addEventListener(

        "click",

        closeModal

    );

    entryType.addEventListener(

        "change",

        renderDynamicFields

    );

    entryForm.addEventListener(

        "submit",

        handleEntrySubmit

    );

    entryModal.addEventListener(

        "click",

        event=>{

            if(event.target===entryModal){

                closeModal();

            }

        }

    );

    // Dialoge lassen sich zusätzlich per ESC-Taste schließen
    // (bessere Tastatur-/Desktop-Bedienung).
    document.addEventListener("keydown", event => {

        if(event.key === "Escape" && !entryModal.classList.contains("hidden")){

            closeModal();

        }

    });

    document
        .getElementById("licenseInput")
        ?.addEventListener(
            "keydown",
            event => {

                if(event.key === "Enter"){

                    activateLicense();

                }

            }
        );

    document
        .querySelectorAll(".quickAction")
        .forEach(button => {

            button.addEventListener(

                "click",

                () => openQuickEntry(button.dataset.type)

            );

        });

    // Kategorie-Filter (bewusst auf #categoryFilter beschränkt, damit
    // dies sich nicht mit den weiter unten gebundenen Zeitraum-Filter-
    // Chips überschneidet, die dieselbe .filterChip-Optik nutzen).
    document
        .querySelectorAll("#categoryFilter .filterChip")
        .forEach(button => {

            button.addEventListener("click", () => {

                activeTimelineFilter =
                    button.dataset.filter;

                document
                    .querySelectorAll("#categoryFilter .filterChip")
                    .forEach(chip =>
                        chip.classList.remove("active")
                    );

                button.classList.add("active");

                renderTimeline();

            });

        });

    bindTimelineSearchAndDateRange();

    // Einträge bearbeiten/löschen laufen über EIN delegiertes Event
    // auf dem Timeline-Container statt über einzelne Listener pro
    // Karte bei jedem Rendering (spart Arbeit, verhindert unnötige
    // EventListener-Anhäufung bei langen Verläufen).
    timeline.addEventListener("click", event => {

        const editButton = event.target.closest(".editButton");

        if(editButton){

            editEntry(Number(editButton.dataset.id));

            return;

        }

        const deleteButton = event.target.closest(".deleteButton");

        if(deleteButton){

            deleteEntry(Number(deleteButton.dataset.id));

        }

    });

    document
        .getElementById("toggleTheme")
        ?.addEventListener(

            "click",

            toggleTheme

        );

    document
        .getElementById("exportData")
        ?.addEventListener(

            "click",

            exportData

        );

    document
        .getElementById("importData")
        ?.addEventListener(

            "click",

            () =>

                document

                    .getElementById("importFile")

                    .click()

        );

    document
        .getElementById("importFile")
        ?.addEventListener(

            "change",

            event =>

                importData(

                    event.target.files[0]

                )

        );

    document
        .getElementById("resetData")
        ?.addEventListener(

            "click",

            resetAllData

        );

    document
        .getElementById("exportCsvButton")
        ?.addEventListener(
            "click",
            () => exportCsv()
        );

    document
        .getElementById("timelineCsvExport")
        ?.addEventListener(
            "click",
            () => exportCsv(getFilteredEntries())
        );

    // ======================================
    // BOTTOM NAVIGATION
    // ======================================

    document
        .getElementById("navHome")
        ?.addEventListener("click", () => {

            showPage("home");

        });

    document
        .getElementById("navStats")
        ?.addEventListener("click", () => {

            showPage("stats");

        });

    document
        .getElementById("navTimeline")
        ?.addEventListener("click", () => {

            showPage("timeline");

        });

    document
        .getElementById("navSettings")
        ?.addEventListener("click", () => {

            showPage("settings");

        });

}

function bindTimelineSearchAndDateRange(){

    let searchDebounceTimer = null;

    timelineSearchInput?.addEventListener("input", () => {

        clearTimeout(searchDebounceTimer);

        searchDebounceTimer = setTimeout(() => {

            timelineSearchQuery = timelineSearchInput.value;

            renderTimeline();

        }, SEARCH_DEBOUNCE_MS);

    });

    document
        .querySelectorAll("#dateRangeFilter .filterChip")
        .forEach(button => {

            button.addEventListener("click", () => {

                activeDateRange = button.dataset.range;

                document
                    .querySelectorAll("#dateRangeFilter .filterChip")
                    .forEach(chip =>
                        chip.classList.remove("active")
                    );

                button.classList.add("active");

                customDateRangeEl?.classList.toggle(
                    "hidden",
                    activeDateRange !== "custom"
                );

                if(activeDateRange !== "custom"){

                    renderTimeline();

                }

            });

        });

    applyDateRangeButton?.addEventListener("click", () => {

        customDateFrom = dateFromInput?.value || null;

        customDateTo = dateToInput?.value || null;

        renderTimeline();

    });

}

/* ==========================================================
   STORAGE
========================================================== */

function loadStorage(){

    const profile =
        localStorage.getItem(STORAGE.PROFILE);

    const entries =
        localStorage.getItem(STORAGE.ENTRIES);

    state.profile =
        profile
        ? JSON.parse(profile)
        : null;

    state.entries =
        entries
        ? JSON.parse(entries)
        : [];


    // Alte Daten automatisch auf neues Format bringen
    state.entries = state.entries.map(entry => {

        if (!entry.data) {

            entry.data = {};

            switch (entry.type) {

                case "sleep":
                    entry.data.hours = entry.hours || 0;
                    entry.data.minutes = entry.minutes || 0;
                    break;

                case "breastfeeding":
                    entry.data.side = entry.side || "left";
                    entry.data.minutes = entry.minutes || 0;
                    break;

                case "bottle":
                    entry.data.amount = entry.amount || 0;
                    break;

                case "diaper":
                    entry.data.diaperType = entry.diaperType || "pee";
                    break;

                case "weight":
                case "height":
                    entry.data.value = entry.value || 0;
                    break;

            }

        }

        return entry;

    });

}

function saveStorage(){

    localStorage.setItem(

        STORAGE.PROFILE,

        JSON.stringify(state.profile)

    );

    localStorage.setItem(

        STORAGE.ENTRIES,

        JSON.stringify(state.entries)

    );

}
/* ==========================================================
   SCREEN NAVIGATION
========================================================== */

function hideAllScreens() {

    splashScreen.classList.remove("active");
    onboarding.classList.remove("active");
    dashboard.classList.remove("active");

    splashScreen.classList.add("hidden");
    onboarding.classList.add("hidden");
    dashboard.classList.add("hidden");

}

function showOnboarding() {

    hideAllScreens();

    onboarding.classList.add("active");
    onboarding.classList.remove("hidden");

}

function openDashboard() {

    hideAllScreens();

    dashboard.classList.add("active");
    dashboard.classList.remove("hidden");

    updateDashboard();

}

/* ==========================================================
   PROFILE
========================================================== */

function handleProfileSubmit(event) {

    event.preventDefault();

    const name = babyName.value.trim();

    const birthday = birthDate.value;

    if (!name || !birthday) {

        showToast(t("toastFillAllFields"));

        return;

    }

    state.profile = {

        name,

        birthDate: birthday,

        createdAt: new Date().toISOString()

    };

    saveStorage();

    openDashboard();

}
/* ==========================================================
   MODAL
========================================================== */

function openModal(type = "sleep") {

    state.editingId = null;

    entryForm.reset();

    entryType.value = type;

    renderDynamicFields();

    entryModal.classList.remove("hidden");

}
function openQuickEntry(type){

    openModal(type);

    loadLastValues(type);

    const firstInput =
        dynamicFields.querySelector("input,select,textarea");

    if(firstInput){

        firstInput.focus();

    }

}

function loadLastValues(type){

    const latest = [...state.entries]
        .reverse()
        .find(entry => entry.type === type);

    if(!latest){

        return;

    }

    switch(type){

        case "bottle":{

            const amount =
                document.getElementById("bottleAmount");

            if(amount){

                amount.value =
                    latest.data.amount || "";

            }

            break;

        }

        case "sleep":{

            const hours =
                document.getElementById("sleepHours");

            const minutes =
                document.getElementById("sleepMinutes");

            if(hours){

                hours.value =
                    latest.data.hours || "";

            }

            if(minutes){

                minutes.value =
                    latest.data.minutes || "";

            }

            break;

        }

        case "breastfeeding": {

    const side =
        document.getElementById("breastSide");

    const minutes =
        document.getElementById("breastMinutes");

    if (side) {

        side.value =
            latest.data.side || "left";

    }

    if (minutes) {

        minutes.value =
            latest.data.minutes || "";

    }

    break;

}

        case "diaper":{

            const diaper =
                document.getElementById("diaperType");

            if(diaper){

                diaper.value =
                    latest.data.diaperType || "pee";

            }

            break;

        }

    }

}
function closeModal() {

    entryModal.classList.add("hidden");

    state.editingId = null;

}

/* ==========================================================
   ENTRY SUBMIT
========================================================== */

function handleEntrySubmit(event) {

    event.preventDefault();

    const entry = {

        id: state.editingId || Date.now(),

        type: entryType.value,

        data: buildEntryData(),

        note: entryNote.value.trim(),

        createdAt: new Date().toISOString()

    };

    if (state.editingId) {

        const index = state.entries.findIndex(

            item => item.id === state.editingId

        );

        if (index !== -1) {

            entry.createdAt =
                state.entries[index].createdAt;

            state.entries[index] = entry;

        }

        showToast(t("toastEntryUpdated"));

    } else {

        state.entries.unshift(entry);

        showToast(t("toastEntrySaved"));

    }

    saveStorage();

    closeModal();

    updateDashboard();

}

/* ==========================================================
   ENTRY DATA
========================================================== */

function buildEntryData() {

    switch (entryType.value) {

        case "sleep":

            return {

                hours: Number(

                    document.getElementById("sleepHours").value

                ) || 0,

                minutes: Number(

                    document.getElementById("sleepMinutes").value

                ) || 0

            };

        case "breastfeeding":

            return {

                side:

                    document.getElementById("breastSide").value,

                minutes: Number(

                    document.getElementById("breastMinutes").value

                ) || 0

            };

        case "bottle":

            return {

                amount: Number(

                    document.getElementById("bottleAmount").value

                ) || 0

            };

        case "diaper":

            return {

                diaperType:

                    document.getElementById("diaperType").value

            };

        case "weight":

            return {

                value: Number(

                    document.getElementById("weightInput").value

                ) || 0

            };

        case "height":

            return {

                value: Number(

                    document.getElementById("heightInput").value

                ) || 0

            };

        default:

            return {};

    }

}
/* ==========================================================
   DYNAMIC FIELDS
========================================================== */

function renderDynamicFields() {

    let html = "";

    switch (entryType.value) {

        case "sleep":

            html = `

                <div class="field">

                    <label>${t("labelHours")}</label>

                    <input
                        id="sleepHours"
                        type="number"
                        min="0"
                        placeholder="0"
                    >

                </div>

                <div class="field">

                    <label>${t("labelMinutes")}</label>

                    <input
                        id="sleepMinutes"
                        type="number"
                        min="0"
                        max="59"
                        placeholder="0"
                    >

                </div>

            `;

            break;

        case "breastfeeding":

            html = `

                <div class="field">

                    <label>${t("labelSide")}</label>

                    <select id="breastSide">

                        <option value="left">

                            ${t("sideLeft")}

                        </option>

                        <option value="right">

                            ${t("sideRight")}

                        </option>

                        <option value="both">

                            ${t("sideBoth")}

                        </option>

                    </select>

                </div>

                <div class="field">

                    <label>${t("labelMinutes")}</label>

                    <input
                        id="breastMinutes"
                        type="number"
                        min="0"
                        placeholder="0"
                    >

                </div>

            `;

            break;

        case "bottle":

            html = `

                <div class="field">

                    <label>${t("labelAmountMl")}</label>

                    <input
                        id="bottleAmount"
                        type="number"
                        min="0"
                        placeholder="180"
                    >

                </div>

            `;

            break;

        case "diaper":

            html = `

                <div class="field">

                    <label>${t("labelDiaper")}</label>

                    <select id="diaperType">

                        <option value="pee">

                            ${t("diaperPee")}

                        </option>

                        <option value="poo">

                            ${t("diaperPoo")}

                        </option>

                        <option value="both">

                            ${t("diaperBoth")}

                        </option>

                    </select>

                </div>

            `;

            break;

        case "weight":

            html = `

                <div class="field">

                    <label>${t("labelWeightKg")}</label>

                    <input
                        id="weightInput"
                        type="number"
                        step="0.01"
                        placeholder="5.80"
                    >

                </div>

            `;

            break;

        case "height":

            html = `

                <div class="field">

                    <label>${t("labelHeightCm")}</label>

                    <input
                        id="heightInput"
                        type="number"
                        step="0.1"
                        placeholder="61"
                    >

                </div>

            `;

            break;

        case "note":

            html = `

                <p class="infoText">

                    ${t("noteInfoText")}

                </p>

            `;

            break;

    }

    dynamicFields.innerHTML = html;

}
/* ==========================================================
   DASHBOARD
========================================================== */

function updateDashboard() {

    updateProfile();

    updateStatistics();

    updateHeroCard();

    renderTimeline();

}

function showPage(page) {

    currentPage = page;

    const hero =
        document.querySelector(".heroCard");

    const quick =
        document.querySelector(".quickActions");

    const stats =
        document.querySelector(".statsGrid");

    const timelineSection =
        document.querySelector(".timelineSection");

    const statistics =
        document.getElementById("statisticsPage");

    const settings =
        document.getElementById("settingsPage");

    hero.style.display = "none";
    quick.style.display = "none";
    stats.style.display = "none";
    timelineSection.style.display = "none";

 if (statistics) {

    statistics.classList.add("hidden");

}

if (settings) {

    settings.classList.add("hidden");

}
    document
        .querySelectorAll(".navItem")
        .forEach(button =>
            button.classList.remove("active")
        );

    switch (page) {

        case "home":

            hero.style.display = "";
            quick.style.display = "";
            stats.style.display = "";
            timelineSection.style.display = "";

            renderTimeline();

            document
                .getElementById("navHome")
                .classList.add("active");

            break;

        case "stats":

            if (statistics) {

                statistics.classList.remove("hidden");

            }

            updateStatisticsPage();

            document
                .getElementById("navStats")
                .classList.add("active");

            break;

        case "timeline":

            timelineSection.style.display = "";

            renderTimeline();

            document
                .getElementById("navTimeline")
                .classList.add("active");

            break;

        case "settings":

    if (settings) {

        settings.classList.remove("hidden");

    }

    document
        .getElementById("navSettings")
        .classList.add("active");

    break;

    }

}
/* ==========================================================
   PROFILE
========================================================== */

function updateProfile() {

    if (!state.profile) {
        return;
    }

    welcomeTitle.textContent = state.profile.name;

    babyAge.textContent =
        calculateBabyAge(state.profile.birthDate);

    updateHeroCard();

}
function updateHeroCard() {

    const greeting = document.getElementById("greeting");

    if (!greeting) {
        return;
    }

    const hour = new Date().getHours();

    if (hour < 6) {

        greeting.textContent = t("greetingNight");

    } else if (hour < 11) {

        greeting.textContent = t("greetingMorning");

    } else if (hour < 17) {

        greeting.textContent = t("greetingDay");

    } else if (hour < 22) {

        greeting.textContent = t("greetingEvening");

    } else {

        greeting.textContent = t("greetingNight");

    }

    updateCompanionInsight();

}
function calculateBabyAge(birthDate) {

    const birth = new Date(birthDate);

    const today = new Date();

    let months =
        (today.getFullYear() - birth.getFullYear()) * 12;

    months +=
        today.getMonth() - birth.getMonth();

    if (today.getDate() < birth.getDate()) {

        months--;

    }

    if (months < 1) {

        return t("ageUnderOneMonth");

    }

    if (months === 1) {

        return t("ageOneMonth");

    }

    return t("ageMonths", { n: months });

}

/* ==========================================================
   COMPANION INSIGHT ENGINE
   Erzeugt den kurzen, personalisierten Hinweis zwischen dem
   Namen und dem Alter des Babys auf der Startseite.

   Leitplanken (bewusst strikt):
   - Es werden AUSSCHLIESSLICH bereits geloggte Daten
     ausgewertet. Es wird nichts geschätzt oder erfunden.
   - Jede Prüfung hat eine eigene Mindestdatenmenge, bevor sie
     überhaupt in Betracht gezogen wird (siehe MIN_*-Konstanten
     unten). Ohne ausreichend Daten wird die jeweilige Prüfung
     einfach übersprungen (gibt "null" zurück) statt zu raten.
   - Es werden nur POSITIVE/neutrale Beobachtungen angezeigt
     (z.B. "länger geschlafen als üblich"), niemals negative
     Vergleiche ("weniger als üblich") oder Bewertungen. Das
     verhindert von vornherein jeden medizinischen oder
     beunruhigenden Unterton – dafür muss keine einzelne
     Formulierung zusätzlich geprüft werden.
   - Trifft keine der Kategorien zu, liefert die Ermutigungs-
     Kategorie (❤️) garantiert einen Text, damit die Engine nie
     leer ausgeht.

   Die Prioritätsreihenfolge (Meilensteine → Trends → Serien →
   Schlaf → Füttern → Windeln → Wachstum → Ermutigung) läuft in
   computeCompanionInsight() einmal von oben nach unten; die
   erste Kategorie mit einem Treffer gewinnt.
========================================================== */

const MIN_TREND_HISTORY_DAYS = STATS_WEEK_DAYS * 2;
const MIN_TREND_ACTIVE_DAYS_PER_WEEK = 4;
const TREND_IMPROVEMENT_THRESHOLD = 0.15;

const MIN_STREAK_TO_MENTION = 3;
const MIN_DIAPER_STREAK_TO_MENTION = 5;
const STREAK_MILESTONES = [7, 14, 21, 30];

const MIN_SLEEP_ENTRIES_FOR_BASELINE = 3;
const SLEEP_DIFFERENCE_THRESHOLD_MINUTES = 45;

const MIN_FEEDING_ENTRIES_FOR_INTERVAL = 4;
const FEEDING_EARLIER_THRESHOLD_MINUTES = 5;
const FEEDING_INTERVAL_IMPROVEMENT_THRESHOLD = 0.1;

const GROWTH_RECENCY_DAYS = 14;
const MIN_GROWTH_ENTRIES_FOR_TREND = 3;

const ENCOURAGEMENT_KEYS = [

    "insightEncourage1",
    "insightEncourage2",
    "insightEncourage3",
    "insightEncourage4",
    "insightEncourage5",
    "insightEncourage6"

];

function standardDeviation(values){

    if(!values.length){

        return 0;

    }

    const mean = values.reduce((sum, value) => sum + value, 0) / values.length;

    const variance =
        values.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / values.length;

    return Math.sqrt(variance);

}

function computeStreakFromEntries(entries){

    if(!entries.length){

        return 0;

    }

    const hasEntryOn = date =>
        entries.some(entry => startOfDay(entry.createdAt).getTime() === date.getTime());

    let streak = 0;

    const cursor = startOfDay(new Date());

    if(!hasEntryOn(cursor)){

        cursor.setDate(cursor.getDate() - 1);

    }

    while(hasEntryOn(cursor)){

        streak++;

        cursor.setDate(cursor.getDate() - 1);

    }

    return streak;

}

function computeTrackingStreak(){

    return computeStreakFromEntries(state.entries);

}

function computeTypeStreak(type){

    return computeStreakFromEntries(entriesOfType(type));

}

function getYesterdayStart(){

    const yesterday = startOfDay(new Date());

    yesterday.setDate(yesterday.getDate() - 1);

    return yesterday;

}

function getFeedingEntries(){

    return state.entries

        .filter(entry => entry.type === "bottle" || entry.type === "breastfeeding")

        .slice()

        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

}

function averageIntervalMinutes(entries){

    if(entries.length < 2){

        return null;

    }

    let totalGapMs = 0;

    for(let i = 1; i < entries.length; i++){

        totalGapMs += new Date(entries[i].createdAt) - new Date(entries[i - 1].createdAt);

    }

    return (totalGapMs / (entries.length - 1)) / 60000;

}

function getFirstEntryTimeOfDay(entries, dayStart){

    const dayEnd = new Date(dayStart);

    dayEnd.setDate(dayEnd.getDate() + 1);

    const dayEntries = entries.filter(entry => {

        const entryTime = new Date(entry.createdAt);

        return entryTime >= dayStart && entryTime < dayEnd;

    });

    if(!dayEntries.length){

        return null;

    }

    const earliest = dayEntries.reduce(
        (min, entry) => Math.min(min, new Date(entry.createdAt).getTime()),
        Infinity
    );

    const earliestDate = new Date(earliest);

    return earliestDate.getHours() * 60 + earliestDate.getMinutes();

}

function isWholeMonthAnniversary(birth, months){

    const target = new Date(birth);

    target.setMonth(target.getMonth() + months);

    return startOfDay(target).getTime() === startOfDay(new Date()).getTime();

}

/**
 * Vergleicht die Regelmäßigkeit (Standardabweichung der Tageswerte)
 * der letzten 7 Tage mit den 7 Tagen davor. Liefert "more_regular"
 * nur, wenn in BEIDEN Wochen genug aktive Tage vorhanden sind und
 * sich die Schwankung spürbar verringert hat – sonst null.
 */
function getRegularityTrend(type, valueFn){

    const entries = entriesOfType(type);

    if(entries.length < MIN_TREND_ACTIVE_DAYS_PER_WEEK * 2){

        return null;

    }

    const oldestTime = entries.reduce(
        (min, entry) => Math.min(min, new Date(entry.createdAt).getTime()),
        Infinity
    );

    const daysOfHistory = Math.floor((Date.now() - oldestTime) / MS_PER_DAY);

    if(daysOfHistory < MIN_TREND_HISTORY_DAYS){

        return null;

    }

    const recentBuckets = buildDailyValueBuckets(entries, daysAgoStart(STATS_WEEK_DAYS), STATS_WEEK_DAYS, valueFn);

    const previousBuckets = buildDailyValueBuckets(entries, daysAgoStart(STATS_WEEK_DAYS * 2), STATS_WEEK_DAYS, valueFn);

    const recentActiveDays = recentBuckets.filter(bucket => bucket.value > 0).length;

    const previousActiveDays = previousBuckets.filter(bucket => bucket.value > 0).length;

    if(recentActiveDays < MIN_TREND_ACTIVE_DAYS_PER_WEEK || previousActiveDays < MIN_TREND_ACTIVE_DAYS_PER_WEEK){

        return null;

    }

    const recentStdDev = standardDeviation(recentBuckets.map(bucket => bucket.value));

    const previousStdDev = standardDeviation(previousBuckets.map(bucket => bucket.value));

    if(previousStdDev <= 0){

        return null;

    }

    const improvement = (previousStdDev - recentStdDev) / previousStdDev;

    return improvement >= TREND_IMPROVEMENT_THRESHOLD ? "more_regular" : null;

}

function getFeedingIntervalTrend(){

    const all = getFeedingEntries();

    const recentStart = daysAgoStart(STATS_WEEK_DAYS);

    const previousStart = daysAgoStart(STATS_WEEK_DAYS * 2);

    const recent = all.filter(entry => new Date(entry.createdAt) >= recentStart);

    const previous = all.filter(entry => {

        const entryTime = new Date(entry.createdAt);

        return entryTime >= previousStart && entryTime < recentStart;

    });

    if(recent.length < MIN_FEEDING_ENTRIES_FOR_INTERVAL || previous.length < MIN_FEEDING_ENTRIES_FOR_INTERVAL){

        return null;

    }

    const recentAvg = averageIntervalMinutes(recent);

    const previousAvg = averageIntervalMinutes(previous);

    if(recentAvg === null || previousAvg === null || previousAvg <= 0){

        return null;

    }

    const change = (previousAvg - recentAvg) / previousAvg;

    return change >= FEEDING_INTERVAL_IMPROVEMENT_THRESHOLD ? "shorter" : null;

}

/* ---------- 1. Meilensteine 🎉 (nur vom Geburtsdatum abhängig) ---------- */

function getMilestoneInsight(){

    if(!state.profile || !state.profile.birthDate){

        return null;

    }

    const birth = new Date(state.profile.birthDate);

    const daysSinceBirth = Math.round(
        (startOfDay(new Date()).getTime() - startOfDay(birth).getTime()) / MS_PER_DAY
    );

    if(daysSinceBirth === 7){

        return { text: t("insightMilestoneWeek1") };

    }

    if(daysSinceBirth === 14){

        return { text: t("insightMilestoneWeek2") };

    }

    if(daysSinceBirth === 30){

        return { text: t("insightMilestoneDay30") };

    }

    if(daysSinceBirth === 100){

        return { text: t("insightMilestoneDay100") };

    }

    if(isWholeMonthAnniversary(birth, 1)){

        return { text: t("insightMilestoneMonth1") };

    }

    if(isWholeMonthAnniversary(birth, 6)){

        return { text: t("insightMilestoneMonth6") };

    }

    if(isWholeMonthAnniversary(birth, 12)){

        return { text: t("insightMilestoneYear1") };

    }

    for(let months = 2; months <= 11; months++){

        if(months === 6){

            continue;

        }

        if(isWholeMonthAnniversary(birth, months)){

            return { text: t("insightMilestoneMonths", { n: months }) };

        }

    }

    return null;

}

/* ---------- 2. Positive Trends 📈 ---------- */

function getTrendInsight(){

    const sleepMinutesFn = entry =>
        (Number(entry.data.hours) || 0) * MINUTES_PER_HOUR + (Number(entry.data.minutes) || 0);

    if(getRegularityTrend("sleep", sleepMinutesFn) === "more_regular"){

        return { text: t("insightTrendSleepRegular") };

    }

    const bottleAmountFn = entry => Number(entry.data.amount) || 0;

    if(getRegularityTrend("bottle", bottleAmountFn) === "more_regular"){

        return { text: t("insightTrendFeedingPredictable") };

    }

    const oldestEntryTime = state.entries.reduce(
        (min, entry) => Math.min(min, new Date(entry.createdAt).getTime()),
        Infinity
    );

    const daysOfHistory = Math.floor((Date.now() - oldestEntryTime) / MS_PER_DAY);

    if(daysOfHistory >= STATS_WEEK_DAYS){

        const activeDaysThisWeek = new Set(

            state.entries

                .filter(entry => new Date(entry.createdAt) >= daysAgoStart(STATS_WEEK_DAYS))

                .map(entry => startOfDay(entry.createdAt).getTime())

        ).size;

        if(activeDaysThisWeek >= STATS_WEEK_DAYS - 1){

            return { text: t("insightTrendConsistentTracking") };

        }

    }

    return null;

}

/* ---------- 3. Serien 🔥 ---------- */

function getStreakInsight(){

    if(!state.entries.length){

        return null;

    }

    const streak = computeTrackingStreak();

    if(streak < MIN_STREAK_TO_MENTION){

        return null;

    }

    if(STREAK_MILESTONES.includes(streak)){

        return { text: t("insightStreakMilestone", { n: streak }) };

    }

    const nextMilestone = STREAK_MILESTONES.find(milestone => milestone > streak);

    if(nextMilestone && nextMilestone - streak === 1){

        return { text: t("insightStreakOneMore") };

    }

    return { text: t("insightStreakBuilding", { n: streak }) };

}

/* ---------- 4. Schlaf 🌙 ---------- */

function getSleepInsight(){

    const entries = entriesOfType("sleep");

    if(entries.length < MIN_SLEEP_ENTRIES_FOR_BASELINE){

        return null;

    }

    const minutesFn = entry =>
        (Number(entry.data.hours) || 0) * MINUTES_PER_HOUR + (Number(entry.data.minutes) || 0);

    const sortedByDate = entries.slice().sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

    const mostRecent = sortedByDate[sortedByDate.length - 1];

    const priorEntries = sortedByDate.slice(0, -1);

    if(priorEntries.length >= MIN_SLEEP_ENTRIES_FOR_BASELINE){

        const priorMax = Math.max(...priorEntries.map(minutesFn));

        const mostRecentMinutes = minutesFn(mostRecent);

        if(mostRecentMinutes > priorMax){

            return { text: t("insightSleepNewRecord", { duration: formatDurationMinutes(mostRecentMinutes) }) };

        }

    }

    const yesterdayStart = getYesterdayStart();

    const yesterdayEntries = entries.filter(
        entry => startOfDay(entry.createdAt).getTime() === yesterdayStart.getTime()
    );

    if(yesterdayEntries.length){

        const baselineEntries = entries.filter(
            entry => startOfDay(entry.createdAt).getTime() !== yesterdayStart.getTime()
        );

        if(baselineEntries.length >= MIN_SLEEP_ENTRIES_FOR_BASELINE){

            const baselineActiveDays = countActiveDays(baselineEntries);

            const baselineTotal = baselineEntries.reduce((sum, entry) => sum + minutesFn(entry), 0);

            const baselineAvgPerDay = baselineActiveDays ? baselineTotal / baselineActiveDays : 0;

            const yesterdayTotal = yesterdayEntries.reduce((sum, entry) => sum + minutesFn(entry), 0);

            const diff = yesterdayTotal - baselineAvgPerDay;

            if(diff >= SLEEP_DIFFERENCE_THRESHOLD_MINUTES){

                return { text: t("insightSleepLongerThanAvg", { duration: formatDurationMinutes(diff) }) };

            }

        }

    }

    const weekEntries = entries.filter(entry => new Date(entry.createdAt) >= daysAgoStart(STATS_WEEK_DAYS));

    if(weekEntries.length >= MIN_SLEEP_ENTRIES_FOR_BASELINE){

        const longestThisWeek = Math.max(...weekEntries.map(minutesFn));

        return { text: t("insightSleepLongestThisWeek", { duration: formatDurationMinutes(longestThisWeek) }) };

    }

    return null;

}

/* ---------- 5. Füttern 🍼 ---------- */

function getFeedingInsight(){

    if(getFeedingIntervalTrend() === "shorter"){

        return { text: t("insightFeedingIntervalsShorter") };

    }

    const feedingEntries = getFeedingEntries();

    const yesterdayStart = getYesterdayStart();

    const firstFeedingToday = getFirstEntryTimeOfDay(feedingEntries, startOfDay(new Date()));

    const firstFeedingYesterday = getFirstEntryTimeOfDay(feedingEntries, yesterdayStart);

    if(

        firstFeedingToday !== null &&

        firstFeedingYesterday !== null &&

        firstFeedingYesterday - firstFeedingToday >= FEEDING_EARLIER_THRESHOLD_MINUTES

    ){

        return { text: t("insightFeedingEarlierFirst") };

    }

    const yesterdayCount = feedingEntries.filter(
        entry => startOfDay(entry.createdAt).getTime() === yesterdayStart.getTime()
    ).length;

    if(yesterdayCount >= 1){

        return { text: t("insightFeedingYesterdayCount", { n: yesterdayCount }) };

    }

    return null;

}

/* ---------- 6. Windeln 💩 ---------- */

function getDiaperInsight(){

    const streak = computeTypeStreak("diaper");

    if(streak >= MIN_DIAPER_STREAK_TO_MENTION){

        return { text: t("insightDiaperStreak", { n: streak }) };

    }

    const yesterdayStart = getYesterdayStart();

    const yesterdayCount = entriesOfType("diaper").filter(
        entry => startOfDay(entry.createdAt).getTime() === yesterdayStart.getTime()
    ).length;

    if(yesterdayCount >= 1){

        return { text: t("insightDiaperYesterdayCount", { n: yesterdayCount }) };

    }

    return null;

}

/* ---------- 7. Wachstum ⚖️ ---------- */

function getGrowthInsight(){

    const weightEntries = entriesOfType("weight")
        .slice()
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

    if(weightEntries.length >= 2){

        const values = weightEntries.map(entry => Number(entry.data.value) || 0);

        const latest = values[values.length - 1];

        const maxBefore = Math.max(...values.slice(0, -1));

        if(latest > maxBefore){

            return { text: t("insightGrowthNewMilestone") };

        }

    }

    if(weightEntries.length >= MIN_GROWTH_ENTRIES_FOR_TREND){

        const values = weightEntries.map(entry => Number(entry.data.value) || 0);

        const isSteadyIncrease = values.every((value, index) => index === 0 || value >= values[index - 1]);

        if(isSteadyIncrease){

            return { text: t("insightGrowthSteadyIncrease") };

        }

    }

    const growthEntries = [...entriesOfType("weight"), ...entriesOfType("height")];

    if(growthEntries.length){

        const mostRecentTime = Math.max(...growthEntries.map(entry => new Date(entry.createdAt).getTime()));

        const daysSinceLastEntry = Math.floor((Date.now() - mostRecentTime) / MS_PER_DAY);

        if(daysSinceLastEntry <= GROWTH_RECENCY_DAYS){

            return { text: t("insightGrowthUpToDate") };

        }

    }

    if(growthEntries.length >= 2){

        return { text: t("insightGrowthHistoryBuilding") };

    }

    return null;

}

/* ---------- 8. Ermutigung ❤️ (immer verfügbarer Fallback) ---------- */

function getEncouragementInsight(){

    const dayIndex = Math.floor(startOfDay(new Date()).getTime() / MS_PER_DAY);

    const key = ENCOURAGEMENT_KEYS[dayIndex % ENCOURAGEMENT_KEYS.length];

    return { text: t(key) };

}

/**
 * Läuft die Prioritätsliste einmal von oben nach unten durch und
 * gibt den ersten Treffer zurück. Die Ermutigungs-Kategorie greift
 * garantiert, falls keine der anderen Kategorien etwas liefert.
 */
function computeCompanionInsight(){

    const generators = [

        getMilestoneInsight,
        getTrendInsight,
        getStreakInsight,
        getSleepInsight,
        getFeedingInsight,
        getDiaperInsight,
        getGrowthInsight

    ];

    for(const generator of generators){

        const insight = generator();

        if(insight){

            return insight;

        }

    }

    return getEncouragementInsight();

}

function updateCompanionInsight(){

    const insightElement = document.getElementById("companionInsight");

    if(!insightElement || !state.profile){

        return;

    }

    const insight = computeCompanionInsight();

    const newText = `💚 ${insight.text}`;

    if(insightElement.dataset.text === newText){

        return;

    }

    insightElement.dataset.text = newText;

    insightElement.textContent = newText;

    // Kleiner Reflow-Trick, damit die CSS-Animation bei jedem
    // inhaltlichen Wechsel erneut abspielt statt nur beim ersten Mal.
    insightElement.classList.remove("insightFade");

    void insightElement.offsetWidth;

    insightElement.classList.add("insightFade");

}

/* ==========================================================
   STATISTICS — DASHBOARD (heutige Werte)
========================================================== */

function updateStatistics() {

    const today = new Date().toDateString();

    const todayEntries = state.entries.filter(entry =>

       new Date(entry.createdAt).toDateString() === today

    );

    const breastfeedingCount =
        todayEntries.filter(e => e.type === "breastfeeding").length;

    const diaperCount =
        todayEntries.filter(e => e.type === "diaper").length;

    document.getElementById("sleepValue").textContent =
    calculateSleepToday();

document.getElementById("bottleValue").textContent =
    calculateBottleToday();

document.getElementById("breastfeedingValue").textContent =
    `${breastfeedingCount}×`;

document.getElementById("diaperValue").textContent =
    `${diaperCount}×`;
    updateLatestWeight();

    updateLatestHeight();

}

function formatDurationMinutes(totalMinutes) {

    const safeMinutes = Math.max(0, Math.round(totalMinutes));

    const hours = Math.floor(safeMinutes / MINUTES_PER_HOUR);

    const minutes = safeMinutes % MINUTES_PER_HOUR;

    return `${hours} h ${minutes} min`;

}

function calculateSleepToday() {

    const today = new Date().toDateString();

    let totalMinutes = 0;

    state.entries.forEach(entry => {

        if (
            entry.type === "sleep" &&
            new Date(entry.createdAt).toDateString() === today
        ) {

            totalMinutes +=
                (Number(entry.data.hours) || 0) * MINUTES_PER_HOUR +
                (Number(entry.data.minutes) || 0);

        }

    });

    return formatDurationMinutes(totalMinutes);

}
function calculateBottleToday() {

    const today = new Date().toDateString();

    let total = 0;

    state.entries.forEach(entry => {

        if (
            entry.type === "bottle" &&
            new Date(entry.createdAt).toDateString() === today
        ) {

            total += Number(entry.data.amount) || 0;

        }

    });

    return `${total} ml`;

}

function updateLatestWeight() {

    const weightElement = document.getElementById("weightValue");

    if (!weightElement) {
        return;
    }

    const latest = state.entries.find(entry =>
        entry.type === "weight"
    );

    weightElement.textContent =
        latest
            ? `${latest.data.value} kg`
            : "—";

}

function updateLatestHeight() {

    const heightElement = document.getElementById("heightValue");

    if (!heightElement) {
        return;
    }

    const latest = state.entries.find(entry =>
        entry.type === "height"
    );

    heightElement.textContent =
        latest
            ? `${latest.data.value} cm`
            : "—";

}

/* ==========================================================
   STATISTICS — DETAILSEITE
   Datums-/Aggregationshilfen + eine Berechnungsfunktion pro
   Kategorie. Jede compute*-Funktion liefert reine Zahlen/Arrays
   zurück (keine DOM-Zugriffe), die render*-Funktionen weiter
   unten übernehmen ausschließlich die Anzeige. Diese Trennung
   hält die Statistikseite testbar und leicht um weitere
   Kategorien erweiterbar (siehe Companion-Plattform-Vision).
========================================================== */

function startOfDay(date){

    const day = new Date(date);

    day.setHours(0, 0, 0, 0);

    return day;

}

function daysAgoStart(days){

    const start = startOfDay(new Date());

    start.setDate(start.getDate() - (days - 1));

    return start;

}

function entriesOfType(type){

    return state.entries.filter(entry => entry.type === type);

}

function countActiveDays(entries){

    return new Set(

        entries.map(entry => startOfDay(entry.createdAt).getTime())

    ).size;

}

function sumInLastDays(entries, days, valueFn){

    const start = daysAgoStart(days);

    return entries

        .filter(entry => new Date(entry.createdAt) >= start)

        .reduce((sum, entry) => sum + valueFn(entry), 0);

}

function buildDailyValueBuckets(entries, start, days, valueFn){

    const buckets = [];

    for(let i = 0; i < days; i++){

        const date = new Date(start);

        date.setDate(date.getDate() + i);

        buckets.push({ date, value: 0 });

    }

    entries.forEach(entry => {

        const entryDate = new Date(entry.createdAt);

        if(entryDate < start){

            return;

        }

        const dayIndex = Math.floor(
            (startOfDay(entryDate).getTime() - start.getTime()) / MS_PER_DAY
        );

        if(buckets[dayIndex]){

            buckets[dayIndex].value += valueFn(entry);

        }

    });

    return buckets;

}

function buildDailySeries(entries, days, valueFn){

    const start = daysAgoStart(days);

    return buildDailyValueBuckets(entries, start, days, valueFn).map(bucket => ({

        label: bucket.date.toLocaleDateString(getLocale(), { weekday: "short" }),

        value: Math.round(bucket.value * 100) / 100

    }));

}

function computeSleepStats(){

    const entries = entriesOfType("sleep");

    const minutesFn = entry =>
        (Number(entry.data.hours) || 0) * MINUTES_PER_HOUR +
        (Number(entry.data.minutes) || 0);

    const totalMinutes = entries.reduce((sum, entry) => sum + minutesFn(entry), 0);

    const activeDays = countActiveDays(entries);

    const durations = entries.map(minutesFn).filter(minutes => minutes > 0);

    return {

        hasData: entries.length > 0,

        avgAllTime: activeDays ? totalMinutes / activeDays : 0,

        avg7: sumInLastDays(entries, STATS_WEEK_DAYS, minutesFn) / STATS_WEEK_DAYS,

        avg30: sumInLastDays(entries, STATS_MONTH_DAYS, minutesFn) / STATS_MONTH_DAYS,

        longest: durations.length ? Math.max(...durations) : 0,

        shortest: durations.length ? Math.min(...durations) : 0,

        chart: buildDailySeries(entries, STATS_WEEK_DAYS, minutesFn)

    };

}

function computeBottleStats(){

    const entries = entriesOfType("bottle");

    const amountFn = entry => Number(entry.data.amount) || 0;

    const totalAmount = entries.reduce((sum, entry) => sum + amountFn(entry), 0);

    const activeDays = countActiveDays(entries);

    return {

        hasData: entries.length > 0,

        avgAllTime: activeDays ? totalAmount / activeDays : 0,

        weekTotal: sumInLastDays(entries, STATS_WEEK_DAYS, amountFn),

        monthTotal: sumInLastDays(entries, STATS_MONTH_DAYS, amountFn),

        chart: buildDailySeries(entries, STATS_WEEK_DAYS, amountFn)

    };

}

function computeBreastfeedingStats(){

    const entries = entriesOfType("breastfeeding");

    const minutesFn = entry => Number(entry.data.minutes) || 0;

    const sideCounts = { left: 0, right: 0, both: 0 };

    entries.forEach(entry => {

        if(sideCounts[entry.data.side] !== undefined){

            sideCounts[entry.data.side]++;

        }

    });

    const totalMinutes = entries.reduce((sum, entry) => sum + minutesFn(entry), 0);

    return {

        hasData: entries.length > 0,

        sideCounts,

        totalMinutes,

        avgDuration: entries.length ? totalMinutes / entries.length : 0,

        sessionsCount: entries.length,

        chart: buildDailySeries(entries, STATS_WEEK_DAYS, minutesFn)

    };

}

function computeDiaperStats(){

    const start = daysAgoStart(STATS_MONTH_DAYS);

    const entries = entriesOfType("diaper")
        .filter(entry => new Date(entry.createdAt) >= start);

    const counts = { pee: 0, poo: 0, both: 0 };

    entries.forEach(entry => {

        if(counts[entry.data.diaperType] !== undefined){

            counts[entry.data.diaperType]++;

        }

    });

    return {

        hasData: entries.length > 0,

        count: entries.length,

        avgPerDay: entries.length / STATS_MONTH_DAYS,

        wet: counts.pee,

        solid: counts.poo,

        both: counts.both

    };

}

function computeMeasurementStats(type){

    const entries = entriesOfType(type)
        .slice()
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

    const values = entries.map(entry => Number(entry.data.value) || 0);

    const latest = values.length ? values[values.length - 1] : null;

    const previous = values.length > 1 ? values[values.length - 2] : null;

    const first = values.length ? values[0] : null;

    return {

        hasData: entries.length > 0,

        latest,

        changeSincePrevious:
            (latest !== null && previous !== null) ? latest - previous : null,

        growthSinceFirst:
            (latest !== null && first !== null) ? latest - first : null,

        chart: entries.map(entry => ({

            label: new Date(entry.createdAt).toLocaleDateString(
                getLocale(),
                { day: "2-digit", month: "2-digit" }
            ),

            value: Number(entry.data.value) || 0

        }))

    };

}

function updateStatisticsPage() {

    const sleep = computeSleepStats();

    const bottle = computeBottleStats();

    const breastfeeding = computeBreastfeedingStats();

    const diaper = computeDiaperStats();

    const weight = computeMeasurementStats("weight");

    const height = computeMeasurementStats("height");

    document.getElementById("statsWeight").textContent =
        weight.hasData ? `${weight.latest} kg` : "—";

    document.getElementById("statsHeight").textContent =
        height.hasData ? `${height.latest} cm` : "—";

    document.getElementById("statsSleepAverage").textContent =
        sleep.hasData ? formatDurationMinutes(sleep.avgAllTime) : "—";

    document.getElementById("statsBottleAverage").textContent =
        bottle.hasData ? `${Math.round(bottle.avgAllTime)} ml` : "—";

    renderSleepStatBlock(sleep);

    renderBottleStatBlock(bottle);

    renderBreastfeedingStatBlock(breastfeeding);

    renderDiaperStatBlock(diaper);

    renderMeasurementStatBlock("weight", weight, "kg");

    renderMeasurementStatBlock("height", height, "cm");

}

function renderChartOrEmpty(containerId, hasEnoughData, buildFn){

    const container = document.getElementById(containerId);

    if(!container){

        return;

    }

    container.innerHTML = hasEnoughData
        ? buildFn()
        : `<p class="noDataState">${t("statNoDataYet")}</p>`;

}

function setStatText(id, text){

    const element = document.getElementById(id);

    if(element){

        element.textContent = text;

    }

}

function renderSleepStatBlock(stats){

    setStatText("sleepAvg", stats.hasData ? formatDurationMinutes(stats.avgAllTime) : "—");
    setStatText("sleepAvg7", stats.hasData ? formatDurationMinutes(stats.avg7) : "—");
    setStatText("sleepAvg30", stats.hasData ? formatDurationMinutes(stats.avg30) : "—");
    setStatText("sleepLongest", stats.hasData ? formatDurationMinutes(stats.longest) : "—");
    setStatText("sleepShortest", stats.hasData ? formatDurationMinutes(stats.shortest) : "—");

    renderChartOrEmpty("sleepChart", stats.hasData, () =>
        buildBarChartSVG(stats.chart, { ariaLabel: t("categorySleep") })
    );

}

function renderBottleStatBlock(stats){

    setStatText("bottleAvgDay", stats.hasData ? `${Math.round(stats.avgAllTime)} ml` : "—");
    setStatText("bottleWeekTotal", stats.hasData ? `${Math.round(stats.weekTotal)} ml` : "—");
    setStatText("bottleMonthTotal", stats.hasData ? `${Math.round(stats.monthTotal)} ml` : "—");

    renderChartOrEmpty("bottleChart", stats.hasData, () =>
        buildBarChartSVG(stats.chart, { ariaLabel: t("categoryBottle") })
    );

}

function renderBreastfeedingStatBlock(stats){

    setStatText("breastAvgDuration", stats.hasData ? `${Math.round(stats.avgDuration)} min` : "—");
    setStatText("breastSessionsCount", String(stats.sessionsCount));
    setStatText("breastTotalMinutes", `${Math.round(stats.totalMinutes)} min`);

    const ratioContainer = document.getElementById("breastRatio");

    const legendContainer = document.getElementById("breastRatioLegend");

    if(ratioContainer){

        ratioContainer.innerHTML = stats.hasData
            ? buildRatioBar(stats.sideCounts)
            : `<p class="noDataState">${t("statNoDataYet")}</p>`;

    }

    if(legendContainer){

        legendContainer.innerHTML = stats.hasData
            ? buildRatioLegend(stats.sideCounts)
            : "";

    }

    renderChartOrEmpty("breastChart", stats.hasData, () =>
        buildBarChartSVG(stats.chart, { ariaLabel: t("categoryBreastfeeding") })
    );

}

function renderDiaperStatBlock(stats){

    setStatText("diaperCount30", String(stats.count));
    setStatText("diaperAvgDay", stats.avgPerDay.toFixed(1));
    setStatText("diaperWetCount", String(stats.wet));
    setStatText("diaperSolidCount", String(stats.solid));
    setStatText("diaperBothCount", String(stats.both));

}

function formatSignedValue(value, unit){

    const rounded = Math.round(value * 100) / 100;

    const sign = rounded > 0 ? "+" : "";

    return `${sign}${rounded} ${unit}`;

}

function renderMeasurementStatBlock(key, stats, unit){

    setStatText(
        `${key}Change`,
        stats.changeSincePrevious !== null ? formatSignedValue(stats.changeSincePrevious, unit) : "—"
    );

    setStatText(
        `${key}Growth`,
        stats.growthSinceFirst !== null ? formatSignedValue(stats.growthSinceFirst, unit) : "—"
    );

    renderChartOrEmpty(`${key}Chart`, stats.chart.length > 1, () =>
        buildLineChartSVG(stats.chart, {})
    );

}

/* ==========================================================
   CHARTS
   Kleine, abhängigkeitsfreie SVG-Diagramme (Balken/Linie).
   Skalieren responsiv über viewBox + width:100% in CSS und
   übernehmen ihre Farben aus den bestehenden CSS-Variablen,
   damit Dark Mode automatisch funktioniert.
========================================================== */

function escapeSvgText(text){

    return String(text ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

}

function buildBarChartSVG(data, opts = {}){

    const height = opts.height || 130;

    const barWidth = 28;

    const barGap = 10;

    const width = data.length * (barWidth + barGap) + barGap;

    const maxValue = Math.max(1, ...data.map(point => point.value));

    const bars = data.map((point, index) => {

        const barHeight = Math.max(
            2,
            Math.round((point.value / maxValue) * (height - 32))
        );

        const x = barGap + index * (barWidth + barGap);

        const y = height - barHeight - 22;

        return `

            <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="7" class="chartBar"></rect>

            <text x="${x + barWidth / 2}" y="${height - 6}" text-anchor="middle" class="chartLabel">${escapeSvgText(point.label)}</text>

        `;

    }).join("");

    return `<svg viewBox="0 0 ${width} ${height}" class="statChart" role="img" aria-label="${escapeSvgText(opts.ariaLabel || "")}">${bars}</svg>`;

}

function buildLineChartSVG(data, opts = {}){

    const height = opts.height || 130;

    const padding = 22;

    const width = Math.max(180, data.length * 54);

    const values = data.map(point => point.value);

    const minValue = Math.min(...values);

    const maxValue = Math.max(...values);

    const range = (maxValue - minValue) || 1;

    const points = data.map((point, index) => {

        const x = data.length > 1
            ? padding + index * ((width - padding * 2) / (data.length - 1))
            : width / 2;

        const y = height - padding - ((point.value - minValue) / range) * (height - padding * 2);

        return { x, y, label: point.label };

    });

    const path = points

        .map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)},${point.y.toFixed(1)}`)

        .join(" ");

    const dots = points

        .map(point => `<circle cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="4" class="chartDot"></circle>`)

        .join("");

    const labels = points

        .map(point => `<text x="${point.x.toFixed(1)}" y="${height - 4}" text-anchor="middle" class="chartLabel">${escapeSvgText(point.label)}</text>`)

        .join("");

    return `<svg viewBox="0 0 ${width} ${height}" class="statChart" role="img">

        <path d="${path}" fill="none" class="chartLine"></path>

        ${dots}

        ${labels}

    </svg>`;

}

function buildRatioBar(counts){

    const total = counts.left + counts.right + counts.both || 1;

    const leftPct = (counts.left / total) * 100;

    const rightPct = (counts.right / total) * 100;

    const bothPct = (counts.both / total) * 100;

    return `<div class="ratioBar">

        <span class="ratioLeft" style="width:${leftPct}%"></span>

        <span class="ratioRight" style="width:${rightPct}%"></span>

        <span class="ratioBoth" style="width:${bothPct}%"></span>

    </div>`;

}

function buildRatioLegend(counts){

    return `

        <span class="ratioLegendItem"><i class="ratioDot ratioLeft"></i>${t("sideLeft")} · ${counts.left}</span>

        <span class="ratioLegendItem"><i class="ratioDot ratioRight"></i>${t("sideRight")} · ${counts.right}</span>

        <span class="ratioLegendItem"><i class="ratioDot ratioBoth"></i>${t("sideBoth")} · ${counts.both}</span>

    `;

}

/* ==========================================================
   TIMELINE HELPERS
========================================================== */

/**
 * Maskiert HTML-Sonderzeichen in frei eingegebenem Nutzertext
 * (z.B. Notizen), bevor er per innerHTML in den DOM
 * eingefügt wird. Verhindert, dass Zeichen wie "<" oder ">"
 * in einer Notiz vom Browser als (ungültiges) HTML-Tag
 * interpretiert und dadurch verschluckt oder falsch
 * dargestellt werden.
 */
function escapeHtml(text){

    const div = document.createElement("div");

    div.textContent = text ?? "";

    return div.innerHTML;

}

function getEntryIcon(type) {

    const icons = {

        sleep: "😴",

        breastfeeding: "🤱",

        bottle: "🍼",

        diaper: "💩",

        weight: "⚖️",

        height: "📏",

        note: "📝"

    };

    return icons[type] || "📌";

}

function getEntryTitle(entry) {

    const data = entry.data || {};

    switch (entry.type) {

        case "sleep":
            return `${data.hours || 0} h ${data.minutes || 0} min`;

        case "breastfeeding":
            return `${sideLabel(data.side)} • ${data.minutes || 0} min`;

        case "bottle":
            return `${data.amount || 0} ml`;

        case "diaper":
            return diaperLabel(data.diaperType);

        case "weight":
            return `${data.value || 0} kg`;

        case "height":
            return `${data.value || 0} cm`;

        case "note":
            return t("categoryNote");

        default:
            return entry.type;

    }

}
function getCategoryName(type) {

    switch (type) {

        case "sleep":
            return t("categorySleep");

        case "breastfeeding":
            return t("categoryBreastfeeding");

        case "bottle":
            return t("categoryBottle");

        case "diaper":
            return t("categoryDiaper");

        case "weight":
            return t("categoryWeight");

        case "height":
            return t("categoryHeight");

        case "temperature":
            return t("categoryTemperature");

        case "medicine":
            return t("categoryMedicine");

        case "note":
            return t("categoryNote");

        default:
            return type;

    }

}
/* ==========================================================
   DELETE ENTRY
========================================================== */

function deleteEntry(id) {

    if (!confirm(t("confirmDeleteEntry"))) {

        return;

    }

    state.entries = state.entries.filter(

        entry => entry.id !== id

    );

    saveStorage();

    updateDashboard();

    showToast(t("toastEntryDeleted"));

}

/* ==========================================================
   EDIT ENTRY
========================================================== */

function editEntry(id) {

    const entry = state.entries.find(

        item => item.id === id

    );

    if (!entry) {

        return;

    }

    state.editingId = id;

    entryType.value = entry.type;

    renderDynamicFields();

    entryNote.value = entry.note || "";

    switch (entry.type) {

        case "sleep":

            document.getElementById("sleepHours").value =
                entry.data.hours || "";

            document.getElementById("sleepMinutes").value =
                entry.data.minutes || "";

            break;

        case "breastfeeding":

            document.getElementById("breastSide").value =
                entry.data.side || "left";

            document.getElementById("breastMinutes").value =
                entry.data.minutes || "";

            break;

        case "bottle":

            document.getElementById("bottleAmount").value =
                entry.data.amount || "";

            break;

        case "diaper":

            document.getElementById("diaperType").value =
                entry.data.diaperType || "pee";

            break;

        case "weight":

            document.getElementById("weightInput").value =
                entry.data.value || "";

            break;

        case "height":

            document.getElementById("heightInput").value =
                entry.data.value || "";

            break;

    }

    entryModal.classList.remove("hidden");

}
/* ==========================================================
   TIMELINE
========================================================== */

let activeTimelineFilter = "all";

let timelineSearchQuery = "";

let activeDateRange = "all";

let customDateFrom = null;

let customDateTo = null;

// Welche Ansicht der (einzige, wiederverwendete) #timeline-Container
// gerade bedient: "home" zeigt einen einfachen, ungefilterten Ausschnitt
// der letzten 24 Stunden; "timeline" zeigt den vollen, filterbaren
// Verlauf. Wird von showPage() gepflegt.
let currentPage = "home";

const HOME_RECENT_HOURS = 24;

const HOME_RECENT_WINDOW_MS = HOME_RECENT_HOURS * 60 * 60 * 1000;

function filterEntriesWithinWindow(entries, windowMs){

    const cutoff = Date.now() - windowMs;

    return entries.filter(entry => new Date(entry.createdAt).getTime() >= cutoff);

}

function buildSearchIndex(entry){

    return `${getCategoryName(entry.type)} ${getTimelineDetails(entry)} ${entry.note || ""}`.toLowerCase();

}

function filterEntriesByDateRange(entries){

    if(activeDateRange === "today"){

        const start = startOfDay(new Date());

        return entries.filter(entry => new Date(entry.createdAt) >= start);

    }

    if(activeDateRange === "7d"){

        const start = daysAgoStart(STATS_WEEK_DAYS);

        return entries.filter(entry => new Date(entry.createdAt) >= start);

    }

    if(activeDateRange === "30d"){

        const start = daysAgoStart(STATS_MONTH_DAYS);

        return entries.filter(entry => new Date(entry.createdAt) >= start);

    }

    if(activeDateRange === "custom" && customDateFrom && customDateTo){

        const start = startOfDay(new Date(customDateFrom));

        const end = new Date(customDateTo);

        end.setHours(23, 59, 59, 999);

        return entries.filter(entry => {

            const time = new Date(entry.createdAt).getTime();

            return time >= start.getTime() && time <= end.getTime();

        });

    }

    return entries;

}

function getFilteredEntries() {

    if(currentPage === "home"){

        return filterEntriesWithinWindow(state.entries, HOME_RECENT_WINDOW_MS);

    }

    let entries = state.entries;

    if (activeTimelineFilter !== "all") {

        entries = entries.filter(entry => entry.type === activeTimelineFilter);

    }

    entries = filterEntriesByDateRange(entries);

    const query = timelineSearchQuery.trim().toLowerCase();

    if(query){

        entries = entries.filter(entry => buildSearchIndex(entry).includes(query));

    }

    return entries;

}

function groupEntriesByDay(entries){

    const groups = [];

    let currentKey = null;

    let currentGroup = null;

    entries.forEach(entry => {

        const entryDate = new Date(entry.createdAt);

        const key = entryDate.toDateString();

        if(key !== currentKey){

            currentGroup = { date: entryDate, entries: [] };

            groups.push(currentGroup);

            currentKey = key;

        }

        currentGroup.entries.push(entry);

    });

    return groups;

}

function formatGroupDateLabel(date){

    const today = startOfDay(new Date());

    const yesterday = new Date(today);

    yesterday.setDate(yesterday.getDate() - 1);

    const target = startOfDay(date);

    if(target.getTime() === today.getTime()){

        return t("dateRangeToday");

    }

    if(target.getTime() === yesterday.getTime()){

        return t("timeYesterday");

    }

    return date.toLocaleDateString(getLocale(), {

        weekday: "long",

        day: "2-digit",

        month: "long"

    });

}

function createDayGroupHeader(group){

    const header = document.createElement("div");

    header.className = "timelineDayHeader";

    header.innerHTML = `

        <span class="timelineDayLabel">${escapeHtml(formatGroupDateLabel(group.date))}</span>

        <span class="timelineDayCount">${group.entries.length}</span>

    `;

    return header;

}

function updateTimelineHeader(){

    const titleElement = document.getElementById("timelineTitle");

    const subtitleElement = document.getElementById("timelineSubtitle");

    const controlsElement = document.getElementById("timelineControls");

    const csvButton = document.getElementById("timelineCsvExport");

    if(currentPage === "home"){

        if(titleElement){

            titleElement.textContent = t("homeRecentTitle");

        }

        if(subtitleElement){

            subtitleElement.textContent = t("homeRecentSubtitle");

        }

        controlsElement?.classList.add("hidden");

        csvButton?.classList.add("hidden");

        return;

    }

    const titles = {

        all: t("timelineTitleAll"),
        sleep: t("timelineTitleSleep"),
        breastfeeding: t("timelineTitleBreastfeeding"),
        bottle: t("timelineTitleBottle"),
        diaper: t("timelineTitleDiaper"),
        weight: t("timelineTitleWeight"),
        height: t("timelineTitleHeight")

    };

    if(titleElement){

        titleElement.textContent = titles[activeTimelineFilter];

    }

    if(subtitleElement){

        subtitleElement.textContent = t("timelineSubtitle");

    }

    controlsElement?.classList.remove("hidden");

    csvButton?.classList.remove("hidden");

}

function renderTimeline() {

    updateTimelineHeader();

    const entries = getFilteredEntries();

    if (entries.length === 0) {

        const emptyStateKey =
            currentPage === "home" ? "homeRecentEmptyState" : "emptyStateNoEntries";

        timeline.innerHTML = `

            <div class="emptyState">

                ${t(emptyStateKey)}

            </div>

        `;

        return;

    }

    // Gruppierung nach Tag + gebündeltes Einfügen über ein
    // DocumentFragment: deutlich schnelleres Rendering als viele
    // einzelne appendChild()-Aufrufe direkt am Live-DOM.
    const groups = groupEntriesByDay(entries);

    const fragment = document.createDocumentFragment();

    let cardIndex = 0;

    groups.forEach(group => {

        fragment.appendChild(createDayGroupHeader(group));

        group.entries.forEach(entry => {

            const card = createTimelineCard(entry);

            card.style.animationDelay =
                `${Math.min(cardIndex * TIMELINE_CARD_STAGGER_MS, TIMELINE_CARD_STAGGER_MAX_MS)}ms`;

            fragment.appendChild(card);

            cardIndex++;

        });

    });

    timeline.innerHTML = "";

    timeline.appendChild(fragment);

}

function createTimelineCard(entry) {

    const card = document.createElement("article");

    card.className = "timelineCard";

    const date = new Date(entry.createdAt);

    card.innerHTML = `

        <div class="timelineHeader">

            <div>

                <strong>

                    <span class="cardIcon">${getEntryIcon(entry.type)}</span>

                    <span class="cardTitle">${getEntryTitle(entry)}</span>

                </strong>

                <div class="timelineDate">

                    ${date.toLocaleDateString(getLocale())}

                    ${date.toLocaleTimeString(getLocale(),{

                        hour:"2-digit",

                        minute:"2-digit"

                    })}

                </div>

            </div>

            <div class="timelineActions">

                <button class="editButton" data-id="${entry.id}">

                    ✏️

                </button>

                <button class="deleteButton" data-id="${entry.id}">

                    🗑️

                </button>

            </div>

        </div>
        ${getTimelineDetails(entry)}

        ${entry.note ? `

            <p class="timelineNote">

                ${escapeHtml(entry.note)}

            </p>

        ` : ""}

    `;

    return card;

}
function getTimelineDetails(entry) {

    switch (entry.type) {

        case "sleep":

            return `${entry.data.hours || 0} h ${entry.data.minutes || 0} min`;

        case "bottle":

            return `${entry.data.amount || 0} ml`;

        case "breastfeeding":

            return `${sideLabel(entry.data.side)} · ${entry.data.minutes || 0} min`;

        case "diaper":

            return entry.data.diaperType ? diaperLabel(entry.data.diaperType) : "";

        case "weight":

            return `${entry.data.value || 0} kg`;

        case "height":

            return `${entry.data.value || 0} cm`;

        case "temperature":

            return `${entry.data.value || 0} °C`;

        case "medicine":

            return `${entry.data.name || ""} ${entry.data.dose || ""}`.trim();

        default:

            return "";

    }

}
/* ==========================================================
   TOAST
========================================================== */

let toastTimer = null;

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.remove("hidden");

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

        toast.classList.add("hidden");

    }, TOAST_DURATION_MS);

}
