import "./App.css";
import { useState } from "react";
import FramerMotion from "./components/FramerMotion";
import ReactSpring from "./components/ReactSpring";
import ReactTransition from "./components/ReactTransition";

function App() {

    const [items, setItems] = useState([
        { id: 1, text: "Learn React basics" },
        { id: 2, text: "Build a form validation project" },
        { id: 3, text: "Practice JavaScript ES6 features" }
    ]);

    const addItem = () => {
        const newItem = {
            id: Date.now(),
            text: "New Task " + items.length
        };
        setItems(prev => [...prev, newItem]);
    };

    const removeItem = () => {
        setItems(prev => prev.slice(0, -1));
    };

    return (
        <>
            <FramerMotion />
            <hr />
            <ReactSpring />
            <hr />
            <button onClick={addItem}>Add Item</button>
            <button onClick={removeItem}>Remove Item</button>
            <ReactTransition items={items} />
        </>
    );
}

export default App;
