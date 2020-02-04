## What's this?

This is the source code of the styling for https://tomaskostadinov.com

This project can be used as an `tailwind-css` + `gulp` + `browser-sync` example.
Feel free to fork this repository and use for your own projects.

## How do I edit this?

1. Download this repository
2. Run `yarn`
3. Run `gulp`
4. Go to http://localhost:3000 - You should see the website configured with live reload / browser-sync enabled.
5. Go to the `src` folder and start changing html or scss files - the website will update automatically. 

## How do I create a production (minified) build?

Assuming you have done steps 1-3. before, simply just run

`gulp build:style` 

The generated files should be in the `dist` (minified under `dist/min`) folder.


And that's all folks!

#### P.S.

This is a very good site for generating custom tailwind colors: 
https://javisperez.github.io/tailwindcolorshades/

Very good website for creating gradients:
https://cssgradient.io/
