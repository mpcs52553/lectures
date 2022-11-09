# Week 7

Today we'll begin to build a new movies page with React instead of using plain JavaScript.

A non-React solution is already provided in the js-movies directory.

### Getting Started

* Start by opening [the non-React solution](js-movies/index.html) in your browser.
* Study the code if you have time.

I will live-code a complete React equivalent in class today.

**If you want to code along...**

You will Node installed, and after cloning the repository, do this only once:

```
week7        $ cd movies
week7/movies $ npm install
```

Now you can start the server whenever needed:

```
week7/movies $ npm start
```

Press Ctrl-C to stop the server anytime.

### Important Ideas This Week

We are connecting a LOT of dots today:

* Concept of "state"
* Concept of "representation"
* Lots of JS syntax knowledge:
  * Anonymous functions
  * Arrow function syntax
  * Asynchronous functions
  * The notion that functions can be passed around like variables
* Lots of HTML conceptual knowledge
  * The DOM and concepts of element heirarchy
  * Elements can have attributes
  * A DOM is only one possible representation of a resource

  
### React Notes

* React is a _framework_.  It provides abstractions that make it easier 
  to create user interaction-heavy web pages.
* A key idea in React is to organize a page into separate _components_.
* Each component is responsible for a particular section of a page.
* Each component draws itself based on the data it contains (its _state_).
* You can assign a direct value to `this.state` ONLY in the `constructor()`
* Outside of the constructor, use `setState(...)` to update the state object.
* React automatically invokes the `render()` function whenever `this.state` changes.
* JSX expressions may consist of only 1 top-level element (or array)
* We can't run loops INSIDE of a JSX fragment, but we can render a pre-made array of JSX elements
* We can `return null` from the `render` function to have the component not draw anything.
* Use component _properties_ to pass data from parent to child.
* Inside the child component, use `this.props` to access the provided data.


### References

JavaScript-specific:

* [ES6 Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [ES6 Destructuring Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Use Arrow Functions Instead of Class Methods In React](https://medium.com/quick-code/react-quick-tip-use-class-properties-and-arrow-functions-to-avoid-binding-this-to-methods-29628aca2e25)

### Cheat Sheet for JSX

* JSX is a React-specific language.  It is a JavaScript/HTML hybrid.
* You can embed short JS expressions inside of JSX markup by using curly braces { }
* You can not mix entire ES6 statements (such as loops) inside of JSX but you can use short expressions
* JSX does NOT support `class="..."` on an element.  Use `className="..."` instead!
* JSX will **automatically** puts quotes around attribute values: `src={image_url}`
* You can use either JSX or `React.createElement(...)` to generate React elements.
* React will automatically re-render a component whenever its underlying state changes