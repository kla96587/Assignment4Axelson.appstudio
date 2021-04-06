favBabyNames.onshow = function() {
imgPicture.hidden = true
    drpBabyNames.clear()
    for (i = 0; i < 5; i++)
        drpBabyNames.addItem(names[i])
}
drpBabyNames.onclick = function(s) {
    if (typeof(s) == "object") {
        return
    } else {
        drpBabyNames.value = s
        lblMessages.value = `Your favorite baby name is ${s}.`
       imgPicture.hidden = false
    }
}
