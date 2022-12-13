import React from "react";
import { Power4 } from "gsap";

// @ts-ignore
function Transition({ timeline }) {
    const transi = React.useRef(null);

    // timeline.fromTo(
    //    transi.current,
    //    {
    //       clipPath: "circle(50%)",
    //       opacity: 0.9,
    //       skewX: 0,
    //    },
    //    {
    //       duration: 4,
    //       clipPath: "circle(0%)",
    //       skewX: 50,
    //       ease: Power4.easeOut,
    //       opacity: 0.2,
    //    }
    // );

    React.useEffect(() => {
        timeline.to(transi.current, {
            duration: 4,
            clipPath: "circle(80%)",
            ease: Power4.easeOut,
            opacity: 0
        });
    });

    return (
        <div>
            <div className="transition-effect" ref={transi} />
        </div>
    );
}

export default Transition;
