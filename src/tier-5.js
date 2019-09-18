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

const {
  fulfillAfterMs,
  crayonDraw,
  getColorSequence,
  handleError,
} = require('../utils')

const YOUR_CODE_HERE = async () => {
  // AWAIT
  const sequence = await getColorSequence()
  for (let i = 0; i < sequence.length; i++) {
    // await fulfillAfterMs(200)
    await crayonDraw(sequence[i])
  }

  // This approach doesn't work. Can you see why?
  // sequence.forEach(async color => {
  //   await crayonDraw(color)
  // })

  // THEN
  // getColorSequence()
  //   .then(sequence => {
  //     return sequence.reduce((totalPromise, color) => {
  //       return totalPromise.then(() => crayonDraw(color))
  //     }, Promise.resolve())
  //   })
  //   .catch(err => {
  //     handleError(err)
  //   })
}

module.exports = {
  YOUR_CODE_HERE,
}
