import React from 'react'
import style from './HuongDan_DinhVi.module.css'

function HuongDan_DinhVi() {
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
                        <p><strong>Hướng dẫn định vị bưu gửi MagicPost</strong></p>
                        <p><strong>Với mã vận đơn đơn giản</strong></p>
                    </h1>
                    <p className={style.paragraph}>
                        <span className={style.pr} style={{ fontWeight: "bold" }}>Để yên tâm trong quá trình giao nhận hàng hóa, nhiều khách hàng thường có xu hướng tra cứu vận đơn bưu điện để xác định lộ trình của đơn hàng. Hiện nay, MagicPost cung cấp rất nhiều cách để giúp bạn xác định được tiến độ giao nhận. Trong đó phổ biến nhất là kiểm tra đơn hàng bưu điện thông qua website hoặc các nền tảng mạng xã hội khác. Nếu bạn là người thường xuyên sử dụng dịch vụ hay mua hàng thông qua các đơn vị vận chuyển thì đừng bỏ qua bài viết hướng dẫn định vị bưu gửi, xác định đơn hàng đơn giản, dễ dàng ngay dưới đây.</span>
                    </p>
                    <img className={style.anhmhdv} src='https://admin.ems.com.vn/filemedia/upload/255527157_3121883294710683_7025033365240767062_n.1661762115.jpg'></img>
                    <p className={style.paragraph}>
                        <h2 className={style.ndchimuc}>Mã vận đơn chuyển phát nhanh MagicPost là gì?</h2>
                        <p className={style.paragraph}>Mã vận đơn (hay số hiệu bưu gửi) chuyển phát nhanh MagicPost là một dãy mã số đặc biệt được in trên gói hàng của hãng vận chuyển và nhãn dán trên thùng hàng. Nó có thể đọc được bằng máy quét mã vạch hoặc bằng mắt thường. Dãy số này giống như một “tên riêng” được đặt cho đơn hàng để thuận tiện trong quá trình theo dõi.</p>
                        <p className={style.paragraph}>Trong quá trình vận chuyển hàng hóa, các đơn hàng sẽ được vận chuyển qua từng điểm quan trọng. Tại các điểm này mã vận đơn  sẽ được nhập và đưa vào hệ thống máy tính. Việc làm này sẽ giúp nhà vận chuyển thuận tiện hơn trong việc quản lý vị trí của hàng hóa và tiết kiệm thời gian khi xử lý các đơn hàng gặp sự cố, thất lạc. Đối với người gửi hoặc nhận hàng, mã tracking giúp họ biết được vị trí đơn hàng của mình.</p>
                    </p>
                    <p className={style.paragraph}>
                        <h2 className={style.ndchimuc}>Vì sao cần kiểm tra mã vận đơn?</h2>
                        <p className={style.paragraph}>Với các mã vận đơn này, bạn sẽ dễ dàng theo dõi được đơn hàng của mình hiện tại đang ở trong trạng thái như thế nào hoặc đã được vận chuyển đến khu vực nào, khoảng thời gian người nhận nhận được hàng hóa, người nhận đã nhận được hàng hóa hay chưa,… </p>
                        <p className={style.paragraph}>Đồng thời tra cứu đơn hàng hay check mã vận đơn giúp bạn định vị bưu phẩm của mình, giúp bạn xác nhận được bưu phẩm đã đến tay người nhận hay chưa, khách hàng đã nhận được hàng hay chưa. Nếu có bất cứ sự cố nào xảy ra trong quá trình vận chuyển bạn cũng có thể phát hiện ngay lập tức.</p>
                    </p>
                    <p className={style.paragraph}>
                        <h2 className={style.ndchimuc}>Các bước tra cứu vận đơn MagicPost nhanh chóng, chính xác</h2>
                        <h5 style={{ color: "black", fontWeight: "bold", marginBottom: "15px" }}>1. Tra cứu vận đơn trên website MagicPost</h5>
                        <p className={style.paragraph}>Truy cập vào website <a className={style.lkngoai} href='/Search'>https://magicpost.com.vn/search</a> và nhập mã vận đơn ghi trên phiếu vận đơn (bao gồm 13 ký tự) vào ô tra cứu ở ngay trang chủ. Đối với hình thức này, bạn có thể tra cứu cùng lúc 100 vận đơn, cách nhau bởi dấu phẩy, rất nhanh chóng và tiện lợi.</p>
                        <p className={style.paragraph}>Đồng thời tra cứu đơn hàng hay check mã vận đơn giúp bạn định vị bưu phẩm của mình, giúp bạn xác nhận được bưu phẩm đã đến tay người nhận hay chưa, khách hàng đã nhận được hàng hay chưa. Nếu có bất cứ sự cố nào xảy ra trong quá trình vận chuyển bạn cũng có thể phát hiện ngay lập tức.</p>
                        <h5 style={{ color: "black", fontWeight: "bold", marginBottom: "15px" }}>2. Tra cứu qua Fanpage của MagicPost</h5>
                        <p className={style.paragraph}>Bạn có thể nhắn mã vận đơn cho fanpage <a className={style.lkngoai} href='https://facebook.com'>Facebook của MagicPost</a>. Sau khi tin nhắn được gửi đi, sẽ có nhân viên chăm sóc khách hàng hoạt động 24/7 tư vấn và giải đáp mọi thắc mắc nhanh chóng và chính xác nhất cho bạn.</p>
                        <h5 style={{ color: "black", fontWeight: "bold", marginBottom: "15px" }}>3. Tra cứu đơn hàng MagicPost bằng cách liên hệ tổng đài</h5>
                        <p className={style.paragraph}>Trong trường hợp không thể kết nối Internet, bạn có thể gọi lên tổng đài của MagicPost Việt Nam với số HOTLINE 1900 54 54 33.</p>
                        <p className={style.paragraph}>Lúc này, bạn hãy cung cấp mã đơn hàng cho chuyên viên chăm sóc cùng một số thông tin cần thiết khác nếu được yêu cầu. Chuyên viên sẽ thông báo cho bạn biết toàn hộ hành trình đơn hàng di chuyển như thế nào, hiện tại đang ở đâu, kết quả chuyển phát hàng ra sao.</p>
                        <h5 style={{ color: "black", fontWeight: "bold", marginBottom: "15px" }}>4. Tra cứu qua Zalo</h5>
                        <p className={style.paragraph}>Nhắn tin trực tiếp cho <a className={style.lkngoai} href='https://zalo.me'>Zalo Page MagicPost Việt Nam</a>.</p>
                    </p>
                    <p className={style.paragraph}>
                        <h2 className={style.ndchimuc}>Ý nghĩa của việc định vị bưu gửi</h2>
                        <p className={style.paragraph}>Từ khi tính năng định vị bưu gửi ra mắt, MagicPost đã giúp khách hàng có thể theo dõi sát sao đơn hàng mà mình đang gửi mọi lúc mọi nơi. Chỉ cần truy cập website của MagicPost Việt Nam và điền mã vận đơn của mình vào mục tìm kiếm, các khách hàng có thể thoải mái tra cứu định vị bưu cục của mình trong toàn tuyến tại tất cả 63 Bưu điện tỉnh/thành phố trên cả nước.</p>
                        <p className={style.paragraph}>Ngoài ra việc định vị cũng góp phần trao đổi dữ liệu trên cả quốc tế, từ đó mà khách hàng có thể tiến hành sử dụng tính năng định vị bưu gửi này để gửi tới hơn 200 quốc gia và cùng lãnh thổ trên toàn thế giới một cách dễ dàng và nhanh nhất có thể.</p>
                        <p className={style.paragraph}>Việc theo dõi thông tin chi tiết là một nhu cầu hết sức cấp thiết, nếu như quá thời gian quy định theo hợp đồng chuyển hàng hoặc trong quá trình vận chuyển xảy ra những khó khăn hoặc sự cố gì thì khách hàng hoàn toàn có thể chủ động để liên lạc với MagicPost để nằm tìm được hướng giải quyết nhanh nhất cho vấn đề này.</p>
                        <p className={style.paragraph}>Định vị bưu gửi MagicPost là một phương thức mới hiện đại và vô cùng phù hợp chi tình hình công nghệ như hiện nay, khách hàng có thể theo dõi và cập nhật từng giờ một cách nhanh nhất để xem hàng hóa mình gửi đã đi tới đâu và tình trạng nó hiện nay như thế nào. Bên cạnh đó, MagicPost cũng xây dựng được lòng tin nơi khách hàng và từng bước khẳng định được giá trị của mình trên thị trường hiện nay, chất lượng dịch vụ luôn được đảm bảo một cách tốt nhất để khách hàng hoàn toàn có thể yên tâm trong quá trình lựa chọn và sử dụng dịch vụ. Từ đó tiến tới xây dựng một hệ thống dịch vụ chuyển phát nhanh ngày càng hiện đại và phát triển tại khu vực trong nước và quốc tế.</p>
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
export default HuongDan_DinhVi