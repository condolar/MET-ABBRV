const abbreviations = [
    { meaning: "Altocumulus", abbreviation: "AC" },
    { meaning: "Aerodrome", abbreviation: "AD" },
    { meaning: "Above ground level", abbreviation: "AGL" },
    { meaning: "Amend or amended", abbreviation: "AMD" },
    { meaning: "Above mean sea level", abbreviation: "AMSL" },
    { meaning: "April", abbreviation: "APR" },
    { meaning: "Altostratus", abbreviation: "AS" },
    { meaning: "Altimeter setting region", abbreviation: "ASR" },
    { meaning: "August", abbreviation: "AUG" },
    { meaning: "Automated METAR (produced with CAA approval outside normal operational hours)", abbreviation: "AUTO" },
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
    { meaning: "Downward (tendency in RVR in Civil observations)", abbreviation: "D" },
    { meaning: "December", abbreviation: "DEC" },
    { meaning: "Degrees", abbreviation: "DEG" },
    { meaning: "Dew point temperature", abbreviation: "DP" },
    { meaning: "Low drifting (followed by DU, SA or SN)", abbreviation: "DR" },
    { meaning: "Duststorm", abbreviation: "DS" },
    { meaning: "Dust (in suspension)", abbreviation: "DU" },
    { meaning: "Dense upper cloud", abbreviation: "DUC" },
    { meaning: "Drizzle", abbreviation: "DZ" },
    { meaning: "East or easterly", abbreviation: "E" },
    { meaning: "East-north-east or east-north-easterly", abbreviation: "ENE" },
    { meaning: "East-south-east or east-south-easterly", abbreviation: "ESE" },
    { meaning: "Embedded", abbreviation: "EMBD" },
    { meaning: "Estimated time of arrival", abbreviation: "ETA" },
    { meaning: "Estimated time of departure", abbreviation: "ETD" },
    { meaning: "Funnel cloud", abbreviation: "FC" },
    { meaning: "Forecast", abbreviation: "FCST" },
    { meaning: "February", abbreviation: "FEB" },
    { meaning: "Few (1 or 2 oktas)", abbreviation: "FEW" },
    { meaning: "Fog", abbreviation: "FG" },
    { meaning: "Flight level", abbreviation: "FL" },
    { meaning: "From (followed by time weather change is to begin)", abbreviation: "FM..." },
    { meaning: "Feet per minute", abbreviation: "FPM" },
    { meaning: "Frequent", abbreviation: "FRQ" },
    { meaning: "Feet", abbreviation: "FT" },
    { meaning: "Smoke", abbreviation: "FU" },
    { meaning: "Freezing (followed by DZ, FG or RA)", abbreviation: "FZ" },
    { meaning: "Gust", abbreviation: "G" },
    { meaning: "Generally", abbreviation: "GEN" },
    { meaning: "Ground", abbreviation: "GND" },
    { meaning: "Hail (5 mm or more in diameter)", abbreviation: "GR" },
    { meaning: "Small hail or snow pellets", abbreviation: "GS" },
    { meaning: "High pressure centre", abbreviation: "H" },
    { meaning: "Hectopascals (= Millibar)", abbreviation: "HPA" },
    { meaning: "Heavy", abbreviation: "HVY" },
    { meaning: "Haze", abbreviation: "HZ" },
    { meaning: "Ice crystals (diamond dust)", abbreviation: "IC" },
    { meaning: "Icing", abbreviation: "ICE" },
    { meaning: "Inches (on F2309)", abbreviation: "INS" },
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
    { meaning: "Inland (or over land)", abbreviation: "LAN" },
    { meaning: "Locally", abbreviation: "LCA" },
    { meaning: "Line squall", abbreviation: "LSQ" },
    { meaning: "Light & variable (relating to wind)", abbreviation: "LV" },
    { meaning: "Layer(s), layered", abbreviation: "LYR" },
    { meaning: "Less than 0°C (temperature)", abbreviation: "M" },
    { meaning: "Less than the lowest reportable value (RVR)", abbreviation: "M" },
    { meaning: "Metres", abbreviation: "M" },
    { meaning: "March", abbreviation: "MAR" },
    { meaning: "Maximum", abbreviation: "MAX" },
    { meaning: "Millibars", abbreviation: "MB" },
    { meaning: "Aviation routine weather report", abbreviation: "METAR" },
    { meaning: "Shallow (followed by FG)", abbreviation: "MI" },
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
    { meaning: "No Cloud Detected (on AUTO METARs only)", abbreviation: "NCD" },
    { meaning: "No Directional Variation (on AUTO METARs only)", abbreviation: "NDV" },
    { meaning: "North-east or north-easterly", abbreviation: "NE" },
    { meaning: "None", abbreviation: "NIL" },
    { meaning: "Nautical miles", abbreviation: "NM" },
    { meaning: "North-north-east or north-north-easterly", abbreviation: "NNE" },
    { meaning: "North-north-west or north-north-westerly", abbreviation: "NNW" },
    { meaning: "No significant change expected", abbreviation: "NOSIG" },
    { meaning: "Notice containing important aeronautical information to all personnel concerned with flight operations", abbreviation: "NOTAM" },
    { meaning: "November", abbreviation: "NOV" },
    { meaning: "Nimbostratus", abbreviation: "NS" },
    { meaning: "No significant cloud", abbreviation: "NSC" },
    { meaning: "No significant weather", abbreviation: "NSW" },
    { meaning: "North-west or north-westerly", abbreviation: "NW" },
    { meaning: "Occasional, occasionally", abbreviation: "OCNL" },
    { meaning: "October", abbreviation: "OCT" },
    { meaning: "Overcast (8 oktas)", abbreviation: "OVC" },
    { meaning: "Greater than the highest reportable value (RVR)", abbreviation: "P" },
    { meaning: "Ice pellets", abbreviation: "PL" },
    { meaning: "Pressure", abbreviation: "PRES" },
    { meaning: "Present weather", abbreviation: "P/WX" },
    { meaning: "Runway visual range", abbreviation: "R" },
    { meaning: "Rain", abbreviation: "RA" },
    { meaning: "Rapid (used to qualify pressure changes)", abbreviation: "RAP" },
    { meaning: "Regular aerodrome meteorological report", abbreviation: "REG" },
    { meaning: "Runway end visibility", abbreviation: "REV" },
    { meaning: "Sea level pressure", abbreviation: "SLP" },
    { meaning: "Small aircraft advisory", abbreviation: "SAA" },
    { meaning: "South or southerly", abbreviation: "S" },
    { meaning: "South-east or south-easterly", abbreviation: "SE" },
    { meaning: "Severe icing", abbreviation: "SEV ICE" },
    { meaning: "Significant meteorological information", abbreviation: "SIGMET" },
    { meaning: "Silence periods (for radio propagation forecasts)", abbreviation: "SIL" },
    { meaning: "Snow showers", abbreviation: "SN" },
    { meaning: "Snow", abbreviation: "SNOW" },
    { meaning: "Squall", abbreviation: "SQ" },
    { meaning: "Sea surface temperature", abbreviation: "SST" },
    { meaning: "Slight", abbreviation: "SLT" },
    { meaning: "South-south-east or south-south-easterly", abbreviation: "SSE" },
    { meaning: "South-south-west or south-south-westerly", abbreviation: "SSW" },
    { meaning: "Snow showers", abbreviation: "SSHS" },
    { meaning: "South-west or south-westerly", abbreviation: "SW" },
    { meaning: "Scattered (3 or 4 oktas)", abbreviation: "SCT" },
    { meaning: "Surface", abbreviation: "SFC" },
    { meaning: "Shallow", abbreviation: "SH" },
    { meaning: "Sandstorm", abbreviation: "SS" },
    { meaning: "Surface wind", abbreviation: "SW" },
    { meaning: "Turbulence", abbreviation: "TB" },
    { meaning: "Thunderstorm", abbreviation: "TS" },
    { meaning: "Temporarily", abbreviation: "TEMPO" },
    { meaning: "Towering cumulus", abbreviation: "TCU" },
    { meaning: "Type of weather", abbreviation: "TYPE WX" },
    { meaning: "Unchanged", abbreviation: "UNCH" },
    { meaning: "Unknown", abbreviation: "UNKN" },
    { meaning: "Vertical visibility", abbreviation: "VV" },
    { meaning: "Visibility", abbreviation: "VIS" },
    { meaning: "Visibility varying rapidly", abbreviation: "VRA" },
    { meaning: "Very few", abbreviation: "VFEW" },
    { meaning: "Variable", abbreviation: "VRB" },
    { meaning: "West or westerly", abbreviation: "W" },
    { meaning: "West-north-west or west-north-westerly", abbreviation: "WNW" },
    { meaning: "West-south-west or west-south-westerly", abbreviation: "WSW" },
    { meaning: "Weakening", abbreviation: "WEAKG" },
    { meaning: "Wet (damp)", abbreviation: "WET" },
    { meaning: "Wind", abbreviation: "WND" },
    { meaning: "Wind variable in direction", abbreviation: "WVRD" },
    { meaning: "Yard", abbreviation: "YD" },
    { meaning: "Years", abbreviation: "YR" }
];


// Define your abbreviations array here if you haven't already

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score'); // Reference to score element in HTML

let currentQuestion = {};
let correctAnswer = '';
let score = 0; // Initialize score counter
let totalQuestions = 0; // Initialize total questions counter

nextButton.addEventListener('click', setNextQuestion);

function setNextQuestion() {
    resetState();
    showQuestion();
}

function showQuestion() {
    const randomIndex = Math.floor(Math.random() * abbreviations.length);
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
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    selectedButton.classList.add('selected'); // Add selected class to the clicked button
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
        button.disabled = true; // Disable buttons after selection
    });

    incrementScore(correct); // Call incrementScore with correct parameter

    nextButton.classList.remove('hide');
}

function incrementScore(correct) {
    totalQuestions++; // Increment total questions counter
    if (correct) {
        score++; // Increment score if answer is correct
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

setNextQuestion(); // Start the quiz
