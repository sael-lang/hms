import React from "react";
import adminLayout from "../hoc/patientLayout"
import "./admin.css"

class DashboardPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
        <div className="admin">Patient Panel</div>
            <div className="row">
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-primary o-hidden h-100">
            <div className="card-body">
              
              <div className="mr-5">Docters in Hospital</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="/Viewdocter">
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
             
              <div className="mr-5">Payments</div>
            </div>
            <a className="card-footer text-white clearfix small z-1" href="/payments1">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-danger o-hidden h-100">
            <div className="card-body">
             
              <div className="mr-5"> History</div>
            </div>
            <a className="card-footer text-white bg-danger small z-1" href="/histroy">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
      
      <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-secondary o-hidden h-100">
            <div className="card-body">
             
              <div className="mr-5">Report</div>
            </div>
            <a className="card-footer text-white bg-secondary small z-1" href="/showreport">
              <span className="float-left">View Details</span>
              <span className="float-right">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-info o-hidden h-100">
            <div className="card-body">
             
              <div className="mr-5">Appointment</div>
            </div>
            <a className="card-footer text-white bg-info small z-1" href="/appointment">
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