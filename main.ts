function formatString (inString: string) {
    newString = inString
    if (inString.length < 5) {
        for (let index = 0; index < 5 - inString.length; index++) {
            newString = " " + newString
        }
    }
    return newString
}
let thisMsg_bottom = ""
let thisMsg_top = ""
let newString = ""
basic.showIcon(IconNames.Heart)
Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "booting...")
basic.showIcon(IconNames.House)
basic.pause(500)
Kitronik_VIEWTEXT32.clearDisplay()
basic.forever(function () {
    thisMsg_top = "x" + formatString("abc") + " y" + formatString("abc")
    thisMsg_bottom = "z" + formatString("abc") + " s" + formatString("abc")
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, thisMsg_top)
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, thisMsg_bottom)
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P0))
    basic.pause(100)
})
