import {ERROR, INFINITY, NAN, Empty} from '../Elements/Constants.js'
import { dis, upper} from '../Elements/BasicElements.js'

export class deleteService {
    clearScreen = (): void => {
        if (dis.value == Empty) {
            upper.value = Empty;
        }
        dis.value = Empty;
    }

    pop = (): void => {
        if (dis.value == ERROR || dis.value == INFINITY || dis.value == NAN) {
            dis.value = upper.value = Empty;
            return;
        }
        dis.value = dis.value.slice(0, dis.value.length - 1);
    }
}