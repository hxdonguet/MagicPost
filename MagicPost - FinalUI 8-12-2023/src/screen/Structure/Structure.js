import React from 'react'
import style from './Structure.module.css'

function Structure() {
  return (
    <>
      <div className={style.subbanner4}>
        <img src="https://i.imgur.com/xLuYgb1.jpg"></img>
        <div className={style.title4}>
          <div className={style.contain4}>
            <span className={style.tieude4}>CƠ CẤU TỔ CHỨC</span>
          </div>
        </div>
      </div>
      <div className={style.ndcg}>
        <div className={style.containndcg}>
            <div className={style.dinhdangtieudendcg}> 
                <h1 className={style.tieudendcg}>
                    <strong>SƠ ĐỒ CƠ CẤU TỔ CHỨC - CTCP CHUYỂN PHÁT MAGICPOST</strong>
                </h1>
            </div>
            <img src='https://admin.ems.com.vn/filemedia/upload/C%C6%A1%20c%E1%BA%A5u%20t%E1%BB%95%20ch%E1%BB%A9c.png'></img>
        </div>
      </div>
    </>
  )
}
export default Structure