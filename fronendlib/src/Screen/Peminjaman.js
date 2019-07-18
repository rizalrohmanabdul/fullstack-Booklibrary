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
import MaterialTable from 'material-table';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getPeminjaman, deletePinjaman, postPeminjaman} from "../Global/redux/actions/peminjaman";
import { getPeminjam} from "../Global/redux/actions/peminjam";
import {getBukuactive} from "../Global/redux/actions/buku"

class Peminjaman extends Component {
  state = {
    peminjamanlist: [],
    bukuformlist: [],
    peminjamformlist: [],
    modal: false,
    modaledit:false,
    insertlist:[]
  };

  
  componentDidMount = async () => {
    await this.props.dispatch(getPeminjaman());
    await this.props.dispatch(getBukuactive());
    await this.props.dispatch(getPeminjam());
    console.log("ini dari props makan", this.props.listpeminjaman);
    this.setState({
      peminjamanlist: this.props.listpeminjaman.listPeminjaman.result,
      bukuformlist: this.props.listbuku.listBuku.result,
      peminjamformlist: this.props.listpeminjam.listPeminjam.result
    });
  };
  toggle = this.toggle.bind(this);
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  formupdate = (id_ktp) =>{
    
  }
  toggleedit = this.toggleedit.bind(this);
  toggleedit() {
    this.setState(prevState => ({
      modaledit: !prevState.modal
    }));
  }
  handledelete = (id_ktp) =>{
    console.log('coba id', id_ktp);
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
          this.props.dispatch(deletePinjaman(id_ktp));
          this.setState({ id_ktp : id_ktp })
        } else {
          swal("Data Anda Aman!");
        }
      })
  }
  render() {
    const insertList =()=>{
			this.state.insertlist.push({				
				'id_buku':this.state.id_buku,
				'id_ktp':this.state.id_ktp,
				'lama_pinjam':this.state.lama_pinjam
			})
			this.setState((prevState) => ({
				modal: !prevState.modal
			}));
      console.log(this.state.insertlist)
      const data = this.state.insertlist
      this.props.dispatch(postPeminjaman(data));
			
		}
    const list = this.state.peminjamanlist;
    const list_buku = this.state.bukuformlist
    const list_peminjam = this.state.peminjamformlist
    const lama = list.lama_pinjam + ' Hari'
    console.log('cihuyyy laper',list_peminjam)
    if (list.alasan === ''){
        var status_pinjam = 'Dipinjam'
    }else {
        var status_pinjam = 'Kembali'
    }
    
    return (
      <div className="container">
        <div className="row mt-5 justify-content-md-center">
          <h1>Data Peminjaman Buku</h1>
        </div>
        <Button className="btn btn-info btn-sm" onClick={this.toggle}>
          {" "}
          <i className="fa fa-plus" title="add">
            {" "}
            Tambah Data
          </i>
        </Button>
        <div className="row mt-5 justify-content-md-center">
        <MaterialTable
        title="Data Peminjaman Buku"
        columns={[
          { title: 'No', field: 'id_peminjaman' },
          { title: 'Nama Peminjam', field: 'nama_peminjam' },
          { title: 'Nama Buku', field: 'nama_buku' },
          { title: 'Tanggal Pinjam', field: 'tgl_pinjam' },
          { title: 'Lama Pinjam', field: 'lama_pinjam' },
          { title: 'Status', field: 'status' },
         
        ]}
        
        data={[{ nama_peminjam: list.nama_peminjam, nama_buku: list.nama_buku, tgl_pinjam: list.tgl_pinjam, lama_pinjam: lama, status: status_pinjam}]}
        actions={[
            { 
              className: 'btn btn-danger btn-sm',
              icon: 'edit',
              tooltip: 'edit',
              onClick: () =>this.handledelete(list.id_peminjaman)
            },
            {   
              className: 'btn btn-danger btn-sm',
              icon: 'delete',
              tooltip: 'Delete User',
              onClick: () =>this.handledelete(list.id_peminjaman)
            }
          ]}        
        options={{
          search: true
        }}
      />
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
                  Nama Anggota Perpustakaan
                </label>
                <select name="id_peminjam" onChange = {(e)=>this.setState({id_peminjam:e.target.value})} className="form-control" required>
                <option >--Pilih Anggota--</option>
                {list_peminjam.map((val_list, index) =>{
                    return(
                        <option key ={index} value={val_list.id_peminjaman}>{val_list.nama_peminjam}</option>
                    )
                })}
                </select >
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="namaPeminjam">
                  Buku
                </label>
                <select name="id_buku" onChange = {(e)=>this.setState({id_buku:e.target.value})} className="form-control" required>
                <option >--Pilih Buku--</option>
                {list_buku.map((val_list, index) =>{
                    return(
                        <option key ={index} value={val_list.id_buku}>{val_list.nama_buku}</option>
                    )
                })}
                </select >
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="alamat">
                  Lama Pinjam /hari
                </label>
                <input
                  type="text"
                  name="lama_pinjam"
                  className="form-control"
                  id="namaPeminjam"
                  required
                  onChange = {(e)=>this.setState({lama_pinjam:e.target.value})}
                />
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
    listpeminjaman: state.peminjaman,
    listbuku: state.buku,
    listpeminjam: state.peminjam
  };
};

export default connect(mapStateToProps)(Peminjaman);
