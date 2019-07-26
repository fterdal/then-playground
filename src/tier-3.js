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

const YOUR_CODE_HERE = () => {
  // THEN
  // crayonDraw('blue')
  // crayonDraw('green')
  // crayonDraw('magenta')
  // crayonDraw('yellow')
  // crayonDraw('cyan')

  Promise.all([crayonDraw('blue'), crayonDraw('green')])
    .then(() => {
      // console.log('FINISHED WITH BLUE AND GREEN')
      return Promise.all([crayonDraw('magenta'), crayonDraw('yellow')])
    })
    .then(() => {
      return crayonDraw('cyan')
    })
    .finally(() => {
      console.log('\n')
    })
}

module.exports = {
  YOUR_CODE_HERE,
}
