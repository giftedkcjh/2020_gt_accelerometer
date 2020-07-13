basic.forever(function () {
    while (input.acceleration(Dimension.Z) >= -512) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # . # . #
            . # # # .
            . . # . .
            `)
        music.playTone(659, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
