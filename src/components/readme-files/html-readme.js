export const htmlReadme = {
  title: "HTML - HyperText Markup Language",
  description:
    "HTML is the standard markup language for creating web pages. It describes the structure of a web page using markup elements.",
  sections: [
    {
      title: "What is HTML?",
      content:
        "HTML is the standard markup language used to create web pages. It describes the structure and content of a webpage using elements and tags.",
      code: `<!-- HTML uses tags to structure content -->
<h1>This is a heading</h1>
<p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
<a href="https://example.com">This is a link</a>`,
    },
    {
      title: "Basic HTML Structure",
      content:
        "HTML documents have a basic structure that includes DOCTYPE, html, head, and body elements. This structure provides the foundation for all web pages.",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>`,
    },
    {
      title: "Block Elements",
      content:
        "Block elements take up the full width available and start on a new line. Common block elements include div, headings, paragraphs, lists, and semantic elements.",
      code: `<!-- Generic container -->
<div>This is a div block</div>

<!-- Headings -->
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Section Heading</h3>
<h4>Subsection Heading</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>

<!-- Paragraphs -->
<p>This is a paragraph that takes full width.</p>

<!-- Lists -->
<ul>
    <li>Unordered list item 1</li>
    <li>Unordered list item 2</li>
</ul>

<ol>
    <li>Ordered list item 1</li>
    <li>Ordered list item 2</li>
</ol>

<!-- Semantic elements -->
<section>Section content</section>
<article>Article content</article>
<header>Header content</header>
<footer>Footer content</footer>`,
    },
    {
      title: "Inline Elements",
      content:
        "Inline elements only take up as much width as necessary and don't start on a new line. Common inline elements include span, links, text formatting, and images.",
      code: `<!-- Text formatting -->
<p>This is <strong>bold text</strong> and this is <em>italic text</em>.</p>
<p>You can also use <mark>highlighted text</mark> and <u>underlined text</u>.</p>

<!-- Links -->
<a href="https://example.com" target="_blank">External Link</a>
<a href="#section1">Internal Link</a>

<!-- Images -->
<img src="image.jpg" alt="Description" width="300" height="200">

<!-- Inline containers -->
<p>This paragraph contains <span class="highlight">inline styled text</span> within it.</p>

<!-- Form inputs -->
<input type="text" placeholder="Enter text">
<button>Click me</button>`,
    },
    {
      title: "Inline-Block Elements",
      content:
        "Inline-block elements combine features of both inline and block elements, allowing you to set width and height while keeping them in line with other content.",
      code: `<style>
    .inline-block {
        display: inline-block;
        width: 100px;
        height: 50px;
        background: lightblue;
        margin: 5px;
        text-align: center;
        line-height: 50px;
    }
</style>

<span class="inline-block">Box 1</span>
<span class="inline-block">Box 2</span>
<span class="inline-block">Box 3</span>`,
    },
    {
      title: "Essential HTML Tags - Text and Content",
      content:
        "Essential tags for creating text content, headings, paragraphs, links, images, and basic formatting elements.",
      code: `<!-- Headings -->
<h1>Main Title</h1>
<h2>Subtitle</h2>

<!-- Paragraphs and Text -->
<p>This is a paragraph.</p>
<strong>Bold text</strong>
<em>Italic text</em>
<br> <!-- Line break -->
<hr> <!-- Horizontal rule -->

<!-- Links -->
<a href="https://example.com" target="_blank">External Link</a>
<a href="#section1">Internal Link</a>

<!-- Images -->
<img src="path/to/image.jpg" alt="Description" width="300" height="200">`,
    },
    {
      title: "Lists",
      content:
        "HTML provides different types of lists for organizing content: unordered lists (bullet points) and ordered lists (numbered).",
      code: `<!-- Unordered List -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- Ordered List -->
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>

<!-- Nested Lists -->
<ul>
    <li>Main item 1
        <ul>
            <li>Sub item 1</li>
            <li>Sub item 2</li>
        </ul>
    </li>
    <li>Main item 2</li>
</ul>`,
    },
    {
      title: "Tables",
      content:
        "HTML tables are used to display tabular data in rows and columns. They include thead, tbody, and various table elements for proper structure.",
      code: `<table border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>25</td>
            <td>New York</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>30</td>
            <td>London</td>
        </tr>
    </tbody>
</table>

<!-- More complex table -->
<table>
    <caption>Employee Information</caption>
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Salary</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">John Doe</th>
            <td>Engineering</td>
            <td>$75,000</td>
        </tr>
    </tbody>
</table>`,
    },
    {
      title: "Forms",
      content:
        "HTML forms are used to collect user input. They include various input types, labels, validation attributes, and form controls for creating interactive interfaces.",
      code: `<form action="/submit" method="POST">
    <!-- Text Input -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <!-- Email Input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <!-- Password Input -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    
    <!-- Textarea -->
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>
    
    <!-- Radio Buttons -->
    <fieldset>
        <legend>Gender:</legend>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
    </fieldset>
    
    <!-- Checkboxes -->
    <input type="checkbox" id="subscribe" name="subscribe">
    <label for="subscribe">Subscribe to newsletter</label>
    
    <!-- Select dropdown -->
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="usa">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="canada">Canada</option>
    </select>
    
    <!-- File upload -->
    <label for="file">Upload file:</label>
    <input type="file" id="file" name="file">
    
    <!-- Submit and Reset buttons -->
    <input type="submit" value="Submit">
    <button type="reset">Reset</button>
</form>`,
    },
    {
      title: "Semantic HTML5 Elements",
      content:
        "HTML5 introduced semantic elements that provide meaning to the structure of your webpage, making it more accessible, SEO-friendly, and easier to maintain.",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="hero">
            <h1>Welcome to Our Website</h1>
            <p>Your journey starts here</p>
        </section>
        
        <section id="content">
            <article>
                <header>
                    <h2>Article Title</h2>
                    <time datetime="2024-01-15">January 15, 2024</time>
                </header>
                <p>Article content goes here...</p>
                <footer>
                    <p>Published by: <address>John Doe</address></p>
                </footer>
            </article>
        </section>
       
        <aside>
            <h3>Sidebar Content</h3>
            <p>Additional information and related links</p>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2025 Your Website. All rights reserved.</p>
        <address>
            <p>Contact us at: <a href="mailto:info@example.com">info@example.com</a></p>
        </address>
    </footer>
</body>
</html>`,
    },
    {
      title: "HTML Attributes and Best Practices",
      content:
        "HTML attributes provide additional information about elements. Understanding common attributes and following best practices ensures accessible, maintainable code.",
      code: `<!-- Common attributes -->
<div id="unique-identifier" class="css-class another-class" data-custom="value">
    Content with multiple attributes
</div>

<!-- Accessibility attributes -->
<img src="image.jpg" alt="Descriptive alt text for screen readers" title="Tooltip text">

<!-- Form attributes -->
<input type="email" 
       id="email" 
       name="email" 
       placeholder="Enter your email" 
       required 
       aria-describedby="email-help">
<small id="email-help">We'll never share your email with anyone else.</small>

<!-- Link attributes -->
<a href="https://external-site.com" 
   target="_blank" 
   rel="noopener noreferrer" 
   title="Opens in new tab">
   External Link
</a>

<!-- Meta tags for SEO and responsive design -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page description for search engines">
    <meta name="keywords" content="html, web development, tutorial">
    <meta name="author" content="Your Name">
</head>`,
    },

    {
      title: "Happy Coding! 🎉",
      content:
        "Remember: The best way to learn web development is by practicing. Start with small projects and gradually build more complex applications as you become comfortable with the basics.",
      code: `<!-- Start with simple projects like: -->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My First Project</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my first webpage!</p>
</body>
</html>`,
    },
  ],
};
