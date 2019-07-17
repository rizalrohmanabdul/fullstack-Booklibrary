import {combineReducers} from 'redux';
// import buku from './home';
import home from './home'
import peminjam from './peminjam'


const appReducer = combineReducers({
    peminjam,
    home,
});

export default appReducer;
