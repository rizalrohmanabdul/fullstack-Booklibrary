import axios from "axios";
let URL = 'http://localhost:3341'

export const getPeminjam = () => {
  return {
    type: "GET_PEMINJAM",
    payload: axios.get(URL+'/borrower')
  };
};

export const postPeminjam = (data) => {
  console.log('ini dari aksi',data[0]);
  // {id_ktp:data[0].id_ktp, nama_peminjam: data[0].nama_peminjam, alamat: data[0].alamat}
  return {
    type: "POST_PEMINJAM",
    payload: axios.post(URL+'/borrower', data[0])
  };
};

export const deletePinjam = (id_ktp) =>{
  console.log('action id', id_ktp)
	return{
		type: 'DELETE_PINJAM',
		payload: axios.delete(URL +`/borrower/${id_ktp}`)
	}
}

