# Pair Exercise: Crayon Drawing

Have you experienced the joy of opening a giant box of crayons and going absolutely wild with them? Well, have I got just the workshop for you!

Okay, so maybe we don't have _actual crayons_ for you to use -- instead we've prepared some virtual crayons, which draw colors on your terminal. We have virtual crayons of the following colors: *blue, white, magenta, yellow, green, cyan, red*. You can use these crayons by calling the drawCrayon function, like so:

`drawCrayon('yellow') // Draws with the yellow crayon`

`drawCrayon() // Draws with the white crayon (default color)`

`drawCrayon('magenta') // Draws with the magenta crayon`

Drawing with crayons isn't instaneous, it takes (roughly) 200 milliseconds to do so.

The prepared test specs ask you to draw with these crayons in very particular orders. For instance, a test may ask you to draw blue & green concurrently, then magenta & yellow concurrently, then cyan last of all. It wouldn't do to draw these colors all at once. We have to _wait_ for the previous colors to finish before starting on the next ones.

When you start drawing two or more crayons at the same time, they'll appear on the same row, horizontally. When crayons are drawn in sequence (the next crayon starts only after the previous crayon ends), they appear vertically stacked.

These crayons are all drawn in parallel:

![parallel crayons](https://user-images.githubusercontent.com/1832043/65081491-5ad1c080-d969-11e9-9d43-be4a5f661ff1.png)

These crayons are drawn sequentially:

![sequential crayons](https://user-images.githubusercontent.com/1832043/65081495-5e654780-d969-11e9-936b-e68fd1132b6b.png)

You can run the tests all at once with `npm test`, but you may want to run them tier by tier instead: `npm run tier-1`, `npm run tier-2`, etc.

Since drawCrayon returns a promise, there are two ways to make sure something else happens only after the color is finished: `await` and `.then`.

AWAIT:

```js
await drawCrayon('blue')
console.log('Just finished drawing blue!')
```

THEN:

```js
drawCrayon('blue')
.then(() => {
  console.log('Just finished drawing blue!')
})
```

Once you've passed all the tests for a tier using one of these methods, comment out your solution and use the other one.

Oh, and don't forget to `npm install` before you get started!

![BOB ROSS IMAGE HERE](https://i.imgflip.com/3asupb.jpg)
