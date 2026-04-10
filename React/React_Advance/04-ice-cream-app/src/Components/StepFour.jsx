import React from "react";
import useIceCreamStore from "../App/IceCreamStore";

const StepFour = () => {

    const updateStore = useIceCreamStore((state) => state.updateStore);
    const resetStore = useIceCreamStore((state) => state.resetStore);
    const store = useIceCreamStore((state) => state.stores);

    console.log(store);

    const handlePrev = () => {
        updateStore("step", 3);
    };

    const handleNext = () => {
        localStorage.clear();
        resetStore();
        updateStore("step", 1);
    };

    let sum = (store.base?.price || 0) + (store.type?.price || 0);

    return (
        <>
            <div className="review-wrap">
                <h2 className='text-center mb-5'>Review Your Order</h2>

                <div className="review-content">
                    <div className="order-heading">
                        <img src="./order-summary.png" alt="" />
                        <p><strong>Order Summary</strong></p>
                    </div>

                    <div className="summary-item-wrap">
                        <div className="summary-item-content">
                            <span></span>
                            <p className="summary-item-title"><strong>Price</strong></p>
                        </div>
                    </div>

                    <div className="separator-review"></div>

                    <div className="summary-item-wrap">
                        <p className="summary-item-title"><strong>Base:</strong></p>
                        <div className="summary-item-content">
                            <p>{store.base.label}</p>
                            <p><span>&#8377;</span>{store.base.price}</p>
                        </div>
                    </div>

                    <div className="separator-review"></div>
                    <div className="summary-item">
                        <p className="summary-item-title"><strong>Toppings:</strong></p>
                        <div>
                            {
                                store.topping?.map((item) => {
                                    sum = sum + item.price;
                                    return (
                                        <div className="summary-item-content" key={item.id}>
                                            <p>{item.label}</p>
                                            <p><span>&#8377;</span>{item.price}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>

                    <div className="separator-review"></div>

                    <div className="summary-item-wrap">
                        <p className="summary-item-title"><strong>Type:</strong></p>
                        <div className="summary-item-content">
                            <p>{store.type.label}</p>
                            <p><span>&#8377;</span>{store.type.price}</p>
                        </div>
                    </div>

                    <div className="separator-review"></div>

                    <div className="summary-item-wrap">
                        <div className="summary-item-content">
                            <p className="summary-item-title"><strong>Total</strong></p>
                            <p className="summary-item-title"><strong>{sum}</strong></p>
                        </div>
                    </div>

                    {/* <div className="separator-review"></div> */}
                </div>
            </div >

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
                    Submit
                </button>
            </div>
        </>
    );
};

export default StepFour;
