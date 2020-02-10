# Splitting
Splitting is a collection of jQuery plugin that allow you to work with typography

## Installation
Add splittext.js or fluidtext.js (or both if you planning to use both) at the bottom of your `<body>` after the jQuery script tag:

```html
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>

<!-- Add plugin after the jQuery script -->
<script src="js/splittext.js"></script>
<script src="js/fluidtext.js"></script>
```

## Usage

###### SPLITTYPE.JS
For use the plugin you have to select the element you want to work with and call the function with the method you want to use:

```javascript
$('p').splittype('lines');
```

You can chose between three methods: chars, words and lines.

You can run the code after the page is fully loaded or every time the size of the browser window is resized:

```javascript
<script type="text/javascript">
  $(document).ready(function () {
    $('p').splittype('lines');
  });

  $(window).on('resize', function() {
    $('p').splittype('lines');
  });
</script>
```

###### FLUIDTYPE.JS
For use the plugin you have to select the element you want to work with and call the function:

```javascript
$('h1').fluidtype();
```

Type your options or use the default settings:

```javascript
<script type="text/javascript">
  $(window).on('resize', function() {
    $('p').fluidtype();
    $('h1')..fluidtype({
      minFS: 16,
      maxFS: 18
      });
  });
</script>
```

## Contributing
Pull requests are welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)
