export class Calculator {
    marr: number[];
    output: number;
    checkedCnt: number;
    btnCount: number;
    num: number;
    base: number;
    flag: boolean;
    displayValue: any;

    constructor() {
        this.marr = [];
        this.output = 0;
        this.checkedCnt = 0;
        this.btnCount = 0;
        this.num = 0;
        this.base = 0;
        this.flag = true;
        this.displayValue = '0';
    }
}