/**
 * @file remote.ts
 * @description the remote to control buttons
 * @author Parthiv <hi@parthiv.dev>, Dhruv <dhruvm2027@students.willowsprep.com>
 * @license MIT
 */
// Radio message config
enum RadioMessage {
    message1 = 49434,
    message2 = 1435,
    message3 = 31126,
    TurnLeft = 34166,
    TurnRight = 37380,
    FailedMessage = 65518
}
let DebugMode = 0
let Pitch = 0
// top secret group
radio.setGroup(2203)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Skull)
basic.forever(function () {
    Pitch = input.acceleration(Dimension.Y)
    if (input.buttonIsPressed(Button.A)) {
        DebugMode = 0
        if (DebugMode == 0) {
            radio.sendMessage(RadioMessage.TurnLeft)
        } else {
            radio.sendNumber(1)
        }
        basic.showLeds(`
            # . . . #
            # # # # #
            . # # # .
            . # # # .
            . . # . .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        DebugMode = 0
        if (DebugMode == 0) {
            radio.sendMessage(RadioMessage.TurnRight)
        } else {
            radio.sendNumber(2)
        }
        basic.showLeds(`
            # # . # #
            # # # # #
            . # . # .
            # # # # #
            # # . # #
            `)
    } else {
        DebugMode = 0
        if (DebugMode == 0) {
            radio.sendMessage(RadioMessage.FailedMessage)
        } else {
            radio.sendNumber(3)
        }
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
