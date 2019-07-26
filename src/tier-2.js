/*
  _______ _             ___
 |__   __(_)           |__ \ _
    | |   _  ___ _ __     ) (_)
    | |  | |/ _ \ '__|   / /
    | |  | |  __/ |     / /_ _
   _|_|_ |_|\___|_|    |____(_)      _   _       _
  / ____|                           | | (_)     | |
 | (___   ___  __ _ _   _  ___ _ __ | |_ _  __ _| |
  \___ \ / _ \/ _` | | | |/ _ \ '_ \| __| |/ _` | |
  ____) |  __/ (_| | |_| |  __/ | | | |_| | (_| | |
 |_____/ \___|\__, |\__,_|\___|_| |_|\__|_|\__,_|_|
                 | |
                 |_|

http://patorjk.com/software/taag/#p=display&f=Big&t=Tier%202%3A%0ASequential
*/

const { crayonDraw, finished, handleError } = require('../utils')

const YOUR_CODE_HERE = async () => {
  // AWAIT
  // try {
  //   await crayonDraw('blue')
  //   await crayonDraw('green')
  //   await crayonDraw('magenta')
  //   crayonDraw('yellow')
  // } catch (err) {
  //   handleError(err)
  // }

  // THEN
  crayonDraw('blue')
    .then(() => {
      return crayonDraw('green')
    })
    .then(() => {
      return crayonDraw('magenta')
    })
    .then(() => {
      return crayonDraw('yellow')
    })
    .catch(err => {
      handleError(err)
    })
}

module.exports = {
  YOUR_CODE_HERE,
}
