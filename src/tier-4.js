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

const { crayonDraw, getFirstRow, handleError } = require('../utils')

const YOUR_CODE_HERE = () => {
  const allColors = ['blue', 'green', 'magenta', 'yellow', 'cyan']

  // AWAIT

  // THEN
  getFirstRow()
    .then(firstRow => {
      return Promise.all(firstRow.map(color => crayonDraw(color)))
    })
    .then(colorsDrawn => {
      const remainingColors = allColors.filter(
        color => !colorsDrawn.includes(color)
      )
      return Promise.all(remainingColors.map(color => crayonDraw(color)))
    })
    .catch(err => {
      handleError(err)
    })

}

module.exports = {
  YOUR_CODE_HERE,
}
