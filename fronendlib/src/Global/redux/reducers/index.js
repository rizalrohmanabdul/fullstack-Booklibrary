import {combineReducers} from 'redux';
import buku from './buku';
import home from './home'
import peminjam from './peminjam'
import kategori from './kategori'


const appReducer = combineReducers({
    peminjam,
    home,
    kategori,
    buku,
});

export default appReducer;
