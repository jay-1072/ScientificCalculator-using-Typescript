import { ERROR, INFINITY, NAN, Empty } from '../Elements/Constants.js';
import { dis, upper } from '../Elements/BasicElements.js';
export class deleteService {
    constructor() {
        this.clearScreen = () => {
            if (dis.value == Empty) {
                upper.value = Empty;
            }
            dis.value = Empty;
        };
        this.pop = () => {
            if (dis.value == ERROR || dis.value == INFINITY || dis.value == NAN) {
                dis.value = upper.value = Empty;
                return;
            }
            dis.value = dis.value.slice(0, dis.value.length - 1);
        };
    }
}
