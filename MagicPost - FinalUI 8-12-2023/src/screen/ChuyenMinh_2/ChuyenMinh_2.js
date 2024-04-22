import React from 'react'
import style from './ChuyenMinh_2.module.css'

function ChuyenMinh_2() {
    return (
        <>
            <div className={style.subbanner}>
                <img src="https://i.imgur.com/xLuYgb1.jpg"></img>
                <div className={style.title}>
                    <div className={style.contain}>
                        <span className={style.tieude}>TIN TỨC</span>
                    </div>
                </div>
            </div>
            <div className={style.containanother}>
                <div className={style.service}>
                    <h1 className={style.tieudedv}>
                        <strong>MagicPost Việt Nam không ngừng dịch chuyển giữa mùa dịch</strong>
                    </h1>
                    <hr></hr>
                    <p className={style.paragraph}>
                        <span className={style.pr} style={{ fontWeight: "bold" }}>Cam kết phục vụ bằng sự đồng lòng, chuyên nghiệp và tận tụy, trước thử thách vô cùng lớn khi phải đảm bảo hoạt động giao nhận thông suốt giữa mùa dịch, đồng thời vẫn đảm bảo chất lượng, thời gian chuyển phát, đội ngũ nhân viên của MagicPost Việt Nam luôn nỗ lực phục vụ, đáp ứng tốt nhất mọi nhu cầu của khách hàng.</span>
                    </p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='https://admin.ems.com.vn/filemedia/post/Tin%208.webp'></img>
                    </p>
                    <p className={style.paragraph}>Đặc biệt tại Đà Nẵng - nơi Covid-19 đang diễn ra rất phức tạp, các MP’er tại Đà Nẵng vẫn dũng cảm, tận tâm, nhanh chóng áp dụng nhiều biện pháp để đảm bảo hoạt động giao nhận tại Đà Nẵng an toàn và thông suốt “Dịch chuyển” trong việc ứng dụng công nghệ vào chu trình chăm sóc khách hàng.</p>
                    <p className={style.paragraph}>MagicPost Việt Nam chuẩn bị ra mắt phần mềm VẬN ĐƠN ĐIỆN TỬ hỗ trợ khách hàng CHỦ ĐỘNG NHẬP THÔNG TIN BƯU GỬI trước khi ra quầy gửi hàng: <a href='/EBill' className={style.lkngoai}>https://bill.magicpost.com.vn/</a>, với mong muốn gia tăng tối đa các tiện ích của dịch vụ, tiết kiệm thời gian cho khách hàng khi gửi hàng trực tiếp tại các Bưu cục giao dịch của MagicPost Việt Nam.</p>
                    <p className={style.paragraph}>Dù trong điều kiện hay hoàn cảnh nào, khi cả nước “đứng yên” để phòng dịch thì MagicPost vẫn không ngừng dịch chuyển, đổi mới để mang lại chất lượng dịch vụ tốt nhất đến khách hàng. Cảm ơn quý khách hàng đã tin tưởng lựa chọn MagicPost Việt Nam.</p>
                    
                </div>

                <div className={style.listofnews}>
                    <div className={style.col12}>
                        <div className={style.chimuc}>
                            <div className={style.ndchimuc}>Tin liên quan</div>
                            <div className={style.more}>
                                <a href='#'>Chuyển lên đầu trang</a>
                            </div>
                        </div>
                        <div className={style.roww}>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/MP_E_COD'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/ecod.1638255235.png'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Dịch vụ MagicPost E-COD tiết kiệm siêu ưu đãi ra mắt thị trường
                                            </span>
                                            <p className={style.mota}>
                                                Nhằm mang đến nhiều lựa chọn hơn cho các khách hàng sử dụng dịch vụ chuyển phát nhanh, đặc biệt là khách hàng thương mại điện tử, Tổng công ty Chuyển phát nhanh Bưu điện – Công ty cổ phần ( MagicPost Việt Nam) đã triển khai cung cấp dịch vụ MagicPost E-COD với cước phí siêu tiết kiệm, siêu ưu đãi.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>06/12/2023</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Tin liên quan</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/ChuyenMinh_2'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/scodi.1638160211.png'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                MagicPost S-COD - Dành riêng cho khách hàng thương mại điện tử
                                            </span>
                                            <p className={style.mota}>
                                                Dịch vụ MagicPost Thương mại điện tử nhanh (MagicPost S-COD) là dịch vụ phát hàng thu tiền với thời gian chuyển phát bằng thời gian toàn trình của Bưu gửi chuyển phát nhanh MagicPost.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>06/12/2023</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Tin liên quan</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/ChuyenMinh_2'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/Tin%208.webp'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                MagicPost Việt Nam không ngừng dịch chuyển giữa mùa dịch
                                            </span>
                                            <p className={style.mota}>
                                                Cam kết phục vụ bằng sự đồng lòng, chuyên nghiệp và tận tụy, trước thử thách vô cùng lớn khi phải đảm bảo hoạt động giao nhận thông suốt giữa mùa dịch, đồng thời vẫn đảm bảo chất lượng, thời gian chuyển phát, đội ngũ nhân viên của MagicPost Việt Nam luôn nỗ lực phục vụ, đáp ứng tốt nhất mọi nhu cầu của khách hàng.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>06/12/2023</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Tin liên quan</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
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
            </div>
        </>
    )
}
export default ChuyenMinh_2