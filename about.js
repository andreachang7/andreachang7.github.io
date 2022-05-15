function runClock() {

    var now = new Date()

    var hour = now.getHours() % 12
    var min = now.getMinutes()
    var sec = now.getSeconds()
    var ms = now.getMilliseconds()

    var clock = document.querySelector("div.clock")
    var hourHand = clock.querySelector("div.hour")
    var minHand = clock.querySelector("div.minute")
    var secHand = clock.querySelector("div.second")

    var hourRotation = 30 * hour + (0.5 * min)
    var minRotation = 6 * min + (0.1 * sec)
    var secRotation = 6 * sec + 0.006 * ms

    hourHand.getElementsByClassName.transform = "rotate(" + hourRotation +"deg)"
    minHand.getElementsByClassName.transform = "rotate(" + minRotation + "deg)"
    secHand.style.transform = "rotate(" + secRotation + "deg)"

    requestAnimationFrame(runClock)
}

runClock()