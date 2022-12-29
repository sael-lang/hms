import React from "react";
import adminLayout from "../hoc/patientLayout";
import "./admin.css"
class DocterDetails extends React.Component {
    

    // modalFooterContent(){ 
    //     return <>
    //         <div style={{width:"100%"}}>
    //             <button className="btn btn-default">Save</button> 
    //         </div>
    //     </>;
    // }

    // modalContent(){
    //     return <>
    //         What is Lorem Ipsum?
    //         Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    //         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    //         when an unknown printer took a galley of type and scrambled it to make a type 
    //         specimen book. It has survived not only five centuries, but also the leap into 
    //         electronic typesetting, remaining essentially unchanged. It was popularised in 
    //         the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    //         and more recently with desktop publishing software like Aldus PageMaker including 
    //         versions of Lorem Ipsum.
    //     </>;
    // }

    render(){
        return (
            <>
            <div className=" table-container">
                <div className="row">
                    <div className="col">
                        <h5 className=" admin pb-2 mb-0">Docters Table</h5>
                    </div>
                   
                </div>
                <div className="adminsub"></div>
                <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>designation</th>
                                <th>office at</th>
                                <th>Timing</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tarun Dhiman</td>
                                <td>tarun.dhiman@abc.com</td>
                                <td>Psychologist </td>
                                <td>Room1 </td>
                                <th>10:30-4:30</th>
                            </tr>
                            <tr>
                                <td>Ashwani Dhiman</td>
                                <td>ashwani.dhiman@abc.com</td>
                                <td>ophthalmologist </td>
                                <td>Room2 </td>
                                <th>10:30-4:30</th>
                            </tr>
                            <tr>
                                <td>Ashwani Dhiman</td>
                                <td>ashwani.dhiman@abc.com</td>
                                <td>Psychologist </td>
                                <td>Room3 </td>
                                <th>10:30-4:30</th>
                            </tr>
                            <tr>
                                <td>Gagan Chhabra</td>
                                <td>gagan@abc.com</td>
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