import React, { useState } from 'react'
import style from './Search.module.css'
import { useSearchPackageMutation } from '../../app/features/api/packageSlice'
import { useGetTransactionPointByIdQuery } from '../../app/features/api/transactionPointSlice'
function Search() {
  const [inputValue, setInputValue] = useState('')

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const [search, result] = useSearchPackageMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await search({ id: inputValue }).unwrap()
    } catch (err) {
      console.log(err)
    }
  }

  let content;
  if (result.isLoading) {
    content = <p>isLoading</p>
  } else if (result.isSuccess) {
    const { ids, entities } = result.data;
    content = <form>
      <div className={style.title_form}>Thông tin đơn hàng</div>
      <div className={style.layout}>
        <p className={style.infoTitle}>Mã số đơn hàng: </p>
        <span>{entities[ids].id}</span>
      </div>
      <div className={style.info}>
        <div className={style.layout}>
          <p className={style.infoTitle}>Thông tin người gửi</p>
          <div className={style.field}>
            <p className={style.filedInfo}>Họ và tên: </p>
            <p>{entities[ids].senderName}</p>
          </div>
          <div className={style.field}>
            <p className={style.filedInfo}>Số điện thoại: </p>
            <p>{entities[ids].senderContact}</p>
          </div>
          <div className={style.field}>
            <p className={style.filedInfo}>Khu vực: </p>
            <p>{entities[ids].senderCity}</p>
          </div>
          <div className={style.field}>
            <p className={style.filedInfo}>Xã/Phường: </p>
            <p>{entities[ids].senderTown}</p>
          </div>
          <div className={style.field}>
            <p className={style.filedInfo}>Địa chỉ cụ thể: </p>
            <p>{entities[ids].senderAddress}</p>
          </div>
        </div>
        <div className={style.layout}>
          <p className={style.infoTitle}>Thông tin người nhận</p>
          <div className={style.field}>
            <p className={style.filedInfo}>Họ và tên: </p>
            <p>{entities[ids].receiverName}</p>
          </div>
          <div className={style.field}>
            <p className={style.filedInfo}>Số điện thoại: </p>
            <p>{entities[ids].receiverContact}</p>
          </div>
          <div className={style.field}>
            <p className={style.filedInfo}>Khu vực: </p>
            <p>{entities[ids].receiverCity}</p>
          </div>
          <div className={style.field}>
            <p className={style.filedInfo}>Xã/Phường: </p>
            <p>{entities[ids].receiverTown}</p>
          </div>
          <div className={style.field}>
            <p className={style.filedInfo}>Địa chỉ cụ thể: </p>
            <p>{entities[ids].receiverAddress}</p>
          </div>
        </div>
      </div>
      <div className={style.layout}>
        <p className={style.infoTitle}>Thông tin hàng hóa</p>
        <div className={style.info}>
          <div className={style.packageInfo}>
            <div className={style.field}>
              <p className={style.filedInfo}>Tên hàng hóa: </p>
              <p>{entities[ids].packageName}</p>
            </div>
            <div className={style.field}>
              <p className={style.filedInfo}>Khối lượng: </p>
              <p>{entities[ids].packageWeight}</p>
              <p>{entities[ids].weightCaculationUnit}</p>
            </div>
            <div className={style.field}>
              <p className={style.filedInfo}>Dài x Rộng x Cao </p>
              <p>{entities[ids].packageLength} x </p>
              <p>{entities[ids].packageWidth} x </p>
              <p>{entities[ids].packageHeight}</p>
            </div>
            <div className={style.field}>
              <p className={style.filedInfo}>Hình thức vận chuyển: </p>
              <p>{entities[ids].packageDeliveyMethod}</p>
            </div>
          </div>
          <div>
            <div className={style.field}>
              <p className={style.filedInfo}>Trạng thái đơn hàng: </p>
              <p>{entities[ids].status}</p>
            </div>
            <div className={style.field}>
              <p className={style.filedInfo}>Địa điểm nhận kế tiếp: </p>
              <p>{entities[ids].nextLocationId.name}</p>
            </div>
            <div className={style.field}>
              <p className={style.filedInfo}>Lịch sử chuyển hàng: </p>
              <div>
                {entities[ids].history.map(e => (
                  <p>{e.name}</p>
                ))}
              </div>
              {/* <p>{props.package.packageNote}</p> */}
            </div>
          </div>
          <div>
            <div className={style.field}>
              <p className={style.filedInfo}>Ghi chú: </p>
              <p>{entities[ids].packageNote}</p>
            </div>
            <div className={style.field}>
              <p className={style.filedInfo}>Giá tiền: </p>
              <p>{entities[ids].packagePrice}</p>
            </div>
          </div>
        </div>
      </div>

    </form >
  } else if (result.isError) {
    content = <p>Error</p>
  }
  return (
    <>
      <div className={style.subbanner2}>
        <img src="https://i.imgur.com/xLuYgb1.jpg"></img>
        <div className={style.title2}>
          <div className={style.contain2}>
            <span className={style.tieude2}>TRA CỨU BƯU GỬI</span>
          </div>
        </div>
      </div>
      <div className={style.tracuu}>
        <div className={style.containtc}>
          <div className={style.holidayoff}>
            <div className={style.holidaytext}>
              <img src='https://ems.com.vn/img/icon/order-search.png'></img>
              <div>Mã bưu gửi( VD: MP125966888VN, MP125556888VN):</div>
            </div>
            <div className={style.actoff}>
              <form className={style.formtracuu} onSubmit={handleSubmit}>
                <div className={style.hangcss}>
                  <div className={style.phandai}>
                    <input type="text" placeholder="Nhập mã bưu gửi..." autoComplete="off" onChange={handleInput}></input>
                  </div>
                  <div className={style.phanngan}>
                    <button className={style.nutbam}>Tra cứu</button>
                  </div>
                </div>
                <div className={style.hangcss}>
                  <div className={style.chuy}>
                    <i>Ghi chú: Tra cứu tối đa 100 bưu gửi.</i>
                  </div>
                </div>
                {content}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search