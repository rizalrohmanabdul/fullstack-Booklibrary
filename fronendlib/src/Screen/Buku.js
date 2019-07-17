import React, { Component, Fragment } from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import swal from 'sweetalert';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {getKategori} from "../Global/redux/actions/kategori";
import {getBuku, postBuku, deleteBuku} from "../Global/redux/actions/buku"

class Buku extends Component {
  state = {
    bukulist: [],
    modal: false,
    modaledit:false,
    insertlist:[],
    kategorilist:[]
  };

  
  componentDidMount = async () => {
    await this.props.dispatch(getBuku());
    await this.props.dispatch(getKategori());
    console.log("ini dari props listbuku", this.props.listbuku);
    console.log("ini dari props list Kategori", this.props.listkategori);
    this.setState({
      bukulist: this.props.listbuku.listBuku.result
    });
  };
  toggle = this.toggle.bind(this);
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
  toggleedit = this.toggleedit.bind(this);
  toggleedit() {
    this.setState(prevState => ({
      modaledit: !prevState.modal
    }));
  }
  handledelete = (id_kategori) =>{
    console.log('coba id', id_kategori);
    swal({
        title: "Apakah Anda Yakin?",
        text: "Data Anda tidak akan kembali lagi",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Data Behasil dihapus!", {
            icon: "success",
          });
          this.props.dispatch(deleteBuku(id_kategori));
          this.setState({ id_kategori : id_kategori })
        } else {
          swal("Data Anda Aman!");
        }
      })
  }
  render() {
    const insertList =()=>{
			this.state.insertlist.push({				
				'nama_kategori':this.state.nama_kategori,
				'nama_rak':this.state.nama_rak
			})
			this.setState((prevState) => ({
				modal: !prevState.modal
			}));
      console.log(this.state.insertlist)
      const data = this.state.insertlist
      this.props.dispatch(postBuku(data));
			
		}
    const list = this.state.bukulist;
    const list_kategori = this.state.kategorilist;
    
    return (
      <div className="container">
        <div className="row mt-5 justify-content-md-center">
          <h1>Data Buku</h1>
        </div>
        <Button className="btn btn-info btn-sm" onClick={this.toggle}>
          {" "}
          <i className="fa fa-plus" title="add">
            {" "}
            Tambah Data
          </i>
        </Button>
        <div className="row mt-5 justify-content-md-center">
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama Buku</th>
                <th>Kategori</th>
                <th>Lokasi Rak</th>
                <th>Pengarang</th>
                <th>Gambar</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {list.map((val, index) => {
                let no = 1;
                return (
                  <tr>
                    <th key="" scope="row">
                      
                    </th>
                    <td>{val.nama_buku}</td>
                    <td>{val.nama_kategori}</td>
                    <td>{val.nama_rak}</td>
                    <td>{val.pengarang}</td>
                    <td>
                        <img src={val.gbr} width={60} />
                    </td>
                    <td>{val.status}</td>
                    <td>
                      <Button className="btn btn-success btn-sm"  >
                        {" "}
                        <i className="fa fa-edit" title="edit" />
                      </Button>{" "}
                      <Button className="btn btn-danger btn-sm" onClick={() =>this.handledelete()}>
                        {" "}
                        <i className="fa fa-trash" title="delete" />
                      </Button>
                    </td>
                  </tr>
                 );
              })} 
            </tbody>
          </Table>
        </div>
        <Fragment>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Tambah Data </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label className="control-label" htmlFor="idKtp">
                  Nama Buku
                </label>
                <input
                  type="text"
                  name="nama_buku"
                  className="form-control"
                  id="idKtp"
                  required
                  onChange = {(e)=>this.setState({nama_buku:e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="namaPeminjam">
                  Kategori
                </label>
                <select name="nama_rak" onChange = {(e)=>this.setState({nama_rak:e.target.value})} className="form-control" required>
                <option >--Pilih Lokasi Rak--</option>
                {list_kategori.map((val_list, index) =>{
                    
                })}
                <option value="Rak A">Rak A</option>
                <option value="Rak B">Rak B</option>
                <option value="Rak C">Rak C</option>
                <option value="Rak D">Rak D</option>
                <option value="Rak E">Rak E</option>
                <option value="Rak F">Rak F</option>
                <option value="Rak G">Rak G</option>
                <option value="Rak H">Rak H</option>
                <option value="Rak I">Rak I</option>
                <option value="Rak J">Rak J</option>
                <option value="Rak K">Rak K</option>
                </select >
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={insertList.bind(this)}>
                Simpan
              </Button>{" "}
            </ModalFooter>
          </Modal>
        </Fragment>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    listbuku: state.buku,
    listkategori: state.kategori
  };
};

export default connect(mapStateToProps)(Buku);
