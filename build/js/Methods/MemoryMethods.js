import { WHITE_COLOR, MEMORY_DISABLE_COLOR, MEMORY, Empty } from '../Elements/Constants.js';
import { _mc_div, _m_div, _mr_div } from '../Elements/StyleElements.js';
import { dis } from '../Elements/BasicElements.js';
import { _memory_div, _memoryClear, _memoryRestore, _memoryTable } from '../Elements/MemoryElements.js';
import { checkForError } from './validateMethod.js';
import { Calculator } from '../Classes/CalculatorClass.js';
let obj = new Calculator();
class MemoryService {
    constructor() {
        this.memoryStore = () => {
            if (checkForError()) {
                if (localStorage.getItem(MEMORY) != null) {
                    obj.marr = JSON.parse(localStorage.getItem(MEMORY));
                }
                let temp = (dis.value == Empty) ? 0 : parseFloat(dis.value);
                (obj.marr).push(temp);
                localStorage.setItem(MEMORY, JSON.stringify(obj.marr));
                MemoryService.checkState(false);
            }
        };
        this.memoryRead = () => {
            if (checkForError() && localStorage.getItem(MEMORY) != null) {
                obj.marr = JSON.parse(localStorage.getItem(MEMORY));
                dis.value = obj.marr[obj.marr.length - 1].toString();
            }
        };
        this.memoryClear = () => {
            if (checkForError() && localStorage.getItem(MEMORY) != null) {
                obj.marr = [];
                localStorage.removeItem(MEMORY);
                MemoryService.checkState(true);
            }
        };
        this.memoryPlus = () => {
            if (checkForError() && localStorage.getItem(MEMORY) != null) {
                obj.marr = JSON.parse(localStorage.getItem(MEMORY));
                obj.marr[obj.marr.length - 1] += dis.value !== Empty ? parseFloat(dis.value) : 0;
                localStorage.setItem(MEMORY, JSON.stringify(obj.marr));
            }
        };
        this.memoryMinus = () => {
            if (checkForError() && localStorage.getItem(MEMORY) != null) {
                obj.marr = JSON.parse(localStorage.getItem(MEMORY));
                obj.marr[obj.marr.length - 1] -= dis.value !== Empty ? parseFloat(dis.value) : 0;
                localStorage.setItem(MEMORY, JSON.stringify(obj.marr));
            }
        };
        this.createMemoryTable = () => {
            if (checkForError() && localStorage.getItem(MEMORY) != null) {
                obj.marr = JSON.parse(localStorage.getItem(MEMORY));
                let html = "<table>";
                for (var i = obj.marr.length - 1; i >= 0; i--) {
                    html += "<tr>";
                    html += "<td>" + obj.marr[i] + "</td>";
                    html += "</tr>";
                }
                html += "</table>";
                _memory_div.innerHTML = html;
            }
        };
    }
}
MemoryService.checkState = (state) => {
    if (localStorage.getItem(MEMORY) != null) {
        _mc_div.backgroundColor = _m_div.backgroundColor = _mr_div.backgroundColor = WHITE_COLOR;
    }
    else {
        _mc_div.backgroundColor = _m_div.backgroundColor = _mr_div.backgroundColor = MEMORY_DISABLE_COLOR;
    }
    _memoryTable.disabled = state;
    _memoryClear.disabled = state;
    _memoryRestore.disabled = state;
};
export { MemoryService };
