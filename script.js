//get homescore
let homeScoreElement = document.getElementById('home-score')
let homeScore = 0
//get guestscore
let guestScoreElement = document.getElementById('guest-score')
let guestScore = 0
//function to update scores
function add1(team) {
  if (team === 'HOME') {
    homeScore += 1;
    homeScoreElement.textContent = homeScore
  } else {
    guestScore += 1;
    guestScoreElement.textContent = guestScore
  }
}

function add2(team) {
  if (team === 'HOME') {
    homeScore += 2;
    homeScoreElement.textContent = homeScore
  } else {
    guestScore += 2;
    guestScoreElement.textContent = guestScore
  }
}

function add3(team) {
  if (team === 'HOME') {
    homeScore += 3;
    homeScoreElement.textContent = homeScore
  } else {
    guestScore += 3;
    guestScoreElement.textContent = guestScore
  }
}
//function for reset-btn
function resetGame() {
  homeScore = 0
  homeScoreElement.textContent = homeScore
  guestScore = 0
  guestScoreElement.textContent = guestScore
}

