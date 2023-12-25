import "./calc.css"
import { useState } from "react";
export default function CalculatorHeader() {
    const [calc, setCalc] = useState({
        current: "0",
        total: "0",
        isIntial: true,
        preOp: ""
    });
    function numberClicker(value) {
        let newValue = value;
        if (!calc.isIntial) {
            newValue = calc.current + value;
        }

        setCalc({ current: newValue, total: calc.total, isIntial: false, preOp: calc.preOp });
    }
    function operatorClicker(value) {
        const total = doCalculation();
        setCalc({ current: total.toString(), total: total.toString(), isIntial: true, preOp: value })
    }
    function doCalculation() {
        let total = parseInt(calc.total);
        // debugger;

        console.log(calc);
        switch (calc.preOp) {
            case "+":
                total += parseInt(calc.current);
                break;
            case "-":
                total -= parseInt(calc.current);
                break;
            case "/":
                total /= parseInt(calc.current);
                break;
            case "*":
                total *= parseInt(calc.current);
                break;
            default:
                total= parseInt(calc.current);
        }
        return total;
    }
    function renderDisplay() {
        return calc.current;
    }
    
    function clearClicker() {
        setCalc({
            current: "0",
            total: "0",
            isIntial: true,
            preOp: ""
        });
    }
    return (
        <div className="calc">
            <div className="result">{renderDisplay()}</div>
            <Calculator value="7" onClick={numberClicker} />
            <Calculator value="8" onClick={numberClicker} />
            <Calculator value="9" onClick={numberClicker} />
            <Calculator value="/" className="operator" onClick={operatorClicker} />

            <Calculator value="4" onClick={numberClicker} />
            <Calculator value="5" onClick={numberClicker} />
            <Calculator value="6" onClick={numberClicker} />
            <Calculator value="*" className="operator" onClick={operatorClicker} />

            <Calculator value="1" onClick={numberClicker} />
            <Calculator value="2" onClick={numberClicker} />
            <Calculator value="3" onClick={numberClicker} />
            <Calculator value="-" className="operator" onClick={operatorClicker} />

            <Calculator value="C" onClick={clearClicker} />
            <Calculator value="0" onClick={numberClicker} />
            <Calculator value="=" onClick={operatorClicker} />
            <Calculator value="+" className="operator" onClick={operatorClicker} />
        </div>
    )
}

function Calculator(props) {
    return (
        <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
    )
}
