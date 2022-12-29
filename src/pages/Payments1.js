import React from "react";
import "../assets/css/profile.css"
import userProfileLayout from "../hoc/patientLayout";

class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
                 <div className=" table-container">
                <div className="row">
                    <div className="col">
                        <h5 className=" admin pb-2 mb-0">Payments Due</h5>
                    </div>
                   
                </div>
                <div className="adminsub"></div>
                <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Payment for</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Room</th>
                                <th>Timing</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Check up</td>
                                <td>Docter checked and given medicine</td>
                                <td>3000Rs </td>
                                <td>Room4 </td>
                                <th>10:30-4:30</th>
                            </tr>
                            <tr>
                            <td>Staying in ICU</td>
                                <td>Some bottles of medicine were used</td>
                                <td>2300Rs </td>
                                <td>Room1 </td>
                                <th>10:30-4:30</th>
                            </tr>
                            <tr>
                            <td>getting medicine</td>
                                <td>resik brofin</td>
                                <td>1300Rs </td>
                                <td>medicical store </td>
                                <th>10:30-10:40</th>
                            </tr>
                            <tr>
                            <td>Staying in hospital</td>
                                <td>Some bottles of medicine were used</td>
                                <td>1400Rs </td>
                                <td>Room1 </td>
                                <th>10:30-4:30</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
          
                               </div>
            
        </>
    }
}

export default userProfileLayout(ProfilePage);