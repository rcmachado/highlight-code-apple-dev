Highlight code on Apple Developer Library
=========================================

Safari extension that highlight code blocks on Apple Developer Library.
Uses the excellent [Prism][] javascript lib. Forget about that hard to
read docs :)

Installing
----------

Download and open the `highlight-code-apple-dev.safariextz` found
in `dist` directory.

How it works
------------

It injects the prism files into any `developer.apple.com` page and
looks for code blocks, readapting its contents.

Known issues
------------

The extension only highlights Objective-C code.

Tests
-----

There is some basic tests written using [QUnit][]. Just open the
`tests/index.html` file on the browsers.

License
-------

The extension is MIT licensed. For the [Prism] library, visit its
website for license (Prism is MIT licensed too).

[Prism]: http://prismjs.com/
[QUnit]: http://qunitjs.com/
