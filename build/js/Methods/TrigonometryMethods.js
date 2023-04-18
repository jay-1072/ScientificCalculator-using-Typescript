import { radMode, ERROR, Message, Alert } from '../Elements/Constants.js';
import { dis, upper, btntxt, } from '../Elements/BasicElements.js';
import { checkForError } from './validateMethod.js';
class TrigonometryService {
    constructor() {
        this.sin = () => {
            if (checkForError()) {
                upper.value = 'sin(' + dis.value + ')';
                dis.value = (btntxt.innerHTML == radMode) ? Math.sin(eval(dis.value)).toString() : Math.sin((eval(dis.value) * Math.PI) / 180).toString();
            }
        };
        this.cos = () => {
            if (checkForError()) {
                upper.value = 'cos(' + dis.value + ')';
                dis.value = (btntxt.innerHTML == radMode) ? Math.cos(eval(dis.value)).toString() : Math.cos((eval(dis.value) * Math.PI) / 180).toString();
            }
        };
        this.tan = () => {
            if (checkForError()) {
                upper.value = 'tan(' + dis.value + ')';
                dis.value = (btntxt.innerHTML == radMode) ? Math.tan(eval(dis.value)).toString() : Math.tan((eval(dis.value) * Math.PI) / 180).toString();
            }
        };
        this.sec = () => {
            if (checkForError()) {
                upper.value = 'sec(' + dis.value + ')';
                dis.value = (btntxt.innerHTML == radMode) ? (1 / Math.cos(eval(dis.value))).toString() : (1 / Math.cos((eval(dis.value) * Math.PI) / 180)).toString();
            }
        };
        this.cosec = () => {
            if (checkForError()) {
                upper.value = 'cosec(' + dis.value + ')';
                dis.value = (btntxt.innerHTML == radMode) ? (1 / Math.sin(eval(dis.value))).toString() : (1 / Math.sin((eval(dis.value) * Math.PI) / 180)).toString();
            }
        };
        this.cot = () => {
            if (checkForError()) {
                upper.value = 'cot(' + dis.value + ')';
                dis.value = (btntxt.innerHTML == radMode) ? (1 / Math.tan(eval(dis.value))).toString() : (1 / Math.tan((eval(dis.value) * Math.PI) / 180)).toString();
            }
        };
        this.sinInverse = () => {
            console.log("called");
            if (checkForError()) {
                upper.value = 'sin-1(' + dis.value + ')';
                if (parseFloat(dis.value) >= -1 && parseFloat(dis.value) <= 1) {
                    dis.value = (btntxt.innerHTML == radMode) ? Math.asin(eval(dis.value)).toString() : TrigonometryService.inv_RAD_DEG(Math.asin(eval(dis.value))).toString();
                    return;
                }
                dis.value = Message;
            }
        };
        this.cosInverse = () => {
            if (checkForError()) {
                upper.value = 'cos-1(' + dis.value + ')';
                if (parseFloat(dis.value) >= -1 && parseFloat(dis.value) <= 1) {
                    dis.value = (btntxt.innerHTML == radMode) ? Math.acos(eval(dis.value)).toString() : TrigonometryService.inv_RAD_DEG(Math.acos(eval(dis.value))).toString();
                    return;
                }
                dis.value = Message;
            }
        };
        this.tanInverse = () => {
            if (checkForError()) {
                upper.value = 'tan-1(' + dis.value + ')';
                dis.value = (btntxt.innerHTML == radMode) ? Math.atan(eval(dis.value)).toString() : TrigonometryService.inv_RAD_DEG(Math.atan(eval(dis.value))).toString();
            }
        };
        this.secInverse = () => {
            if (checkForError()) {
                upper.value = 'sec-1(' + dis.value + ')';
                if (parseFloat(dis.value) >= -1 && parseFloat(dis.value) <= 1) {
                    dis.value = ERROR;
                    return;
                }
                dis.value = (btntxt.innerHTML == radMode) ? Math.acos(1 / eval(dis.value)).toString() : TrigonometryService.inv_RAD_DEG(Math.acos(1 / eval(dis.value))).toString();
            }
        };
        this.cosecInverse = () => {
            if (checkForError()) {
                upper.value = 'cosec-1(' + dis.value + ')';
                if (parseFloat(dis.value) >= -1 && parseFloat(dis.value) <= 1) {
                    dis.value = ERROR;
                    return;
                }
                dis.value = (btntxt.innerHTML == radMode) ? Math.asin(1 / eval(dis.value)).toString() : TrigonometryService.inv_RAD_DEG(Math.asin(1 / eval(dis.value))).toString();
            }
        };
        this.cotInverse = () => {
            if (checkForError()) {
                upper.value = 'cot-1(' + dis.value + ')';
                dis.value = (btntxt.innerHTML == radMode) ? Math.atan(1 / eval(dis.value)).toString() : TrigonometryService.inv_RAD_DEG(Math.atan(1 / eval(dis.value))).toString();
            }
        };
        this.sinh = () => {
            if (checkForError()) {
                upper.value = 'sinh(' + dis.value + ')';
                dis.value = Math.sinh(eval(dis.value)).toString();
            }
        };
        this.cosh = () => {
            if (checkForError()) {
                upper.value = 'cosh(' + dis.value + ')';
                dis.value = Math.cosh(eval(dis.value)).toString();
            }
        };
        this.tanh = () => {
            if (checkForError()) {
                upper.value = 'tanh(' + dis.value + ')';
                dis.value = Math.tanh(eval(dis.value)).toString();
            }
        };
        this.sech = () => {
            if (checkForError()) {
                upper.value = 'sech(' + dis.value + ')';
                dis.value = (1 / Math.cosh(eval(dis.value))).toString();
            }
        };
        this.cosech = () => {
            if (checkForError()) {
                upper.value = 'cosech(' + dis.value + ')';
                dis.value = (dis.value == '0') ? Alert : (1 / Math.sinh(eval(dis.value))).toString();
            }
        };
        this.coth = () => {
            if (checkForError()) {
                upper.value = 'coth(' + dis.value + ')';
                dis.value = (dis.value == '0') ? Alert : (1 / Math.tanh(eval(dis.value))).toString();
            }
        };
    }
}
TrigonometryService.inv_RAD_DEG = (val) => {
    return ((val * 180) * (Math.PI ** -1));
};
export { TrigonometryService };
