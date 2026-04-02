import { useState } from "react";

const App = () => {

    const [isPending, setIsPending] = useState(false);
    const [isLoad, setIsLoad] = useState(false);

    const expensiveLoading = () => {
        setIsPending(true);
        setIsLoad(false);

        setTimeout(() => {
            for (let i = 0; i < 999999; i++) {
                i++;
                i--;
            }
            setIsPending(false);
            setIsLoad(true);
        }, 5000);
    };

    // useEffect(() => {
    //     expensiveLoading();
    // }, []);

    return (
        <>
            <button onClick={expensiveLoading}>Start</button>
            {isPending && <p>Data is Loading...</p>}
            {isLoad && <p>Data is load</p>}
        </>
    );
};

export default App;
