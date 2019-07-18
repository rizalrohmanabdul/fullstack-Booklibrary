import {combineReducers} from 'redux';
import buku from './buku';
import home from './home'
import peminjam from './peminjam'
import peminjaman from './peminjaman'
import kategori from './kategori'


const appReducer = combineReducers({
    peminjam,
    peminjaman,
    home,
    kategori,
    buku,
});

export default appReducer;
