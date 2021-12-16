let currentDistanceLeft = 0
let currentDistanceRight = 0
let driveMode = 1
let direction = "none"
input.onButtonPressed(Button.A, function () {
    driveMode = driveMode + 1
})
let strip = neopixel.create(DigitalPin.P15, 100, NeoPixelMode.RGB_RGB)
strip.showRainbow(1, 360)
strip.show()
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
basic.forever(function () {
    if (driveMode == 3) {
        driveMode = 1
    }
    if (driveMode == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
            direction = "none"
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        } else {
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(100)
            direction = "right"
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
            basic.pause(700)
            direction = "none"
            maqueen.motorStop(maqueen.Motors.All)
            currentDistanceRight = maqueen.Ultrasonic(PingUnit.Centimeters)
            basic.pause(500)
            direction = "left"
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 30)
            basic.pause(1400)
            direction = "none"
            maqueen.motorStop(maqueen.Motors.All)
            currentDistanceLeft = maqueen.Ultrasonic(PingUnit.Centimeters)
            basic.pause(500)
            if (currentDistanceLeft > currentDistanceRight || currentDistanceLeft == 0) {
                return
            } else {
                direction = "right"
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
                basic.pause(1350)
                maqueen.motorStop(maqueen.Motors.All)
                return
            }
        }
    } else if (driveMode == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
