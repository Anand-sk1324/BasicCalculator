import { useStore } from "zustand";
import useDisplay from "../hooks/useDisplay";
const DisplayBox = () => {
    const { displayValue } = useDisplay();
    return (
        <div className=" w-full h-full border border-black px-2 col-span-3 flex justify-end items-center bg-slate-200 ">
            <span> {displayValue ? displayValue : '0'} </span>
        </div>
    );
};

export default DisplayBox;
