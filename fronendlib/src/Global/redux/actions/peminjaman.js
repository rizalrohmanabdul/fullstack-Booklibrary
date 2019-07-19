import axios from "axios";
let URL = 'http://localhost:3341'

export const getPeminjaman = () => {
  return {
    type: "GET_PEMINJAMAN",
    payload: axios.get(URL+'/borrowing')
  };
};

export const detailPeminjaman = (id) => {
  return {
    type: "DETAIL_PEMINJAMAN",
    payload: axios.get(URL+`/borrowing/details/${id}`)
  };
};

export const kembaliPeminjaman = (id, data) => {
  console.log('ini dari aksi',data);
  return {
    type: "KEMBALI_PEMINJAMAN",
    payload: axios.patch(URL+`/borrowing/retruned/${id}`, data)
  };
};

export const postPeminjaman = (data) => {
  console.log('ini dari aksi',data[0]);
  return {
    type: "POST_PEMINJAMAN",
    payload: axios.post(URL+'/borrowing', data[0])
  };
};

export const deletePinjaman = (id_ktp) =>{
  console.log('action id', id_ktp)
	return{
		type: 'DELETE_PINJAMAN',
		payload: axios.delete(URL +`/borrowing/${id_ktp}`)
	}
}

