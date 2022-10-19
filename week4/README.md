# Week 4

Today we will start with [form_example.html](form_example.html) today.

Eventually we will resume using [index.html](index.html).

**IMPORTANT**: Server-Side Videos Coming Soon!  Watch Canvas for announcements.

---

### Combining JavaScript with HTTP

* Forms
  * The `action` attribute targets a resource
  * Input elements need a `name` attribute
  * Submit buttons: `<button>` or `<input type="submit">`

* Intro to HTTP 
  * HTTP Resources
    * Uniquely identified by URL
    * Can be potentially "CRUD"-ed depending on server functionality
    * Take a look at the [url parsing diagram](url_structure.png)
  * Inspecting network traffic in Chrome
  * Demo: HTTP requests with `curl -v --http1.1 [url]` 
  * HTTP Requests
    * General form: `<METHOD>` `<RESOURCE PATH>` `HTTP/<VERSION>`
    * Example: `GET / HTTP/1.1`
    * `METHOD` is one of: `GET` `POST` `PATCH` `DELETE` `PUT` `HEAD` `OPTIONS`
    * `RESOURCE_PATH` is a path relative to the `Host:` header value 
    * List of "headers" (key-value pairs)
      * `Host`
      * `User-Agent`
      * `Accept:`
    * (Optional) Body
      * HTTP 1.1 only supports text encoding; must use base64 if transmitting binary data
      * HTTP 2.0 is binary-encoded

  * HTTP Responses
    * General form: 
      * `HTTP/<VERSION>` `<STATUS CODE>` `<STATUS DESCRIPTION`>
      * Example: `HTTP/1.1 200 OK`
      * List of "headers" (key-value pairs)
        * `Content-Type` reports the MIME type of the response
        * `Content-Length`
      * (Optional) Body
        * Can consist of one part or multiple parts
        * (Unusual) If multiple parts, MIME types are embedded within each part

  * HTTP response status codes
    * 100-199: Connection information
    * 200-299: Success
    * 300-399: Redirection
    * 400-499: Client Error
    * 500-599: Server Error

* Making HTTP requests with JavaScript
  * Using `fetch()` to access a remote resource
  * Using `async` and `await` for simplifying asynchronous patterns
  * Or using `Promise` objects and `then()`

* If we have time...
  * DOM Event Bubbling
  * JavaScript string template example
  * Working with Arrays: `.map`, `.filter`, `.forEach`, etc.



**References**

  * [HTML5 Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
  * [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
  * [All About CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
  * [Using Fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
  * [DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
  * [Element-Level Data](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
