# The Assets Directory

This directory (folder) is a folder for you to store all of your media assets; images, video, audio, etc. It is recommended to create sub-directories (sub-folders) for each media type.

```
assets/
   |__ img/
      |__ logo.svg
      |__ some-image.png
   |__ video/
      |__ some-video.mp4
   |__ audio/
      |__ some-audio.mp3

```

You can reference assets in your Vue `template` tags by using the file path: `/src/assets/`

```html
<img src="/src/assets/some-image.png" alt="" />
```