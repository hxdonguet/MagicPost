import React, { useState } from 'react'
import style from './CreateTransaction.module.css'
import { useCreateTransactionPointMutation } from '../../app/features/api/transactionPointSlice'


function CreateTransaction(props) {
    const [inputValue, setInputValue] = useState({ name: '', province: '', district: "", managerId: "", warehouseId: "" })

    const [create] = useCreateTransactionPointMutation()

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
                <div className={style.title_form}>Thêm điểm giao dịch mới</div>
                <div className={style.user_details}>
                    <div className={style.form}>
                        <label className={style.field}>Tên điểm giao dịch</label>
                        <input name='name' type='text' placeholder='Nhập tên điểm giao dịch' value={inputValue.name} onChange={handleInput} />
                    </div>
                    <div className={style.form}>
                        <label className={style.field}>Tỉnh/Thành phố</label>
                        <input name='province' type='text' placeholder='Nhập tỉnh/thành phố' value={inputValue.province} onChange={handleInput} />
                    </div>
                    <div className={style.form}>
                        <label className={style.field}>Quận/Huyện</label>
                        <input name='district' type='text' placeholder='Nhập quận/huyện' value={inputValue.district} onChange={handleInput} />
                    </div>
                    <div className={style.form}>
                        <label className={style.field}>ID quản lý</label>
                        <input name='managerId' type='text' placeholder='ID quản lý' value={inputValue.managerId} onChange={handleInput} />
                    </div>
                    <div className={style.form}>
                        <label className={style.field}>ID điểm tập kết</label>
                        <input name='warehouseId' type='text' placeholder='ID điểm tập kết' value={inputValue.warehouseId} onChange={handleInput} />
                    </div>
                </div>
                <div className={style.button}>
                    <button className={`${style.btn_close} ${style.btn}`} onClick={() => props.openModal(false)} >Đóng</button>
                    <button type='submit' className={`${style.btn_create} ${style.btn}`}>
                        Thêm
                    </button>
                </div>
            </form>
        </div>

    )
}

export default CreateTransaction