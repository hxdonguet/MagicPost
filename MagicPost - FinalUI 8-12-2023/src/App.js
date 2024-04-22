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

import ProhibitedPackage from './screen/ProhibitedPackage/ProhibitedPackage'
import ProhibitedDetails from './screen/ProhibitedDetails/ProhibitedDetails';
import MPTaiLieu from './screen/MPTaiLieu/MPTaiLieu';
import MPChuyenPhatNhanh from './screen/MPChuyenPhatNhanh/MPChuyenPhatNhanh';
import MPHoaToc from './screen/MPHoaToc/MPHoaToc';
import MPECommerence from './screen/MPECommerence/MPECommerence';
import Restore from './screen/Restore/Restore';
import RestoreConfirm from './screen/RestoreConfirm/RestoreConfirm';
import RestoreAfterConfirm from './screen/RestoreAfterConfirm/RestoreAfterConfirm';

import Policy from './screen/Policy/Policy';
import Future from './screen/Future/Future';
import Recruitment from './screen/Recruitment/Recruitment';
import Structure from './screen/Structure/Structure';
import VATServices from './screen/VATServices/VATServices';
import MPEstimate from './screen/MPEstimate/MPEstimate';
import MPAnotherServices from './screen/MPAnotherServices/MPAnotherServices';
import MPFindPost from './screen/MPFindPost/MPFindPost';

import PackagePending from './screen/PackagePending/PackagePending';
import PackageFailed from './screen/PackageFailed/PackageFailed';
import PackageTransportation from './screen/PackageTransportation/PackageTransportation';
import InfoAdmin from './screen/InfoAdmin/InfoAdmin';
import TransactionPlaces from './screen/TransactionPlaces/TransactionPlaces';
import GatheringPoints from './screen/GatheringPoints/GatheringPoints';
import InfoTransaction from './screen/InfoTransaction/InfoTransaction';
import InfoGathering from './screen/InfoGathering/InfoGathering';
import EditTransaction from './screen/EditTransaction/EditTransaction';
import EditGathering from './screen/EditGathering/EditGathering';

import QHCD from './screen/QHCD/QHCD';
import MPPriority from './screen/MPPriority/MPPriority';
import MPGTGT from './screen/MPGTGT/MPGTGT';
import LastMile from './screen/LastMile/LastMile';
import Forwarder from './screen/Forwarder/Forwarder';
import KhoHang from './screen/KhoHang/KhoHang';
import Details1 from './screen/Details1/Details1';
import Details2 from './screen/Details2/Details2';
import Details3 from './screen/Details3/Details3';
import Details4 from './screen/Details4/Details4';
import Details5 from './screen/Details5/Details5';

