Ronin Forms
===================================================

ronin-forms makes it easy to create HTML forms within the [Ronin](http://ronin-web.org) web framework.  It adds methods
to the standard `ronin.RoninTemplate`, allowing you to quickly output a well-constructed form that is bound to a remote
Ronin controller method:

```html
  <html>
    <body>
      <% target = controller.Example#search() %>
      ${formFor(target)} <!-- create a form for the search() method -->
        Search Term: ${input(target.$term)} <!-- create an input bound to the 'term' parameter -->
        ${submit("Search")}
      ${endForm}
    </body>
  </html>
```

