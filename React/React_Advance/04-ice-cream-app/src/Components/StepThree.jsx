import React from "react";
import Card from "./Card";
import useIceCreamStore from "../App/IceCreamStore";



const StepThree = () => {

    const updateStore = useIceCreamStore((state) => state.updateStore);

    const handlePrev = () => {
        updateStore("step", 2);
    };
    const handleNext = () => {
        updateStore("step", 4);
    };

    return (
        <div>
            <div className="option-wrap">
                <Card stepType={"type"} />
            </div>
            <div className="btn-wrap">
                <button
                    className="primary-btn"
                    onClick={() => handlePrev()}
                >
                    Prev
                </button>
                <button
                    className="primary-btn"
                    onClick={() => handleNext()}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default StepThree;
