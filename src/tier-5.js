/*

  _______ _             _____
 |__   __(_)           | ____|
    | |   _  ___ _ __  | |__(_)
    | |  | |/ _ \ '__| |___ \
    | |  | |  __/ |     ___) |
   _|_|_ |_|\___|_|    |____(_)      _   _       _    _____            _   _     _
  / ____|                           | | (_)     | |  / ____|          | | ( )   | |
 | (___   ___  __ _ _   _  ___ _ __ | |_ _  __ _| | | |     ___  _ __ | |_|/  __| |
  \___ \ / _ \/ _` | | | |/ _ \ '_ \| __| |/ _` | | | |    / _ \| '_ \| __|  / _` |
  ____) |  __/ (_| | |_| |  __/ | | | |_| | (_| | | | |___| (_) | | | | |_  | (_| |
 |_____/ \___|\__, |\__,_|\___|_| |_|\__|_|\__,_|_|  \_____\___/|_| |_|\__|  \__,_|
                 | |
                 |_|

http://patorjk.com/software/taag/#p=display&f=Big&t=Tier%205%3A%0ASequential%20Cont'd
*/

const { crayonDraw, getColorSequence, handleError } = require('../utils')

const YOUR_CODE_HERE = async () => {
  // AWAIT

  // THEN
  getColorSequence()
  .then((sequence) => {
    console.log('sequence', sequence)
    sequence.reduce((totalPromise, color) => {
      return crayonDraw(color)
    }, Promise.resolve())
    // sequence.forEach((color) => {
    //   crayonDraw(color)
    // })
  })
}

module.exports = {
  YOUR_CODE_HERE,
}
