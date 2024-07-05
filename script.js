const abbreviations = [
    { meaning: "... At (followed by time at which weather change is forecast to occur)", abbreviation: "AT" },
{ meaning: "... From (immediate) (followed by time weather change is forecast to begin", abbreviation: "FM" },
{ meaning: "... Minimum temperature (TAF)", abbreviation: "TN" },
{ meaning: "0 oktas", abbreviation: "SKC" },
{ meaning: "1-2 oktas", abbreviation: "FEW" },
{ meaning: "3-4 oktas", abbreviation: "SCT" },
{ meaning: "30% chance", abbreviation: "PROB30" },
{ meaning: "40% chance", abbreviation: "PROB40" },
{ meaning: "5-7 oktas", abbreviation: "BKN" },
{ meaning: "8 oktas", abbreviation: "OVC" },
{ meaning: "Above", abbreviation: "ABV" },
{ meaning: "Above aerodrome level", abbreviation: "AAL" },
{ meaning: "Above ground level", abbreviation: "AGL" },
{ meaning: "Above mean sea level", abbreviation: "AMSL" },
{ meaning: "Above mountains", abbreviation: "MON" },
{ meaning: "Aerodrome", abbreviation: "AD" },
{ meaning: "Aerodrome closed due to snow", abbreviation: "SNOCLO" },
{ meaning: "Aerodrome height expressed in pressure altitude", abbreviation: "QNE" },
{ meaning: "Altimeter setting region", abbreviation: "ASR" },
{ meaning: "Altimeter sub-scale setting", abbreviation: "QNH" },
{ meaning: "Altitude", abbreviation: "ALT" },
{ meaning: "Altocumulus", abbreviation: "AC" },
{ meaning: "Altostratus", abbreviation: "AS" },
{ meaning: "Amended", abbreviation: "AMD" },
{ meaning: "Approximate or approximately", abbreviation: "APRX" },
{ meaning: "April", abbreviation: "APR" },
{ meaning: "Associated with", abbreviation: "ASSW" },
{ meaning: "At ... (time or place)", abbreviation: "ATP" },
{ meaning: "At sea", abbreviation: "SEA" },
{ meaning: "At the coast", abbreviation: "COT" },
{ meaning: "Atmospheric pressure at specified datum", abbreviation: "QFE" },
{ meaning: "August", abbreviation: "AUG" },
{ meaning: "Automated METAR", abbreviation: "AUTO" },
{ meaning: "Aviation routine weather report", abbreviation: "METAR" },
{ meaning: "Aviation special weather report", abbreviation: "SPECI" },
{ meaning: "Becoming", abbreviation: "BECMG" },
{ meaning: "Before", abbreviation: "BFR" },
{ meaning: "Below", abbreviation: "BLW" },
{ meaning: "Below clouds", abbreviation: "BLO" },
{ meaning: "Between", abbreviation: "BTN" },
{ meaning: "Between layers", abbreviation: "BTL" },
{ meaning: "Blowing", abbreviation: "BL" },
{ meaning: "Boundary", abbreviation: "BDRY" },
{ meaning: "Cancelled", abbreviation: "CNL" },
{ meaning: "Ceiling and visibility OK", abbreviation: "CAVOK" },
{ meaning: "Cirrocumulus", abbreviation: "CC" },
{ meaning: "Cirrostratus", abbreviation: "CS" },
{ meaning: "Cirrus", abbreviation: "CI" },
{ meaning: "Clear Air Turbulence", abbreviation: "CAT" },
{ meaning: "Cloud", abbreviation: "CLD" },
{ meaning: "Cloud base", abbreviation: "BASE" },
{ meaning: "Cloud top", abbreviation: "TOP" },
{ meaning: "Co-ordinated Universal Time", abbreviation: "Z" },
{ meaning: "Corrected", abbreviation: "COR" },
{ meaning: "Correction", abbreviation: "COR" },
{ meaning: "Cumulonimbus", abbreviation: "CB" },
{ meaning: "Cumulus", abbreviation: "CU" },
{ meaning: "December", abbreviation: "DEC" },
{ meaning: "Degrees", abbreviation: "DEG" },
{ meaning: "Degrees Celsius", abbreviation: "C" },
{ meaning: "Dense upper cloud", abbreviation: "DUC" },
{ meaning: "Deteriorate or deteriorating", abbreviation: "DTRT" },
{ meaning: "Dew point temperature", abbreviation: "DP" },
{ meaning: "Downward (tendency in RVR)", abbreviation: "D" },
{ meaning: "Drifting", abbreviation: "DR" },
{ meaning: "Drizzle", abbreviation: "DZ" },
{ meaning: "Duration", abbreviation: "DUR" },
{ meaning: "Dust", abbreviation: "DU" },
{ meaning: "Dust devils", abbreviation: "PO" },
{ meaning: "Dust in air", abbreviation: "DU" },
{ meaning: "Duststorm", abbreviation: "DS" },
{ meaning: "East or easterly", abbreviation: "E" },
{ meaning: "East-north-east or east-north-easterly", abbreviation: "ENE" },
{ meaning: "East-south-east or east-south-easterly", abbreviation: "ESE" },
{ meaning: "Embedded", abbreviation: "EMBD" },
{ meaning: "Estimated time of arrival", abbreviation: "ETA" },
{ meaning: "Estimated time of departure", abbreviation: "ETD" },
{ meaning: "Extend or extending", abbreviation: "EXTD" },
{ meaning: "February", abbreviation: "FEB" },
{ meaning: "Feet", abbreviation: "FT" },
{ meaning: "Feet per minute", abbreviation: "FPM" },
{ meaning: "Flight level", abbreviation: "FL" },
{ meaning: "Fluctuating", abbreviation: "FLUC" },
{ meaning: "Fog", abbreviation: "FG" },
{ meaning: "Fog banks", abbreviation: "PRFG" },
{ meaning: "Fog patches", abbreviation: "BCFG" },
{ meaning: "Forecast", abbreviation: "FCST" },
{ meaning: "Freezing", abbreviation: "FZ" },
{ meaning: "Frequent", abbreviation: "FRQ" },
{ meaning: "From (followed by time weather change is to begin)", abbreviation: "FM" },
{ meaning: "Funnel cloud", abbreviation: "FC" },
{ meaning: "Generally", abbreviation: "GEN" },
{ meaning: "Greater than highest reportable value", abbreviation: "P" },
{ meaning: "Ground", abbreviation: "GND" },
{ meaning: "Gust", abbreviation: "G" },
{ meaning: "Hail (5 mm or more in diameter)", abbreviation: "GR" },
{ meaning: "Haze", abbreviation: "HZ" },
{ meaning: "Heavy", abbreviation: "HVY" },
{ meaning: "Hectopascals (= Millibar)", abbreviation: "HPA" },
{ meaning: "Height or height above", abbreviation: "HGT" },
{ meaning: "High pressure centre", abbreviation: "H" },
{ meaning: "Hours", abbreviation: "HR" },
{ meaning: "Hurricane", abbreviation: "HURCN" },
{ meaning: "Ice crystals", abbreviation: "IC" },
{ meaning: "Ice Pellets", abbreviation: "PL" },
{ meaning: "Icing", abbreviation: "ICE" },
{ meaning: "Improve or improving", abbreviation: "IMPR" },
{ meaning: "In valleys", abbreviation: "VAL" },
{ meaning: "In vicinity of aerodrome", abbreviation: "VC..." },
{ meaning: "Inches", abbreviation: "INS" },
{ meaning: "Inland", abbreviation: "LAN" },
{ meaning: "Instrumented RVR", abbreviation: "IRVR" },
{ meaning: "Intensify or intensifying", abbreviation: "INTS" },
{ meaning: "Intensifying", abbreviation: "INTSF" },
{ meaning: "Intensity", abbreviation: "INTST" },
{ meaning: "Isolated", abbreviation: "ISOL" },
{ meaning: "January", abbreviation: "JAN" },
{ meaning: "Jet stream", abbreviation: "JTST" },
{ meaning: "July", abbreviation: "JUL" },
{ meaning: "June", abbreviation: "JUN" },
{ meaning: "Kilometres", abbreviation: "KM" },
{ meaning: "Kilometres per hour", abbreviation: "KMH" },
{ meaning: "Knots", abbreviation: "KT" },
{ meaning: "Layer or layered", abbreviation: "LYR" },
{ meaning: "Less than 0°C", abbreviation: "M" },
{ meaning: "Level", abbreviation: "LVL" },
{ meaning: "Light & variable", abbreviation: "LV" },
{ meaning: "Line", abbreviation: "LINE" },
{ meaning: "Line squall", abbreviation: "LSQ" },
{ meaning: "Locally", abbreviation: "LCA" },
{ meaning: "Low drifting", abbreviation: "DR" },
{ meaning: "Low pressure centre", abbreviation: "L" },
{ meaning: "March", abbreviation: "MAR" },
{ meaning: "Maximum", abbreviation: "MAX" },
{ meaning: "Maximum temperature (TAF)", abbreviation: "TX" },
{ meaning: "Mean Sea Level", abbreviation: "MSL" },
{ meaning: "Metres", abbreviation: "M" },
{ meaning: "Metres per second", abbreviation: "MPS" },
{ meaning: "Microburst", abbreviation: "MBST" },
{ meaning: "Millibars", abbreviation: "MB" },
{ meaning: "Minimum", abbreviation: "MNM" },
{ meaning: "Minus", abbreviation: "MS" },
{ meaning: "Minutes", abbreviation: "MIN" },
{ meaning: "Mist", abbreviation: "BR" },
{ meaning: "Mixed type of ice formation", abbreviation: "MX" },
{ meaning: "Moderate", abbreviation: "MOD" },
{ meaning: "Mountain waves", abbreviation: "MTW" },
{ meaning: "Move or moving or movement", abbreviation: "MOV" },
{ meaning: "Nautical miles", abbreviation: "NM" },
{ meaning: "Near or over large towns", abbreviation: "CIT" },
{ meaning: "Nimbostratus", abbreviation: "NS" },
{ meaning: "No change", abbreviation: "NC" },
{ meaning: "No Cloud Detected", abbreviation: "NCD" },
{ meaning: "No cloud detected", abbreviation: "NCD" },
{ meaning: "No Directional Variation", abbreviation: "NDV" },
{ meaning: "No significant change expected", abbreviation: "NOSIG" },
{ meaning: "No significant cloud", abbreviation: "NSC" },
{ meaning: "No significant weather", abbreviation: "NSW" },
{ meaning: "None", abbreviation: "NIL" },
{ meaning: "North Atlantic", abbreviation: "NAT" },
{ meaning: "North or northerly", abbreviation: "N" },
{ meaning: "North-east or north-easterly", abbreviation: "NE" },
{ meaning: "North-north-east", abbreviation: "NNE" },
{ meaning: "North-north-west", abbreviation: "NNW" },
{ meaning: "North-west or north-westerly", abbreviation: "NW" },
{ meaning: "Notice to personnel", abbreviation: "NOTAM" },
{ meaning: "November", abbreviation: "NOV" },
{ meaning: "Obscure or obscured", abbreviation: "OBSC" },
{ meaning: "Observe or observed", abbreviation: "OBS" },
{ meaning: "Occasional, occasionally", abbreviation: "OCNL" },
{ meaning: "October", abbreviation: "OCT" },
{ meaning: "Outlook", abbreviation: "OTLK" },
{ meaning: "Overcast (8 oktas)", abbreviation: "OVC" },
{ meaning: "Partial", abbreviation: "PR" },
{ meaning: "Patches", abbreviation: "BC" },
{ meaning: "Plus", abbreviation: "PS" },
{ meaning: "Position", abbreviation: "PSN" },
{ meaning: "Pressure falling rapidly", abbreviation: "PRESFR" },
{ meaning: "Pressure rising rapidly", abbreviation: "PRESRR" },
{ meaning: "Pressure System(s)", abbreviation: "PSYS" },
{ meaning: "radioactive", abbreviation: "RDOACT" },
{ meaning: "Rain", abbreviation: "RA" },
{ meaning: "Remarks", abbreviation: "RMK" },
{ meaning: "Runway", abbreviation: "RWY" },
{ meaning: "Runway visual range", abbreviation: "RVR" },
{ meaning: "Sand", abbreviation: "SA" },
{ meaning: "Sand storm", abbreviation: "SS" },
{ meaning: "Scattered", abbreviation: "SCT" },
{ meaning: "September", abbreviation: "SEP" },
{ meaning: "Severe", abbreviation: "SEV" },
{ meaning: "Shallow", abbreviation: "MI" },
{ meaning: "Showers", abbreviation: "SH" },
{ meaning: "Significant", abbreviation: "SIG" },
{ meaning: "Sky clear", abbreviation: "SKC" },
{ meaning: "Slow", abbreviation: "SLW" },
{ meaning: "Small hail or snow pellets", abbreviation: "GS" },
{ meaning: "Smoke", abbreviation: "FU" },
{ meaning: "Snow", abbreviation: "SN" },
{ meaning: "Snow grains", abbreviation: "SG" },
{ meaning: "South or southerly", abbreviation: "S" },
{ meaning: "South-east or south-easterly", abbreviation: "SE" },
{ meaning: "South-south-east", abbreviation: "SSE" },
{ meaning: "South-south-west", abbreviation: "SSW" },
{ meaning: "South-west or south-westerly", abbreviation: "SW" },
{ meaning: "Spray", abbreviation: "PY" },
{ meaning: "Squall", abbreviation: "SQ" },
{ meaning: "Squall line", abbreviation: "SQL" },
{ meaning: "Squalls", abbreviation: "SQ" },
{ meaning: "Stationary", abbreviation: "STNR" },
{ meaning: "Statute miles", abbreviation: "SM" },
{ meaning: "Stratocumulus", abbreviation: "SC" },
{ meaning: "Stratus", abbreviation: "ST" },
{ meaning: "Surface", abbreviation: "SFC" },
{ meaning: "Temperature", abbreviation: "T" },
{ meaning: "Temporary or temporarily", abbreviation: "TEMPO" },
{ meaning: "Terminal aerodrome forecast", abbreviation: "TAF" },
{ meaning: "Thunderstorm", abbreviation: "TS" },
{ meaning: "Till (followed by time by which weather change is forecast to end)", abbreviation: "TL" },
{ meaning: "Tornado", abbreviation: "plusFC" },
{ meaning: "Towering Cumulus", abbreviation: "TCU" },
{ meaning: "Tropical cyclone", abbreviation: "TC" },
{ meaning: "Tropopause", abbreviation: "TROP" },
{ meaning: "Tsunami (used in aerodrome warnings)", abbreviation: "TSUNAMI" },
{ meaning: "Turbulence", abbreviation: "TURB" },
{ meaning: "Undefined", abbreviation: "UP" },
{ meaning: "Unidentified Precipitation", abbreviation: "UP" },
{ meaning: "Until", abbreviation: "TL" },
{ meaning: "Upward", abbreviation: "U" },
{ meaning: "Variable", abbreviation: "VRB" },
{ meaning: "Vertical speed", abbreviation: "VSP" },
{ meaning: "Vertical visibility", abbreviation: "VV" },
{ meaning: "Vicinity of the aerodrome (8 - 16 km)", abbreviation: "VC" },
{ meaning: "Visibility", abbreviation: "VIS" },
{ meaning: "Volcanic Ash", abbreviation: "VA" },
{ meaning: "Warning", abbreviation: "WRNG" },
{ meaning: "Waterspout", abbreviation: "WTSPT" },
{ meaning: "Weaken or weakening", abbreviation: "WKN" },
{ meaning: "Weather", abbreviation: "WX" },
{ meaning: "Weather front", abbreviation: "FRONT" },
{ meaning: "West or westerly", abbreviation: "W" },
{ meaning: "West-north-west", abbreviation: "WNW" },
{ meaning: "West-south-west", abbreviation: "WSW" },
{ meaning: "Widespread", abbreviation: "WDSPR" },
{ meaning: "Wind shear", abbreviation: "WS" },
{ meaning: "Wind speed", abbreviation: "WSPD" },
{ meaning: "Within", abbreviation: "WI" },
{ meaning: "without human editing", abbreviation: "AUTO" },
{ meaning: "World Area Forecast Centre", abbreviation: "WAFC" }
    
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
