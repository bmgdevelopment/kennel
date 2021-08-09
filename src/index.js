import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Kennel } from "./components/Kennel.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Kennel />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)



// REACT NOTES: 
// -------------
//   What is <> and </>?
//   Remember, a function can only return one thing. This is a 🔻 React.Fragment which gives
//   us the ability to wrap the content, and return one item.

//   To display our Kennel component, we need to modify the index.js file. This file, 
//   index.js, is the 🔻 entry file, or the first JavaScript file that runs in our app.

//   Starting Your React Application
//   In your terminal, make sure you are in the top-level project directory, and not in the public
//   or src sub-directory, and type the following command.

//   ✅ npm start

//  If you want to start measuring performance in your app, pass a function
//  to log results (for example: reportWebVitals(console.log))
//  or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//  reportWebVitals();
