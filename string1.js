  
// Получить строку "Просто Строка"
  
const str = "Просто строка"

const upper = str.toUpperCase()

const lower = str.toLowerCase()

const letter0 = str[0] // "П"
const letter1 = str[1] // "р"
const letter2 = str[2] // "о"
const letter3 = str[3] // "с"
const letter4 = str[4] // "т"
const letter5 = str[5] // "о"
const letter6 = str[6] // " "
const letter7 = str[7] // "с"`
const letter8 = str[8] // "т"
const letter9 = str[9] // "р"
const letter10 = str[10] // "о"
const letter11 = str[11] // "к"
const letter12 = str[12] // "а"

const capitalize = letter0 + letter1 + letter2 + letter3 + letter4 + letter5 + 
      letter6 + letter7.toUpperCase() + letter8 + letter9 + letter10 + letter11 + letter12;
 console.log(capitalize);

 console.assert(capitalize === "Просто Строка")
