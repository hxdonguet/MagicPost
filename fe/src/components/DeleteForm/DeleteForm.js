import React from 'react'
import style from './DeleteForm.module.css'
import { useSelector } from 'react-redux'
import { useDeleteEmployeeMutation } from '../../app/features/api/employeeSlice'
import { useDeletePackageMutation } from '../../app/features/api/packageSlice'
import { useParams } from 'react-router-dom'
function DeleteForm(props) {
    const [removeEmployee] = useDeleteEmployeeMutation();
    const [removePackage] = useDeletePackageMutation()
    const handleSubmit = async (e) => {
        try {
            console.log(props.employee)
            console.log(props.package)
            e.preventDefault();
            if(props.package != undefined) {
                console.log('34')
                await removePackage({id :props.package.id }).unwrap();
            } else {
                console.log('12')
                await removeEmployee({ id:props.employee.id }).unwrap();
            }
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