import React from 'react'
import style from './ViewTransaction.module.css'
import { useGetEmployeesByLocationIdQuery } from '../../app/features/api/employeeSlice';

function ViewTransaction(props) {

    const {
        data: getAllEmployees,
        isSuccess,
    } = useGetEmployeesByLocationIdQuery({ id: props.transaction.id, role: ['Employee', 'Manager'] })

    const handleSubmit = (e) => {
        e.preventDefault();
        props.open(props.index);
    }

    let content;
    if (isSuccess) {
        const { ids, entities } = getAllEmployees
        const employees = ids.filter(id => {
            return entities[id].role === 'Employee' ? entities[id] : ''
        })

        const manager = ids.filter(id => {
            return entities[id].role === 'Manager' ? entities[id] : ''
        })
        content = (
            <>
                {entities[manager] != null ?
                    (<div className={style.field}>
                        <p>Quản lý: </p>
                        <p>{entities[manager].name} - {entities[manager]._id}</p>
                    </div>)
                    : (<div className={style.field}>
                        <p>Quản lý: </p>
                    </div>)
                }
                <p>Nhân viên:</p>
                {employees.map((employee, index) => (
                    <div className={style.employee} key={index}>
                        <p>{index + 1}.</p>
                        <p>{entities[employee].name} - {entities[employee]._id}</p>
                    </div>
                ))}
            </>
        )
    }

    return (
        <div className={style.overlay}>
            <form className={style.modal_content} onSubmit={handleSubmit} >
                <div className={style.title_form}>Thông tin điểm giao dịch</div>
                <div className={style.layout}>
                    <p className={style.infoTitle}>Điểm giao dịch: </p>
                    <div className={style.field}>
                        <p className={style.filedInfo}>ID điểm giao dịch: </p>
                        <p>{props.transaction.id}</p>
                    </div>
                    <div className={style.field}>
                        <p className={style.filedInfo}>Tên điểm giao dịch: </p>
                        <p>{props.transaction.name}</p>
                    </div>
                    <div className={style.field}>
                        <p className={style.filedInfo}>Khu vực: </p>
                        <p>{props.transaction.location.district} - {props.transaction.location.province}</p>
                    </div>
                    <div className={style.field}>
                        <p className={style.filedInfo}>ID điểm tập kết </p>
                        <p>{props.transaction.warehouseId}</p>
                    </div>
                </div>
                <div className={style.info}>
                    {/* <div className={style.layout}>
                        <p className={style.infoTitle}>Điểm giao dịch </p>
                        <div className={style.field}>
                            <p className={style.filedInfo}>Tên điểm giao dịch: </p>
                            <p>{props.transaction.name}</p>
                        </div>
                        <div className={style.field}>
                            <p className={style.filedInfo}>Khu vực: </p>
                            <p>{props.transaction.location.district} - {props.transaction.location.province}</p>
                        </div>
                        <div className={style.field}>
                            <p className={style.filedInfo}>ID điểm tập kết </p>
                            <p>{props.transaction.warehouseId}</p>
                        </div>
                    </div> */}
                    <div className={style.layout}>
                        <p className={style.infoTitle}>Thông tin nhân viên</p>
                        {/* <div className={style.field}>
                            <p className={style.filedInfo}>Quản lý: </p>
                            <p>{props.transaction.manager}</p>
                        </div> */}
                        {/* <div className={style.field}>
                            <p className={style.filedInfo}>Nhân viên: </p>
                            <p>{props.transaction.owner}</p>
                        </div> */}
                        {content}

                    </div>
                </div>
                <div className={style.close}>
                    <button type='submit' className={`${style.btn_close} ${style.btn}`}>
                        Đóng
                    </button>
                </div>
            </form >
        </div >
    )
}

export default ViewTransaction