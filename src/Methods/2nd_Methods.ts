import { LOG, LN, YROOT, SQUAREROOT, TENTOX, XCUBE, Empty } from '../Elements/Constants.js'
import { _log, _ln, _tenpow, _xtoy, _root, _sqr } from '../Elements/Elements_2nd.js'
import { dis, upper } from '../Elements/BasicElements.js'
import { checkForError } from './validateMethod.js'
import { Calculator } from '../Classes/CalculatorClass.js'

let tempObj = new Calculator();

export class secondFunService {

    log = (): void => {
        if (checkForError()) {
            if (_log.innerHTML == LOG) {
                upper.value = 'log(' + dis.value + ')';
                dis.value = Math.log10(eval(dis.value)).toString();
            }
            else {
                if (tempObj.flag) {
                    tempObj.num = eval(dis.value);
                    upper.value = tempObj.num + ' log base ';
                    dis.value = Empty;
                }
                else if (!tempObj.flag) {
                    tempObj.base = eval(dis.value);
                    upper.value += dis.value;
                    dis.value = (Math.log(tempObj.num) / Math.log(tempObj.base)).toString();
                }
                tempObj.flag = !tempObj.flag;
            }
        }
    }

    ln = (): void => {
        if (checkForError()) {
            if (_ln.innerHTML == LN) {
                upper.value = 'ln(' + dis.value + ')';
                dis.value = Math.log(eval(dis.value)).toString();
            } else {
                upper.value = 'e^(' + dis.value + ')';
                dis.value = Math.pow(Math.E, eval(dis.value)).toString();
            }
        }
    }

    tentox = (): void => {
        if (checkForError()) {
            if (_tenpow.innerHTML == TENTOX) {
                upper.value = '10^(' + dis.value + ')';
                dis.value = Math.pow(10, eval(dis.value)).toString();
            }
            else {
                upper.value = '2^(' + dis.value + ')';
                dis.value = Math.pow(2, eval(dis.value)).toString();
            }
        }
    }

    xtoy = (): void => {
        if (checkForError()) {
            dis.value += _xtoy.innerHTML == 'x<sup>y</sup>' ? '^' : (" " + YROOT + " ");
        }
    }

    sqroot = (): void => {
        if (checkForError()) {
            if (_root.innerHTML == SQUAREROOT) {
                upper.value = '√(' + dis.value + ')';
                dis.value = Math.sqrt(eval(dis.value)).toString();
            } else {
                upper.value = 'cuberoot(' + dis.value + ')';
                dis.value = (Math.pow(eval(dis.value), 1 / 3)).toString();
            }
        }
    }

    sqr = (): void => {
        if (checkForError()) {
            if (_sqr.innerHTML == XCUBE) {
                upper.value = 'cube(' + dis.value + ')';
                dis.value = Math.pow(eval(dis.value), 3).toString();
                return;
            }
            upper.value = 'sqr(' + dis.value + ')';
            dis.value = Math.pow(eval(dis.value), 2).toString();
        }
    }
}
