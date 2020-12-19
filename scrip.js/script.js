let Seoul = document.querySelector(`#Seoul`)
let Toronto = document.querySelector(`#Toronto`)
let NY = document.querySelector(`#NY`)
let HK = document.querySelector(`#HK`)



let audioOne = document.querySelector(`#audioOne`)
let audioTwo = document.querySelector(`#audioTwo`)
let audioThree = document.querySelector(`#audioThree`)
let audioFour = document.querySelector(`#audioFour`)



// Function 1
let playSeoul = function () {
    return audioOne.paused ? audioOne.play() : audioOne.pause();
}
Seoul.addEventListener(`click`, playSeoul)

// Function 2
let playToronto = function () {
    return audioTwo.paused ? audioTwo.play() : audioTwo.pause();
}
Toronto.addEventListener(`click`, playToronto)

// Function 3
let playNY = function () {
    return audioThree.paused ? audioThree.play() : audioThree.pause();
}
NY.addEventListener(`click`, playNY)

//function4
let playHK = function () {
    return audioFour.paused ? audioFour.play() : audioFour.pause();
}
HK.addEventListener(`click`, playHK)


  


