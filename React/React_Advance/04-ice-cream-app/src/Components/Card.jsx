import data from "../assets/json/data";
import useIceCreamStore from "../App/IceCreamStore";

const Card = ({ stepType }) => {

    const updateStore = useIceCreamStore((state) => state.updateStore);
    const stepData = data[stepType];
    const store = useIceCreamStore((state) => state.stores);


    return (
        <>
            <div className="option-content">
                {
                    stepData.map((item) => {
                        let isChecked = false;

                        if (stepType === "topping") {
                            isChecked = store.topping.some(i => i.id === item.id);
                        } else {
                            isChecked = store[stepType]?.id === item.id;
                        }
                        
                        return (
                            <div className="card-content" key={item.id}>
                                <label>
                                    <input
                                        type={stepType === "topping" ? "checkbox" : "radio"}
                                        name={stepType}
                                        value={item.label}
                                        checked={isChecked}
                                        onChange={() => updateStore(stepType, item)} />
                                    <div className="image-wrap">
                                        <img src={item.image} alt={item.label} />
                                    </div>
                                    <div className="card-bottom">
                                        <p>{item.label}</p>
                                        <p><span>&#8377;</span>{item.price}</p>
                                    </div>
                                </label>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};

export default Card;