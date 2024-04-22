import React from 'react'
import style from './DeleteForm.module.css'
import { useSelector } from 'react-redux'
import { useDeleteEmployeeMutation } from '../../app/features/api/employeeSlice'
import { useParams } from 'react-router-dom'
function DeleteForm(props) {
    const [remove] = useDeleteEmployeeMutation();
    // console.log( props.employee.id)
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await remove({ id: props.employee.id }).unwrap();
            // console.log('ahjkdhaksd')
            props.handleRemove(props.index);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className={style.overlay}>
            <div className={style.modal_content}>
                <form className={style.modal_form} onSubmit={handleSubmit}>
                    <div className={style.box_delete}>
                        <h2>Delete</h2>
                        <p>Are you sure to delete?</p>
                    </div>
                    <div className={style.field_delete}>
                        <button className={style.btn_close_delete} onClick={() => props.handleRemove(props.index)}>
                            No</button>
                        <button className={style.btn_update_delete}>
                            Yes
                        </button>

                    </div>
                </form>
            </div>
        </div>

    )
}

export default DeleteForm