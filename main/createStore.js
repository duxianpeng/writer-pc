
import configureStore from './../shared/store/index';
import storage from 'electron-json-storage-sync';
import pify from 'pify';

export default function (){

    const store = configureStore(global.state, 'main');

    store.subscribe( () => {
       storage.set('state', store.getState());
    });
}