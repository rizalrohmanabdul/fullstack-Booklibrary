import axios from "axios";
let URL = 'http://localhost:3341'

export const getBuku = () => {
  return {
    type: "GET_BUKU",
    payload: axios.get(URL+'/book')
  };
};

export const postBuku = (data) => {
  console.log('ini dari aksi',data[0]);
  // {id_ktp:data[0].id_ktp, nama_KATEGORI: data[0].nama_KATEGORI, alamat: data[0].alamat}
  return {
    type: "POST_BUKU",
    payload: axios.post(URL+'/book', data[0])
  };
};

export const deleteBuku = (id_kategori) =>{
  console.log('action id', id_kategori)
	return{
		type: 'DELETE_BUKU',
		payload: axios.delete(URL +`/book/${id_kategori}`)
	}
}