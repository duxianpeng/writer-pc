import {DEFAULT_MODULE} from '../constants'

const CHANGE_MODULE = 'CHANGE_MODULE'
export const REDUCER_NAME = 'assemblyReducer'

export const changeModule = (currentModule) =>{
    return {type: CHANGE_MODULE, currentModule}
}

export default function(state, action){
    if(!state){
        return state = {currentModule : DEFAULT_MODULE}
    }
    switch(action.type){
        case CHANGE_MODULE:
            return {
                currentModule: action.currentModule
            }
        default:
            return state
    }
}