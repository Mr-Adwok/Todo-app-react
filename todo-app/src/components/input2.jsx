import {useState} from "react"



// first you will take the user input and store it inside a state
// then give it a to the event handler of the button



export default function InputFetch(){


	// state for storing user input 

	const [inputS,setInput] = useState("");


	// handler for input changes

	const handleChange = (e) => {
    setInput(e.target.value);
  	};


  	// states for the data coming 
  	// const [fetching, setFetch] = useState([]);

  	let response;
  	let data;

const handleFetch = () => {
  if (inputS.trim() === "") return; // ignore empty input

  response = fetch(inputS).then(message => console.log(message))
  console.log(response.then(message))

};	


return (
<div className = "container2">
  <input
    type="text"
    value={inputS}
    onChange={handleChange}
    placeholder="Enter URL"
  />
  
</div>
);

} 













// # React Practical Mental Model Session

// # Requirements

// Create a component with an input element

// - The input will take in a URL
//     - `https://jsonplaceholder.typicode.com/posts`
//     - The user has to type in the URL manually
// - It will have a submit button called `Fetch`
// - There will be a `retry` button to manually refetch again if the request fail
// - If the user clicks the button, it will fetch the posts and display them
//     - The post has the structure of
    
//     ```tsx
//     type Post = {
//     	userId: number;
//     	id: number;
//     	title: string;
//     	body: string;
//     }
//     ```
    

// # Implementation

// - You have to fetch using a custom hook
// - The hook will return
//     - The posts to display
//     - refetch function
//     - loading state
//     - error state