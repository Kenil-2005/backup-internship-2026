import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <Suspense fallback={<p>Loading...</p>}>
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    </Suspense>
);
