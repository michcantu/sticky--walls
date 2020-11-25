function check_3 () {
    if (x == 3 && y == 0) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 3 && y == 1) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 4 && y == 3) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 0 && y == 2) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 1 && y == 2) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 1 && y == 4) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 2 && y == 4) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 2 && y == 4) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 0 && y == 0) {
        basic.clearScreen()
        music.playMelody("D G E A C5 F C B ", 387)
        basic.showString("CONGRATS!")
        sum_win += 10
        for (let index = 0; index < 2; index++) {
            music.playMelody("D G E A C5 F C B ", 387)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . # . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . # . .
                . # . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . # .
                # . # . .
                . # . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                . . . . .
                `)
        }
        music.playMelody("D G E A C5 F C B ", 387)
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . . #
                . . # # .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . # .
                . # # . .
                `)
        }
    }
}
input.onPinPressed(TouchPin.P0, function () {
    dice = randint(1, 3)
    basic.showNumber(dice)
    x = 4
    y = 4
    if (dice == 1) {
        basic.showLeds(`
            . # . . #
            . . . . #
            . . # . .
            # . # . #
            # . . . .
            `)
        led.plot(x, y)
    } else if (dice == 2) {
        basic.showLeds(`
            . . . # #
            # . . . .
            # . # # .
            . . . . .
            . # . . .
            `)
        led.plot(x, y)
    } else if (dice == 3) {
        basic.showLeds(`
            . . . # .
            . . . # .
            # # . . .
            . . . . #
            . # # . .
            `)
        led.plot(x, y)
    }
})
input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    basic.pause(100)
    x += -1
    led.toggle(x, y)
    if (dice == 1) {
        check_1()
    } else if (dice == 2) {
        check_2()
    } else if (dice == 3) {
        check_3()
    }
})
function check_1 () {
    if (x == 1 && y == 0) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 4 && y == 0) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 4 && y == 1) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 2 && y == 2) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 2 && y == 3) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 0 && y == 3) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 0 && y == 4) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 4 && y == 3) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 0 && y == 0) {
        basic.clearScreen()
        music.playMelody("D G E A C5 F C B ", 387)
        basic.showString("CONGRATS!")
        sum_win += 10
        for (let index = 0; index < 2; index++) {
            music.playMelody("D G E A C5 F C B ", 387)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . # . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . # . .
                . # . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . # .
                # . # . .
                . # . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                . . . . .
                `)
        }
        music.playMelody("D G E A C5 F C B ", 387)
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . . #
                . . # # .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . # .
                . # # . .
                `)
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    score = sum_win - sum_loose
    basic.clearScreen()
    basic.showString("Final Score")
    basic.showNumber(score)
    basic.clearScreen()
    if (score >= 30) {
        while (true) {
            basic.showString("Pro")
        }
    } else {
        while (score < 30) {
            basic.showString("You can do better")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    basic.pause(100)
    x += 1
    led.toggle(x, y)
    if (dice == 1) {
        check_1()
    } else if (dice == 2) {
        check_2()
    } else if (dice == 3) {
        check_3()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    led.unplot(x, y)
    basic.pause(100)
    y += -1
    led.toggle(x, y)
    if (dice == 1) {
        check_1()
    } else if (dice == 2) {
        check_2()
    } else if (dice == 3) {
        check_3()
    }
})
function check_2 () {
    if (x == 3 && y == 0) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 4 && y == 0) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 0 && y == 1) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 0 && y == 2) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 1 && y == 4) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 2 && y == 2) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 3 && y == 2) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 3 && y == 2) {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showString("You Lost")
        sum_loose += 10
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . . # # .
                . # . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # . .
                # . . # .
                `)
        }
    } else if (x == 0 && y == 0) {
        basic.clearScreen()
        music.playMelody("D G E A C5 F C B ", 387)
        basic.showString("CONGRATS!")
        sum_win += 10
        for (let index = 0; index < 2; index++) {
            music.playMelody("D G E A C5 F C B ", 387)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . # . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . # . .
                . # . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . # .
                # . # . .
                . # . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                . . . . .
                `)
        }
        music.playMelody("D G E A C5 F C B ", 387)
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . . #
                . . # # .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . # .
                . # # . .
                `)
        }
    }
}
let dice = 0
let score = 0
let sum_loose = 0
let sum_win = 0
let y = 0
let x = 0
x = 4
y = 4
sum_win = 0
sum_loose = 0
score = 0
if (input.lightLevel() >= 128) {
    basic.showString("Good Morning")
} else {
    basic.showString("Good Afternoon")
}
for (let count = 0; count <= 3; count++) {
    basic.showNumber(count)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.clearScreen()
}
basic.showString("START!")
music.playTone(523, music.beat(BeatFraction.Double))
