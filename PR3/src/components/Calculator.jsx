import { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "./Calculator.css";

const Calculator = () => {
    const [val, setVal] = useState("");

    const add = (v) => setVal(val + v);
    const clear = () => setVal("");
    const backspace = () => setVal(val.slice(0, -1));

    const squareRoot = () => {
        try {
            if (val === "") return;
            setVal(Math.sqrt(Number(val)).toString());
        } catch {
            setVal("Error");
        }
    };

    const calc = () => {
        try {
            setVal(eval(val).toString());
        } catch {
            setVal("Error");
        }
    };

    return (
        <div className="calculator-container">
            <Display value={val} />

            <div className="buttons-grid">
                {/* Row 1 */}
                <Button text="⌫" type="func" onClick={backspace} />
                <Button text="X" type="func" onClick={() => add("*")} />
                <Button text="√" type="func" onClick={squareRoot} />
                <Button text="C" type="clear" onClick={clear} />
                
                

                <Button text="7" type="number" onClick={() => add("7")} />
                <Button text="8" type="number" onClick={() => add("8")} />
                <Button text="9" type="number" onClick={() => add("9")} />
                <Button text="=" type="equal" onClick={calc} />
                {/* Row 2 */}
                <Button text="4" type="number" onClick={() => add("4")} />
                <Button text="5" type="number" onClick={() => add("5")} />
                <Button text="6" type="number" onClick={() => add("6")} />
                <Button text="÷" type="func" onClick={() => add("/")} />

                {/* Row 3 */}
                <Button text="1" type="number" onClick={() => add("1")} />
                <Button text="2" type="number" onClick={() => add("2")} />
                <Button text="3" type="number" onClick={() => add("3")} />
                
                <Button text="+" type="func big-plus" onClick={() => add("+")} />

                {/* Row 4 */}
                <Button text="0" type="number" onClick={() => add("0")} />
                <Button text="." type="number" onClick={() => add(".")} />
                <Button text="-" type="func" onClick={() => add("-")} />

                {/* Row 5 */}
                
                
            </div>
        </div>
    );
};

export default Calculator;