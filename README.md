# MicroFrontend cooked with React

# General Info: Main topics for decision making if you choose Microfrontend Framework
![image](https://user-images.githubusercontent.com/4239376/205077952-93fd05e0-af59-469c-9e3a-cbde0503095f.png)
[@ Article by Luca Mezzalira](https://lucamezzalira.medium.com/micro-frontends-decisions-framework-ebcd22256513)

## General problems
* Who does hold the domain?
* Does team response for the whole page or just for a part of it?
* Who is responsible for MFE Infrastructure
* Horizontal or Vertical approach

## MFE Composition
* Client Side - Templates-like
* Server Side - main question how to put everything together. Parsing templates 
* Edge Side - Edge-side includes, "ESI". Served on the edge: [Little Article](https://dev.to/okmttdhr/micro-frontends-patterns-10-edge-side-includes-3m75)

# Options:
### Webpack Module Federation, Single SPA, TailorX, ILC (Isomorphic Layout Composer). PRIVJS - Microfrontend for NextJS with Module Federation and SSR
* Only one options is available for NextJS which supports module federation and SSR  
![image](https://user-images.githubusercontent.com/4239376/205083541-0e712544-f1ba-4fe0-bd60-df1631d48c51.png)
[PRIVJS. Microfrontend for NextJS. ~100$ per month](https://app.privjs.com/buy/packageDetail?pkg=@module-federation/nextjs-ssr)
* Good options by default
![image](https://user-images.githubusercontent.com/4239376/205081577-1fdc4812-9bf5-42b8-9aed-bd8e9dfd1e25.png)
* Good choise for nodejs and something custom:
![image](https://user-images.githubusercontent.com/4239376/205081694-21d63db5-b8c8-4ae2-86ac-efb3774c263e.png)
* Really good option because of having lots of features out of the box
![image](https://user-images.githubusercontent.com/4239376/205081932-eb569f3b-08db-4b63-ad64-f3d3d2589179.png)
* Mixing TailorX and Single SPA
![image](https://user-images.githubusercontent.com/4239376/205082226-8ed607b2-4419-468f-8af4-573f81696235.png)
* Open Components - works since ~2014
![image](https://user-images.githubusercontent.com/4239376/205082491-e3b25c98-056a-456c-b9eb-8409e2ede4b3.png)
* Piral - quite new.
![image](https://user-images.githubusercontent.com/4239376/205082577-748bf0af-9514-42f0-86ff-3c7053790c9e.png)


# Application: install and run
inspired by this blog : [blog.bitsrc.io/how-to-develop-microfrontends](https://blog.bitsrc.io/how-to-develop-microfrontends-using-react-step-by-step-guide-47ebb479cacd)

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
