import React from "react";
import adminLayout from "../../hoc/patientLayout";
import "../../pages/admin.css"
import logo from "../../assets/images/report.png"
class DocterDetails extends React.Component {
    

    

    render(){
        return (
            <>
            <div className=" table-container">
                <div className="row">
                    <div className="col">
                        <h5 className=" admin pb-2 mb-0">Report </h5>
                    </div>
                   
                </div>
                <div className="adminsub"></div>
                <div className="d-flex text-muted">
                    <table className="table">
                    <img src={logo} alt="Logo" />
                    </table>
                </div>
          
                               </div>
            </>
          );
    }
}

export default adminLayout(DocterDetails);