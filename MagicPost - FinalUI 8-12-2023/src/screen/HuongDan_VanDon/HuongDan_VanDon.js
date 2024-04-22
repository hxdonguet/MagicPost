import React from 'react'
import style from './HuongDan_VanDon.module.css'

function HuongDan_VanDon() {
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
                        <strong>Hướng dẫn tạo Vận đơn điện tử</strong>
                    </h1>
                    <p className={style.paragraph}>
                        <span className={style.pr} style={{ fontWeight: "bold" }}>Bạn đang muốn sử dụng <a className={style.lkngoai} href='/MPChuyenPhatNhanh'>dịch vụ chuyển phát nhanh</a> của MagicPost Việt Nam để gửi hàng hóa, tài liệu,... Tham khảo ngay hướng dẫn tạo vận đơn điện tử tại nhà chỉ với 3 bước cực kì đơn giản ngay dưới đây.</span>
                    </p>
                    <video controls autoplay className={style.vidmh}>
                        <source src="Hướng Dẫn Tính Cước Chuyển Phát Nhanh Hàng Hóa Và Thời Gian Nhận Hàng.mp4"></source>
                    </video>
                    <p className={style.paragraph}>
                        <strong>Bước 1: </strong>Truy cập trang web <a className={style.lkngoai} href='/EBill'>https://bill.magicpost.com.vn/</a>. Chọn <strong style={{ color: "#0072bc" }}>Đăng ký</strong> (Nếu chưa có tài khoản); <strong style={{ color: "#0072bc" }}>Đăng nhập</strong> (Nếu đã có tài khoản) hoặc <strong style={{ color: "#0072bc" }}>Tạo đơn không cần tài khoản</strong>.
                        <p className={style.paragraph}>Tại sao quý khách hàng nên có tài khoản ở hệ thống vận đơn của MagicPost? Khi đăng nhập vào hệ thống bằng tài khoản hoặc email: Sau khi tạo đơn thành công, khách hàng có thể quản lý, theo dõi lộ trình gửi của bưu phẩm của mình. Với những đơn hàng đã được BCGD MagicPost xác nhận sẽ được lưu trữ tại mục “Bưu gửi đã xác nhận” trong trường “Quản lý bưu gửi”.</p>
                    </p>
                    <p className={style.paragraph}>
                        Bước 2: Nhập thông tin cho bưu gửi của bạn và Click <strong style={{ color: "#0072bc" }}>Tạo bưu gửi</strong>. Sau đó hệ thống sẽ gửi về thông báo tạo đơn gửi hàng thành công cùng một mã gửi hàng (Mã tham chiếu).
                    </p>
                    <p className={style.paragraph}>
                        Bước 3: <strong style={{ color: "#0072bc" }}>Lưu mã gửi hàng</strong> (Bằng cách chụp ảnh màn hình, lưu lại) để cung cấp cho Bưu cục giao dịch MagicPost khi mang bưu phẩm đến gửi.
                    </p>
                    <p className={style.paragraph}>
                        Phần mềm <a className={style.lkngoai} href='/EBill'>VẬN ĐƠN ĐIỆN TỬ</a> của MagicPost Việt Nam được tối ưu hoá giúp khách hàng có những trải nghiệm tốt nhất trong quá trình nhập thông tin bưu gửi. Lưu ý rằng chỉ áp dụng với các khách hàng gửi dịch vụ MagicPost tại các bưu cục của MagicPost Việt Nam tại Hà Nội, Đà Nẵng và TP Hồ Chí Minh.
                    </p>
                    <p className={style.paragraph}>
                        👉 Hãy liên hệ ngay với MagicPost Việt Nam qua Hotline <strong style={{ color: "#0072bc" }}>1900 54 54 33</strong> nếu quý khách có bất cứ thắc mắc nào trong quá trình sử dụng phần mềm.
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
                                    <a href='/BiKipTikTok'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/Webp.net-compress-image%20-%202021-07-14T113045.919.1626237154.jpg'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                4 bước đơn giản cho bí kíp bán hàng trên TikTok “nổ trăm đơn”
                                            </span>
                                            <p className={style.mota}>
                                                TikTok có thể coi là một nơi để bạn tìm kiếm khách hàng của mình, tuy nhiên tại đây không có một cách thức cụ thể nào để khách hàng có thể mua được hàng. Hãy điều hướng khách hàng của mình về Website, Facebook và các kênh bán hàng kết hợp cung cấp dịch vụ chuyển phát nhanh của mình để có thể chăm sóc khách hàng một cách tốt nhất nhé.
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
                                    <a href='/BiKipWebsite'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/ws.1647938622.jpg'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Mách bạn 04 bí quyết bán hàng hiệu quả trên Website
                                            </span>
                                            <p className={style.mota}>
                                                Một website tốt sẽ giúp các chủ shop online, tăng doanh thu, tiết kiệm chi phí, dễ dàng tiếp cận khách hàng,... Với vô vàn những lợi ích khi sử dụng Website trong bán hàng, bạn đã sẵn sàng khám phá những bí quyết để tạo một “cửa hàng online” hiệu quả cho mình chưa?
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
                                    <a href='/7PP'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/7PP.1659492456.jpg'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Bật mí 7 phương pháp giúp tiết kiệm chi phí vận chuyển cho chủ shop và nhà phân phối
                                            </span>
                                            <p className={style.mota}>
                                                Đối với các chủ shop online và nhà phân phối, chi phí vận chuyển luôn là vấn đề khiến các nhà quản lý phải đau đầu. Bởi lẽ đây là khoản ảnh hưởng trực tiếp đến tỷ suất lợi nhuận cũng như chương trình mà họ muốn áp dụng cho khách hàng của mình. Vậy có cách nào để tiết kiệm chi phí vận chuyển cho các shop và nhà phân phối không? Hãy cùng MagicPost Việt Nam tìm hiểu ngay trong bài viết dưới đây.
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
export default HuongDan_VanDon