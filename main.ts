// -when button A is pressed once, the grid is shown in a vertical way
// -when button A is pressed again, the grid is shown in a horizontal way
// -both uses a nested for loops
input.onButtonPressed(Button.A, function () {
    _for += 1
    if (_for == 1) {
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                led.plot(x, y)
                basic.pause(150)
            }
        }
        basic.pause(200)
        basic.clearScreen()
    } else if (_for == 2) {
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                led.plot(y, x)
                basic.pause(150)
            }
        }
        basic.pause(200)
        basic.clearScreen()
    }
})
// when button b is pressed, the grid is shown in a horizontal way using nested while loops
input.onButtonPressed(Button.B, function () {
    while (y <= 0) {
        while (x <= 0) {
            for (let index = 0; index < 5; index++) {
                led.plot(x, y)
                basic.pause(150)
                x += 1
            }
            y += 1
            x = 0
        }
    }
    basic.pause(200)
})
// on shake, program stops or resets
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
// on start, shows a bit of graphics to show its starting and sets variable "for" to 0
let x = 0
let y = 0
let _for = 0
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Target)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.Target)
basic.showIcon(IconNames.SmallDiamond)
basic.pause(200)
basic.clearScreen()
_for = 0
