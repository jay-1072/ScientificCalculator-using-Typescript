import {ERROR, INFINITY, NAN, Invalid, Message, Alert} from '../Elements/Constants.js'
import { dis} from '../Elements/BasicElements.js'

let checkForError = (): boolean => {
    return (dis.value != ERROR && dis.value != INFINITY && dis.value != Invalid && dis.value != NAN && dis.value != Alert && dis.value != Message);
}

export {
    checkForError
}