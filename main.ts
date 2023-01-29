function tourner_gauche (duree2: number) {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 70)
    basic.showString("" + (duree2))
    control.waitMicros(duree2 * 1000000)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
}
function avancer (duree: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 70)
    basic.showString("" + (duree))
    control.waitMicros(duree * 1000000)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.All)
}
let nombre2 = 0
let nombre1 = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
basic.forever(function () {
    nombre1 = randint(1, 4)
    avancer(nombre1)
    nombre2 = randint(1, 4)
    tourner_gauche(nombre2)
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    }
})
