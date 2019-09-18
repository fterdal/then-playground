/*
  _______ _             ____
 |__   __(_)           |___ \ _
    | |   _  ___ _ __    __) (_)
    | |  | |/ _ \ '__|  |__ <
    | |  | |  __/ |     ___) |_
  __|_|  |_|\___|_|    |____/(_)_
 |  __ \              | | |    | |
 | |__) |_ _ _ __ __ _| | | ___| |
 |  ___/ _` | '__/ _` | | |/ _ \ |
 | |  | (_| | | | (_| | | |  __/ |
 |_|   \__,_|_|  \__,_|_|_|\___|_|

http://patorjk.com/software/taag/#p=display&f=Big&t=Tier%203%3A%0AParallel
*/

const { crayonDraw, handleError } = require('../utils')

const YOUR_CODE_HERE = async () => {
  // AWAIT
  try {
    const b = crayonDraw('blue')
    const g = crayonDraw('green')
    await b
    await g
    const m = crayonDraw('magenta')
    const y = crayonDraw('yellow')
    await m
    await y
    const c = crayonDraw('cyan')
    await c
  } catch (err) {
    handleError(err)
  }

  // THEN

}

module.exports = {
  YOUR_CODE_HERE,
}
