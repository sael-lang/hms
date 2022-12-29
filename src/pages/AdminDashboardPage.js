import React from "react";
import adminLayout from "../hoc/adminLayout"
import "./admin.css"

class DashboardPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
        <div className="admin">Admin Panel</div>
            <div className="row">
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-primary o-hidden h-100">
            <div className="card-body">
              
              <div className="mr-5">Docters</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="/docterdetails">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-warning o-hidden h-100">
            <div className="card-body">
              
              <div className="mr-5">Patients</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="/patientdetails">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-success o-hidden h-100">
            <div className="card-body">
             
              <div className="mr-5">Staff</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="/staffdetails">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        
      </div>
        </>
    }
}

export default adminLayout(DashboardPage);