import axios from "axios";
let URL = 'http://localhost:3341'

const getHome = () => {
  return {
    type: "GET_HOME",
    payload: axios.get(URL+'/book')
  };
};

export default getHome