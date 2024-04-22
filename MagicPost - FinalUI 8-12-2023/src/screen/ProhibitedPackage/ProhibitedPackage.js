import React from 'react'
import style from './ProhibitedPackage.module.css'

function ProhibitedPackage() {
  return (
    <>
      <div className={style.subbanner3}>
        <img src="https://i.imgur.com/xLuYgb1.jpg"></img>
        <div className={style.title3}>
          <div className={style.contain3}>
            <span className={style.tieude3}>THÔNG TIN HÀNG GỬI QUỐC TẾ</span>
          </div>
        </div>
      </div>
      <div className={style.tracuuhcg}>
        <div className={style.containtc2}>
          <div className={style.holidayoff2}>
            <div className={style.holidaytext2}>
              <img src='https://ems.com.vn/img/icon/order-search.png'></img>
              <div>Điều kiện xuất khẩu và vận chuyển hàng hóa quốc tế từ Việt Nam:</div>
            </div>
            <div className={style.actoff2}>
              <form className={style.formtracuu2}>
                <div className={style.hangcss2}>
                  <div className={style.phandai2}>
                    <select>
                        <option>Trung Quốc</option>
                        <option>Hàn Quốc</option>
                        <option>Nhật Bản</option>
                        <option>Lào</option>
                        <option>Cam-pu-chia</option>
                        <option>Thái Lan</option>
                        <option>Mỹ</option>
                        <option>Mexico</option>
                        <option>Argentina</option>
                        <option>Brazil</option>
                        <option>Liên Bang Nga</option>
                        <option>Anh</option>
                        <option>Pháp</option>
                        <option>Australia</option>
                        <option>Nam Phi</option>
                    </select>
                  </div>
                  <div className={style.phanngan2}>
                    <button className={style.nutbam}>Tra cứu</button>
                  </div>
                </div>
                <div className={style.hangcss2}>
                  <div className={style.chuy2}>
                    <a href='/ProhibitedDetails'>Quy định chung về hàng cấm gửi</a>
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
export default ProhibitedPackage