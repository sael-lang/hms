import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';
import AdminDashboardPage from './pages/AdminDashboardPage';
import DocterDashboardPage from './pages/DocterDashboardPage';
import PatientDashboardPage from './pages/PatientDashboardPage';
import StaffDashboard from './pages/StaffDashboard';
import TypographyPage from './pages/TypographyPage'
import LoginPage from './pages/auth/LoginPage'
import ResetPassword from './pages/auth/ResetPassword';
import ProfilePage from './pages/profile/ProfilePage';
import AdminProfilePage from './pages/profile/AdminProfilePage';
import StaffProfilePage from './pages/profile/StaffProfilePage';
import DocterProfilePage from './pages/profile/DocterProfilePage';
import PatientProfilePage from './pages/profile/PatientProfilePage';
import AdminDelete from './pages/profile/AdminDelete';
import Payments from './pages/profile/Payments';
import Report from './pages/profile/Report';
import RoomAllocate from './pages/profile/RoomAllocate';
import AdminAdd from './pages/profile/AdminAdd';
import AdminEdit from './pages/profile/AdminEdit';
import ChangePasswordPage from './pages/profile/ChangePasswordPage';
import UserPreferencesPage from './pages/profile/UserPreferencesPage'
import AdminBlankPage from './pages/AdminBlankPage';
import PatientDetails from './pages/PatientDetails'
import StaffDetails from './pages/StaffDetails'
import DocterDetails from './pages/DocterDetails'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Appointment from './pages/profile/appointment';
import Appointments from './pages/showappointment';
import Viewdocter from './pages/viewdocter';
import Payments1 from './pages/Payments1';
import Histroy from './pages/profile/histroy';
import Showreport from './pages/profile/showreport';

function App() {
  return (
        <Router>
            <Routes>
                <Route exact path='/' element={<AdminDashboardPage/>} />
                <Route exact path='/payments' element={<Payments/>} />
                <Route exact path='/histroy' element={<Histroy/>} />
                <Route exact path='/payments1' element={<Payments1/>} />
                <Route exact path='/report' element={<Report/>} />
                <Route exact path='/showreport' element={<Showreport/>} />
                <Route exact path='/appointments' element={<Appointment/>} />
                <Route exact path='/appointment' element={<Appointments/>} />
                <Route exact path='/roomallocate' element={<RoomAllocate/>} />
                <Route exact path='/patientdashboard' element={<PatientDashboardPage/>} />
                <Route exact path='/docterdashboard' element={<DocterDashboardPage/>} />
                <Route exact path='/staffdashboard' element={<StaffDashboard/>} />
                <Route exact path='/login' element={<LoginPage/>} />
                <Route exact path='/reset-password' element={<ResetPassword/>} />
                <Route exact path='/profile' element={<ProfilePage/>} />
                <Route exact path='/adminprofile' element={<AdminProfilePage/>} />
                <Route exact path='/staffprofile' element={<StaffProfilePage/>} />
                <Route exact path='/docterprofile' element={<DocterProfilePage/>} />
                <Route exact path='/patientprofile' element={<PatientProfilePage/>} />
                <Route exact path='/admindelete' element={<AdminDelete/>} />
                <Route exact path='/adminadd' element={<AdminAdd/>} />
                <Route exact path='/adminedit' element={<AdminEdit/>} />
                <Route exact path='/change-password' element={<ChangePasswordPage/>} />
                <Route exact path='/preferences' element={<UserPreferencesPage/>} />
                <Route exact path='/typography' element={<TypographyPage/>} />
                <Route exact path='/blank-page' element={<AdminBlankPage/>} />
                <Route exact path='/docterdetails' element={<DocterDetails/>} />
                <Route exact path='/Viewdocter' element={<Viewdocter/>} />
                <Route exact path='/patientdetails' element={<PatientDetails/>} />
                <Route exact path='/staffdetails' element={<StaffDetails/>} />
            </Routes>  
        </Router>
    )
}

export default App;
