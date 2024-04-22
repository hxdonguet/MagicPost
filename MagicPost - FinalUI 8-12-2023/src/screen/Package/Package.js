import React from 'react'
import style from './Package.module.css'
import PackageForm from '../../components/PackageForm/PackageForm'
import { useState } from 'react'
import EditForm from '../../components/EditForm/EditForm'
import DeleteForm from '../../components/DeleteForm/DeleteForm'
import InfoForm from '../../components/InfoForm/InfoForm'
import { useSelector } from 'react-redux'
import { selectAllPackages } from '../../app/features/api/packageSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faTrash,faEye } from '@fortawesome/free-solid-svg-icons'



const data = [
  {
    id: "1",
    sender: "Hồ Xuân Đông",
    receiver: 'UET',
    sendingPlace: "Quảng Ninh",
    receivingPlace: "144 Xuân Thủy, Cầu Giấy",
    status: "TRANSPORTATION",
  },
  {
    id: "2",
    sender: "Hồ Xuân Đông",
    receiver: 'MagicPost Hà Nội',
    sendingPlace: "Quảng Ninh",
    receivingPlace: "Hà Nội",
    status: "SHIPPED",
  },
  {
    id: "3",
    sender: "Hồ Xuân Đông",
    receiver: 'MagicPost Hồ Chí Minh',
    sendingPlace: "Quảng Ninh",
    receivingPlace: "TP. Hồ Chí Minh",
    status: "PENDING",
  },
  {
    id: "4",
    sender: "Hồ Xuân Đông",
    receiver: 'MagicPost Đà Nẵng',
    sendingPlace: "Quảng Ninh",
    receivingPlace: "Đà Nẵng",
    status: "UNSUCEESFUL",
  },
  {
    id: "5",
    sender: "Hồ Xuân Đông",
    receiver: 'MagicPost Quảng Ninh',
    sendingPlace: "Bãi Cháy",
    receivingPlace: "Hồng Hải",
    status: "SHIPPED",
  }
]

function Package() {

  const packages = useSelector(selectAllPackages);

  const [openModal, setOpenModal] = useState(false);
  const [openEdit, setOpenEdit] = useState(packages.map(() => false));
  const [openDelete, setOpenDelete] = useState(packages.map(() => false));
  const [openView, setOpenView] = useState(packages.map(() => false));

  const handleOpenRemove = (index) => {
    let newRemove = [...openDelete]
    newRemove[index] = !newRemove[index];
    setOpenDelete(newRemove);
  }
  const handleOpenEdit = (index) => {
    let newEdit = [...openEdit]
    newEdit[index] = !newEdit[index];
    setOpenEdit(newEdit);
  }

  const handleOpenView = (index) => {
    let newView = [...openView]
    newView[index] = !newView[index];
    setOpenView(newView);
  }

  return (
    <div className={style.container}>
      <div className={style.search}>
        <form className={style.form}>
          <input
            type="text"
            placeholder="Search content here..."
          />
          <button className={style.button}>
            Search
          </button>
        </form>
        <button className={style.button} onClick={() => setOpenModal(true)}>Create Package</button>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Sender</th>
            <th scope="col">Receiver</th>
            <th scope="col">Sending place</th>
            <th scope="col">Receiving place</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => {
            return (
              <tr key={index}>
                <td>{e.id}</td>
                <td>{e.sender}</td>
                <td>{e.receiver}</td>
                <td>{e.sendingPlace}</td>
                <td>{e.receivingPlace}</td>
                <td>{e.status}</td>
                <td className={style.text_center}>
                  <div className={style.btn_group}>
                    <div className={style.container_popup}>
                      <button id='info' className={style.btn_info_package}
                        onClick={() => handleOpenView(index)}>
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                      </button>
                      {openView[index] && <InfoForm index={index} package={e} open={handleOpenView}/>}
                    </div>
                    <div className={style.container_popup}>
                      <button id='edit' className={style.btn_edit_package}
                        onClick={() => handleOpenEdit(index)}>
                        <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                      </button>
                      {openEdit[index] && <EditForm index={index} package={e} open={handleOpenEdit}/>}
                    </div>
                    <div className={style.container_popup}>
                      <button id='delete' className={style.btn_delete_package}
                        onClick={() => handleOpenRemove(index)}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                      </button>
                      {openDelete[index] && <DeleteForm index={index} package={e} handleRemove ={handleOpenRemove}/>}
                    </div>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {openModal && <PackageForm close={setOpenModal} />}
    </div>
  )
}

export default Package