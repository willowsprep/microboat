
// Radio message config

enum RadioMessage {
    message1 = 49434,
    LeftOn_Straight = 48393,
    LeftOff_RightTurn = 58875,
    FailedMessage = 65518
}
let DebugMode = 0
let Pitch = 0
radio.setGroup(0)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Skull)
basic.forever(function () {
    Pitch = input.acceleration(Dimension.Y)
    if (input.buttonIsPressed(Button.A)) {
        DebugMode = 0
        if (DebugMode == 0) {
            radio.sendMessage(RadioMessage.LeftOff_RightTurn)
        } else {
            radio.sendNumber(1)
        }
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        DebugMode = 0
        if (DebugMode == 0) {
            radio.sendMessage(RadioMessage.LeftOn_Straight)
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
