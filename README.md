slate
=====

A minimal JavaScript template library.

#### License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

## examples

This README provides some quick examples for slate. 

### hello

In the body onload, add:

    vars(); slate.init();

`vars` should be a function which declares all variables. Here is an example.

    function vars() {
        slate.add("greeting", "<b>Hello, World!</b>");
    }

Now, add a new slate script in the body:

    <script type="text/slate">
        ##greeting
    </script>

If everything works correctly, the output should be __Hello, World__.

### variables

In order to declare variables, use:

    slate.add("<name>", "<value>");

then, you can use:

    <script type="text/slate">
        ##name
    </script>

and it will be substituted with `value`.

### lists

Slate processes lists in a different way compared to most template engines.

All lists (select, ul, ol) follow this basic format:

    slate.add("<name>", 
        [ <list start>, <element start>, <element end>, <list end>,
          data, ... ]);

* `<list start>` is a string, indicating the start of the entire block. It is used once.
* `<element start>` is a string, indicating what every element should start with. It is used at the start of all elements.
* `<element end>` is a string, indicating what every element should end with. It is used at the end of all elements.
* `<list end>` is a string, indicating the end of the entire block. It is used once.

Here is an example which creates a basic `ul`.

	slate.add("list", [ "<ul>", "<li>", "</li>", "</ul>",
		"First part of list.",
		"Second part of list." ]);


Slate will automatically detect that you want a list and act appropriately.

Now use:

    ##list

In a slate block to reference the list.
