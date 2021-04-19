# Micro-FrontEnd-React
inspired by this blog : [blog.bitsrc.io/how-to-develop-microfrontends](https://blog.bitsrc.io/how-to-develop-microfrontends-using-react-step-by-step-guide-47ebb479cacd)

## Running
To properly run this application we have to run each of them
1) cd cats, `npm start`
2) cd dogs, `npm start` (in another console)
3) cd container, `npm start` (in another console)

To run on UNIX instead of `npm start` just use `npm start_unix`

## Explanation
This app consists of 3 parts:
1) `Container`. It is a root of our entire application. It has MicroFrontend component - special container which wraps and draw our single components Dog and Cat
2) `Cats`. SPA which draws cat and button to change a random cat. Along with that our Cat application has routing and after redirecting on "/cat/:greeting" it will show us a cat with greeting message.
3) `Dogs`. SPA which draws a random dog.

## Interesting files
1) config-overrides - in order to prevent chunking and do that without  webpack configuration ejection we need to `use config-overrides` file + `react-app-rewired`. Used in Cats and Dogs apps.
