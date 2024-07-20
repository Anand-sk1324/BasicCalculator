import useDisplay from "../hooks/useDisplay";
const DisplayBox = () => {
    const { displayValue } = useDisplay();
    return (
        <div className=" w-full h-full border border-black px-2 col-span-3 flex justify-end items-center bg-slate-200 rounded-xl ">
            <p className="block w-32 overflow-hidden whitespace-nowrap text-ellipsis text-right">
                {" "}
                {displayValue ? displayValue : "0"}{" "}
            </p>
        </div>
    );
};

export default DisplayBox;
