# The Components Directory

This directory contains any `.vue` file that is not a `view` associated with a route (think of a webpage). These are the `.vue` files that are used across the website that build together to create something larger. You can think of these as building blocks of a webpage.

These `.vue` files are called "Single File Vue Components" and can contain all the HTML, CSS, and JS needed for a certain block of code. Well written components should be small.

With components you can pass data down via `props` or emit custom events (think a `click` event, but something new that you define) up to the parent component. You can also scope the styles of a component so you can write CSS that only affects the component's HTML (`template`).

> NOTE: You can think of each Vue component as a "mini" Vue website in itself.

## Parts of a Component

### 1. The Template Tag
The `template` tag is the HTML for your component. This can contain any HTML tags including custom HTML tags. Data that is binded in the template directory references the `data`, `computed`, `methods` etc defined in the `script` tag.

### 2. The Script Tag
All of the JavaScript needed for the component. In here, you will define things like `data`, `computed`, `methods`, and more. These have direct communication with the `template` above.

### 3. The Style Tag
The `style` tag contains all of the CSS needed for the component to render. By default, these styles will affect every other component on the website.

Unless you use the `scoped` keyword. When adding the `scoped` keyword, CSS written in this tag will _only_ affect the HTML `template` in the same file.

```html
<template>
  <p>Some HTML here</p>
</template>

<style scoped>
  /* This CSS only changes the styling of the `p` tag above */  
  p {
    color: green;
  }
</style>
```