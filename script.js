const abbreviations = [
    { meaning: "Altocumulus", abbreviation: "AC" },
{ meaning: "Aerodrome", abbreviation: "AD" },
{ meaning: "Above ground level", abbreviation: "AGL" },
{ meaning: "Amend or amended", abbreviation: "AMD" },
{ meaning: "Above mean sea level", abbreviation: "AMSL" },
{ meaning: "Approximate", abbreviation: "APRX" },
{ meaning: "Associated with", abbreviation: "ASSW" },
{ meaning: "April", abbreviation: "APR" },
{ meaning: "Altostratus", abbreviation: "AS" },
{ meaning: "Altimeter setting region", abbreviation: "ASR" },
{ meaning: "August", abbreviation: "AUG" },
{ meaning: "Automated METAR", abbreviation: "AUTO" },
{ meaning: "Cloud base", abbreviation: "BASE" },
{ meaning: "Fog patches", abbreviation: "BCFG" },
{ meaning: "Becoming", abbreviation: "BECMG" },
{ meaning: "Broken (5 to 7 oktas)", abbreviation: "BKN" },
{ meaning: "Blowing", abbreviation: "BL" },
{ meaning: "Below", abbreviation: "BLW" },
{ meaning: "Mist", abbreviation: "BR" },
{ meaning: "Between", abbreviation: "BTN" },
{ meaning: "Degrees Celsius", abbreviation: "C" },
{ meaning: "Clear Air Turbulence", abbreviation: "CAT" },
{ meaning: "Ceiling and visibility OK", abbreviation: "CAVOK" },
{ meaning: "Cumulonimbus", abbreviation: "CB" },
{ meaning: "Cirrocumulus", abbreviation: "CC" },
{ meaning: "Cirrus", abbreviation: "CI" },
{ meaning: "Near or over large towns", abbreviation: "CIT" },
{ meaning: "Cloud", abbreviation: "CLD" },
{ meaning: "Correction", abbreviation: "COR" },
{ meaning: "At the coast", abbreviation: "COT" },
{ meaning: "Cirrostratus", abbreviation: "CS" },
{ meaning: "Cumulus", abbreviation: "CU" },
{ meaning: "Downward (tendency in RVR)", abbreviation: "D" },
{ meaning: "December", abbreviation: "DEC" },
{ meaning: "Degrees", abbreviation: "DEG" },
{ meaning: "Dew point temperature", abbreviation: "DP" },
{ meaning: "Low drifting", abbreviation: "DR" },
{ meaning: "Duststorm", abbreviation: "DS" },
{ meaning: "Dust (in suspension)", abbreviation: "DU" },
{ meaning: "Dense upper cloud", abbreviation: "DUC" },
{ meaning: "Deteriorate or deteriorating", abbreviation: "DTRT" },
{ meaning: "Drizzle", abbreviation: "DZ" },
{ meaning: "East or easterly", abbreviation: "E" },
{ meaning: "East-north-east or east-north-easterly", abbreviation: "ENE" },
{ meaning: "East-south-east or east-south-easterly", abbreviation: "ESE" },
{ meaning: "Embedded", abbreviation: "EMBD" },
{ meaning: "Estimated time of arrival", abbreviation: "ETA" },
{ meaning: "Estimated time of departure", abbreviation: "ETD" },
{ meaning: "Extend or extending", abbreviation: "EXTD" },
{ meaning: "Funnel cloud", abbreviation: "FC" },
{ meaning: "Forecast", abbreviation: "FCST" },
{ meaning: "February", abbreviation: "FEB" },
{ meaning: "Few (1 or 2 oktas)", abbreviation: "FEW" },
{ meaning: "Fog", abbreviation: "FG" },
{ meaning: "Flight level", abbreviation: "FL" },
{ meaning: "Fluctutating", abbreviation: "FLUC" },
{ meaning: "From (followed by time weather change is to begin)", abbreviation: "FM..." },
{ meaning: "Feet per minute", abbreviation: "FPM" },
{ meaning: "Frequent", abbreviation: "FRQ" },
{ meaning: "Feet", abbreviation: "FT" },
{ meaning: "Smoke", abbreviation: "FU" },
{ meaning: "Freezing", abbreviation: "FZ" },
{ meaning: "Gust", abbreviation: "G" },
{ meaning: "Generally", abbreviation: "GEN" },
{ meaning: "Ground", abbreviation: "GND" },
{ meaning: "Hail (5 mm or more in diameter)", abbreviation: "GR" },
{ meaning: "Small hail or snow pellets", abbreviation: "GS" },
{ meaning: "High pressure centre", abbreviation: "H" },
{ meaning: "Hectopascals (= Millibar)", abbreviation: "HPA" },
{ meaning: "Heavy", abbreviation: "HVY" },
{ meaning: "Haze", abbreviation: "HZ" },
{ meaning: "Ice crystals", abbreviation: "IC" },
{ meaning: "Icing", abbreviation: "ICE" },
{ meaning: "Inches", abbreviation: "INS" },
{ meaning: "Intensifying", abbreviation: "INTSF" },
{ meaning: "Instrumented RVR", abbreviation: "IRVR" },
{ meaning: "Isolated", abbreviation: "ISOL" },
{ meaning: "January", abbreviation: "JAN" },
{ meaning: "Jet stream", abbreviation: "JTST" },
{ meaning: "July", abbreviation: "JUL" },
{ meaning: "June", abbreviation: "JUN" },
{ meaning: "Kilometres", abbreviation: "KM" },
{ meaning: "Kilometres per hour", abbreviation: "KMH" },
{ meaning: "Knots", abbreviation: "KT" },
{ meaning: "Low pressure centre", abbreviation: "L" },
{ meaning: "Inland", abbreviation: "LAN" },
{ meaning: "Locally", abbreviation: "LCA" },
{ meaning: "Line squall", abbreviation: "LSQ" },
{ meaning: "Light & variable", abbreviation: "LV" },
{ meaning: "Layer(s), layered", abbreviation: "LYR" },
{ meaning: "Less than 0°C", abbreviation: "M" },
{ meaning: "March", abbreviation: "MAR" },
{ meaning: "Maximum", abbreviation: "MAX" },
{ meaning: "Millibars", abbreviation: "MB" },
{ meaning: "Aviation routine weather report", abbreviation: "METAR" },
{ meaning: "Shallow", abbreviation: "MI" },
{ meaning: "Minimum", abbreviation: "MNM" },
{ meaning: "Moderate", abbreviation: "MOD" },
{ meaning: "Above or covering mountains", abbreviation: "MON" },
{ meaning: "Metres per second", abbreviation: "MPS" },
{ meaning: "Minus", abbreviation: "MS" },
{ meaning: "Mean sea level", abbreviation: "MSL" },
{ meaning: "Mountain waves", abbreviation: "MTW" },
{ meaning: "North or northerly", abbreviation: "N" },
{ meaning: "North Atlantic", abbreviation: "NAT" },
{ meaning: "No change", abbreviation: "NC" },
{ meaning: "No Cloud Detected", abbreviation: "NCD" },
{ meaning: "No Directional Variation", abbreviation: "NDV" },
{ meaning: "North-east or north-easterly", abbreviation: "NE" },
{ meaning: "None", abbreviation: "NIL" },
{ meaning: "Nautical miles", abbreviation: "NM" },
{ meaning: "North-north-east", abbreviation: "NNE" },
{ meaning: "North-north-west", abbreviation: "NNW" },
{ meaning: "No significant change expected", abbreviation: "NOSIG" },
{ meaning: "Notice to personnel", abbreviation: "NOTAM" },
{ meaning: "November", abbreviation: "NOV" },
{ meaning: "Nimbostratus", abbreviation: "NS" },
{ meaning: "No significant cloud", abbreviation: "NSC" },
{ meaning: "No significant weather", abbreviation: "NSW" },
{ meaning: "North-west or north-westerly", abbreviation: "NW" },
{ meaning: "Occasional, occasionally", abbreviation: "OCNL" },
{ meaning: "October", abbreviation: "OCT" },
{ meaning: "Overcast (8 oktas)", abbreviation: "OVC" },
{ meaning: "Greater than highest reportable value", abbreviation: "P" },
{ meaning: "Ice pellets", abbreviation: "PL" },
{ meaning: "Dust devils", abbreviation: "PO" },
{ meaning: "Fog banks", abbreviation: "PRFG" },
{ meaning: "30% chance", abbreviation: "PROB30" },
{ meaning: "40% chance", abbreviation: "PROB40" },
{ meaning: "Plus", abbreviation: "PS" },
{ meaning: "Pressure System(s)", abbreviation: "PSYS" },
{ meaning: "Atmospheric pressure at specified datum", abbreviation: "QFE" },
{ meaning: "Aerodrome height expressed in pressure altitude", abbreviation: "QNE" },
{ meaning: "Altimeter sub-scale setting", abbreviation: "QNH" },
{ meaning: "Rain", abbreviation: "RA" },
{ meaning: "Remarks", abbreviation: "RMK" },
{ meaning: "Runway visual range", abbreviation: "RVR" },
{ meaning: "Runway", abbreviation: "RWY" },
{ meaning: "South or southerly", abbreviation: "S" },
{ meaning: "Sand (in suspension)", abbreviation: "SA" },
{ meaning: "Stratocumulus", abbreviation: "SC" },
{ meaning: "Scattered", abbreviation: "SCT" },
{ meaning: "South-east or south-easterly", abbreviation: "SE" },
{ meaning: "At sea", abbreviation: "SEA" },
{ meaning: "September", abbreviation: "SEP" },
{ meaning: "Severe", abbreviation: "SEV" },
{ meaning: "Surface", abbreviation: "SFC" },
{ meaning: "Snow grains", abbreviation: "SG" },
{ meaning: "Shower", abbreviation: "SH..." },
{ meaning: "Significant", abbreviation: "SIG" },
{ meaning: "Sky clear", abbreviation: "SKC" },
{ meaning: "Snow (flakes)", abbreviation: "SN" },
{ meaning: "Aviation special weather report", abbreviation: "SPECI" },
{ meaning: "Squall", abbreviation: "SQ" },
{ meaning: "Sandstorm", abbreviation: "SS" },
{ meaning: "South-south-east", abbreviation: "SSE" },
{ meaning: "South-south-west", abbreviation: "SSW" },
{ meaning: "Stratus", abbreviation: "ST" },
{ meaning: "Stationary", abbreviation: "STNR" },
{ meaning: "South-west or south-westerly", abbreviation: "SW" },
{ meaning: "Temperature", abbreviation: "T" },
{ meaning: "Terminal aerodrome forecast", abbreviation: "TAF" },
{ meaning: "Towering cumulus", abbreviation: "TCU" },
{ meaning: "Temporary, temporarily", abbreviation: "TEMPO" },
{ meaning: "Until", abbreviation: "TL" },
{ meaning: "Cloud top", abbreviation: "TOP" },
{ meaning: "Tropopause", abbreviation: "TROP" },
{ meaning: "Thunderstorm", abbreviation: "TS" },
{ meaning: "Turbulence", abbreviation: "TURB" },
{ meaning: "Upward", abbreviation: "U" },
{ meaning: "Unidentified Precipitation", abbreviation: "UP" },
{ meaning: "Co-ordinated Universal Time", abbreviation: "UTC" },
{ meaning: "Volcanic ash", abbreviation: "VA" },
{ meaning: "In valleys", abbreviation: "VAL" },
{ meaning: "In vicinity of aerodrome", abbreviation: "VC..." },
{ meaning: "Visibility", abbreviation: "VIS" },
{ meaning: "Variable", abbreviation: "VRB" },
{ meaning: "Vertical speed", abbreviation: "VSP" },
{ meaning: "West or westerly", abbreviation: "W" },
{ meaning: "World Area Forecast Centre", abbreviation: "WAFC" },
{ meaning: "Widespread", abbreviation: "WDSPR" },
{ meaning: "West-north-west", abbreviation: "WNW" },
{ meaning: "Warning", abbreviation: "WRNG" },
{ meaning: "Wind shear", abbreviation: "WS" },
{ meaning: "Wind speed", abbreviation: "WSPD" },
{ meaning: "West-south-west", abbreviation: "WSW" },
{ meaning: "Weather", abbreviation: "WX" },
{ meaning: "Co-ordinated Universal Time", abbreviation: "Z" }
    
];





