import React from 'react'
import style from './DinhNghia.module.css'

function DinhNghia() {
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
                        <strong>THẾ NÀO LÀ MAGICPOST?</strong>
                    </h1>
                    <p className={style.paragraph}>
                        <span className={style.pr} style={{ fontWeight: "bold" }}>MagicPost là gì? <a className={style.lkngoai} href='/ThoiGian'>Chuyển phát nhanh MagicPost mất bao lâu?</a> <a className={style.lkngoai} href='/MPAnotherServices'>Các dịch vụ của MagicPost?</a>... luôn là những câu hỏi được nhiều khách hàng thắc mắc. Đặt trong bối cảnh nhu cầu vận chuyển, sử dụng dịch vụ chuyển phát nhanh ở Việt Nam ngày một tăng nhanh, chắc chắn việc hiểu rõ về MagicPost sẽ giúp ích rất nhiều cho mọi người.</span>
                    </p>
                    <p className={style.paragraph}>
                        <h5 style={{ color: "black", fontWeight: "bold", marginBottom: "15px" }}>1. Dịch vụ chuyển phát nhanh MagicPost là gì?</h5>
                        <p className={style.paragraph}>Là một đơn vị cung cấp dịch vụ vận chuyển có tiếng, MagicPost là các chữ cái viết tắt của cụm từ “Magic_Mail-Post_Service”, có nghĩa là chuyển phát nhanh hàng hóa/bưu gửi trên phạm vi cả trong và ngoài nước.</p>
                        <p className={style.paragraph}>Dịch vụ chuyển phát nhanh MagicPost cho phép vận chuyển tất cả các loại hàng hóa trong thời gian nhanh chóng, chính xác và chuyên nghiệp. Thời điểm hiện tại, <a href='/MPChuyenPhatNhanh' className={style.lkngoai}>dịch vụ chuyển phát nhanh MagicPost</a> ở Việt Nam đang được 100% các bưu điện và bưu cục cung cấp trên 63 tỉnh thành. Theo đó, Hà Nội và TP Hồ Chí Minh là hai địa phương có hoạt động sử dụng dịch vụ chuyển phát nhanh MagicPost phát triển nhất.</p>
                    </p>
                    <p className={style.paragraph}>
                        <h5 style={{ color: "black", fontWeight: "bold", marginBottom: "15px" }}>2. Các dịch vụ chuyển phát nhanh của MagicPost</h5>
                        <p className={style.paragraph}><a href='/MPChuyenPhatNhanh' className={style.lkngoai}>Dịch vụ chuyển phát nhanh trong nước (MagicPost tiêu chuẩn)</a> là dịch vụ nhận gửi, vận chuyển và phát các loại thư, tài liệu, vật phẩm, hàng hóa trong nước theo chỉ tiêu thời gian tiêu chuẩn được Tổng Công ty Chuyển phát nhanh Bưu điện – CTCP (MagicPost Việt Nam) công bố.</p>
                        <p className={style.paragraph}><a href='/MPPriority' className={style.lkngoai}>Dịch vụ chuyển phát nhanh MagicPost quốc tế</a> là dịch vụ nhận gửi, vận chuyển và phát các loại thứ, tài liệu, vật phẩm, hàng hóa quốc tế theo chỉ tiêu thời gian tiêu chuẩn được Tổng Công ty Chuyển phát nhanh Bưu điện – CTCP (MagicPost Việt Nam) công bố.</p>
                        <p className={style.paragraph}><a href='/MPECommerence' className={style.lkngoai}>Dịch vụ MagicPost Thương mại điện tử</a> là dịch vụ chuyển phát nhanh cho khách hàng thương mại điện tử và thực hiện thu hộ/không thu hộ một khoản tiền theo yêu cầu để hoàn thành hoạt động giao dịch mua bán trực tuyến.</p>
                        <p className={style.paragraph}><a href='/KhoHang' className={style.lkngoai}>Dịch vụ Logistics quản lý và vận hành kho hàng (MagicPost Fulfillment):</a> Cung cấp hạ tầng, mặt bằng kho, quản lý hàng tồn kho; cung cấp các dịch vụ đóng gói trong kho hàng và các giải pháp tích hợp khác đáp ứng nhu cầu quản lý và vận hành kho của khách hàng (soạn hàng, đóng gói, in đơn, chuyển phát và theo dõi đơn hàng…).</p>
                        <p className={style.paragraph}>Chi tiết về các dịch vụ của MagicPost, khách hàng tham khảo chi tiết <a href='/MPAnotherServices' className={style.lkngoai}>tại đây</a>.</p>
                    </p>
                    <p className={style.paragraph}>
                        <h5 style={{ color: "black", fontWeight: "bold", marginBottom: "15px" }}>3. Chuyển phát nhanh MagicPost mất bao lâu?</h5>
                        <p className={style.paragraph}>Với nền tảng thông minh được cung cấp qua website <a href='/' className={style.lkngoai}>https://magicpost.com.vn</a>, chỉ sau vài lần click chuột đơn giản, khách hàng sử dụng <a href='/MPChuyenPhatNhanh' className={style.lkngoai}>dịch vụ chuyển phát nhanh</a> đã có thể nhanh chóng tra cứu được toàn bộ các thông tin liên quan đến cước phí và thời gian giao nhận cho bưu gửi của mình.</p>
                        <p className={style.paragraph}>Chi tiết, xem tại <a href='/ThoiGian' className={style.lkngoai}>bài viết dưới đây</a>.</p>
                    </p>
                    <video controls autoplay className={style.vidmh}>
                        <source src="Hướng Dẫn Tính Cước Chuyển Phát Nhanh Hàng Hóa Và Thời Gian Nhận Hàng.mp4"></source>
                    </video>
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
                                    <a href='/OCOP'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/Tin%201.webp'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Thủ tướng Chính phủ trải nghiệm dịch vụ mua sản phẩm OCOP trên sàn TMĐT MAGICPOSTMART.VN của Bưu điện Việt Nam
                                            </span>
                                            <p className={style.mota}>
                                                Triển lãm thành tựu 10 năm xây dựng nông thôn mới do Ban Chỉ đạo Trung ương các Chương trình mục tiêu quốc gia Bưu điện Việt Nam, MagicPost Việt Nam phối hợp với Bưu điện Tỉnh Nam Định đã giới thiệu sàn thương mại điện tử OCOP.POSTMART.VN tới đông đảo người tiêu dùng.
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
                                    <a href='/HuongDan_DangKi'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/%C4%91%C4%83ng%20k%C3%AD%20t%C3%A0i%20kho%E1%BA%A3n.1638255331.png'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Hướng dẫn đăng ký tài khoản trên phần mềm vận đơn điện tử của MagicPost
                                            </span>
                                            <p className={style.mota}>
                                                Với mong muốn gia tăng tối đa các tiện ích của dịch vụ, tiết kiệm thời gian cho khách hàng khi gửi hàng trực tiếp tại các Bưu cục giao dịch của MagicPost Việt Nam, đồng thời đẩy mạnh ứng dụng các công cụ điện tử vào việc cung cấp dịch vụ.
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
                                    <a href='/ChuyenMinh'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/vn%20airline.1638255595.png'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                MagicPost Việt Nam: “Chuyển mình” nhanh để đảm bảo chuyển phát nhanh"
                                            </span>
                                            <p className={style.mota}>
                                                Đại dịch COVID-19 phủ những mảng màu xám lên bức tranh chung của nền kinh tế toàn cầu cũng như Việt Nam. Trong bối cảnh ấy, nỗ lực ứng phó và đưa ra những giải pháp mang tính đột phá là con đường duy nhất để giúp doanh nghiệp “chuyển mình”, vượt qua khó khăn.
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
export default DinhNghia