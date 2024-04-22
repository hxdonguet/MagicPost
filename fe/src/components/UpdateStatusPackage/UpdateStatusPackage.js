import React, { useState } from 'react'
import style from './UpdateStatusPackage.module.css'
import { useUpdatePackageMutation } from '../../app/features/api/packageSlice';



function UpdateStatusPackage(props) {

    const [update] = useUpdatePackageMutation();
    const [selected, setSelected] = useState(props.package.status)
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const packageUpdate = { ...props.package };
            packageUpdate.status = selected;
            await update(packageUpdate).unwrap();
            props.open(props.index);
        } catch (err) {
            console.error("update failed")
            console.log(err);
        }
    }

    const handleChange = (e) => {
        setSelected(e.target.value);
    }

    return (
        <div className={style.overlay}>
            <form className={style.modal_content} onSubmit={handleSubmit}>
                <h2 className={style.title_form}>Cập nhật trạng thái</h2>
                <div className={style.field}>
                    <label htmlFor='status'>Chọn trạng thái: </label>
                    <select className={style.status} value={selected} onChange={handleChange} name='status'>
                        <option value="PENDING">Chờ xử lý</option>
                        <option value="TRANSPORTATION">Vận chuyển</option>
                        <option value="SHIPPED">Giao hàng</option>
                        <option value="SUCCESS">Thành công</option>
                        <option value="FAILED">Thất bại</option>
                    </select>
                </div>
                <div className={style.field_edit}>
                    <button className={style.btn_close_edit} onClick={() => props.open(props.index)}>
                        Đóng</button>
                    <button className={style.btn_update_edit} >
                        Cập nhật
                    </button>
                </div>
            </form>
        </div>
    )
}
export default UpdateStatusPackage