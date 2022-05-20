// function findLongest(text) {
//     var textOfWords = text.split(" ")
//     var longWord = ""
//     for (var i = 0; i < textOfWords.length; i++) {
//         var temp = textOfWords[i];
//         if (longWord.length < temp.length) {
//             longWord = temp
//         }
//     }
//     return longWord
// }

// console.log(findLongest("Hello World. My Country is Uzbekistan"))

// function numbersSum(numbers) {
//     var sum = 0;
//     for (var i = numbers.length - 1; i >= 0; i--) {
//         sum = sum + numbers[i]
//     }
//     return sum
// }


// console.log(numbersSum([13, 24, 12]))
// var words = "Hello uzbekistan. ".split(" ")
// console.log(words)
// console.log(words.join("_"))

// var myArr = [103, 108, 13, 120, 1, -1, 1]

// function max(arr) {
//     var maxEl = arr[0]
//     for (var i = 1; i < arr.length; i++) {
//         if (maxEl < arr[i]) {
//             maxEl = arr[i]
//         }
//     }

//     return maxEl
// }

// function min(arr) {
//     var minEl = arr[0]
//     for (var i = 1; i < arr.length; i++) {
//         if (minEl > arr[i]) {
//             minEl = arr[i]
//         }
//     }

//     return minEl
// }

// console.log(max(myArr))
// console.log(min(myArr))

// var myName = "Mansur"
// var yourName = myName

// console.log("MyName:", myName)
// console.log("YourName:", yourName)

// var yourName = "Oleg"

// console.log("MyName:", myName)
// console.log("YourName:", yourName)

// // 0xA421
// const myAccount = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 31
// }
// // 0xA421
// const oldAccount = { ...myAccount }

// //  0xA421
// myAccount["age"] = 32
// myAccount.firstName = "Something"

// //  0xA421
// console.log("MyAccount:", myAccount)
// console.log("OldAccount:", oldAccount)


// const user = {
//     email: "example@gmail.com",
//     balance: "100$",
//     "is Admin": true
// }

// const freezedUser = Object.freeze(user)
// freezedUser.email = "Hello"
// freezedUser.balance = "Hello"
// freezedUser["is Admin"] = "Hello"
// console.log(freezedUser)

// user["email"] = 12
// user["is Admin"] = 
// console.log(user["email"])


// const arr = []

// arr["1a"] = "email@gmail.com";

// console.log(arr.length);
// console.log(arr);


// console.log("Sana:", date)
// console.log("Oy tartibi:", date.getMonth() + 1)
// console.log("Kun:", date.getDate())
// console.log("Yil:", date.getFullYear())

// console.log("Soat:", date.getHours())
// console.log("Minute:", date.getMinutes())
// console.log("Sekund:", date.getSeconds())
// console.log("MilliSekund:", date.getMilliseconds())
// setTimeout(function () {
//     // window.close()

// }, 10000)

// setInterval(function () {
//     var date = new Date()
//     var timeEl = document.querySelector("[data-time]")
//     timeEl.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
// }, 1000)



// var text = "Welc"
// console.log(text.padStart(7, "*"))

// var phoneInput = document.querySelector("[data-phone]")
// var printEl = document.querySelector("[data-print]")
// phoneInput.addEventListener("keyup", () => {
//     var phoneValue = phoneInput.value
//     printEl.textContent = phoneValue.padEnd(6, "*")
// })

const regions = [
    { "id": "1", "name_uz": "Qoraqalpog‘iston Respublikasi", "name_oz": "?îđŕ?ŕëďî?čńňîí Đĺńďóáëčęŕńč", "name_ru": "Đĺńďóáëčęŕ Ęŕđŕęŕëďŕęńňŕí" },
    { "id": "2", "name_uz": "Andijon viloyati", "name_oz": "Ŕíäčćîí âčëî˙ňč", "name_ru": "Ŕíäčćŕíńęŕ˙ îáëŕńňü" },
    { "id": "3", "name_uz": "Buxoro viloyati", "name_oz": "Áóőîđî âčëî˙ňč", "name_ru": "Áóőŕđńęŕ˙ îáëŕńňü" },
    { "id": "4", "name_uz": "Jizzax viloyati", "name_oz": "Ćčççŕő âčëî˙ňč", "name_ru": "Äćčçŕęńęŕ˙ îáëŕńňü" },
    { "id": "5", "name_uz": "Qashqadaryo viloyati", "name_oz": "?ŕř?ŕäŕđ¸ âčëî˙ňč", "name_ru": "Ęŕřęŕäŕđüčíńęŕ˙ îáëŕńňü" },
    { "id": "6", "name_uz": "Navoiy viloyati", "name_oz": "Íŕâîčé âčëî˙ňč", "name_ru": "Íŕâîčéńęŕ˙ îáëŕńňü" },
    { "id": "7", "name_uz": "Namangan viloyati", "name_oz": "Íŕěŕíăŕí âčëî˙ňč", "name_ru": "Íŕěŕíăŕíńęŕ˙ îáëŕńňü" },
    { "id": "8", "name_uz": "Samarqand viloyati", "name_oz": "Ńŕěŕđ?ŕíä âčëî˙ňč", "name_ru": "Ńŕěŕđęŕíäńęŕ˙ îáëŕńňü" },
    { "id": "9", "name_uz": "Surxandaryo viloyati", "name_oz": "Ńóđőŕíäŕđ¸ âčëî˙ňč", "name_ru": "Ńóđőŕíäŕđüčíńęŕ˙ îáëŕńňü" },
    { "id": "10", "name_uz": "Sirdaryo viloyati", "name_oz": "Ńčđäŕđ¸ âčëî˙ňč", "name_ru": "Ńűđäŕđüčíńęŕ˙ îáëŕńňü" },
    { "id": "11", "name_uz": "Toshkent viloyati", "name_oz": "Ňîřęĺíň âčëî˙ňč", "name_ru": "Ňŕřęĺíňńęŕ˙ îáëŕńňü" },
    { "id": "12", "name_uz": "Farg‘ona viloyati", "name_oz": "Ôŕđ?îíŕ âčëî˙ňč", "name_ru": "Ôĺđăŕíńęŕ˙ îáëŕńňü" },
    { "id": "13", "name_uz": "Xorazm viloyati", "name_oz": "Őîđŕçě âčëî˙ňč", "name_ru": "Őîđĺçěńęŕ˙ îáëŕńňü" },
    { "id": "14", "name_uz": "Toshkent shahri", "name_oz": "Ňîřęĺíň řŕ?đč", "name_ru": "Ăîđîä Ňŕřęĺíň" }]

var regionsEl = document.querySelector(".regions")

for (var i = 0; i < regions.length; i++) {
    var regionEl = document.createElement("div")
    regionEl.setAttribute("class", "region")
    regionEl.textContent = regions[i].name_uz
    regionsEl.appendChild(regionEl)
}