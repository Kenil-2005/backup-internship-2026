import { useSpring, animated } from "@react-spring/web";

export default function ReactSpring() {
    const props = useSpring({
        from: { opacity: 0, x: 0 },
        to: { opacity: 1, x: 100 },
        config: { duration: 5000 },
    });

    return <animated.div style={props}>I will animate</animated.div>;
}
