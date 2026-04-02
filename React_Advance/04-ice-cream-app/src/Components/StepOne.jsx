import React from 'react';
import useIceCreamStore from '../App/IceCreamStore';
import Card from './Card';

const StepOne = () => {

    const updateStore = useIceCreamStore((state) => state.updateStore);

    const handleNext = () => {
        updateStore("step", 2);
    }

    return (
        <div>
            <div className="option-wrap">
                <Card stepType={"base"} />
            </div>
            <div className="btn-wrap">
                <span></span>
                <button
                    className="primary-btn"
                    onClick={() => handleNext()}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default StepOne;