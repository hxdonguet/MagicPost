// import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './screen/Home/Home'
import Login from './screen/Login/Login';
import Register from './screen/Register/Register';
import Search from './components/Search/Search';

import LoginLayout from './layout/LoginLayout';
import DefaultLayout from './layout/DefaultLayout';
import Employee from './screen/Employee/Employee';
import EmployeeDefault from './layout/EmployeeDefault/EmployeeDefault';
import PackageArrived from './screen/PackageArrived/PackageArrived';
import Package from './screen/Package/Package';
import Dashboard from './screen/Dashboard/Dashboard';
import About from './screen/About/About'

import ProhibitedDetails from './components/ProhibitedDetails/ProhibitedDetails';
import MPTaiLieu from './components/MPTaiLieu/MPTaiLieu';
import MPChuyenPhatNhanh from './components/MPChuyenPhatNhanh/MPChuyenPhatNhanh';
import MPHoaToc from './components/MPHoaToc/MPHoaToc';
import MPECommerence from './components/MPECommerence/MPECommerence';
import Restore from './screen/Restore/Restore';
import RestoreConfirm from './screen/RestoreConfirm/RestoreConfirm';
import RestoreAfterConfirm from './screen/RestoreAfterConfirm/RestoreAfterConfirm';

import MPEstimate from './components/MPEstimate/MPEstimate';
import MPAnotherServices from './components/MPAnotherServices/MPAnotherServices';
import MPFindPost from './components/MPFindPost/MPFindPost';
import TransactionPoint from './screen/TransactionPoint/TransactionPoint';
import Warehouse from './screen/Warehouse/Warehouse';
import ProfileDetails from './screen/ProfileDetails/ProfileDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Search' element={<Search />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/ProhibitedDetails' element={<ProhibitedDetails />}></Route>
        <Route path='/MPTaiLieu' element={<MPTaiLieu />}></Route>
        <Route path='/MPChuyenPhatNhanh' element={<MPChuyenPhatNhanh />}></Route>
        <Route path='/MPHoaToc' element={<MPHoaToc />}></Route>
        <Route path='/MPECommerence' element={<MPECommerence />}></Route>
        <Route path='/MPEstimate' element={<MPEstimate />}></Route>
        <Route path='/MPAnotherServices' element={<MPAnotherServices />}></Route>
        <Route path='/MPFindPost' element={<MPFindPost />}></Route>
        {/* </Route> */}
      </Route>

      <Route path='/' element={<LoginLayout />}>
        <Route path='Login' element={<Login />}></Route>
        <Route path='Register' element={<Register />}></Route>
        <Route path='Restore' element={<Restore />}></Route>
        <Route path='RestoreConfirm' element={<RestoreConfirm />}></Route>
        <Route path='RestoreAfterConfirm' element={<RestoreAfterConfirm />}></Route>
      </Route>


      <Route path='/' element={< EmployeeDefault />}>
        <Route path='dashboard' element={<Dashboard />}></Route>
        <Route path='packages' >
          <Route path='getAll' element={<Package />}></Route>
          <Route path='arrived' element={<PackageArrived />}></Route>
        </Route>
        <Route path='employee'>
          <Route path='getAll' element={<Employee />}></Route>
          <Route path='profile/:id' element={<ProfileDetails />}></Route>
        </Route>
        <Route path='transactionPoint'>
          <Route path='getAll' element={<TransactionPoint />}></Route>
        </Route>
        <Route path='Warehouse'>
          <Route path='getAll' element={<Warehouse />}></Route>
        </Route>

      </Route>
    </Routes>
  );
}

export default App;