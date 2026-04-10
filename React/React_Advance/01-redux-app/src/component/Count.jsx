import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Redux/CounterSlice";

const Count = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 style={{ marginInlineStart: "20px", }}>{count}</h1>
            <button style={{ marginInlineEnd: "10px", }} onClick={() => dispatch(increment())}>+</button>
            <button style={{ marginInlineStart: "10px", }} onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};

export default Count;
