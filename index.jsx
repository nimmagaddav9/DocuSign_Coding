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

	Context
This acts as the storage where the data is stored. It comes with two parts:

createContext() — This creates the global object and creates the context.
useContext() — This consumes the information made available by the provider.
    
	coding_question:
	How to Create a Theme-Switching App using React Context.
	Let's implement a simple theme-switching application using React Context API.
	
	Step #1
	In the src folder create a context folder. Then create a new file called ThemeContext.js.
	
	import React, { createContext, useContext, useState } from 'react';
	
	const ThemeContext = createContext();
	
	const ThemeProvider = ({ children }) => {
	  const [theme, setTheme] = useState('light');
	
	  const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	  };
	
	  return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
		  {children}
		</ThemeContext.Provider>
	  );
	};
	
	const useTheme = () => {
	  return useContext(ThemeContext);
	};
	
	export { ThemeProvider, useTheme };
	Walkthrough:
	We started by creating a context (createContext()) and assigning a ThemeContext variable to it, which will act as storage for the theme data.
	In the ThemeProvider component, we used the useState hook to manage current theme and also create a toggle that will help with switching between light and dark mode.
	The <ThemeContext.Provider> wraps the children, making the props passed to it available to every component within its subtree.
	The useTheme component is a custom hook that uses useContext() to consume the ThemeContext context.
	Step #2
	In your src folder create a ThemedComponent.js file. Copy and paste the code below in the file:
	
	import React from 'react';
	import { useTheme } from './context/ThemeContext';
	
	const ThemedComponent = () => {
	  const { theme, toggleTheme } = useTheme();
	
	  return (
		<div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
		  <h2>Themed Component</h2>
		  <p>Current Theme: {theme}</p>
		  <button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	  );
	};
	
	export default ThemedComponent;
	Walkthrough:
	Using the useTheme() hook, you can get access to consume the theme context. Remember that we passed theme and the toggleTheme function to the ThemeContext.Provider.
	The component's style dynamically changes based on the current theme. This shows how components can adapt to global state changes managed by the context.
	The button triggers the toggleTheme function to switch between light and dark mode.
	Step #3
	In your App.js file, copy and paste the code below:
	
	import React from 'react';
	import { ThemeProvider } from './context/ThemeContext';
	import ThemedComponent from './ThemedComponent.js';
	
	const App = () => {
	  return (
		<ThemeProvider>
		  <div>
			<h1>Themed App</h1>
			<ThemedComponent />
		  </div>
		</ThemeProvider>
	  );
	};
	
	export default App;
	Walkthrough:
	<App /> is the main app component where the ThemeProvider is used to wrap the whole application and give theme context access to all components within the ThemeProvider.
	The ThemedComponent is rendered, showcasing the result of the components with access to the context.
	After successful implementation of context, the result should be like so:

	output:
	// current theme: dark
	button --> toggle theme