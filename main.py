currentDistanceLeft = 0
currentDistanceRight = 0
direction = "none"
strip = neopixel.create(DigitalPin.P15, 100, NeoPixelMode.RGB_RGB)
strip.show_rainbow(1, 360)
strip.show()

def on_forever():
    strip.rotate(1)
    strip.show()
    basic.pause(100)
basic.forever(on_forever)

def on_forever2():
    if direction == "right":
        maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
        basic.show_arrow(ArrowNames.WEST)
        basic.pause(50)
        maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.pause(50)
    elif direction == "left":
        maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
        basic.show_arrow(ArrowNames.EAST)
        basic.pause(50)
        maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.pause(50)
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
        maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
basic.forever(on_forever2)

def on_forever3():
    global direction, currentDistanceRight, currentDistanceLeft
    if maqueen.ultrasonic(PingUnit.CENTIMETERS) > 10:
        direction = "none"
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 230)
    else:
        maqueen.motor_stop(maqueen.Motors.ALL)
        basic.pause(100)
        direction = "right"
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
        basic.pause(700)
        direction = "none"
        maqueen.motor_stop(maqueen.Motors.ALL)
        currentDistanceRight = maqueen.ultrasonic(PingUnit.CENTIMETERS)
        basic.pause(500)
        direction = "left"
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 30)
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 30)
        basic.pause(1400)
        direction = "none"
        maqueen.motor_stop(maqueen.Motors.ALL)
        currentDistanceLeft = maqueen.ultrasonic(PingUnit.CENTIMETERS)
        basic.pause(500)
        if currentDistanceLeft > currentDistanceRight or currentDistanceLeft == 0:
            return
        else:
            direction = "right"
            maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 30)
            maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
            basic.pause(1350)
            maqueen.motor_stop(maqueen.Motors.ALL)
            return
basic.forever(on_forever3)
