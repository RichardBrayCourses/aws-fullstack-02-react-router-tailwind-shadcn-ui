import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const rootDivElement = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(rootDivElement);

reactRoot.render(<App />);

/* first version 

import ReactDOM from "react-dom/client";

const rootDivElement = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(rootDivElement);

reactRoot.render(<p>hello world</p>);


*/
