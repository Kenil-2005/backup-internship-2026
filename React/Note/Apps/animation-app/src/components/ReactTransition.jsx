import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../css/transitions.css";
import React, { useRef } from "react";

export default function ReactTransition({ items }) {
    const nodeRefs = useRef({});
    return (
        <TransitionGroup component="ul">
            {items.map((item) => {

                if (!nodeRefs.current[item.id]) {
                    nodeRefs.current[item.id] = React.createRef();
                }

                return (
                    <CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames="fade"
                        nodeRef={nodeRefs.current[item.id]}
                    >
                        <li ref={nodeRefs.current[item.id]}>
                            {item.text}
                        </li>
                    </CSSTransition>
                );
            })}
        </TransitionGroup>
    );
}
