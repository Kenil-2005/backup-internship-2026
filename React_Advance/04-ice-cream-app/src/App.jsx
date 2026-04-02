import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useIceCreamStore from './App/IceCreamStore';
import StepOne from './Components/StepOne';
import StepTwo from './Components/StepTwo';
import StepThree from './Components/StepThree';
import './App.css';
import StepFour from './Components/StepFour';

const App = () => {

    const step = useIceCreamStore((state) => state.stores.step);

    return (
        <div className="ice-cream-wrapper">
            <div className='ice-cream-content container'>
                <div className="progress-wrapper">
                    <p>Step <span id="step">{step}</span> of 4</p>
                    <div className="progress-wrap">
                        <div className="progress-fill" style={{ width: `${step * 25}%` }}></div>
                    </div>
                </div>

                {step === 1 && <StepOne />}
                {step === 2 && <StepTwo />}
                {step === 3 && <StepThree />}
                {step === 4 && <StepFour />}
            </div>
        </div>
    );
}

export default App;