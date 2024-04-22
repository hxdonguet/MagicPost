import React from 'react'
import style from './GatheringPoints.module.css'
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
        gatherpoint: "Phòng Đào Tạo - UET",
        place: "105 - E3",
        owner: "Undefined",
        username: "Undefined",
        password: "Undefined",

    },
    {
        id: "2",
        gatherpoint: "Phòng CTSV - UET",
        place: "107 - E3",
        owner: "Undefined",
        username: "Undefined",
        password: "Undefined",

    },
    {
        id: "3",
        gatherpoint: "Trụ sở VNU",
        place: "144 Xuân Thủy, Cầu Giấy",
        owner: "Undefined",
        username: "Undefined",
        password: "Undefined",

    },{
        id: "4",
        gatherpoint: "Bưu điện Hồng Hải",
        place: "Hồng Hải, Hạ Long",
        owner: "Undefined",
        username: "Undefined",
        password: "Undefined",

    },
]
function GatheringPoints() {
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
                <button className={style.button}><Link to='/InfoGathering'>Create Gathering Points</Link></button>
            </div>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Gathering Points</th>
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
                                <td>{e.gatherpoint}</td>
                                <td>{e.place}</td>
                                <td>{e.owner}</td>
                                <td>{e.username}</td>
                                <td>{e.password}</td>
                                <td className={style.text_center}>
                                    <div className={style.btn_group}>
                                        <div className={style.container_popup}>
                                            <button id='edit' className={style.btn_edit_package}><Link to='/EditGathering'>
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
export default GatheringPoints
