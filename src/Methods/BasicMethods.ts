import { WHITE_COLOR, LIGHTORANGE_COLOR, BLUE_COLOR, LOG, LN, YROOT, op, otherInput, ERROR, Empty, degMode, radMode } from '../Elements/Constants.js'
import { _2nd_div, _sqr_div, _root_div, _xtoy_div, _tenpow_div, _log_div, _ln_div, } from '../Elements/StyleElements.js'
import { _log, _ln, _tenpow, _xtoy, _root, _sqr } from '../Elements/Elements_2nd.js'
import { dis, upper, btntxt, btncheck } from '../Elements/BasicElements.js'
import { checkForError } from './validateMethod.js';
import { Calculator } from '../Classes/CalculatorClass.js'

let tempObj = new Calculator();

export class basicService {

    textChange = (): void => {
        btntxt.innerHTML = (btntxt.innerHTML == degMode) ? radMode : degMode;
    }

    changeBtn = (): void => {
        if (tempObj.btnCount % 2 === 1) {
            _sqr.innerHTML = 'x<sup>2</sup>';
            _root.innerHTML = '2&#x221A;x';
            _xtoy.innerHTML = 'x<sup>y</sup>';
            _tenpow.innerHTML = '10<sup>x</sup>';
            _log.innerHTML = LOG;
            _ln.innerHTML = LN;
            _2nd_div.backgroundColor = _sqr_div.backgroundColor = _root_div.backgroundColor = _xtoy_div.backgroundColor = _tenpow_div.backgroundColor = _log_div.backgroundColor = _ln_div.backgroundColor = WHITE_COLOR;
            tempObj.btnCount = 0;
        } else {
            _2nd_div.backgroundColor = BLUE_COLOR;
            _sqr.innerHTML = 'x<sup>3</sup>';
            _root.innerHTML = '3&#x221A;x';
            _xtoy.innerHTML = 'y&#x221A;x';
            _tenpow.innerHTML = '2<sup>x</sup>';
            _log.innerHTML = 'log<sub>y</sub>x';
            _ln.innerHTML = 'e<sup>x</sup>';
            _sqr_div.backgroundColor = _root_div.backgroundColor = _xtoy_div.backgroundColor = _tenpow_div.backgroundColor = _log_div.backgroundColor = _ln_div.backgroundColor = LIGHTORANGE_COLOR;
            tempObj.btnCount = 1;
        }
    }

    fe = (): void => {
        if (tempObj.checkedCnt == 0) {
            btncheck.style.backgroundColor = BLUE_COLOR;
            tempObj.checkedCnt = 1;
            return;
        }
        btncheck.style.backgroundColor = WHITE_COLOR;
        tempObj.checkedCnt = 0;
    }

    display = (val: string): void => {
        if (checkForError()) {
            let oldOperator = dis.value.slice(-1);

            if (op.includes(val) && op.includes(oldOperator)) {
                dis.value = dis.value.slice(0, -1) + val;
            }
            else if (val == Math.PI.toString() || val == Math.E.toString()) {
                if (op.slice(0, 5).includes(oldOperator) || otherInput.slice(0, 2).includes(oldOperator)) {
                    val = (tempObj.checkedCnt == 1) ? Number.parseFloat(val).toExponential().toString() : val;
                    dis.value += val;
                    return;
                }
                upper.value = Empty;
                dis.value = val;
            }
            else {
                if (!(op.includes(val)) && !(otherInput.includes(val))) {
                    val = (tempObj.checkedCnt == 1) ? Number.parseFloat(val).toExponential().toString() : val;
                }

                dis.value += val;
            }
        }
    }

    factorial = (): void => {

        if (checkForError()) {
            dis.value = op.includes(dis.value.slice(-1)) ? dis.value.slice(0, -1) : dis.value;

            let val: number = Number.parseFloat(eval(dis.value));

            if (val >= 0) {
                upper.value = 'fact(' + val + ')';
                let fact = 1;
                if (val == 0 || val == 1) {
                    fact = 1;
                }
                else {
                    for (let i = 1; i <= val; i++) {
                        fact *= i;
                    }
                }
                dis.value = fact.toString();
            }
            else {


                upper.value = 'fact(' + val + ')';
                dis.value = ERROR;
            }
        }
    }

    plusminus = (): void => {
        if (checkForError()) {
            dis.value = (parseFloat(dis.value) > 0) ? (0 - parseFloat(dis.value)).toString() : (Math.abs(parseFloat(dis.value))).toString();
        }
    }

    inverse = (): void => {
        if (checkForError()) {
            upper.value = '1/(' + dis.value + ')=';
            try {
                let inverseCalculation = eval(upper.value.slice(0, -1));
                dis.value = Number.isFinite(inverseCalculation) ? inverseCalculation : ERROR;
            }
            catch {
                dis.value = ERROR;
            }
        }
    }

    expo = (): void => {
        if (checkForError()) {
            const fE = dis.value != Empty ? parseFloat(dis.value) : 0;
            dis.value = fE.toExponential();
        }
    }

    answer = (): void => {
        if (checkForError()) {
            let error = Empty;
            try {
                upper.value = dis.value + '=';
                dis.value = Empty;

                let x = upper.value.slice(0, -1);

                if (x.includes("^")) {
                    x = x.replace('^', '**');
                }
                else if (x.includes(YROOT)) {
                    let substrArr = x.split(YROOT);
                    let rightOprand: string = substrArr[1].trim();
                    rightOprand = (1 / eval(rightOprand)).toString();

                    x = substrArr[0] + ' ** (' + rightOprand + ')';
                }

                tempObj.output = Number.isFinite(eval(x)) ? eval(x) : ERROR;
            }
            catch {
                error = ERROR;
            }

            dis.value = (error == ERROR) ? ERROR : ((tempObj.checkedCnt == 1) ? Number.parseFloat(tempObj.output.toString()).toExponential().toString() : tempObj.output.toString());
        }
    }
}