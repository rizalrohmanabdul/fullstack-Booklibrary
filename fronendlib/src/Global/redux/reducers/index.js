import {combineReducers} from 'redux';
// import buku from './home';
import home from './home'
import peminjam from './peminjam'
import kategori from './kategori'


const appReducer = combineReducers({
    peminjam,
    home,
    kategori,
});

export default appReducer;
