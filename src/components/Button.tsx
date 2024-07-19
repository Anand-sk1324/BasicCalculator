import useDisplay from "../hooks/useDisplay";
const Button = ({ value, altDisplay = "", del = false, eql = false }) => {
    const { concat, compute, clear } = useDisplay();
    const handleClick = () => {
        if (eql) {
            compute();
        } else if (del) {
            clear();
        } else {
            concat(value);
        }
    };
    return (
        <button
            className={` w-10 border border-black p-2 hover:bg-slate-100 ${eql&&'bg-green-200'} ${del && 'bg-red-200'}`}
            onClick={handleClick}
        >
            {value}
        </button>
    );
};

export default Button;
