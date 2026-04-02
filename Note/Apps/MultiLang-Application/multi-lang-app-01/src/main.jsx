import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./i18n"; // Import the configuration file

createRoot(document.getElementById("root")).render(
    <Suspense fallback={<p>Loading...</p>}>
        <App />
    </Suspense>
);
