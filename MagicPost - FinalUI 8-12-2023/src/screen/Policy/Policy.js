import React from 'react'
import style from './Policy.module.css'

function Policy() {
  return (
    <>
      <div className={style.subbanner4}>
        <img src="https://i.imgur.com/xLuYgb1.jpg"></img>
        <div className={style.title4}>
          <div className={style.contain4}>
            <span className={style.tieude4}>CHÍNH SÁCH - ĐIỀU KHOẢN</span>
          </div>
        </div>
      </div>
      <div className={style.ndcg}>
        <div className={style.containndcg}>
            <div className={style.dinhdangtieudendcg}> 
                <h1 className={style.tieudendcg}>
                    <strong>CHÍNH SÁCH BẢO MẬT VÀ ĐIỀU KHOẢN SỬ DỤNG DỊCH VỤ</strong>
                </h1>
            </div>
            <p>&nbsp;</p>
            <h2 className={style.chimuchcg}>1. Mục đích thu thập thông tin cá nhân</h2>
            <p>Việc thu thập dữ liệu trên Website bao gồm: họ tên, email, điện thoại, địa chỉ của Khách hàng. Đây là các thông tin mà chúng tôi cần Khách hàng cung cấp bắt buộc khi đăng nhập vào hệ thống quản lý tập trung (SSO) để Khách hàng có thể truy cập vào các ứng dụng chăm sóc khách hàng, hỗ trợ khách hàng khi sử dụng các dịch vụ do Tổng công ty chuyển phát nhanh Bưu điện – CTCP cung cấp; Hoặc để Chúng tôi liên hệ cung cấp thông tin dịch vụ, giải quyết khiếu nại nhằm bảo vệ quyền lợi cho Khách hàng đối với các vấn đề liên quan đến dịch vụ.</p>
            <p>Ngoài ra, thành viên có trách nhiệm thông báo kịp thời cho website chúng tôi về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.</p>
            <h2 className={style.chimuchcg}>2. Phạm vi sử dụng thông tin</h2>
            <ul className={style.listhcg}>
                <li>Cung cấp thông tin dịch vụ đến Khách hàng.</li>
                <li>Gửi email thông tin tiếp thị, khuyến mại về sản phẩm.</li>
                <li>Trả lời câu hỏi, giải đắp thắc mắc, khiếu nại của Khách hàng.</li>
                <li>Liên lạc và giải quyết với thành viên trong những trường hợp đặc biệt.</li>
                <li>Cung cấp thông tin cá nhân Khách hàng trong trường hợp có yêu cầu từ cơ quan quản lý nhà nước có thẩm quyền.</li>
                <li>Không sử dụng thông tin cá nhân của Khách hàng ngoài mục đích cung cấp thông tin sản phẩm dịch vụ, xác nhận và liên hệ có liên quan đến việc cung cấp và sử dụng dịch vụ giữa Tổng công ty và Khách hàng.</li>
            </ul>
            <h2 className={style.chimuchcg}>3. Thời gian lưu trữ thông tin</h2>
            <p>Dữ liệu cá nhân của thành viên sẽ được lưu trữ cho đến khi có yêu cầu ban quản trị hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân của thành viên sẽ được bảo mật trên hệ thống máy chủ.</p>
            <h2 className={style.chimuchcg}>4. Những người/tổ chức có thể được tiếp cận với thông tin</h2>
            <p>Khách hàng đồng ý rằng, trong trường hợp cần thiết, các cơ quan/tổ chức/cá nhân sau có quyền được tiếp cận và thu thập các thông tin cá nhân của mình, bao gồm:</p>
            <ul className={style.listhcg}>
                <li>Ban quản trị.</li>
                <li>Bên thứ ba có dịch vụ tích hợp với Tổng công ty Chuyển phát nhanh Bưu điện – CTCP.</li>
                <li>Các công ty quảng cáo.</li>
                <li>Công ty tổ chức sự kiện và nhà tài trợ.</li>
                <li>Công ty nghiên cứu thị trường.</li>
                <li>Cố vấn tài chính, pháp lý và Công ty kiểm toán.</li>
                <li>Các bên cung cấp dịch vụ, bao gồm, các nhà cung cấp dịch vụ công nghệ thông tin (CNTT) về cơ sở hạ tầng, phần mềm liên quan đến các sản phẩm dịch vụ do Tổng công ty cung cấp.</li>
                <li>Theo yêu cầu của cơ quan nhà nước có thẩm quyền.</li>
            </ul>
            <h2 className={style.chimuchcg}>5. Địa chỉ đơn vị thu thập và quản lý thông tin</h2>
            <p>Tổng Công ty Chuyển phát nhanh Bưu điện – MagicPost Việt Nam.</p>
            <p>Trụ sở chính: Số 144 Xuân Thủy, Cầu Giấy, Hà Nội.</p>
            <p>Điện thoại: 1900545433.</p>
            <p>Email: <span className={style.emailtn}>cskh@magicpost.com.vn</span>.</p>
            <h2 className={style.chimuchcg}>6. Phương thức và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình trên hệ thống của đơn vị thu thập thông tin</h2>
            <p>Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình bằng cách đăng nhập vào tài khoản và chỉnh sửa thông tin cá nhân hoặc yêu cầu Tổng Công ty thực hiện việc này trực tiếp thông qua các kênh tiếp nhận thông tin và chăm sóc khách hàng:</p>
            <ul className={style.listhcg}>
                <li>Số điện thoại Hotline: 1900545433.</li>
                <li>Email: <span className={style.emailtn}>cskh@magicpost.com.vn</span>.</li>
            </ul>
            <h2 className={style.chimuchcg}>7. Cơ chế tiếp nhận và giải quyết khiếu nại của khách hàng khi thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi</h2>
            <p>Khi phát hiện thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi, khách hàng có quyền gửi email khiếu nại đến cskh@magicpost.com.vn với các thông tin, chứng cứ chính xác, rõ ràng và đầy đủ liên quan đến việc này. Tổng Công ty cam kết sẽ có những biện pháp xử lý nhanh chóng, kịp thời và cần thiết để đảm bảo bảo vệ thông tin cá nhân của người dùng.</p>
        </div>
      </div>
    </>
  )
}
export default Policy