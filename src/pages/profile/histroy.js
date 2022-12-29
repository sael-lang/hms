import React from "react";
import adminLayout from "../../hoc/patientLayout";
import "../../pages/admin.css"
class DocterDetails extends React.Component {
    



    render(){
        return (
            <>
            <div className=" table-container">
                <div className="row">
                    <div className="col">
                        <h5 className=" admin pb-2 mb-0">History Table</h5>
                    </div>
                   
                </div>
                <div className="adminsub"></div>
                <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Docters Name</th>
                                <th>histroy</th>
                                <th>designation</th>
                                <th>Room</th>
                                <th>Timing</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tarun Dhiman</td>
                                <td>medicine given follow instructions to get better</td>
                                <td>Psychologist </td>
                                <td>Room1 </td>
                                <th>10:30-4:30</th>
                            </tr>
                            <tr>
                                <td>Ashwani Dhiman</td>
                                <td>medicine given follow instructions to get better</td>
                                <td>ophthalmologist </td>
                                <td>Room2 </td>
                                <th>10:30-4:30</th>
                            </tr>
                            <tr>
                                <td>Ashwani Dhiman</td>
                                <td>medicine given follow instructions to get better</td>
                                <td>Psychologist </td>
                                <td>Room3 </td>
                                <th>10:30-4:30</th>
                            </tr>
                            <tr>
                                <td>Gagan Chhabra</td>
                                <td>medicine given follow instructions to get better</td>
                                <td>dermatologist</td>
                                <td>Room4 </td>
                                <th>10:30-4:30</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
          
                               </div>
            </>
          );
    }
}

export default adminLayout(DocterDetails);