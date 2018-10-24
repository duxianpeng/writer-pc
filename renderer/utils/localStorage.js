import {remote as Remote} from 'electron'
import storage from 'electron-json-storage-sync';
import pify from 'pify';

const rendererDom = Remote.getGlobal('envVariables').rendererDom;

export default {

    getItem(key){
        if( rendererDom && rendererDom === 'electron'){
            const result = storage.get(key);
            if(result.status){
                return result.data;
            }
            return null;
        }
        return localStorage.getItem(key);
        
    },

    setItem(key, val){
        if( rendererDom && rendererDom === 'electron'){
            storage.set(key, val);
        }
        localStorage.setItem(key, val);
    }
}