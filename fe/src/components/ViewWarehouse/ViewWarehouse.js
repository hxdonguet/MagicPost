import React from 'react'
import style from './ViewWarehouse.module.css'
import { useGetEmployeesByLocationIdQuery } from '../../app/features/api/employeeSlice'

function ViewWarehouse(props) {

    const {
        data: getAllEmployees,
        isSuccess,
    } = useGetEmployeesByLocationIdQuery({ id: props.warehouse.id, role: ['Employee', 'Manager'] })

    const handleSubmit = (e) => {
        e.preventDefault();
        props.open(props.index);
    }
    let content
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

    const hanldePlace = (district, province) => {
        if(district == '') {
            return (
                <p>{province}</p>
            )
        }else {
            return (
                <p>{district} - {province}</p>
            )
        }
    }

    return (
        <div className={style.overlay}>
            <form className={style.modal_content} onSubmit={handleSubmit} >
                <div className={style.title_form}>Thông tin điểm tập kết</div>
                <div className={style.layout}>
                    <div className={style.field}>
                        <p className={style.filedInfo}>ID điểm tập kết: </p>
                        <p>{props.warehouse.id}</p>
                    </div>
                    <div className={style.field}>
                        <p className={style.filedInfo}>Tên Điểm tập kết: </p>
                        <p>{props.warehouse.name}</p>
                    </div>
                    <div className={style.field}>
                        <p className={style.filedInfo}>Khu vực: </p>
                        <p>{hanldePlace(props.warehouse.location.district, props.warehouse.location.province)}</p>
                    </div>
                </div>
                <div className={style.info}>
                    <div className={style.layout}>
                        <p className={style.infoTitle}>Thông tin nhân viên</p>
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

export default ViewWarehouse