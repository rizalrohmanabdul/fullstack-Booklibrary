import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import getHome from "../Global/redux/actions/home";

class Home extends Component {
  state = {
    bookhome: []
  };
  componentDidMount = async () => {
    await this.props.dispatch(getHome());
    console.log("ini dari props", this.props.listbookhome);
    this.setState({
      bookhome: this.props.listbookhome.listBuku.result
    });
  };
  render() {
    const list = this.state.bookhome;
    console.log("ini dari list", list);
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-7 mt-5">
            <input
              className="form-control form-control-lg rounded-pill search"
              ref="input"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="row mt-5 justify-content-md-center">
        {list.map((val,index) => {
            if (val.status === 'ada') {
                var classStatus = 'badge badge-success'
            }else {
                var classStatus = 'badge badge-warning'
            }
            console.log(classStatus);
            return(
                <Fragment>
                <div className="col-md-3 mb-5" key={index}>
                  <div
                    className="card text-white bg-info"
                    style={{ width: "15rem" }}
                  >
                    <Link to={"/bookDetail/"}>
                      <img src={val.gbr} style={{height: '180px'}} className="card-img-top cardHome" alt="..." />
                    </Link>
                    <h5>
                      <span className={classStatus}>{val.status}</span>
                    </h5>
                    <div className="card-body">
                      <p className="card-text">
                        <h5>{val.nama_buku}</h5>
                      </p>
                      <p className="hidden"></p>
                    </div>
                  </div>
                </div>
              </Fragment>
            )
        })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listbookhome: state.home
  };
};

export default connect(mapStateToProps)(Home);
