import { Empty } from '../Elements/Constants.js';
import { dis, upper } from '../Elements/BasicElements.js';
import { checkForError } from './validateMethod.js';
export class functionService {
    constructor() {
        this.absolute = () => {
            if (checkForError()) {
                upper.value = 'abs(' + dis.value + ')=';
                dis.value = Math.abs(eval(dis.value)).toString();
            }
        };
        this.ceil = () => {
            if (checkForError()) {
                upper.value = 'ceil(' + dis.value + ')';
                dis.value = Math.ceil(eval(dis.value)).toString();
            }
        };
        this.floor = () => {
            if (checkForError()) {
                upper.value = 'floor(' + dis.value + ')';
                dis.value = Math.floor(eval(dis.value)).toString();
            }
        };
        this.rand = () => {
            if (checkForError()) {
                upper.value = Empty;
                dis.value = Math.random().toString();
            }
        };
        this.degreeMinuteSecond = () => {
            if (checkForError()) {
                upper.value = "dms(" + dis.value + ")";
                let degree = Math.floor(parseFloat(dis.value));
                let minutes = ((parseFloat(dis.value) - degree) * 60.0);
                let seconds = (minutes - Math.floor(minutes)) * 60.0;
                dis.value = degree + "." + Math.floor(minutes) + seconds.toFixed(0);
            }
        };
    }
}