import News from './screen/News/News';
import News_Delay from './screen/News_Delay/News_Delay';
import HuongDan_DinhVi from './screen/HuongDan_DinhVi/HuongDan_DinhVi';
import DinhNghia from './screen/DinhNghia/DinhNghia';
import ThoiGian from './screen/ThoiGian/ThoiGian';
import HuongDan_VanDon from './screen/HuongDan_VanDon/HuongDan_VanDon';
import OCOP from './screen/OCOP/OCOP';
import HuongDan_DangKi from './screen/HuongDan_DangKi/HuongDan_DangKi';
import ChuyenMinh from './screen/ChuyenMinh/ChuyenMinh';
import MP_E_COD from './screen/MP_E_COD/MP_E_COD';
import MP_S_COD from './screen/MP_S_COD/MP_S_COD';
import ChuyenMinh_2 from './screen/ChuyenMinh_2/ChuyenMinh_2';
import BTTTT from './screen/BTTTT/BTTTT';
import DVBuuChinh from './screen/DVBuuChinh/DVBuuChinh';
import UPU_Support from './screen/UPU_Support/UPU_Support';
import Modernize from './screen/Modernize/Modernize';
import UPU_ChuyenGiao from './screen/UPU_ChuyenGiao/UPU_ChuyenGiao';
import TamNhinMoi from './screen/TamNhinMoi/TamNhinMoi';
import BiKipTikTok from './screen/BiKipTikTok/BiKipTikTok';
import BayPP from './screen/BayPP/BayPP';
import BiKipWebsite from './screen/BiKipWebsite/BiKipWebsite';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Search' element={<Search />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/QHCD' element={<QHCD />}></Route>
        <Route path='/ProhibitedPackage' element={<ProhibitedPackage />}></Route>
        <Route path='/ProhibitedDetails' element={<ProhibitedDetails />}></Route>
        <Route path='/MPTaiLieu' element={<MPTaiLieu />}></Route>
        <Route path='/MPChuyenPhatNhanh' element={<MPChuyenPhatNhanh />}></Route>
        <Route path='/MPHoaToc' element={<MPHoaToc />}></Route>
        <Route path='/MPECommerence' element={<MPECommerence />}></Route>
        <Route path='/Policy' element={<Policy />}></Route>
        <Route path='/Future' element={<Future />}></Route>
        <Route path='/Recruitment' element={<Recruitment />}></Route>
        <Route path='/Structure' element={<Structure />}></Route>
        <Route path='/VATServices' element={<VATServices />}></Route>
        <Route path='/MPEstimate' element={<MPEstimate />}></Route>
        <Route path='/MPAnotherServices' element={<MPAnotherServices />}></Route>
        <Route path='/MPFindPost' element={<MPFindPost />}></Route>
        <Route path='/MPPriority' element={<MPPriority />}></Route>
        <Route path='/MPGTGT' element={<MPGTGT />}></Route>
        <Route path='/LastMile' element={<LastMile />}></Route>
        <Route path='/Forwarder' element={<Forwarder />}></Route>
        <Route path='/KhoHang' element={<KhoHang />}></Route>
        <Route path='/Details1' element={<Details1 />}></Route>
        <Route path='/Details2' element={<Details2 />}></Route>
        <Route path='/Details3' element={<Details3 />}></Route>
        <Route path='/Details4' element={<Details4 />}></Route>
        <Route path='/Details5' element={<Details5 />}></Route>
        <Route path='/News' element={<News />}></Route>
        <Route path='/News_Delay' element={<News_Delay />}></Route>
        <Route path='/HuongDan_DinhVi' element={<HuongDan_DinhVi />}></Route>
        <Route path='/DinhNghia' element={<DinhNghia />}></Route>
        <Route path='/ThoiGian' element={<ThoiGian />}></Route>
        <Route path='/HuongDan_VanDon' element={<HuongDan_VanDon />}></Route>
        <Route path='/OCOP' element={<OCOP />}></Route>
        <Route path='/HuongDan_DangKi' element={<HuongDan_DangKi />}></Route>
        <Route path='/ChuyenMinh' element={<ChuyenMinh />}></Route>
        <Route path='/MP_E_COD' element={<MP_E_COD />}></Route>
        <Route path='/MP_S_COD' element={<MP_S_COD />}></Route>
        <Route path='/ChuyenMinh_2' element={<ChuyenMinh_2 />}></Route>
        <Route path='/BTTTT' element={<BTTTT />}></Route>
        <Route path='/DVBuuChinh' element={<DVBuuChinh />}></Route>
        <Route path='/UPU_Support' element={<UPU_Support />}></Route>
        <Route path='/Modernize' element={<Modernize />}></Route>
        <Route path='/UPU_ChuyenGiao' element={<UPU_ChuyenGiao />}></Route>
        <Route path='/TamNhinMoi' element={<TamNhinMoi />}></Route>
        <Route path='/BiKipTikTok' element={<BiKipTikTok />}></Route>
        <Route path='/BayPP' element={<BayPP />}></Route>
        <Route path='/BiKipWebsite' element={<BiKipWebsite />}></Route>
        {/* </Route> */}
      </Route>

      <Route path='/' element={<LoginLayout />}>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/Restore' element={<Restore />}></Route>
        <Route path='/RestoreConfirm' element={<RestoreConfirm />}></Route>
        <Route path='/RestoreAfterConfirm' element={<RestoreAfterConfirm />}></Route>
      </Route>


      <Route path='/' element={< EmployeeDefault />}>
        <Route path='Dashboard' element={<Dashboard />}></Route>
        <Route path='InfoAdmin' element={<InfoAdmin />}></Route>
        <Route path='TransactionPlaces' element={<TransactionPlaces />}></Route>
        <Route path='GatheringPoints' element={<GatheringPoints />}></Route>
        <Route path='InfoTransaction' element={<InfoTransaction />}></Route>
        <Route path='InfoGathering' element={<InfoGathering />}></Route>
        <Route path='EditTransaction' element={<EditTransaction />}></Route>
        <Route path='EditGathering' element={<EditGathering />}></Route>
        <Route path='Packages' >
          <Route path='GetAll' element={<Package />}></Route>
          <Route path='Arrived' element={<PackageArrived />}></Route>
          <Route path='Pending' element={<PackagePending />}></Route>
          <Route path='Failed' element={<PackageFailed />}></Route>
          <Route path='Transportation' element={<PackageTransportation />}></Route>
        </Route>
        <Route path='Employee'>
          <Route path='GetAll' element={<Employee />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
