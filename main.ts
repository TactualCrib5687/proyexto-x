basic.showString("Hello!")
basic.clearScreen()
music.playMelody("C5 F A G E F G E ", 116)
basic.forever(function () {
    basic.showString("Hello!")
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
})
