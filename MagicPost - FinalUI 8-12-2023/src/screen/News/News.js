import React from 'react'
import style from './News.module.css'

function News() {
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
                        <strong>TRANG TIN TỨC MAGICPOST</strong>
                    </h1>
                </div>
                <div className={style.toprow}>
                    <div className={style.col812}>
                        <div className={style.data}>
                            <div className={style.newsleft}>
                                <a className={style.tt} href=''>
                                    <img className={style.imgnews} src='https://admin.ems.com.vn/filemedia/post/234.1637566711.png'></img>
                                    <div className={style.titlenews}>
                                        <a className={style.titlenews} href='/News_Delay'>Thông báo về việc chậm chỉ tiêu thời toàn trình bưu gửi MagicPost trên địa bàn các Tỉnh, Thành phố bị ảnh hưởng do dịch Covid-19</a>
                                    </div>
                                    <div className={style.desnew}>
                                        Trong bối cảnh dịch Covid-19 diễn biến phức tạp, căn cứ văn bản chỉ đạo các cấp chính quyền các Tỉnh, Thành phố về việc cách ly, phong tỏa một số khu vực nhằm phòng, chống dịch bệnh, khoanh vùng, dập dịch, .... để đảm bảo an toàn cho khách hàng và hàng hóa trong quá trình chuyển phát, Tổng Công ty Chuyển phát nhanh Bưu điện – CTCP (MagicPost Việt Nam) xin thông báo về việc chậm chỉ tiêu thời gian giao – nhận đối với bưu gửi MagicPost tại một số địa bàn Tỉnh, Thành phố trên toàn quốc.
                                    </div>
                                    <div className={style.showname}>
                                        <div className={style.sub1}>
                                            <img className={style.imgsub1} src='https://ems.com.vn/img/icon/tags.png'></img>
                                            <span>Tin nội bộ</span>
                                        </div>
                                        <div className={style.sub2}>
                                            <img className={style.imgsub2} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                            <span>06/12/2023</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.col412}>
                        <div className={style.newsright}>
                            <div className={style.titlenews}>Tin nổi bật</div>
                            <ul className={style.listnewsright}>
                                <li className={style.tomtat}>
                                    <a className={style.ndtin}>
                                        <div className={style.anhmh}>
                                            <img src='https://admin.ems.com.vn/filemedia/post/234.1637566711.png'></img>
                                        </div>
                                        <div className={style.ct}>
                                            <a href='/News_Delay' className={style.cnt}>Thông báo về việc chậm chỉ tiêu thời toàn trình bưu gửi MagicPost trên địa bàn các Tỉnh, Thành phố bị ảnh hưởng do dịch Covid-19.</a>
                                            <div className={style.subtitle}>
                                                <div className={style.subtilenews}>
                                                    <img className={style.anhmh2} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span>Tin nội bộ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className={style.tomtat}>
                                    <a className={style.ndtin}>
                                        <div className={style.anhmh}>
                                            <img src='https://admin.ems.com.vn/filemedia/post/255527157_3121883294710683_7025033365240767062_n.1661762126.jpg'></img>
                                        </div>
                                        <div className={style.ct}>
                                            <a href='/HuongDan_DinhVi' className={style.cnt}>Hướng dẫn định vị bưu gửi MagicPost với mã vận đơn đơn giản</a>
                                            <div className={style.subtitle}>
                                                <div className={style.subtilenews}>
                                                    <img className={style.anhmh2} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span>Thông tin hữu ích</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className={style.tomtat}>
                                    <a className={style.ndtin}>
                                        <div className={style.anhmh}>
                                            <img src='https://admin.ems.com.vn/filemedia/post/Webp.net-compress-image%20(86).1625198517.jpg'></img>
                                        </div>
                                        <div className={style.ct}>
                                            <a href='/DinhNghia' className={style.cnt}>Thế nào là dịch vụ chuyển phát nhanh MagicPost?</a>
                                            <div className={style.subtitle}>
                                                <div className={style.subtilenews}>
                                                    <img className={style.anhmh2} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span>Thông tin hữu ích</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className={style.tomtat}>
                                    <a className={style.ndtin}>
                                        <div className={style.anhmh}>
                                            <img src='https://admin.ems.com.vn/filemedia/post/bao%20l%C3%A2u.1638239651.png'></img>
                                        </div>
                                        <div className={style.ct}>
                                            <a href='/ThoiGian' className={style.cnt}>Dịch vụ chuyển phát nhanh mất bao lâu?</a>
                                            <div className={style.subtitle}>
                                                <div className={style.subtilenews}>
                                                    <img className={style.anhmh2} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span>Thông tin hữu ích</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className={style.tomtat}>
                                    <a className={style.ndtin}>
                                        <div className={style.anhmh}>
                                            <img src='https://admin.ems.com.vn/filemedia/post/tao%20vd.1647598047.jpg'></img>
                                        </div>
                                        <div className={style.ct}>
                                            <a href='/HuongDan_VanDon' className={style.cnt}>Hướng dẫn tạo Vận đơn điện tử tại nhà chỉ với 3 bước đơn giản</a>
                                            <div className={style.subtitle}>
                                                <div className={style.subtilenews}>
                                                    <img className={style.anhmh2} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span>Thông tin hữu ích</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={style.listofnews}>
                    <div className={style.col12}>
                        <div className={style.chimuc}>
                            <div className={style.ndchimuc}>Tin nội bộ</div>
                            <div className={style.more}>
                                <a href=''>Chuyển lên đầu trang</a>
                            </div>
                        </div>
                        <div className={style.roww}>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/OCOP'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/Tin%201.webp'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Thủ tướng Chính phủ trải nghiệm dịch vụ mua sản phẩm OCOP trên sàn TMĐT POSTMART.VN của Bưu điện Việt Nam
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
                                                    <span className={style.spantin}>Tin nội bộ</span>
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
                                                    <span className={style.spantin}>Tin nội bộ</span>
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
                                                    <span className={style.spantin}>Tin nội bộ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.listofnews}>
                    <div className={style.col12}>
                        <div className={style.chimuc}>
                            <div className={style.ndchimuc}>Tin dịch vụ mới</div>
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
                                                    <span className={style.spantin}>Tin dịch vụ mới</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/MP_S_COD'>
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
                                                    <span className={style.spantin}>Tin dịch vụ mới</span>
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
                                                    <span className={style.spantin}>Tin dịch vụ mới</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.listofnews}>
                    <div className={style.col12}>
                        <div className={style.chimuc}>
                            <div className={style.ndchimuc}>Tin ngành</div>
                            <div className={style.more}>
                                <a href='#'>Chuyển lên đầu trang</a>
                            </div>
                        </div>
                        <div className={style.roww}>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/BTTTT'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/botruong-hung-2-1606122428.webp'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Bộ trưởng Nguyễn Mạnh Hùng gửi thư chúc mừng 75 năm ngày truyền thống ngành Thông tin và Truyền thông
                                            </span>
                                            <p className={style.mota}>
                                                Nhân kỷ niệm 75 năm ngày truyền thống ngành Thông tin và Truyền thông (28/8/1945 - 28/8/2020), đồng chí Nguyễn Mạnh Hùng, Ủy viên BCH Trung ương Đảng, Bộ trưởng Bộ Thông tin và Truyền thông đã có thư gửi các thế hệ cán bộ, công chức, viên chức và người lao động ngành Thông tin và Truyền thông.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>06/12/2023</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Tin ngành</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/DVBuuChinh'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/dich-vu-buu-chinh-hanh-chinh-cong-diem-cong-cua-buu-dien-1606123535.webp'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Dịch vụ bưu chính - hành chính công: “Điểm cộng” của bưu điện
                                            </span>
                                            <p className={style.mota}>
                                                Những người dân sử dụng dịch vụ bưu chính – hành chính công đều bày tỏ sự hài lòng, tin tưởng, yên tâm cao. Bản thân những nhân viên bưu điện cũng cảm thấy yêu nghề hơn khi đem lại thêm niềm vui cho mọi người.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>06/12/2023</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Tin ngành</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='UPU_Support'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/customs-resized_1-1606124016.webp'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                UPU hỗ trợ chuyển đổi số trong lĩnh vực Hải quan cho Bưu chính 22 nước kém phát triển
                                            </span>
                                            <p className={style.mota}>
                                                Sau đại dịch COVID-19, cơ sở hạ tầng của chuỗi cung ứng thương mại điện tử toàn cầu đã được các nhà khai thác bưu chính, công ty vận tải và cơ quan hải quan nhanh chóng thiết lập lại. Với đà phục hồi này, sản lượng sẽ dần gia tăng, đặt ra thách thức cần phải chuyển đổi số gấp, đặc biệt là khi các quy định mới về trao đổi dữ liệu điện tử liên quan đến bưu phẩm trên thế giới sẽ sớm có hiệu lực.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>06/12/2023</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Tin ngành</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.listofnews}>
                    <div className={style.col12}>
                        <div className={style.chimuc}>
                            <div className={style.ndchimuc}>Tin quốc tế</div>
                            <div className={style.more}>
                                <a href='#'>Chuyển lên đầu trang</a>
                            </div>
                        </div>
                        <div className={style.roww}>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/Modernize'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/b%C6%B0u%20ch%C3%ADnh%20uopu.1639036584.png'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                UPU triển khai công việc mới về hiện đại hóa ngành bưu chính
                                            </span>
                                            <p className={style.mota}>
                                                Cơ quan chuyên trách của Liên hợp quốc về lĩnh vực bưu chính đã bắt đầu làm việc với chiến lược và kế hoạch kinh doanh mới của mình trong các phiên họp của Hội đồng Quản trị và Hội đồng Hoạt động Bưu chính.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>06/12/2023</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Tin quốc tế</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/UPU_ChuyenGiao'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/bn7.1641455715.png'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Liên minh Bưu chính thế giới (UPU) chuyển giao lãnh đạo
                                            </span>
                                            <p className={style.mota}>
                                                Tổng giám đốc mới của Liên minh Bưu chính thế giới (UPU), ông Masahiko Metoki và Phó Tổng giám đốc UPU mới, ông Marjan Osvald, đã được chào đón và bàn giao nhiệm vụ chính thức tại trụ sở của UPU ở Berne, Thụy Sĩ vào ngày 5/1/2022.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>06/12/2023</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Tin quốc tế</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/TamNhinMoi'>
                                        <img className={style.anhtin} src='https://admin.ems.com.vn/filemedia/post/banner%205.1642404124.png'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Kế hoạch kinh doanh hợp tác đặt ra tầm nhìn mới cho MagicPost
                                            </span>
                                            <p className={style.mota}>
                                                Vào năm 2022, Liên minh MagicPost sẽ làm việc cùng nhau để đảm bảo rằng MagicPost sẽ cung cấp cho khách hàng thương mại điện tử một dịch vụ chuyển phát nhanh quốc tế MagicPost Priority đáng tin cậy.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>06/12/2023</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Tin quốc tế</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.listofnews}>
                    <div className={style.col12}>
                        <div className={style.chimuc}>
                            <div className={style.ndchimuc}>Thông tin hữu ích</div>
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
                                                    <span className={style.spantin}>Thông tin hữu ích</span>
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
                                                    <span className={style.spantin}>Thông tin hữu ích</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/BayPP'>
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
                                                    <span className={style.spantin}>Thông tin hữu ích</span>
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
export default News