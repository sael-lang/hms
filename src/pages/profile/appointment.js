import React from "react";
import "../../assets/css/profile.css"
import userProfileLayout from "../../hoc/staffLayout";

class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0 mb-3">Appointment </h6>
                        <form>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Patient</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Docter</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Docter" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                    </div>
                                    <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Appointment Date</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Date" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Appointment Time</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Time" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-user"></i></span>
                                    </div>
                                </div>
                                </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                </div>
            
        </>
    }
}

export default userProfileLayout(ProfilePage);