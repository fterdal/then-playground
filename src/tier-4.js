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
  // try {
  //   const firstColors = await Promise.all(
  //     colors.map(color => crayonDraw(color))
  //   )
  //   await Promise.all(
  //     allColors
  //       .filter(color => !firstColors.includes(color))
  //       .map(color => crayonDraw(color))
  //   )
  // } catch (err) {
  //   handleError(err)
  // }

  // THEN
  getFirstRow()
    .then(firstRowColors => {
      return Promise.all(firstRowColors.map(color => crayonDraw(color)))
    })
    .then(drawnColors => {
      return Promise.all(
        allColors
          .filter(color => !drawnColors.includes(color))
          .map(color => crayonDraw(color))
      )
    })
    .catch(err => {
      handleError(err)
    })
}

module.exports = {
  YOUR_CODE_HERE,
}