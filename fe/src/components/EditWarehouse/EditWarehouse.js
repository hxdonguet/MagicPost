import React from 'react'
import style from './EditWarehouse.module.css'
import { useState } from 'react'
import {useUpdateWarehouseMutation} from '../../app/features/api/wareHouseSlice'
import {useGetEmployeesByLocationIdQuery } from '../../app/features/api/employeeSlice';



function EditWarehouse(props) {

    const [inputValue, setInputValue] = useState({
        id: props.warehouse.id,
        name: props.warehouse.name,
        province: props.warehouse.location.province,
        district: props.warehouse.location.district,
        managerId: props.warehouse.managerId,
    })


    const {
        data: getAllEmployee,
        isSuccess
    } = useGetEmployeesByLocationIdQuery({id: '', role: 'Manager'})

    let selectManager;
   
    if(isSuccess) {
        const {ids, entities} = getAllEmployee;
        selectManager = ids.map(id => (
            <option key={id} value={entities[id]._id}>{entities[id].name} - {entities[id]._id}</option>
        ))
    }

    const [edit] = useUpdateWarehouseMutation();
    const [managerId, setManagerId] = useState(props.warehouse.managerId)

    const handleInput = (e) => {
        setInputValue({...inputValue, [e.target.name] : e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            inputValue.managerId = managerId
            await edit(inputValue).unwrap();
            props.handleEdit(props.index)
        }catch(err) {
            console.log(err)
        }
    }

    const handleSelect= (e) => {
        setManagerId(e.target.value)
    }

    return (
        <div className={style.overlay}>
            <div className={style.modal_content}>
                <div className={style.title_form}>Chỉnh sửa thông tin</div>
                <form className={style.modal_form} onSubmit={handleSubmit}>
                    <div className={style.form}>
                        <span  className={style.field}>ID</span>
                        <span>{inputValue.id}</span>
                    </div>
                    <div className={style.form}>
                        <span className={style.field}>Điểm tập kết</span>
                        <input name='name' type='text' value={inputValue.name} onChange={handleInput} />
                    </div>
                    <div className={style.form}>
                        <label className={style.field}>Tỉnh/Thành phố</label>
                        <input name='province' type='text' value={inputValue.province} onChange={handleInput} />
                    </div>
                    <div className={style.form}>
                        <label className={style.field}>Quận/Huyện</label>
                        <input name='dítrict' type='text' value={inputValue.district} onChange={handleInput} />
                    </div>
                    <div className={style.form}>
                        <label className={style.field}>Quản lý</label>
                        <select value={managerId} onChange={handleSelect}>
                            <option value={props.warehouse.managerId}>{props.warehouse.managerId}</option>
                            {/* {manager} */}
                            {selectManager}
                        </select>
                    </div>

                    <div className={style.button}>
                        <button className={`${style.btn_close} ${style.btn}`} onClick={() => props.handleEdit(props.index)} >
                            Đóng</button>
                        <button className={`${style.btn_create} ${style.btn}`}>
                            Cập nhật
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default EditWarehouse