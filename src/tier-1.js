/*
  _______ _             __
 |__   __(_)           /_ |  _
    | |   _  ___ _ __   | | (_)
    | |  | |/ _ \ '__|  | |
    | |  | |  __/ |     | |  _
   _|_|_ |_|\___|_|   _ |_| (_)        _____ _             _           _
  / ____|    | | | | (_)              / ____| |           | |         | |
 | |  __  ___| |_| |_ _ _ __   __ _  | (___ | |_ __ _ _ __| |_ ___  __| |
 | | |_ |/ _ \ __| __| | '_ \ / _` |  \___ \| __/ _` | '__| __/ _ \/ _` |
 | |__| |  __/ |_| |_| | | | | (_| |  ____) | || (_| | |  | ||  __/ (_| |
  \_____|\___|\__|\__|_|_| |_|\__, | |_____/ \__\__,_|_|   \__\___|\__,_|
                               __/ |
                              |___/

http://patorjk.com/software/taag/#p=display&f=Big&t=Tier%201%20%3A%0AGetting%20Started
*/

const { waitFor, finished, handleError } = require('../utils')

const YOUR_CODE_HERE = async () => {

  // AWAIT
  // try {
  //   await waitFor()
  //   finished()
  // } catch (err) {
  //   handleError(err)
  // }

  // THEN
  waitFor()
    .then(() => {
      finished()
    })
    .catch(err => {
      handleError(err)
    })

}

module.exports = {
  YOUR_CODE_HERE,
}
