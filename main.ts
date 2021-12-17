radio.onReceivedNumber(function (receivedNumber) {
    remoteDirection = receivedNumber
    if (receivedNumber == 5) {
        driveMode = driveMode + 1
    } else if (receivedNumber == 6) {
        volumeMode = volumeMode + 1
    }
})
input.onButtonPressed(Button.A, function () {
    driveMode = driveMode + 1
})
input.onButtonPressed(Button.B, function () {
    volumeMode = volumeMode + 1
})
let currentDistanceLeft = 0
let currentDistanceRight = 0
let remoteDirection = 0
let volumeMode = 0
let driveMode = 0
radio.setGroup(1)
driveMode = 1
volumeMode = 1
remoteDirection = 0
let direction = "none"
basic.forever(function () {
    if (driveMode == 4) {
        driveMode = 1
    }
    if (driveMode == 1) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) > 12) {
            direction = "none"
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        } else {
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(500)
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
                basic.pause(1600)
                maqueen.motorStop(maqueen.Motors.All)
                return
            }
        }
    } else if (driveMode == 2) {
        if (remoteDirection == 0) {
            maqueen.motorStop(maqueen.Motors.All)
        } else if (remoteDirection == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        } else if (remoteDirection == 2) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        } else if (remoteDirection == 3) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 30)
        } else if (remoteDirection == 4) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
        }
    } else if (driveMode == 3) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.forever(function () {
    if (volumeMode >= 3) {
        volumeMode = 1
    }
    if (volumeMode == 2) {
        music.setVolume(255)
        music.setTempo(127)
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(622, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(622, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(622, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(622, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(622, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(466, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Quarter))
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
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
    } else if (driveMode == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
})
