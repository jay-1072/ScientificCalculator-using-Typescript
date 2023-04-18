import {btntxt, btncheck} from './Elements/BasicElements.js'
import {Calculator } from './Classes/CalculatorClass.js'
import { TrigonometryService } from './Methods/TrigonometryMethods.js'
import { MemoryService } from './Methods/MemoryMethods.js'
import { deleteService } from './Methods/deleteMethods.js'
import { functionService } from './Methods/FunctionMethods.js'
import { secondFunService } from './Methods/2nd_Methods.js'
import { basicService } from './Methods/BasicMethods.js'

const calcObj = new Calculator();

const trigonometryObj = new TrigonometryService();
const memoryObj = new MemoryService();
const deleteObj = new deleteService();
const functionObj = new functionService();
const secFunObj = new secondFunService();
const basicFunObj = new basicService();

const trigonometryElements = document.querySelectorAll('.trig');
const memoryElements = document.querySelectorAll('.memory');
const deleteElements = document.querySelectorAll('.delete');
const functionElements = document.querySelectorAll('.fun');
const secondElements = document.querySelectorAll('.__2nd');
const basicElements = document.querySelectorAll('.basicElement');

// Memory Functions

for (let element of memoryElements) {
    element.addEventListener('click', function (this: any, event) {
        let eleId = this.id;
        switch (eleId) {
            case "mc":
                memoryObj.memoryClear();
                break;
            case "mr":
                memoryObj.memoryRead()
                break;
            case "mplus":
                memoryObj.memoryPlus();
                break;
            case "mminus":
                memoryObj.memoryMinus();
                break;
            case "mshow":
                memoryObj.memoryStore();
                break;
            case "m":
                memoryObj.createMemoryTable();
                break;
        }
    });
}
MemoryService.checkState(true);

// Trigonometry Functions

for (let element of trigonometryElements) {
    element.addEventListener('click', function (this: any, event) {
        let eleId = this.id;
        switch (eleId) {
            case "_sin":
                trigonometryObj.sin();
                break;
            case "_cos":
                trigonometryObj.cos();
                break;
            case "_tan":
                trigonometryObj.tan();
                break;
            case "_sec":
                trigonometryObj.sec();
                break;
            case "_cosec":
                trigonometryObj.cosec();
                break;
            case "_cot":
                trigonometryObj.cot();
                break;
            case "_sinI":
                trigonometryObj.sinInverse();
                break;
            case "_cosI":
                trigonometryObj.cosInverse();
                break;
            case "_tanI":
                trigonometryObj.tanInverse();
                break;
            case "_secI":
                trigonometryObj.secInverse();
                break;
            case "_cosecI":
                trigonometryObj.cosecInverse();
                break;
            case "_cotI":
                trigonometryObj.cotInverse();
                break;
            case "_sinH":
                trigonometryObj.sinh();
                break;
            case "_cosH":
                trigonometryObj.cosh();
                break;
            case "_tanH":
                trigonometryObj.tanh();
                break;
            case "_secH":
                trigonometryObj.sech();
                break;
            case "_cosecH":
                trigonometryObj.cosech();
                break;
            case "_cotH":
                trigonometryObj.coth();
                break;
        }
    });
}

// Delete Function

for (let element of deleteElements) {
    element.addEventListener('click', function (this: any, event) {
        let eleId = this.id;
        switch (eleId) {
            case "_delete":
                deleteObj.clearScreen();
                break;
            case "_pop":
                deleteObj.pop();
                break;
        }
    });
}

// Functions Methods

for (let element of functionElements) {
    element.addEventListener('click', function (this: any, event) {
        let eleId = this.id;
        switch (eleId) {
            case "_absF":
                functionObj.absolute();
                break;
            case "_floorF":
                functionObj.floor();
                break;
            case "_ceilF":
                functionObj.ceil();
                break;
            case "_randF":
                functionObj.rand();
                break;
            case "_dmsF":
                functionObj.degreeMinuteSecond();
                break;
            case "_degF":
                //do nothing
                break;
        }
    });
}

// 2nd Functions

for (let element of secondElements) {
    element.addEventListener('click', function (this: any, event) {
        let eleId = this.id;
        switch (eleId) {
            case "sqr":
                secFunObj.sqr();
                break;
            case "root":
                secFunObj.sqroot();
                break;
            case "xtoy":
                secFunObj.xtoy();
                break;
            case "tenpow":
                secFunObj.tentox();
                break;
            case "log":
                secFunObj.log();
                break;
            case "ln":
                secFunObj.ln();
                break;
            case "_degF":
                //do nothing
                break;
        }
    });
}

// Basic Functions

for (let element of basicElements) {
    element.addEventListener('click', function (this: any, event) {
        let eleId = this.id;
        switch (eleId) {
            case "_equalTo":
                basicFunObj.answer();
                break;
            case "_point":
                basicFunObj.display('.');
                break;
            case "_zero":
                basicFunObj.display('0');
                break;
            case "_plus_minus":
                basicFunObj.plusminus();
                break;
            case "_plus":
                basicFunObj.display('+');
                break;
            case "_three":
                basicFunObj.display('3');
                break;
            case "_two":
                basicFunObj.display('2');
                break;
            case "_one":
                basicFunObj.display('1');
                break;
            case "_minus":
                basicFunObj.display('-');
                break;
            case "_six":
                basicFunObj.display('6');
                break;
            case "_five":
                basicFunObj.display('5');
                break;
            case "_four":
                basicFunObj.display('4');
                break;
            case "_multiply":
                basicFunObj.display('*');
                break;
            case "_nine":
                basicFunObj.display('9');
                break;
            case "_eight":
                basicFunObj.display('8');
                break;
            case "_seven":
                basicFunObj.display('7');
                break;
            case "_divide":
                basicFunObj.display('/');
                break;
            case "_factorial":
                basicFunObj.factorial();
                break;
            case "_rbracket":
                basicFunObj.display(')');
                break;
            case "_lbracket":
                basicFunObj.display('(');
                break;
            case "_mod":
                basicFunObj.display('%');
                break;
            case "_exp":
                basicFunObj.expo();
                break;
            case "_abs":
                functionObj.absolute();
                break;
            case "_inverse":
                basicFunObj.inverse();
                break;
            case "_E":
                basicFunObj.display(Math.E.toString());
                break;
            case "_PI":
                basicFunObj.display(Math.PI.toString());
                break;
            case "_2nd":
                basicFunObj.changeBtn();;
                break;
        }
    });
}

btntxt.onclick = (): void => {
    basicFunObj.textChange();
}

btncheck.onclick = (): void => {
    basicFunObj.fe();
}

window.onkeydown = (e) => {
    const x = e.key;
    switch (x) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
        case ".":
        case "(":
        case ")": basicFunObj.display(x);
            break;
        case "Backspace": deleteObj.pop();
            break;
        case "e": basicFunObj.display(Math.E.toString());
            break;
        case "p": basicFunObj.display(Math.PI.toString());
            break;
        case "s": trigonometryObj.sin();
            break;
        case "c": trigonometryObj.cos();
            break;
        case "t": trigonometryObj.tan();
            break;
        case "S": trigonometryObj.sinInverse();
            break;
        case "C": trigonometryObj.cosInverse();
            break;
        case "T": trigonometryObj.tanInverse();
            break;
        case "!": basicFunObj.factorial();
            break;
        case "L": secFunObj.log();
            break;
        case "l": secFunObj.ln();
            break;
        case "Enter": basicFunObj.answer();
            break;
        case "Delete": deleteObj.clearScreen();
            break;
        default: /* Do nothing */
            break;
    }
}