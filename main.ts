input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(y, x)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        while (true) {
            let x = 0
            let y = 0
            led.plot(y, x)
            basic.pause(100)
        }
    }
})
basic.forever(function () {
	
})
