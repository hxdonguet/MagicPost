import React from 'react'
import style from './EditForm.module.css'
function EditForm({ close }) {
    return (
        <div className={style.overlay}>
            <div className={style.modal_content}>
                <form className={style.modal_form} >
                    <h2 className={style.title_form}>Update status</h2>
                    <select className={style.status} >
                        <option selected disabled>
                            Choose status:
                        </option>
                        <option value="shipped">SHIPPED</option>
                        <option value="PENDING">
                            TRANSPORTATION
                        </option>
                        <option value="TRANSPORTATION">
                            SHIPPED
                        </option>
                        <option value="TRANSPORTATION">
                            UNSUCESSFUL
                        </option>
                    </select>

                    <div className={style.field_edit}>
                        <button type='submit' className={style.btn_close_edit} onClick={() => close(false)}>
                            Close</button>
                        <button type='submit' className={style.btn_update_edit} onClick={() => close(false)}>
                            Update
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default EditForm