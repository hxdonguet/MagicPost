import React from 'react'
import style from './Package.module.css'
import CreatePackage from '../../components/CreatePackage/CreatePackage'
import { useState, useEffect } from 'react'
import UpdateStatusPackage from '../../components/UpdateStatusPackage/UpdateStatusPackage'
import DeleteForm from '../../components/DeleteForm/DeleteForm'
import ViewPackage from '../../components/ViewPackage/ViewPackage'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faMagnifyingGlass, faPen } from '@fortawesome/free-solid-svg-icons'
import { selectAllPackages, useGetPackageByCurrentLocationIdQuery, useGetAllPackagesQuery } from '../../app/features/api/packageSlice'
import useAuth from '../../hook/useAuth'
import ReactPaginate from 'react-paginate';

function Package() {

  const { locationId, workPlace, isAdmin } = useAuth()

  const packages = useSelector(selectAllPackages);


  const dataHook = isAdmin ? useGetAllPackagesQuery : useGetPackageByCurrentLocationIdQuery

  const { data: getPackages, isSuccess, isError, isLoading, error } = dataHook(locationId)


  const [openModal, setOpenModal] = useState(false);
  const [openEdit, setOpenEdit] = useState(packages.map(() => false));
  const [openDelete, setOpenDelete] = useState(packages.map(() => false));
  const [openView, setOpenView] = useState(packages.map(() => false));
  const [selected, setSelected] = useState("")

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

  const handleSelected = (value) => {
    console.log(value == selected)
    if (value === selected) {
      setSelected('')
    } else {
      setSelected(value)
    }
  }


  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1)
  };


  useEffect(() => {
    if (isSuccess) {
      const { ids, entities } = getPackages;
      
      let newArr = ids.filter(id => {
        return search.toLowerCase() === ''
          ? entities[id]
          : entities[id]._id.toLowerCase().includes(search)
      })
      if (selected !== '') {
        newArr = newArr.filter(id => {
          return entities[id].status === selected
        })
      }
      setNewContent(newArr)
      // setKeyNum(newArr.length)
      const nPage = Math.ceil(newArr.length / recordsPerPage)
      setTotalPage(nPage)

    }
  }, [getPackages, selected, search, isSuccess])
  let content;
  if (isLoading) {
    content =
      <tr>
        <td>Is Loading</td>
      </tr>
  } else if (isSuccess) {
    const { entities } = getPackages
    const records = newContent.slice(firstIndex, lastIndex)
    content = records.map((id, index) => {
      return (
        <tr key={index}>
          <td>{entities[id]._id}</td>
          <td>{entities[id].senderName}</td>
          <td>{entities[id].receiverName}</td>
          <td>{entities[id].senderTown}</td>
          <td>{entities[id].receiverTown}</td>
          <td>{entities[id].status}</td>
          <td className={style.text_center}>
            <div className={style.btn_group}>
              <div className={style.container_popup}>
                <button id='info' className={style.btn_info_package} onClick={() => handleOpenView(index)}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                {openView[index] && <ViewPackage index={index} package={entities[id]} open={handleOpenView} />}
              </div>
              <div className={style.container_popup}>
                <button id='edit' className={style.btn_edit_package} onClick={() => handleOpenEdit(index)}>
                  <FontAwesomeIcon icon={faPen} />
                </button>
                {openEdit[index] && <UpdateStatusPackage index={index} package={entities[id]} open={handleOpenEdit} />}
              </div>
              <div className={style.container_popup}>
                <button id='delete' className={style.btn_delete_package}
                  onClick={() => {
                    handleOpenRemove(index)
                    setSearch('')
                  }}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                {openDelete[index] && <DeleteForm index={index} package={entities[id]} handleRemove={handleOpenRemove} />}
              </div>
            </div>
          </td>
        </tr>
      )
    })
  } else if (isError) {
    content =
      <tr>
        <td>{error}</td>
      </tr>
  }

  return (
    <div className={style.container}>
      <div className={style.button_filter}>
        <button className={`${style.btn_pending} ${style.button} ${selected === "PENDING" ? style.selected : ''}`}
          onClick={() => handleSelected("PENDING")}
        >Pending</button>
        <button className={`${style.btn_transportation} ${style.button} ${selected === "TRANSPORTATION" ? style.selected : ''} `}
          onClick={() => handleSelected("TRANSPORTATION")}
        >Transportation</button>
        <button className={`${style.btn_delivery} ${style.button} ${selected === "DELIVERY" ? style.selected : ''}`}
          onClick={() => handleSelected("DELIVERY")}
        >Delivery</button>
      </div>
      <div className={style.search}>
        <form className={style.form}>
          <input
            type="text"
            placeholder="Nhập ID"
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <button className={style.button}>
            Tìm kiếm
          </button> */}
        </form>
        {workPlace === 'Transaction' &&
          <button className={style.button} onClick={() => setOpenModal(true)}>Tạo đơn hàng mới</button>
        }

      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Người gửi</th>
            <th scope="col">Người nhận</th>
            <th scope="col">Nơi gửi</th>
            <th scope="col">Nơi nhận</th>
            <th scope="col">Trạng thái</th>
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
      {openModal && <CreatePackage close={setOpenModal} />}
    </div>
  )
}

export default Package