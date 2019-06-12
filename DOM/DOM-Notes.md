## What is DOM?

<p>Document Object Model is a structured presentation of HTML document in Nodes and Objects, which has properties and Methods related to it, which can be used to alter the structure, style and content of the DOM. This can done using the JS or other programming languages.
</p>

<p>There are 12 node types. In practice we usually work with 4 of them:

document – the “entry point” into DOM.
element nodes – HTML-tags, the tree building blocks.
text nodes – contain text.
comments – sometimes we can put the information there, it won’t be shown, but JS can read it from the DOM.

An HTML/XML document is represented inside the browser as the DOM tree.

Tags become element nodes and form the structure.
Text becomes text nodes.
…etc, everything in HTML has its place in DOM, even comments.

</p>

'querySelector': selects single element it can be using class or give the tag name;
'querySelectorAll':Selects more than one element with the same name and returns a array like object.

'classList':Adds class to already existing class, we can ise add() and remove();
