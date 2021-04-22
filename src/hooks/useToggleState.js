import { useState } from "react";

function useToggle(initialVal = false) {
    const [state, setstate] = useState(initialVal);
    const toggle = () => {
        setstate(!state)
    };
    // return a peice of state and a function to toggle it
    return [state, toggle];
}

export default useToggle;