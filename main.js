const { red, blue, green, cyan, yellow, magenta } = require('chalk')
const { rainbow } = require('chalk-animation')

console.log(red('hello there im red'))
console.log(green('hello there im green'))
console.log(yellow('hello there im yellow'))
console.log(blue('hello there im blue'))
console.log(cyan('hello there im cyan'))
console.log(magenta('hello there im magenta'))

rainbow('🎉 Congratulations! Move on to the next level. 📈')
setTimeout(() => console.log(''), 2000)
