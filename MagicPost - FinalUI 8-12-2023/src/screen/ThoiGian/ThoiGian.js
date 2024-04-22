import React from 'react'
import style from './ThoiGian.module.css'

function ThoiGian() {
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
                        <strong>Chuyển phát nhanh MagicPost mất bao lâu?</strong>
                    </h1>
                    <p className={style.paragraph}>
                        <span className={style.pr} style={{ fontWeight: "bold" }}>Để giải đáp thắc mắc của khách hàng dành về việc <a className={style.lkngoai} href='/ThoiGian'>dịch vụ chuyển phát nhanh mất bao lâu,</a> Tổng Công ty Chuyển phát nhanh Bưu điện – CTCP (MagicPost Việt Nam) đã cung cấp nền tảng tra cứu cước vận chuyển thông minh qua website https://magicpost.com.vn.</span>
                    </p>
                    <video controls autoplay className={style.vidmh}>
                        <source src="Hướng Dẫn Tính Cước Chuyển Phát Nhanh Hàng Hóa Và Thời Gian Nhận Hàng.mp4"></source>
                    </video>
                    <p className={style.paragraph}>
                        Chỉ sau vài thao tác click chuột cực kỳ đơn giản, khách hàng sử dụng <a className={style.lkngoai} href='/MPChuyenPhatNhanh'>dịch vụ chuyển phát nhanh</a> của MagicPost Việt Nam đã có thể nhanh chóng tra cứu toàn bộ thông tin liên quan đến cước phí vận chuyển và thời gian giao/nhận bưu gửi, hàng hóa.
                    </p>
                    <p className={style.paragraph}>
                        Cụ thể hơn, với nền tảng công nghệ dữ liệu hiện đại, mục <a className={style.lkngoai} href='/MPEstimate'>ƯỚC TÍNH CƯỚC PHÍ</a> trên website https://magicpost.com.vn được thiết kế ngay bên ngoài giao diện chính, qua đó giúp khách hàng dễ dàng nhận diện và sử dụng chức năng để tra cứu xem dịch vụ chuyển phát nhanh mất bao lâu, chuyển phát nhanh khi nào nhận được…
                    </p>
                    <p className={style.paragraph}>
                        Ngoài ra, mục <a className={style.lkngoai} href='/MPEstimate'>ƯỚC TÍNH CƯỚC PHÍ</a> trên website của MagicPost Việt Nam cũng phân loại thành hai nhóm chính; bao gồm dịch vụ chuyển phát nhanh MagicPost trong nước và dịch vụ chuyển phát nhanh MagicPost quốc tế, tương ứng với hai hình thức gửi hàng (trong nước và quốc tế) giúp cho khách hàng nhanh chóng nắm bắt được thông tin thực tế, liên quan trực tiếp đến nhu cầu sử dụng dịch vụ chuyển phát của mình.
                    </p>
                    <p className={style.paragraph}>
                        Bằng những thao tác cực kỳ đơn giản, chỉ cần lựa chọn hình thức gửi hàng cho bưu gửi với một lần click chuột, sau đó tiếp tục nhập các thông tin liên quan đến hàng gửi sử dụng dịch vụ chuyển phát nhanh MagicPost, bao gồm: Địa điểm gửi hàng, địa điểm nhận hàng, trọng lượng bưu gửi, số tiền thu hộ; rồi cuối cùng ấn nút “TRA CỨU” trên màn hình, khách hàng sẽ dễ dàng tìm thấy toàn bộ thông tin cần thiết liên quan đến cước phí, thời gian vận chuyển, giao nhận hàng hóa.
                    </p>
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
export default ThoiGian