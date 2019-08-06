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

const YOUR_CODE_HERE = async colors => {
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

  // TODO: A problem now is that there's no reason for students to actually use
  // the return value of the preceding promise. They can always just check
  // the colors argument passed in. I think the solution is some promise that
  // returns an unpredictable result, used by the succcessive promise handlers.
  // THEN
  return Promise.all(colors.map(color => crayonDraw(color)))
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
