import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Prevent "removeChild" errors caused by browser extensions modifying the DOM
const root = createRoot(container);
root.render(<App />);
