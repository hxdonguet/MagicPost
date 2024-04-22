import React from 'react'
import style from './PackageArrived.module.css'
import CreatePackage from '../../components/CreatePackage/CreatePackage'
import { useState } from 'react'
import { useGetPackageByNextLocationIdQuery, useReceivePackageMutation,selectAllPackages } from '../../app/features/api/packageSlice'
import useAuth from '../../hook/useAuth'
import { useSelector } from 'react-redux'

function PackageArrived() {

  const {locationId} = useAuth()

  const {
    data: packageForLocation,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPackageByNextLocationIdQuery(locationId);


  const [receive] = useReceivePackageMutation();
  const handleClick = async (entity) => {
    // e.preventDefault()
    try {
      // console.log(entity)
      // console.log(entity)
      await receive(entity).unwrap()
    } catch (err) {
      console.log(err)
    }
  }

  let content;
  if (isLoading) {
    content =
      <tr>
        <td>Is Loading</td>
      </tr>
  } else if (isSuccess) {
    const { ids, entities } = packageForLocation;
    content = ids.map((id, index) => {
      return (
        <tr key={index}>
          <td>{entities[id]._id}</td>
          <td>{entities[id].senderName}</td>
          <td>{entities[id].receiverName}</td>
          <td>{entities[id].senderTown} - {entities[id].senderCity}</td>
          <td>{entities[id].receiverTown} - {entities[id].receiverCity}</td>
          <td className={style.text_center}>
            <div className={style.btn_group}>
              <div className={style.container_popup}>
                <button className={`${style.btn} ${style.btn_received}`} onClick={() => { handleClick(entities[id]) }}>
                  Xác nhận
                </button>
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
      <div className={style.search}>
        <form className={style.form}>
          <input
            type="text"
            placeholder="Tìm kiếm nội dung..."
          />
          <button className={style.button}>
            Tìm kiếm
          </button>
        </form>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Người gửi</th>
            <th scope="col">Người nhận</th>
            <th scope="col">Nơi gửi</th>
            <th scope="col">Nơi nhận</th>
            <th scope="col">Xử lý</th>
          </tr>
        </thead>
        <tbody>
          {content}
        </tbody>
      </table>

    </div>
  )
}

export default PackageArrived