import React, { useRef } from 'react'
import style from './ViewPackage.module.css'
import { useReactToPrint } from 'react-to-print';
import useAuth from '../../hook/useAuth';


function ViewPackage(props) {

    const conponentPDF = useRef()

    const generatePDF = useReactToPrint({
        content: () => conponentPDF.current,
        documentTitle: "Package Information",
        onAfterPrint: () => alert("Lưu thành công")
    });

    return (
        <div className={style.overlay} >
            <div className={style.modal_content} >
                <form ref={conponentPDF} >
                    <div className={style.title_form}>Thông tin đơn hàng</div>
                    <div className={style.layout}>
                        <p className={style.infoTitle}>Mã số đơn hàng: </p>
                        <span>{props.package.id}</span>
                    </div>
                    <div className={style.info}>
                        <div className={style.layout}>
                            <p className={style.infoTitle}>Thông tin người gửi</p>
                            <div className={style.field}>
                                <p className={style.filedInfo}>Họ và tên: </p>
                                <p>{props.package.senderName}</p>
                            </div>
                            <div className={style.field}>
                                <p className={style.filedInfo}>Số điện thoại: </p>
                                <p>{props.package.senderContact}</p>
                            </div>
                            <div className={style.field}>
                                <p className={style.filedInfo}>Khu vực: </p>
                                <p>{props.package.senderCity}</p>
                            </div>
                            <div className={style.field}>
                                <p className={style.filedInfo}>Xã/Phường: </p>
                                <p>{props.package.senderTown}</p>
                            </div>
                            <div className={style.field}>
                                <p className={style.filedInfo}>Địa chỉ cụ thể: </p>
                                <p>{props.package.senderAddress}</p>
                            </div>
                        </div>
                        <div className={style.layout}>
                            <p className={style.infoTitle}>Thông tin người nhận</p>
                            <div className={style.field}>
                                <p className={style.filedInfo}>Họ và tên: </p>
                                <p>{props.package.receiverName}</p>
                            </div>
                            <div className={style.field}>
                                <p className={style.filedInfo}>Số điện thoại: </p>
                                <p>{props.package.receiverContact}</p>
                            </div>
                            <div className={style.field}>
                                <p className={style.filedInfo}>Khu vực: </p>
                                <p>{props.package.receiverCity}</p>
                            </div>
                            <div className={style.field}>
                                <p className={style.filedInfo}>Xã/Phường: </p>
                                <p>{props.package.receiverTown}</p>
                            </div>
                            <div className={style.field}>
                                <p className={style.filedInfo}>Địa chỉ cụ thể: </p>
                                <p>{props.package.receiverAddress}</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.layout}>
                        <p className={style.infoTitle}>Thông tin hàng hóa</p>
                        <div className={style.info}>
                            <div className={style.packageInfo}>
                                <div className={style.field}>
                                    <p className={style.filedInfo}>Tên hàng hóa: </p>
                                    <p>{props.package.packageName}</p>
                                </div>
                                <div className={style.field}>
                                    <p className={style.filedInfo}>Khối lượng: </p>
                                    <p>{props.package.packageWeight}</p>
                                    <p>{props.package.weightCaculationUnit}</p>
                                </div>
                                <div className={style.field}>
                                    <p className={style.filedInfo}>Dài x Rộng x Cao </p>
                                    <p>{props.package.packageLength} x </p>
                                    <p>{props.package.packageWidth} x </p>
                                    <p>{props.package.packageHeight}</p>
                                </div>
                                <div className={style.field}>
                                    <p className={style.filedInfo}>Hình thức vận chuyển: </p>
                                    <p>{props.package.packageDeliveyMethod}</p>
                                </div>
                            </div>
                            <div>
                                <div className={style.field}>
                                    <p className={style.filedInfo}>Trạng thái đơn hàng: </p>
                                    <p>{props.package.status}</p>
                                </div>
                                <div className={style.field}>
                                    <p className={style.filedInfo}>Địa điểm nhận kế tiếp: </p>
                                    <p>{props.package.nextLocationId.name}</p>
                                </div>
                                {/* <p className={style.filedInfo}>Lịch sử chuyển hàng: </p> */}

                                <div className={style.field}>
                                    <p className={style.filedInfo}>Lịch sử chuyển hàng: </p>
                                    <div>
                                        {props.package.history.map(e => (
                                            <p>{e.name}</p>
                                        ))}
                                    </div>
                                    {/* <p>{props.package.packageNote}</p> */}
                                </div>

                            </div>
                            <div>
                                <div className={style.field}>
                                    <p className={style.filedInfo}>Ghi chú: </p>
                                    <p>{props.package.packageNote}</p>
                                </div>
                                <div className={style.field}>
                                    <p className={style.filedInfo}>Giá tiền: </p>
                                    <p>{props.package.packagePrice}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </form >
                <div className={style.close}>
                    <button className={`${style.btn_close} ${style.btn}`} onClick={generatePDF}>
                        Xuất file PDF
                    </button>
                    <button className={`${style.btn_close} ${style.btn}`} onClick={() => props.open(props.index)}>
                        Đóng
                    </button>
                </div>
            </div>


        </div >
    )
}

export default ViewPackage