import React, { Component } from 'react';
import moment from 'moment';
import { connect } from "react-redux";
import { detailPeminjaman} from "../Global/redux/actions/peminjaman";


class DetailPeminjaman extends Component {
    state = {
        detaillist: []
      };
    
      componentDidMount = async () => {
        await this.props.dispatch(detailPeminjaman(6));
        console.log("ini dari props", this.props);
        this.setState({
            detaillist: this.props.listpeminjam.listPeminjaman.result
        });
      };
    render() {
        const list = this.state.detaillist;

        console.log('taggal',moment().format("YYYY-MM-DD") )
        const tgl_denda = moment(list.tgl_kadaluarsa).format("YYYY-MM-DD")
        if (tgl_denda >  moment().format("YYYY-MM-DD")) {
            var denda = '-'
        }else{
            var denda = '3000'
        }
        return (
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3>Detail Peminjaman</h3>
                                <hr/>
                                <div className="row">
                                    <div className="col-md-2 mb-5 mr-5">                      
                                        <div className="card text-white" style={{width: '10rem', borderColor:'white', backgroundColor:"#E1067B"}}>                
                                            <img src={list.gbr} className="card-img-top cardHome img-fluid" alt="..." />                               
                                        </div>                                              
                                    </div>
                                    <div className="col-md-8">
                                        <h5>Judul : {list.nama_buku}</h5>
                                        <p>Kategori : {list.nama_kategori}</p>
                                        <p>Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate consequatur quaerat, quasi sint sunt quibusdam saepe eligendi impedit possimus ipsa? Obcaecati voluptatum possimus, asperiores eveniet itaque reprehenderit aliquam culpa cumque.</p>                                        
                                    </div>
                                    <div className="col-lg-1 text-center">
                                        <i className="fa fa-trash fa-3x" style={{cursor:"pointer"}} aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-white bg-primary mb-3 text-center" style={{maxWidth: '18rem'}}>
                            <div className="card-header">{list.id_ktp+ ' || ' + list.nama_peminjam}</div>
                            <div className="card-body mt-3">
                                <h5 className="card-title" style={{color:'yellow'}}>Denda : Rp.{denda}</h5>
                                <input type="button" className="btn btn-danger mb-3" value="Kembali" />                                
                                <div className="alert alert-danger text-center" role="alert">
                                <p className="card-text">Buku Harus Kembali Sebelum :</p>
                                    {tgl_denda}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      listpeminjam: state.peminjaman
    };
  };
  
export default connect(mapStateToProps)(DetailPeminjaman);
  