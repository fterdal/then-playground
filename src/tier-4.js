/*

  _______ _             _  _
 |__   __(_)           | || |  _
    | |   _  ___ _ __  | || |_(_)
    | |  | |/ _ \ '__| |__   _|
    | |  | |  __/ |       | |  _
  __|_|  |_|\___|_|    _ _|_| (_)    _____            _   _     _
 |  __ \              | | |    | |  / ____|          | | ( )   | |
 | |__) |_ _ _ __ __ _| | | ___| | | |     ___  _ __ | |_|/  __| |
 |  ___/ _` | '__/ _` | | |/ _ \ | | |    / _ \| '_ \| __|  / _` |
 | |  | (_| | | | (_| | | |  __/ | | |___| (_) | | | | |_  | (_| |
 |_|   \__,_|_|  \__,_|_|_|\___|_|  \_____\___/|_| |_|\__|  \__,_|

http://patorjk.com/software/taag/#p=display&f=Big&t=Tier%204%3A%0AParallel%20Cont'd
*/

const { crayonDraw, handleError } = require('../utils')

const YOUR_CODE_HERE = () => {
  // THEN
  Promise.all([crayonDraw('green'), crayonDraw('magenta')])
    .then(results => {
      console.log(results)
      return Promise.all([
        results.slice(1),
        crayonDraw(crayons.find(crayon => crayon.id === results[0]).color),
      ])
    })
    .then(([results]) => {
      console.log(results)
      return Promise.all([
        results.slice(1),
        crayonDraw(crayons.find(crayon => crayon.id === results[0]).color),
      ])
    })
    .then(([[id]]) => {
      console.log(id)
      return crayonDraw(crayons.find(crayon => crayon.id === id).color)
    })
    .catch(err => {
      handleError(err)
    })
}

module.exports = {
  YOUR_CODE_HERE,
}
