# Ionic Tabbed Slidebox Scroll Extension
An extension of [Ionic Tabbed Slidebox](https://github.com/saravmajestic/ionic/tree/master/tabbedSlideBox)

## What is this?
Ionic Tabbed Slidebox is a great component. The [Demo](http://ionic-sarav.rhcloud.com/ionic/tabbedSlideBox/#/) has "Scrollable content" example. It works well though it doesn't show the bottom of content inside of tabs.
This extension solves that [problem](https://github.com/saravmajestic/ionic/issues/22).

This is simply just adding `margin-bottom` to `ion-content`. Get the height, including margin of `.tsb-icons`, and set that height(px) to the `margin-bottom` after rendering.

## Demo?
Sorry, I don't have it. Though I'm sure I'll do a pull request.

## Usage
Load the js file in your `index.html`

```html
<script src="lib/tabbedSlideBox/tabSlideBox.js"></script>
<script src="js/tabSlideBoxScrollExtension.js"></script>
<script src="js/app.js"></script>
```

Load the module

```coffeescript
angular.module("starter", ["ionic", "tabSlideBox", "tabSlideBoxScrollExtension"])
```

Easy!
