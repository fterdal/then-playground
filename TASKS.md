# Parallel and Sequential Task Management with Promises

## Cooking

- turn on the oven
- roll the dough
- mix the batter
- get the ingredients
  - make a shopping list
  - go to the store
  - put items in shopping cart
  - check out
  - go home
  - unload grocery items

## General Descriptions

- You have one task: P

  - Call done after its finished
  - If an error occurs, catch it and call handleError with it

- You have five tasks: Pa, Pb, Pc, Pd, Pe

  - You can complete them in any order
  - Try to be as efficient as possible!
  - When you're done, call done (with no arguments)
  - If an error occurs, catch it and call handleError with it

- You have an array of promises of unknown length

  - You can complete them in any order
  - Try to be as efficient as possible!
  - If they all resolve successfully call done (with no arguments)
  - If an error occurs, catch it and call handleError with it

- You have four tasks: P, Q, R, S

  - Each one returns some data that the next one needs as an argument.
  - When you're done, call done with whatever V returns
  - If an error occurs, catch it and call handleError with it

- You have three tasks: P, Qa, Qb

  - P returns an array of two numbers, a and b. Qa needs a and Qb needs b.
  - Try to be as efficient as possible!
  - When you're done, call done with whatever Qa and Qb return: done(QaData, QbData)
  - If an error occurs, catch it and call handleError with it

- You have four tasks: Pa, Pb, Pc, Q

  - Q needs the return values of Pa, Pb, and Pc passed in as arguments
  - Try to be as efficient as possible!
  - When you're done, call done with whatever Q returns
  - If an error occurs, catch it and call handleError with it

- You have two tasks: Pa, Pb

  - You can complete them in any order
  - One or both of them might fail.
  - If they both resolve successfully call done (with no arguments)
  - If an error occurs, catch it and call handleError with it
  - Whether an error occurs or not, call cleanup at the very end (no arguments)

- BONUS - You have an array of promises of unknown length

  - They need to be completed *in-order*
  - Try to be as efficient as possible!
  - If they all resolve successfully call done (with the value of the final element)
  - If an error occurs, catch it and call handleError with it
  - Check out [this SO post for a hint](https://stackoverflow.com/questions/17757654/how-to-chain-a-variable-number-of-promises-in-q-in-order)
