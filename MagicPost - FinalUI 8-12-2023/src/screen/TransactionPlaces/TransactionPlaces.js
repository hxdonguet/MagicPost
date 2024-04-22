import React from 'react'
import style from './TransactionPlaces.module.css'
import { useState } from 'react'
import EditForm from '../../components/EditForm/EditForm'
import DeleteForm from '../../components/DeleteForm/DeleteForm'
import { useSelector } from 'react-redux'
import { selectAllPackages } from '../../app/features/api/packageSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const data = [
    {
        id: "1",
        transaction: "MagicPost UET",
        place: "Xuân Thủy, Cầu Giấy",
        owner: "Undefined",
        username: "Undefined",
        password: "Undefined",

    },
    {
        id: "2",
        transaction: "MagicPost Hạ Long",
        place: "Hồng Hải, Hạ Long",
        owner: "Undefined",
        username: "Undefined",
        password: "Undefined",

    },
    {
        id: "3",
        transaction: "MagicPost Cầu Giấy",
        place: "Dịch Vọng Hậu, Cầu Giấy",
        owner: "Undefined",
        username: "Undefined",
        password: "Undefined",

    },{
        id: "4",
        transaction: "MagicPost Hòa Lạc",
        place: "Thạch Thất, Hòa Lạc",
        owner: "Undefined",
        username: "Undefined",
        password: "Undefined",

    },
]
function TransactionPlaces() {
    const packages = useSelector(selectAllPackages);
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
                    <input type="text" placeholder="Search content here..." />
                    <button className={style.button}>Search</button>
                </form>
                <button className={style.button}><Link to='/InfoTransaction'>Create Transaction Places</Link></button>
            </div>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Transaction Places</th>
                        <th scope="col">Place</th>
                        <th scope="col">Owner</th>
                        <th scope="col">UserName</th>
                        <th scope="col">PassWord</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e, index) => {
                        return (
                            <tr key={index}>
                                <td>{e.id}</td>
                                <td>{e.transaction}</td>
                                <td>{e.place}</td>
                                <td>{e.owner}</td>
                                <td>{e.username}</td>
                                <td>{e.password}</td>
                                <td className={style.text_center}>
                                    <div className={style.btn_group}>
                                        <div className={style.container_popup}>
                                            <button id='edit' className={style.btn_edit_package}><Link to='/EditTransaction'>
                                                <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></Link>
                                            </button>
                                            
                                        </div>
                                        <div className={style.container_popup}>
                                            <button id='delete' className={style.btn_delete_package}
                                                onClick={() => handleOpenRemove(index)}>
                                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                            </button>
                                            {openDelete[index] && <DeleteForm index={index} package={e} handleRemove={handleOpenRemove} />}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default TransactionPlaces
