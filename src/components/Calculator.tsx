import Button from "./Button";
import DisplayBox from "./DisplayBox";
const Calculator = () => {
    return (
        <div className=" grid grid-cols-4 grid-rows-4 place-items-center gap-2 border border-black p-2">
            <DisplayBox />

            <Button value="C" del/>
            <Button value="7" />
            <Button value="8" />
            <Button value="9" />
            <Button value="+" />

            <Button value="4" />
            <Button value="5" />
            <Button value="6" />
            <Button value="-" />

            <Button value="1" />
            <Button value="2" />
            <Button value="3" />
            <Button value="*" altDisplay="x" />

            <Button value="." />
            <Button value="0" />
            <Button value="=" eql />
            <Button value="/" />
        </div>
    );
};

export default Calculator;
