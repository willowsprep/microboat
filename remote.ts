/**
 * @file remote.ts
 * @description the remote to control buttons
 * @author Parthiv <hi@parthiv.dev>
 * @license MIT
 */

// Radio group - 2203
radio.setGroup(2203)
// Listeners to send packets
input.onButtonPressed(Button.A, function () {
    radio.sendString("RIGHT_TURN")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("LEFT_TURN")
})
