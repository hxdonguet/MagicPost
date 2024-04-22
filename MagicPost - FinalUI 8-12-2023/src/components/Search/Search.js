import React from 'react'
import style from './Search.module.css'

function Search() {
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
              <div>Mã bưu gửi (Tra nhiều bill thêm dấu phẩy giữa các bill. VD: MP125966888VN, MP125556888VN):</div>
            </div>
            <div className={style.actoff}>
              <form className={style.formtracuu}>
                <div className={style.hangcss}>
                  <div className={style.phandai}>
                    <input type="text" placeholder="Nhập mã bưu gửi..." autocomplete="off" value=""></input>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search