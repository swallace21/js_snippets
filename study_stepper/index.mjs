const urlParams = new URLSearchParams(window.location.search)
const testingDiv = document.getElementById('testing')
const currentStudyStepDIV = document.getElementById('current_study_step')
const nextStudyStepHREF = document.getElementById('next_study_step')
const proceedDIV = document.getElementById('proceed')

const studyStepsKey = 'study_stepsLS'
const studyStepParam = 'study_step'
const studyStep = urlParams.get(studyStepParam)
let studySteps = ['1','2','3','4','5'];

testingDiv.addEventListener("click", function() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    testingDiv.innerText = `You have clicked on this DIV ${localStorage.clickcount} times.`
});

nextStudyStepHREF.addEventListener("click", function() {
    window.href = 'espn.com'
});

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function populateHTML() {
    testingDiv.innerText = `Click on me :)`
    currentStudyStepDIV.innerText = `current study step is ${getStudyStep()}`
}

function getStudyStep() {
    if(!studyStep) {
        studyStep = `unknown. :( `
    }
    return studyStep
}

function populateNextStudyStep() {
    const studyStepPos = studySteps.indexOf(studyStep)
    console.log('studyStep =',studyStep,'studyStepPos =',studyStepPos)
    if((studyStep > -1) && (studyStepPos > -1)) { // it found the current step
        const nextPos = studyStepPos + 1;
        const nextStudyStep = studySteps[nextPos]
        console.log(
                    'studySteps = ',studySteps,
                    ', nextPos =',nextPos,
                    ', nextStudyStep =',nextStudyStep,
                    ',studyStepPos =',studyStepPos
                )
        if(nextStudyStep > -1) {
            nextStudyStepHREF.href = `test.html?${studyStepParam}=${nextStudyStep}` 
            nextStudyStepHREF.innerText = `Proceed to next study step ${nextStudyStep}`
        } else {
            proceedDIV.innerHTML = '<p>Thank you for completing the study :)</p>'
        }
    } else {
        proceedDIV.innerHTML = '<p>We are sorry there appears to be an error :(</p>'
    }
}

function checkStudySteps() {
    studySteps = shuffle(studySteps)
    if(localStorage.getItem(studyStepsKey)) {
        studySteps = JSON.parse(localStorage.getItem(studyStepsKey))
        console.log('studySteps from localstorage =',studySteps)
    } else {
        localStorage.setItem(studyStepsKey, JSON.stringify(studySteps))
        console.log('new studySteps =',studySteps)
    }
    populateNextStudyStep()
}

/* MAIN */
populateHTML()
checkStudySteps()