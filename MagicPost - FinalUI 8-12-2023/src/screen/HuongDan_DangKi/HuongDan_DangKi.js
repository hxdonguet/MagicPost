import React from 'react'
import style from './HuongDan_DangKi.module.css'

function HuongDan_DangKi() {
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
                        <strong>Hướng dẫn đăng ký tài khoản vận đơn điện tử của MagicPost</strong>
                    </h1>
                    <hr></hr>
                    <p className={style.paragraph}>Để có thể theo dõi và quản lý đơn hàng của mình, bạn hãy đăng ký ngay tài khoản trên phần mềm: <a href='/EBill' className={style.lkngoai}>https://bill.magicpost.com.vn/</a></p>
                    <p className={style.paragraph}>Cách thức rất đơn giản: Click “Đăng ký ngay” 👉 Điền địa chỉ email của mình 👉 Kích chọn nút “Gửi mã xác nhận”.</p>
                    <p className={style.paragraph}>✅ Hệ thống sẽ gửi tới Email của khách hàng một mã xác nhận để truy cập hệ thống tạo vận đơn điện tử.</p>
                    <p className={style.paragraph}>✅ Sau khi tạo đơn thành công, khách hàng có thể vào trường “Quản lý bưu gửi” để tra cứu tất cả đơn đã tạo thành công. Với những đơn hàng đã được BCGD MagicPost xác nhận sẽ được lưu trữ tại mục “Bưu gửi đã xác nhận” trong trường “Quản lý bưu gửi”.</p>
                    <p className={style.paragraph}>📍 Lưu ý:</p>
                    <p className={style.paragraph}>✔️ Sau khi đã đăng ký tài khoản, những lần truy cập sau khách hàng chỉ cần “Đăng nhập” với email và mã xác nhận được gửi trong lần đăng ký đầu.</p>
                    <p className={style.paragraph}>✔ Trường hợp khách hàng quên mã xác nhận thì có thực hiện lại thao tác đăng ký tài khoản, hệ thống sẽ gửi lại vào email cho khách hàng một mã xác nhận mới, mã xác nhận cũ sẽ bị hủy bỏ.</p>
                    <p className={style.paragraph}>Hãy liên hệ ngay với MagicPost Việt Nam nếu bạn cần hỗ trợ khi sử dụng phần mềm vận đơn điện tử.</p>
                </div>

                <div className={style.listofnews}>
                    <div className={style.col12}>
                        <div className={style.chimuc}>
                            <div className={style.ndchimuc}>Tin liên quan</div>
                            <div className={style.more}>
                                <a href=''>Chuyển lên đầu trang</a>
                            </div>
                        </div>
                        <div className={style.roww}>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/HuongDan_DangKi'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/Tin%201.webp'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Thủ tướng Chính phủ trải nghiệm dịch vụ mua sản phẩm HuongDan_DangKi trên sàn TMĐT POSTMART.VN của Bưu điện Việt Nam
                                            </span>
                                            <p className={style.mota}>
                                                Triển lãm thành tựu 10 năm xây dựng nông thôn mới do Ban Chỉ đạo Trung ương các Chương trình mục tiêu quốc gia Bưu điện Việt Nam, MagicPost Việt Nam phối hợp với Bưu điện Tỉnh Nam Định đã giới thiệu sàn thương mại điện tử HuongDan_DangKi.POSTMART.VN tới đông đảo người tiêu dùng.
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
export default HuongDan_DangKi