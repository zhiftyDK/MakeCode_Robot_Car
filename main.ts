input.onButtonPressed(Button.A, function () {
    driveMode = driveMode + 1
})
let currentDistanceLeft = 0
let currentDistanceRight = 0
let distance = 0
let driveMode = 0
driveMode = 1
let direction = "none"
basic.forever(function () {
    distance = maqueen.Ultrasonic(PingUnit.Centimeters)
})
basic.forever(function () {
    if (driveMode == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (driveMode == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (driveMode == 3) {
        driveMode = 1
    }
    if (driveMode == 1) {
        if (distance > 12) {
            direction = "none"
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 230)
        } else {
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(500)
            direction = "right"
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
            basic.pause(750)
            direction = "none"
            maqueen.motorStop(maqueen.Motors.All)
            currentDistanceRight = maqueen.Ultrasonic(PingUnit.Centimeters)
            basic.pause(750)
            direction = "left"
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 30)
            basic.pause(1400)
            direction = "none"
            maqueen.motorStop(maqueen.Motors.All)
            currentDistanceLeft = maqueen.Ultrasonic(PingUnit.Centimeters)
            basic.pause(750)
            if (currentDistanceLeft > currentDistanceRight || currentDistanceLeft == 0) {
                return
            } else {
                direction = "right"
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
                basic.pause(1600)
                maqueen.motorStop(maqueen.Motors.All)
                return
            }
        }
    } else if (driveMode == 2) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
