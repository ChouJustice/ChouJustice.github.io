const img = document.querySelector('img')
const grayBtn = document.querySelector('.gray')
const redBtn = document.querySelector('.red')

grayBtn.onclick = function() {
    img.src = './AltisImg/AltisGray/360EXT_1_18_1.png'
}

redBtn.onclick = function() {
    img.src = './AltisImg/AltisRed/360EXT_1_22_1.png'
}