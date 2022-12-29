import React from "react";
import "./admin.css"

import adminLayout from "../hoc/docterLayout"
import "./../assets/css/profile.css"
import "../pages/admin.css"

class DashboardPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
        <div className="admin">Docters Panel</div>
            <div className="row">
              <div>Patients</div>
            <div className="container">
                <div className="row profile">
                    <div className="col-md-3">
                            <div className="profile-sidebar">
                                <div className="my-3 p-3 bg-body rounded shadow-sm">

                                {/* <!-- SIDEBAR USERPIC --> */}
                            <div className="profile-userpic">
                                <img src="https://via.placeholder.com/150" className="img-responsive profile-img-center" alt="" />
                            </div>
                            {/* <!-- END SIDEBAR USERPIC -->
                            <!-- SIDEBAR USER TITLE --> */}
                            <div className="profile-usertitle">
                                <div className="profile-usertitle-name">
                                    Salman
                                </div>
                                <div className="profile-usertitle-job">
                                  12-11-2022 Wed
                                </div>
                                <div className="profile-usertitle-job">
                                 Room 1
                                </div>
                                <div className="profile-usertitle-job">
                                  02:00
                                </div>
                            </div>
                            {/* <!-- END SIDEBAR USER TITLE -->
                            <!-- SIDEBAR BUTTONS --> */}              
                            </div>
                            
                            
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="profile-sidebar">
                                <div className="my-3 p-3 bg-body rounded shadow-sm">

                                {/* <!-- SIDEBAR USERPIC --> */}
                            <div className="profile-userpic">
                                <img src="https://via.placeholder.com/150" className="img-responsive profile-img-center" alt="" />
                            </div>
                            {/* <!-- END SIDEBAR USERPIC -->
                            <!-- SIDEBAR USER TITLE --> */}
                            <div className="profile-usertitle">
                                <div className="profile-usertitle-name">
                                   Ali
                                </div>
                                <div className="profile-usertitle-job">
                                  21-12-2022 Mon
                                </div>
                                <div className="profile-usertitle-job">
                                  Room2
                                </div>
                                <div className="profile-usertitle-job">
                                  2:20
                                </div>
                            </div>
                            {/* <!-- END SIDEBAR USER TITLE -->
                            <!-- SIDEBAR BUTTONS --> */}              
                            </div>
                            
                            
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="profile-sidebar">
                                <div className="my-3 p-3 bg-body rounded shadow-sm">

                                {/* <!-- SIDEBAR USERPIC --> */}
                            <div className="profile-userpic">
                                <img src="https://via.placeholder.com/150" className="img-responsive profile-img-center" alt="" />
                            </div>
                            {/* <!-- END SIDEBAR USERPIC -->
                            <!-- SIDEBAR USER TITLE --> */}
                            <div className="profile-usertitle">
                                <div className="profile-usertitle-name">
                                    Ahmad
                                </div>
                                <div className="profile-usertitle-job">
                                  1-01-2022 Fri
                                </div>
                                <div className="profile-usertitle-job">
                                  Room1
                                </div>
                                <div className="profile-usertitle-job">
                                  2:20
                                </div>
                            </div>
                            {/* <!-- END SIDEBAR USER TITLE -->
                            <!-- SIDEBAR BUTTONS --> */}              
                            </div>
                            
                            
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="profile-sidebar">
                                <div className="my-3 p-3 bg-body rounded shadow-sm">

                                {/* <!-- SIDEBAR USERPIC --> */}
                            <div className="profile-userpic">
                                <img src="https://via.placeholder.com/150" className="img-responsive profile-img-center" alt="" />
                            </div>
                            {/* <!-- END SIDEBAR USERPIC -->
                            <!-- SIDEBAR USER TITLE --> */}
                            <div className="profile-usertitle">
                                <div className="profile-usertitle-name">
                                    Mustafa
                                </div>
                                <div className="profile-usertitle-job">
                                  11-2-2022
                                </div>
                                <div className="profile-usertitle-job">
                                 Room3
                                </div>
                                <div className="profile-usertitle-job">
                                 02:20
                                </div>
                            </div>
                            {/* <!-- END SIDEBAR USER TITLE -->
                            <!-- SIDEBAR BUTTONS --> */}              
                            </div>
                            
                            
                            </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    
      </div>
        </>
    }
}

export default adminLayout(DashboardPage);