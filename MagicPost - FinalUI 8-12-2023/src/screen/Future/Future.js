import React from 'react'
import style from './Future.module.css'

function Future() {
    return (
        <>
            <div className={style.subbanner}>
                <img src="https://i.imgur.com/xLuYgb1.jpg"></img>
                <div className={style.title}>
                    <div className={style.contain}>
                        <span className={style.tieude}>TẦM NHÌN SỨ MỆNH</span>
                    </div>
                </div>
            </div>
            <div className={style.dinhdangtieudendcg}> 
                <h1 className={style.tieudendcg}>
                    <strong>MAGICPOST - TẦM NHÌN VÀ SỨ MỆNH</strong>
                </h1>
            </div>
            <div className={style.page}>
                <div className={style.contain2}>
                    <div className={style.customblock2}>
                        <div className={style.ndc}>
                            <div className={style.subndc}>
                                <h3>TẦM NHÌN</h3>
                                <p>Là thương hiệu bưu chính chuyển phát uy tín, chuyên nghiệp <strong>dẫn đầu Việt Nam và vươn tầm khu vực</strong>.&nbsp;</p>
                            </div>
                        </div>
                        <div className={style.anhndc}>
                            <img alt="" src="https://admin.ems.com.vn/filemedia/upload/NIK_3510.jpg"></img>
                        </div>
                    </div>
                    <div className={style.customblock2}>
                        <div className={style.ndc}>
                            <div className={style.subndc2}>
                                <h3>SỨ MỆNH</h3>
                                <p>Kết nối con người, kết nối doanh nghiệp, tổ chức <strong>vì một Việt Nam phát triển</strong> bằng các giải pháp chuyển phát nhanh, thương mại điện tử, logistics trong nước và quốc tế.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;.</p>
                            </div>
                        </div>
                        <div className={style.anhndc}>
                            <img alt="" src="https://admin.ems.com.vn/filemedia/upload/H%C3%94%20TR%E1%BB%A2%20KH%C3%81CH%20H%C3%80NG%20-%20T%E1%BB%94NG%20%C4%90%C3%80I%20ONLINE%20-%20Copy.JPG"></img>
                        </div>
                    </div>
                    <div className={style.customblock2}>
                        <div className={style.ndc}>
                            <div className={style.subndc}>
                                <h3>GIÁ TRỊ CỐT LÕI</h3>
                                <ul>
                                    <li><strong>TÂM: </strong>Tâm huyết vì khách hàng.</li>
                                    <li><strong>SÁNG: </strong>Sáng tạo để phát triển.</li>
                                    <li><strong>CHÍ: </strong>Chí bền vượt thách thức.</li>
                                    <li><strong>ĐỒNG: </strong>Đồng lòng cùng tiến xa.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={style.anhndc}>
                            <img alt="" src="https://admin.ems.com.vn/filemedia/upload/QUY%20TRINH%20CUNG%20UNG%20DV%20-%20V%E1%BA%ACN%20CHUY%E1%BB%82N%20-%20Copy.jpg"></img>
                        </div>
                    </div>
                    <div className={style.customblock2}>
                        <div className={style.ndc}>
                            <div className={style.subndc2}>
                                <h3>TRIẾT LÝ KINH DOANH</h3>
                                <p>Đổi mới để phát triển – Sáng tạo để dẫn đầu.</p>
                            </div>
                        </div>
                        <div className={style.anhndc}>
                            <img alt="" src="https://admin.ems.com.vn/filemedia/upload/NIK_3579.jpg"></img>
                        </div>
                    </div>
                    <div className={style.findmore}>
                        <p className={style.tht}>
                            Tìm hiểu thêm
                        </p>
                        <div className={style.imgmore}>
                            <div className={style.item}>
                                <div className={style.itemsub}>
                                    <p className={style.anhmore}>
                                        <img src='https://admin.ems.com.vn/filemedia/upload/H%C3%94%20TR%E1%BB%A2%20KH%C3%81CH%20H%C3%80NG%20-%20T%E1%BB%94NG%20%C4%90%C3%80I%20ONLINE%20-%20Copy.JPG' className={style.sup}></img>
                                    </p>
                                    <div className={style.morecontent}>
                                        <p><strong>Cơ cấu tổ chức</strong></p>
                                        <p><a className={style.moreinfo} href='/Structure'>Xem thêm</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemsub}>
                                    <p className={style.anhmore}>
                                        <img src='https://admin.ems.com.vn/filemedia/upload/TIMEstudio-180825-044.jpg' className={style.sup}></img>
                                    </p>
                                    <div className={style.morecontent}>
                                        <p><strong>Tuyển dụng</strong></p>
                                        <p><a className={style.moreinfo} href='/Recruitment'>Xem thêm</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Future