const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score');

let currentQuestion = {};
let correctAnswer = '';
let score = 0;
let totalQuestions = 0;
let askedQuestions = []; // Array to store indices of asked questions

nextButton.addEventListener('click', setNextQuestion);

function setNextQuestion() {
    resetState();
    showQuestion();
}

function showQuestion() {
    let randomIndex;

    // Ensure unique question
    do {
        randomIndex = Math.floor(Math.random() * abbreviations.length);
    } while (askedQuestions.includes(randomIndex));

    askedQuestions.push(randomIndex); // Add index to asked questions

    currentQuestion = abbreviations[randomIndex];
    correctAnswer = currentQuestion.meaning;

    questionElement.innerText = currentQuestion.abbreviation;

    const answers = generateRandomAnswers();
    answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        if (answer === correctAnswer) {
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function generateRandomAnswers() {
    const answers = [correctAnswer];
    const correctAbbreviation = currentQuestion.abbreviation.toUpperCase();

    let filteredAbbreviations = abbreviations.filter(entry => {
        const abbreviation = entry.abbreviation.toUpperCase();
        return (
            abbreviation.includes(correctAbbreviation) ||
            abbreviation.charAt(0) === correctAbbreviation.charAt(0)
        );
    });

    filteredAbbreviations = filteredAbbreviations.filter(entry => entry.meaning !== correctAnswer);
    filteredAbbreviations.sort(() => Math.random() - 0.5);

    let count = 0;
    while (answers.length < 4 && count < 2 && count < filteredAbbreviations.length) {
        const answer = filteredAbbreviations[count].meaning;
        if (!answers.includes(answer)) {
            answers.push(answer);
        }
        count++;
    }

    while (answers.length < 4) {
        const randomIndex = Math.floor(Math.random() * abbreviations.length);
        const randomAnswer = abbreviations[randomIndex].meaning;
        if (!answers.includes(randomAnswer)) {
            answers.push(randomAnswer);
        }
    }

    return answers.sort(() => Math.random() - 0.5);
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    clearStatusClass(document.body);
    if (totalQuestions >= abbreviations.length) {
        // Reset askedQuestions array when all questions have been asked
        askedQuestions = [];
        totalQuestions = 0;
        score = 0;
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    selectedButton.classList.add('selected');
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
        button.disabled = true;
    });

    incrementScore(correct);
    nextButton.classList.remove('hide');
}

function incrementScore(correct) {
    totalQuestions++;
    if (correct) {
        score++;
    }
    updateScoreDisplay();
}

function updateScoreDisplay() {
    scoreElement.textContent = `Score: ${score} / ${totalQuestions}`;
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

setNextQuestion();
