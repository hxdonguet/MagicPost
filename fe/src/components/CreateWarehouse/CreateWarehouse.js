import React, { useState } from 'react'
import style from './CreateWarehouse.module.css'
import {useCreateWarehouseMutation} from '../../app/features/api/wareHouseSlice'

function CreateWarehouse(props) {
    const [inputValue, setInputValue] = useState({ name: '', province: "", district: "", managerId: "" })

    const [create]= useCreateWarehouseMutation()

    const handleInput = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            create(inputValue).unwrap()
            props.openModal(false);
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className={style.overlay}>
            <form className={style.modal_content} onSubmit={handleSubmit}>
                <div className={style.title_form}>Thêm điểm tập kết</div>
                <div className={style.user_details}>
                    <div className={style.form}>
                        <label className={style.field}>Tên điểm tập kết</label>
                        <input name='name' type='text' placeholder='Tên điểm tập kết' value={inputValue.name} onChange={handleInput} />
                    </div>
                    <div className={style.form}>
                        <label className={style.field}>Tỉnh/Thành phố</label>
                        <input name='province' type='text' placeholder='Tỉnh/Thành phố' value={inputValue.province} onChange={handleInput} />
                    </div>
                    <div className={style.form}>
                        <label className={style.field}>Quận/Huyện</label>
                        <input name='district' type='text' placeholder='Quận/Huyện' value={inputValue.district} onChange={handleInput} />
                    </div>
                    <div className={style.form}>
                        <label className={style.field}>ID quản lý</label>
                        <input name='managerId' type='text' placeholder='ID quản lý' value={inputValue.managerId} onChange={handleInput} />
                    </div>
                </div>
                <div className={style.button}>
                    <button className={`${style.btn_close} ${style.btn}`} onClick={() => props.openModal(false)} >Đóng</button>
                    <button type='submit' className={`${style.btn_create} ${style.btn}`}>
                        Tạo mới
                    </button>
                </div>

            </form>
        </div>

    )
}

export default CreateWarehouse