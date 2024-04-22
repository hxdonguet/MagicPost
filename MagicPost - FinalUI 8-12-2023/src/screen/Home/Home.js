import React from 'react'
import { Link } from 'react-router-dom'
import style from './Home.module.css';

function Home() {
    return (
        <div>
            <div className={style.backgroundmodau}>
                <a href='/About'><img src='https://admin.ems.com.vn/filemedia/banner/COVER-01.1632703703.jpg'></img></a>
            </div>
            <div className={style.lookuppostal}>
                <div className={style.containermd}>
                    <div className={style.roww}>
                        <div className={style.codmd512}>
                            <div className={style.lookaction}>
                                <h3>TRA CỨU BƯU GỬI</h3>
                                <p>
                                    Mã bưu gửi (Tra nhiều bill thêm dấu phẩy giữa các bill VD:
                                </p>
                                <p>
                                    MP125966888VN, MP125556888VN)
                                </p>
                                <div className={style.dflex}>
                                    <input type="text" placeholder="Nhập mã bưu gửi" value=""></input>
                                    <div className={style.btnsearch}>
                                        <Link to='/Search'><img src="https://ems.com.vn/img/icon/search-white.png" ></img></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.flexcol}>
                            <a href='/MPEstimate' className={style.aa}>
                                <div className={style.lookitemmm}>
                                    <div className={style.amount}>
                                        <img src="https://ems.com.vn/img/icon/search-post.png"></img>
                                    </div>
                                    <p>ƯỚC TÍNH CƯỚC GỬI</p>
                                </div>
                            </a>
                        </div>
                        <div className={style.flexcol}>
                            <a href='/MPFindPost' className={style.aa}>
                                <div className={style.lookitemmm}>
                                    <div className={style.amount}>
                                        <img src="https://ems.com.vn/img/icon/search-post.png"></img>
                                    </div>
                                    <p>TÌM KIẾM BƯU CỤC</p>
                                </div>
                            </a>
                        </div>
                        <div className={style.flexcol}>
                            <a href='' className={style.aa}>
                                <div className={style.lookitemmm}>
                                    <a href='/ProhibitedPackage'>
                                        <div className={style.amount}>
                                            <img src="https://ems.com.vn/img/icon/search-prohibited.png"></img>
                                        </div>
                                        <p>TRA HÀNG CẤM GỬI</p>
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.servicess}>
                <div className={style.tddv}>
                    <h2>Dịch vụ nổi bật</h2>
                </div>
                <div className={style.containdv}>
                    <div className={style.dfldv}>
                        <div className={style.colmd6bt}>
                            <div className={style.honhop}>
                                <div className={style.anhminhhoa}>
                                    <img src='https://admin.ems.com.vn/filemedia/service/ems%20ti%C3%AAu%20chu%E1%BA%A9n.png'></img>
                                </div>
                                <div className={style.motadv}>
                                    <a href='/MPTaiLieu'>
                                        <h3>MagicPost Tài Liệu</h3>
                                        <p>
                                            MagicPost Tài liệu là dịch vụ nhận gửi, vận chuyển và phát các loại thư, tài liệu trong nước theo chỉ tiêu thời gian tiêu chuẩn được Tổng công ty MagicPost công bố.
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={style.colmd6bt}>
                            <div className={style.honhop}>
                                <div className={style.anhminhhoa}>
                                    <img src='https://admin.ems.com.vn/filemedia/service/ems%20qu%E1%BB%91c%20t%E1%BA%BF.png'></img>
                                </div>
                                <div className={style.motadv}>
                                    <a href='/MPChuyenPhatNhanh'>
                                        <h3>Chuyển phát nhanh quốc tế</h3>
                                        <p>
                                            Chuyển phát nhanh MagicPost Quốc tế là dịch vụ nhận gửi, vận chuyển và phát các loại thư, tài liệu, vật phẩm, hàng hoá quốc tế theo chỉ tiêu thời gian tiêu chuẩn được Tổng công ty MagicPost công bố.
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={style.colmd6bt}>
                            <div className={style.honhop}>
                                <div className={style.anhminhhoa}>
                                    <img src='https://admin.ems.com.vn/filemedia/service/ems%20h%E1%BB%8Fa%20t%E1%BB%91c-1605777129.png'></img>
                                </div>
                                <div className={style.motadv}>
                                    <a href='/MPHoaToc'>
                                        <h3>MagicPost Hỏa Tốc</h3>
                                        <   p>
                                            Là dịch vụ chất lượng cao có chỉ tiêu thời gian rút ngắn so với Tài liệu/Hàng hóa nhanh, trong đó bưu gửi được ưu tiên chuyển phát đến người nhận trong khung thời gian cam kết theo tuyến hành trình cụ thể.
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={style.colmd6bt}>
                            <div className={style.honhop}>
                                <div className={style.anhminhhoa}>
                                    <img src='https://admin.ems.com.vn/filemedia/service/ems%20tm%C4%91t%20nhanh.1609605341.png'></img>
                                </div>
                                <div className={style.motadv}>
                                    <a href='/MPECommerence'>
                                        <h3>MagicPost Thương Mại Điện Tử</h3>
                                        <p>
                                            Là dịch vụ chuyển phát cho khách hàng Thương mại điện tử (TMĐT) và thực hiện thu hộ/không thu hộ một khoản tiền theo yêu cầu để hoàn thành hoạt động giao dịch mua bán trực tuyến.
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.anotherdv}>
                        <a className={style.buton} href='/MPAnotherServices'>Các dịch vụ khác...</a>
                    </div>
                </div>
            </div>
            <div className={style.uytin}>
                <div className={style.containerlg}>
                    <div className={style.row3}>
                        <div className={style.col3}>
                            <div className={style.fastcenter}>
                                <h2>Dịch vụ chuyển phát nhanh uy tín, chuyên nghiệp hàng đầu của Bưu điện Việt Nam</h2>
                            </div>
                        </div>
                    </div>
                    <div className={style.alignrow3}>
                        <div className={style.mtauto}>
                            <div className={style.imagevc}>
                                <img src='https://ems.com.vn/img/fast-service.png' className={style.imgg}></img>
                            </div>
                        </div>
                        <div className={style.khachhang}>
                            <div className={style.fadee}>
                                <div className={style.kcj}>
                                    <div className={style.fadeitem}>
                                        <div className={style.anh}>
                                            <img src='https://ems.com.vn/img/icon/user.png' className={style.anhbentrong}></img>
                                        </div>
                                        <div className={style.cmt}>
                                            <p>Khách hàng tin dùng</p>
                                        </div>
                                    </div>
                                    <div className={style.fadeitem}>
                                        <div className={style.anh}>
                                            <img src='https://ems.com.vn/img/icon/network.png' className={style.anhbentrong}></img>
                                        </div>
                                        <div className={style.cmt}>
                                            <p>Nhanh chóng, tiện lợi</p>
                                        </div>
                                    </div>
                                    <div className={style.fadeitem}>
                                        <div className={style.anh}>
                                            <img src='https://ems.com.vn/img/icon/postal-amount.png' className={style.anhbentrong}></img>
                                        </div>
                                        <div className={style.cmt}>
                                            <p>Uy tín, tận tâm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.partner}>
                <div className={style.containerlg3}>
                    <div className={style.title2}>
                        <h2>Đối tác của MagicPost Việt Nam</h2>
                    </div>
                    <div className={style.logopartner}>
                        <img src='https://admin.ems.com.vn/filemedia/linkwebsite/0009-japan-post.webp' className={style.logo}></img>
                        <img src='https://admin.ems.com.vn/filemedia/linkwebsite/1200px-Hongkong_Post_Logo.svg.webp' className={style.logo}></img>
                        <img src='https://admin.ems.com.vn/filemedia/linkwebsite/Singapore%20Post.webp' className={style.logo}></img>
                        <img src='https://admin.ems.com.vn/filemedia/linkwebsite/La_Poste.webp' className={style.logo}></img>
                        <img src='https://admin.ems.com.vn/filemedia/linkwebsite/unnamed.1609380546.webp' className={style.logo}></img>
                    </div>
                </div>
            </div>
            <div className={style.tuvan}>
                <div className={style.rowtv}>
                    <div className={style.col612}>
                        <div className={style.contactleft}>
                            <img className={style.contactleftimg} src='https://ems.com.vn/_next/static/images/img-contact1-effb3eda225cc89caec0a1281d616ddd.png'></img>
                        </div>
                    </div>
                    <div className={style.col612}>
                        <div className={style.formct}>
                            <div className={style.formct_title}>
                                <img className={style.formtitle_icon} src='data:image/png;base64,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'></img>
                                <div className={style.formtitle_nd}>Liên hệ với chúng tôi</div>
                            </div>
                            <form className={style.maulienhe}>
                                <div className={style.ndc}>
                                    <input required="" placeholder="Tên của bạn..." name="name" autocomplete="off" type="text" value=""></input>
                                </div>
                                <div className={style.ndc}>
                                    <input required="" placeholder="Email của bạn..." name="name" autocomplete="off" type="text" value=""></input>
                                </div>
                                <div className={style.ndc}>
                                    <textarea required="" placeholder="Nội dung của bạn..." name="name" autocomplete="off" type="text" value=""></textarea>
                                </div>
                                <button onClick={() => {alert('Hệ thống đã ghi nhận những ý kiến của khách hàng. Xin cảm ơn!')}}>Gửi yêu cầu</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home