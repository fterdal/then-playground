# Pair Exercise: Crayon Drawing

Have you experienced the joy of opening a giant box of crayons and going absolutely wild with them? Well, have I got just the workshop for you!

Okay, so maybe we don't have _actual crayons_ for you to use, but instead we've prepared some virtual crayons, which draw colors on your terminal. We've procured virtual crayons of the following colors: *blue, white, magenta, yellow, green, cyan, red*. You can use these crayons by calling the drawCrayon function, like so:

`drawCrayon('yellow') // Draws with the yellow crayon`
`drawCrayon() // Draws with the white crayon (default color)`

Drawing with crayons isn't instaneous, it takes (roughly) 200 milliseconds to do so.

The prepared test specs ask you to draw with these crayons in very particular orders. For instance, a test may ask you to draw blue & green concurrently then magenta & yellow concurrently then cyan last of all. It wouldn't do to draw these colors all at once. We have to _wait_ for the previous colors to finish before starting on the next ones.

When you start drawing two or more crayons at the same time, they'll appear on the same row, horizontally. When crayons are drawn in sequence (the next crayon starts only after the previous crayon ends), they appear vertically stacked.

These crayons are all drawn in parallel:

[PARALLEL SCREENSHOT GOES HERE](#)

These crayons are drawn sequentially:

[SEQUENTIAL SCREENSHOT GOES HERE](#)

You can run the tests all at once with `npm test`, but you may want to run them tier by tier instead: `npm run tier-1`, `npm run tier-2`, etc.

Oh, and don't forget to `npm install` before you get started!

[BOB ROSS IMAGE HERE](#)
