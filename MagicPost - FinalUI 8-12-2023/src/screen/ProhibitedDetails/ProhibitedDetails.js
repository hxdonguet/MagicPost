import React from 'react'
import style from './ProhibitedDetails.module.css'

function ProhibitedDetails() {
  return (
    <>
      <div className={style.subbanner4}>
        <img src="https://i.imgur.com/xLuYgb1.jpg"></img>
        <div className={style.title4}>
          <div className={style.contain4}>
            <span className={style.tieude4}>QUY ĐỊNH VỀ HÀNG CẤM GỬI</span>
          </div>
        </div>
      </div>
      <div className={style.ndcg}>
        <div className={style.containndcg}>
            <div className={style.dinhdangtieudendcg}> 
                <h1 className={style.tieudendcg}>
                    <strong>QUY ĐỊNH CHUNG VỀ VẬT PHẨM, HÀNG HÓA CẤM GỬI,</strong>
                </h1>
                <h1 className={style.tieudendcg}>
                    <strong>HÀNG GỬI CÓ ĐIỀU KIỆN CỦA DỊCH VỤ MAGICPOST QUỐC TẾ</strong>
                </h1>
            </div>
            <p>&nbsp;</p>
            <h2 className={style.chimuchcg}>I. QUY ĐỊNH CHUNG VỀ HÀNG CẤM GỬI</h2>
            <h2 className={style.chimuchcg}>1. Quy định chung về các vật phẩm, hàng hóa cấm gửi</h2>
            <p>Một số vật phẩm, hàng hóa dù có hoặc không được liệt kê trong danh mục “Hàng cấm gửi” tra cứu theo quy định từng nước cũng sẽ không được chấp nhận vận chuyển qua dịch vụ MagicPost quốc tế. Các mặt hàng bao gồm:</p>
            <ul className={style.listhcg}>
                <li>Các vật phẩm bất hợp pháp, chất ma tuý, chất kích thích thần kinh, narcotics…</li>
                <li>Vũ khí, đạn dược, trang thiết bị kỹ thuật quân sự (bao gồm các vật phẩm có hình dáng tương tự; đồ chơi…).</li>
                <li>Các loại văn hoá phẩm đồi truỵ, phản động; ấn phẩm, tài liệu nhằm phá hoại trật tự công cộng, chống Nhà nước Cộng hoà xã hội chủ nghĩa Việt Nam.</li>
                <li>Vật hoặc chất dễ nổ, dễ cháy và các chất gây nguy hiểm hoặc làm mất vệ sinh, gây ô nhiễm môi trường.</li>
                <li>Các loại vật phẩm, hàng hoá mà Nhà nước cấm lưu thông, cấm kinh doanh, cấm xuất khẩu, nhập khẩu.</li>
                <li>Sinh vật (động vật, thực vật) sống; Chiến lợi phẩm săn bắn từ động vật (Ngà voi, vi cá mập, xác động vật…) và các sản phẩm khác bị giới hạn bởi Quy ước CITES hoặc nội luật.</li>
                <li>Vật phẩm, ấn phẩm, hàng hoá cấm nhập vào nước nhận (theo thông báo của Hiệp hội Bưu chính và chính phủ các nước…).</li>
                <li>Tiền Việt Nam, tiền nước ngoài và các giấy tờ có giá trị như tiền.</li>
                <li>Các loại kim khí quý, bán quý (vàng, bạc, bạch kim...), các loại đá quý, bán quý hay các sản phẩm khác được chế biến từ kim khí đá quý, bán quý.</li>
                <li>Pin (và các vật phẩm chứa pin).</li>
                <li>Hài cốt.</li>
                <li>Các vật phẩm, hàng hóa mà tính chất hoặc cách gói bọc có thể gây nguy hiểm cho người nhân viên khai thác, vận chuyển, người dân hoặc làm mất vệ sinh, gây ô nhiễm môi trường.</li>
                <li>Bưu gửi chứa nhiều bưu gửi, gửi cho nhiều địa chỉ nhận khác nhau.</li>
                <li>Hàng giả, hàng nhái, hàng hóa vi phạm bản quyền, quyền sở hữu trí tuệ…</li>
            </ul>
            <h2 className={style.chimuchcg}>2. Quy định chung về vật phẩm, hàng hóa gửi có điều kiện</h2>
            <p>Một số vật phẩm, hàng hóa gửi có điều kiện:</p>
            <ul className={style.listhcg}>
                <li>Vật phẩm, hàng hóa trong bưu gửi phải thực hiện các quy định về xuất khẩu của Nhà nước và điều kiện nhập khẩu vào các nước nhận (căn cứ quy định về hàng hoá và vật phẩm cấm nhập và nhập có điều kiện vào các nước của Việt Nam, Bưu chính nước nhận và Hiệp hội Bưu chính thế giới).</li>
                <li>Bưu gửi có vật phẩm, hàng hoá để kinh doanh phải có đầy đủ chứng từ theo quy định của pháp luật.</li>
                <li>Vật phẩm, hàng hoá xuất khẩu, nhập khẩu thuộc quản lý chuyên ngành phải thực hiện theo quy định của cơ quan quản lý chuyên ngành có thẩm quyền và theo thông báo của Hiệp hội Bưu chính thế giới.</li>
                <li>Vật phẩm, hàng hoá gửi trong bưu gửi MagicPost vận chuyển qua đường hàng không phải tuân theo những quy định về an ninh hàng không. Các nội dung hàng hóa có chứa chất bột hoặc chất lỏng phải kèm theo MSDS để kiểm tra điều kiện, khả năng chấp nhận theo quy định.</li>
                <li>Hàng hóa dễ hư hỏng hoặc yêu cầu điều kiện bảo quản đặc biệt.</li>
            </ul>
            <h2 className={style.chimuchcg}>II. LƯU Ý CHUNG</h2>
            <p>Tài liệu này chỉ mang tính chất tham khảo, các quy định của pháp luật Việt Nam, quy định của các quốc gia/ vùng lãnh thổ và quy định của hãng vận chuyển hàng không đối với việc xuất khẩu, nhập khẩu hàng hóa có thể thay đổi theo từng thời điểm để phù hợp với tình hình thực tế.</p>
            <p>Lưu ý: “Hàng hóa mang tính cá nhân” được nhắc đến tại các nội dung tra cứu hàng hóa chi tiết theo từng nước được hiểu là hàng hành lý cá nhân có người gửi và người nhận là một chủ thể.</p>
        </div>
      </div>
    </>
  )
}
export default ProhibitedDetails