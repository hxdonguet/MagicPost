import React from 'react'
import style from './KhoHang.module.css'

function KhoHang() {
    return (
        <div className={style.maubackground}>
            <div className={style.subbanner5}>
                <img src="https://i.imgur.com/xLuYgb1.jpg"></img>
                <div className={style.title5}>
                    <div className={style.contain5}>
                        <span className={style.tieude5}>WAREHOUSE MANAGEMENT</span>
                    </div>
                </div>
            </div>
            <div className={style.containdvtl}>
                <div className={style.service1}>
                    <h1 className={style.tieudedv1}>
                        <strong className={style.chimucdv1}>QUẢN LÝ VÀ VẬN HÀNH KHO HÀNG</strong>
                    </h1>
                    <h1 className={style.tieudedv1}>
                        <strong className={style.chimucdv1}>(WAREHOUSE MANAGEMENT SERVICE)</strong>
                    </h1>
                    <h2 className={style.chimuc1dv1}>
                        <strong className={style.chimucdv1}>ĐỊNH NGHĨA</strong>
                    </h2>
                    <hr></hr>
                    <p><strong>Quản lý và vận hành kho hàng (Warehouse Management Service):&nbsp;</strong>Cung cấp hạ tầng, mặt bằng kho, quản lý hàng tồn kho; cung cấp các dịch vụ đóng gói trong kho hàng và các giải pháp tích hợp khác đáp ứng nhu cầu quản lý và vận hành kho của khách hàng (soạn hàng, đóng gói, in đơn, chuyển phát và theo dõi đơn hàng…).</p>
                    <h2 className={style.chimuc1dv1}>
                        <strong className={style.chimucdv1}>PHẠM VI CUNG CẤP</strong>
                    </h2>
                    <hr></hr>
                    <p>- Miền Bắc: Hà Nội, Bắc Ninh, Vĩnh Phúc, Hải Phòng, Hải Dương.</p>
                    <p>- Miền Nam: HCM, Bình Dương, Đồng Nai, Bình Phước, Cần Thơ.</p>
                    <h2 className={style.chimuc1dv1}>
                        <strong className={style.chimucdv1}>CÁC DỊCH VỤ TRONG GIẢI PHÁP QUẢN LÝ VÀ VẬN HÀNH KHO HÀNG BAO GỒM</strong>
                    </h2>
                    <hr></hr>
                    <p>- Cung cấp mặt bằng kho hàng có trang bị hệ thống CCDC đặc thù, giá kệ chuyên nghiệp để lưu trữ, chứa hàng hóa.</p>
                    <p>- Quản lý kho hàng bằng phần mềm CNTT chuyên biệt, tích hợp với hệ thống của khách hàng để nhận yêu cầu xuất kho. Mọi hoạt động nhập kho, xuất kho đều được cập nhật vào phần mềm quản lý kho.</p>
                    <p>- Tiếp nhận đơn hàng từ khách hàng và cung cấp dịch vụ đóng gói theo yêu cầu.</p>
                    <p>- Xuất kho hàng hóa theo đơn hàng.</p>
                    <h2 className={style.chimuc1dv1}>
                        <strong className={style.chimucdv1}>TIÊU CHUẨN QUẢN LÝ KHO HÀNG</strong>
                    </h2>
                    <hr></hr>
                    <p>- Hệ thống phần mềm CNTT quản lý kho ưu việt, xử lý tốc độ cao.</p>
                    <p>- Kho hàng đạt tiêu chuẩn về: Vệ sinh, nhiệt độ, chống bụi, côn trùng, PCCC, đối lưu không khí, hệ thống điện dự phòng.</p>
                    <p>- Tiêu chuẩn về an ninh: Bảo vệ, camera trong và ngoài kho.</p>
                    <p>- Đảm bảo điều kiện bảo quản cho từng loại hàng hoá.</p>
                    <p>- Phục vụ khách hàng theo văn hoá tiêu dùng địa phương cũng như giải quyết bài toán của khách hàng TMĐT.</p>
                    <h2 className={style.chimuc1dv1}>
                        <strong className={style.chimucdv1}>GIÁ CƯỚC</strong>
                    </h2>
                    <hr></hr>
                    <p>Xây dựng theo từng giải pháp quản lý và vận hành kho hàng cụ thể cung cấp cho khách hàng.</p>
                    <h2 className={style.chimuc1dv1}>
                        <strong className={style.chimucdv1}>KHỐI LƯỢNG, KÍCH THƯỚC BƯU GỬI</strong>
                    </h2>
                    <hr></hr>
                    <p><strong className={style.chimuc1dv1}>1. Khối lượng</strong></p>
                    <p>Khối lượng bưu gửi MagicPost Tài liệu trong nước tối đa là 2kg/bưu gửi. Với bưu gửi là tài liệu có khối lượng lớn hơn 2kg, thực hiện theo quy định của bưu gửi là hàng hóa.</p>
                    <p><strong className={style.chimuc1dv1}>2. Kích thước tối thiểu</strong></p>
                    <p>- Ít nhất một mặt bưu gửi có kích thước không nhỏ hơn 90mm x 140mm với sai số 2 mm.</p>
                    <p>- Nếu cuộn tròn: Chiều dài bưu gửi cộng hai lần đường kính tối thiểu 170mm và kích thước chiều lớn nhất không nhỏ hơn 100mm.</p>
                    <p><strong className={style.chimuc1dv1}>3. Kích thước tối đa</strong></p>
                    <p>- Bất kỳ chiều nào của bưu gửi không vượt quá 1.500mm và tổng chiều dài cộng với chu vi lớn nhất (không đo theo chiều dài đã đo) không vượt quá 3.000mm.</p>
                    <p>- Hàng cồng kềnh: Bưu gửi có kích thước lớn hơn so với kích thước thông thường được gọi là bưu gửi cồng kềnh và có qui định riêng phụ thuộc vào từng nơi nhận, nơi phát và điều kiện phương tiện vận chuyển.</p>
                    <p>- Hàng nhẹ: Là hàng gửi có khối lượng dưới 167 kg/m<sup>3</sup> (tương đương với trên 6000cm<sup>3</sup>/kg),  khối lượng tính cước không căn cứ vào khối lượng thực mà căn cứ vào khối lượng qui đổi từ thể tích kiện hàng theo công thức sau: (Dài x Rộng x Cao)/6000.</p>
                    <img src='https://admin.ems.com.vn/filemedia/upload/Untitled-1-01.png'></img>
                </div>
                <div className={style.dvkhac1}>
                    <h2>DỊCH VỤ LIÊN QUAN</h2>
                    <div className={style.dvkhac1ct}>
                        <div className={style.wrnonrow1}>
                            <div className={style.colsm412}>
                                <a href='/MPAnotherServices'>
                                    <div className={style.anothersv1}>
                                        <div className={style.dvk1_img1}>
                                            <div className={style.dvk1_icon1}>
                                                <img src='https://admin.ems.com.vn/filemedia/service/%C3%A1p%20t%E1%BA%A3i%20ph%C3%A1t%20trong%20ng%C3%A0y-1605779147.1645613857.png'></img>
                                            </div>
                                        </div>
                                        <div className={style.dvk1_title1}>
                                            <h3>MagicPost Hàng Hóa Nhanh</h3>
                                        </div>
                                        <div className={style.dvk1_descrip1}>
                                            <p>MagicPost hàng hóa nhanh là dịch vụ nhận gửi, vận chuyển và phát các hàng hóa, vật phẩm trong nước theo chỉ tiêu thời gian tiêu chuẩn được Tổng công ty MagicPost công bố.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className={style.colsm412}>
                                <a href='/MPAnotherServices'>
                                    <div className={style.anothersv1}>
                                        <div className={style.dvk1_img1}>
                                            <div className={style.dvk1_icon1}>
                                                <img src='https://ems.com.vn/img/icon/truck.png'></img>
                                            </div>
                                        </div>
                                        <div className={style.dvk1_title1}>
                                            <h3>MagicPost Quốc tế Priority</h3>
                                        </div>
                                        <div className={style.dvk1_descrip1}>
                                            <p>Chuyển phát nhanh quốc tế là dịch vụ nhận gửi, vận chuyển và phát các loại thư, tài liệu, vật phẩm, hàng hoá quốc tế theo chỉ tiêu thời gian tiêu chuẩn được Tổng công ty MagicPost công bố.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className={style.colsm412}>
                                <a href='/MPAnotherServices'>
                                    <div className={style.anothersv1}>
                                        <div className={style.dvk1_img1}>
                                            <div className={style.dvk1_icon1}>
                                                <img src='https://admin.ems.com.vn/filemedia/service/ems%20d%E1%BB%8Bch%20v%E1%BB%A5%20c%E1%BB%99ng%20th%C3%AAm%20qu%E1%BB%91c%20t%E1%BA%BF-1605864774.png'></img>
                                            </div>
                                        </div>
                                        <div className={style.dvk1_title1}>
                                            <h3>Dịch vụ GTGT Quốc tế</h3>
                                        </div>
                                        <div className={style.dvk1_descrip1}>
                                            <p>Dịch vụ GTGT Quốc tế là dịch vụ chuyển phát bưu gửi MagicPost ngày hôm sau (sau ngày chấp nhận) giữa Việt Nam và Đài Loan, Hàn Quốc.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default KhoHang