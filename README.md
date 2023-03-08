# Vue Project Template

This is a project that has been pre-configured for you. With this project, you can create "Single-Page Applications" (SPA). Or websites that can utilize "single file components" (SFC). These SFCs will have the `.vue` extension and must be built in order for the browser to read it.

In order to build it, you will need to have NPM and Node installed. Once installed, you can run various "commands" inside of your Terminal.

## Installing Dependencies
This project used a lot of code that other people have written. We need to download these files before we can start working on our project. The code we need to download are actually a number of GitHub repos!

To download these repos, we need to use NPM and the `npm` command. NPM stands for "Node Package Manager" and it's a way of managing other peoples code used in your project.

Open your Terminal and navigate to your project using the `cd` command. You can use `pwd` (print working directory) to find out where you currently are in the Terminal.

Once you are in your folder, install the dependencies using `npm install`.

```bash
$ npm install
```

This will take a minute but once that is done, you have access to more commands.

## Start a Development Server

As stated above, the browser has no idea what `.vue` files are. Because of this fact, you need to compile these files into static HTML, CSS, and JS. Luckily, there is a command to do that.

Open your Terminal and inside of your project folder, run the following:

```bash
$ npm run dev
```

This will start a server at a specific address (`localhost:5173`) for example. Paste this URL in your browser's URL bar.

You should see your website rendered on the screen!