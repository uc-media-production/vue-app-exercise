# The Router Directory

This directory contains a JavaScript file that lists all of the possible routes within the website. A route is another name for a URL. These routes are "mapped" to a `.vue` file inside of the `views` folder.

You can think of each file in the `views` file as a single web page (`index.html` for example). These "views" are always "mapped" to a "route".

So when I go to the main route `/` I get redirect to the `views/Home.vue` view. That view will then have HTML that references other `.vue` components inside the `components` folder.

```js
import HomeView from '../views/HomeView.vue' // A reference to the view component

{
  path: '/', // URL
  name: 'home', // a unique ID
  component: HomeView // component that loads when you visit "/"
},
```