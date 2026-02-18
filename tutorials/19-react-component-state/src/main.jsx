import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const rootDivElement = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(rootDivElement);

reactRoot.render(<App />);
