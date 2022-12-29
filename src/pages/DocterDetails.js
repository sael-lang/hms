import React from "react";
import adminLayout from "../hoc/adminLayout";
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
                    <div className="col text-right">
                        <button className="btn btn-default low-height-btn">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <p className="adminsub">
                you can add,remove,view and edit in this table
                </p>

                <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>designation</th>
                                <th>Created On</th>
                                <th>Updated On</th>
                                <th ><a href="/adminadd">ADD</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tarun Dhiman</td>
                                <td>tarun.dhiman@abc.com</td>
                                <td>Psychologist </td>
                                <td>23-aug-2019</td>
                                <td>26-aug-2019</td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href="/adminedit"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item text-danger" href="/admindelete"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Ashwani Dhiman</td>
                                <td>ashwani.dhiman@abc.com</td>
                                <td>ophthalmologist </td>
                                <td>23-aug-2019</td>
                                <td>26-aug-2019</td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href="/adminedit"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item text-danger" href="/admindelete"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Ashwani Dhiman</td>
                                <td>ashwani.dhiman@abc.com</td>
                                <td>Psychologist </td>
                                <td>23-aug-2019</td>
                                <td>26-aug-2019</td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href="/adminedit"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item text-danger" href="/admindelete"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Gagan Chhabra</td>
                                <td>gagan@abc.com</td>
                                <td>dermatologist</td>
                                <td>23-aug-2019</td>
                                <td>26-aug-2019</td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href="/adminedit"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item text-danger" href="/admindelete"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
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