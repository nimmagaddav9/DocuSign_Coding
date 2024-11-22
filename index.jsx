	Q1. 
Finish the Greeter component so that it returns a div element with text "Hello {user}" where user is a prop passed to the component.
For example, if user prop has value "Admin", the method should return a div containing "Hello Admin".

import React from "react";
import createRoot } from "react-dom/client";
function Greeter (props) {
}
return <div>Hello {/* Write your code here */}</div>;
document.body.innerHTML = "<div id='root'> </div>";
const root createRoot(document.getElementById("root")) root.render(<Greeter user="Admin"/>);
	
	import React from "react";
import { createRoot } from "react-dom/client";

function Greeter(props) {
  return <div>Hello {props.user}</div>;
}

document.body.innerHTML = "<div id='root'> </div>";
const root = createRoot(document.getElementById("root"))
root.render(<Greeter user="Admin"/>);

Explanation:
The Greeter component now takes props and displays the user prop value inside the div.
In the root.render method, we're passing the user="Admin" prop, which will display Hello Admin in the DOM when rendered.

======================================================================================================================================

	HTML5, CSS3, ReactV18
	
	Q1. List is provided A, B, C. Render a list and when you click on the List item that item moves to first position

	Solution 1:
	import React, { useState } from 'react';
	
	const MoveToFirstList = () => {
	  // Initialize the list of items
	  const [items, setItems] = useState(['a', 'b', 'c']);
	
	  // Handle the click event to move the clicked item to the first position
	  const moveToFirst = (item) => {
	    const newItems = items.filter(i => i !== item); // Remove the clicked item
	    setItems([item, ...newItems]); // Add the clicked item at the beginning of the list
	  };
	
	  return (
	    <div>
	      <ul>
	        {items.map((item, index) => (
	          <li key={index} onClick={() => moveToFirst(item)}>
	            {item}
	          </li>
	        ))}
	      </ul>
	    </div>
	  );
	};
	
export default MoveToFirstList;


	2. How to pass context to children component and how to use them?

    
