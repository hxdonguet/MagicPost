import React from 'react'
import style from './Warehouse.module.css'
import { useState, useEffect } from 'react'
import DeleteForm from '../../components/DeleteForm/DeleteForm'
import EditWarehouse from '../../components/EditWarehouse/EditWarehouse'
import ViewWarehouse from '../../components/ViewWarehouse/ViewWarehouse'
import CreateWarehouse from '../../components/CreateWarehouse/CreateWarehouse'
import { useSelector } from 'react-redux'
import { selectAllWarehouse } from '../../app/features/api/wareHouseSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useGetAllWarehouseQuery } from '../../app/features/api/wareHouseSlice'
import ReactPaginate from 'react-paginate'

function Warehouse() {
    const {
        data: getAllwarehouses,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAllWarehouseQuery()
    const warehouses = useSelector(selectAllWarehouse);
    const [openModal, setOpenModal] = useState(false);
    const [openEdit, setOpenEdit] = useState(warehouses.map(() => false));
    const [openDelete, setOpenDelete] = useState(warehouses.map(() => false));
    const [openView, setOpenView] = useState(warehouses.map(() => false));

    const [search, setSearch] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const [newContent, setNewContent] = useState([])

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

    const handlePlace = (district, pronvice) => {
        if(district == '') {
            return pronvice
        } else {
            return district + '-' + pronvice
        }
    }

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1)
    };
   
    useEffect(() => {
        if (isSuccess) {
            const { ids, entities } = getAllwarehouses
            const newArr = ids.filter((id) => {
                return search.toLowerCase() === ''
                    ? entities[id]
                    : entities[id]._id.toLowerCase().includes(search)
            })
            setNewContent(newArr)
            const nPage = Math.ceil(newArr.length / recordsPerPage)
            setTotalPage(nPage)
        }
    }, [getAllwarehouses, isSuccess, search])


    let content
    if (isLoading) {
        content =
            <tr>
                <td>Is Loading</td>
            </tr>
    } else if (isSuccess) {
        const {entities } = getAllwarehouses;
        const records = newContent.slice(firstIndex, lastIndex)
        content = records.map((id, index) => (
            <tr key={index}>
                <td>{entities[id]._id}</td>
                <td>{entities[id].name}</td>
                <td>{handlePlace(entities[id].location.district, entities[id].location.province)}</td>
                <td>{entities[id].managerId}</td>
                <td className={style.text_center}>
                    <div className={style.btn_group}>

                        <div className={style.container_popup}>
                            <button id='info' className={style.btn_info_package}
                                onClick={() => handleOpenView(index)}>
                                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                            </button>
                            {openView[index] && <ViewWarehouse index={index} warehouse={entities[id]} open={handleOpenView} />}
                        </div>

                        <div className={style.container_popup}>
                            <button id='edit' className={style.btn_edit_package}
                                onClick={() => handleOpenEdit(index)}>
                                <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                            </button>
                            {openEdit[index] && <EditWarehouse index={index} warehouse={entities[id]} handleEdit={handleOpenEdit} />}
                        </div>


                        <div className={style.container_popup}>
                            <button id='delete' className={style.btn_delete_package}
                                onClick={() => handleOpenRemove(index)}>
                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </button>
                            {openDelete[index] && <DeleteForm index={index} package={entities[id]} handleRemove={handleOpenRemove} />}
                        </div>
                    </div>
                </td>
            </tr>
        ))

    } else if (isError) {
        content =
            <tr>
                <td>{error}</td>
            </tr>
    }

    return (
        <div className={style.container}>
            <div className={style.search}>
                <form className={style.form}>
                    <input type="text" placeholder="Tìm kiếm nội dung..." onChange={(e) => setSearch(e.target.value)} />
                    <button className={style.button}>Tìm kiếm</button>
                </form>
                <button className={style.button} onClick={() => setOpenModal(true)}>Tạo điểm tập kết mới</button>
            </div>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Điểm tập kết</th>
                        <th scope="col">Địa điểm</th>
                        <th scope="col">ID quản lý</th>
                        <th scope="col">Xử lý</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
            <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={totalPage}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        containerClassName={style.pagination}
                        pageClassName={style.pageNum}
                        previousClassName={style.pageNum}
                        nextClassName={style.pageNum}
                        activeLinkClassName={style.active}
                    />
            {openModal && <CreateWarehouse openModal={setOpenModal} />}
        </div>
    )
}
export default Warehouse
