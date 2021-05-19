enum RadioMessage {
    message1 = 49434,
    RightOff_LeftTurn = 17706,
    RightOn_Straight = 19294,
    FailedMessage = 65518
}
let DebugMode = 0
let Pitch = 0
radio.setGroup(160)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Skull)
basic.forever(function () {
    Pitch = input.acceleration(Dimension.Y)
    if (input.buttonIsPressed(Button.A)) {
        DebugMode = 0
        if (DebugMode == 0) {
            radio.sendMessage(RadioMessage.RightOff_LeftTurn)
        } else {
            radio.sendNumber(10)
        }
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        DebugMode = 0
        if (DebugMode == 0) {
            radio.sendMessage(RadioMessage.RightOn_Straight)
        } else {
            radio.sendNumber(20)
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
            radio.sendNumber(30)
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
