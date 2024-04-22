import React from 'react'
import style from './EditTransaction.module.css'
import { useState } from 'react'
import { useUpdateTransactionPointMutation } from '../../app/features/api/transactionPointSlice'
import { useGetEmployeesByIdQuery, useGetEmployeesByLocationIdQuery } from '../../app/features/api/employeeSlice';
import { useGetAllWarehouseQuery } from '../../app/features/api/wareHouseSlice';

function EditTransaction(props) {

    const [inputValue, setInputValue] = useState({
        id: props.transaction.id,
        name: props.transaction.name,
        province: props.transaction.location.province,
        district: props.transaction.location.district,
        managerId: props.transaction.managerId,
        warehouseId: props.transaction.warehouseId
    })

    // const {
    //     data: getManager,
    //     isSuccess: success
    // } = useGetEmployeesByIdQuery({id: props.transaction.managerId})

    // let manager;
    // if(success) {
    //     const {ids, entities} = getManager;
    //     manager = ids.map(id => (
    //         <option key={id} value={entities[id]._id}>{entities[id].name} - {entities[id]._id}</option>
    //     ))
    // }


    const {
        data: getAllEmployee,
        isSuccess
    } = useGetEmployeesByLocationIdQuery({ id: '', role: 'Manager' })
    const { data: getAllWarehouses, isSuccess: successWarehouses } = useGetAllWarehouseQuery()
    let selectManager;

    if (isSuccess) {
        const { ids, entities } = getAllEmployee;
        selectManager = ids.map(id => (
            <option key={id} value={entities[id]._id}>{entities[id].name} - {entities[id]._id}</option>
        ))
    }
    let selectWarehouses;
    if (isSuccess) {
        const { ids, entities } = getAllWarehouses;
        selectWarehouses = ids.map(id => (
            <option key={id} value={entities[id]._id}>{entities[id].name} - {entities[id]._id}</option>
        ))
    }
    const handleInput = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }

    const [edit] = useUpdateTransactionPointMutation();
    const [managerId, setManagerId] = useState(props.transaction.managerId)
    const [warehouseId, setWarehouseId] = useState(props.transaction.warehouseId)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            inputValue.managerId = managerId
            await edit(inputValue).unwrap();
            props.handleEdit(props.index)
        } catch (err) {
            console.log(err)
        }
    }

    const handleSelect = (e) => {
        setManagerId(e.target.value)
    }
    const handleSelectWarehouses = (e) => {
        setWarehouseId(e.target.value)
    }
    return (
        <div className={style.overlay}>
            <div className={style.modal_content}>
                <div className={style.title_form}>Chỉnh sửa thông tin</div>
                <form className={style.modal_form} onSubmit={handleSubmit}>
                    <div className={style.form}>
                        <span className={style.field}>ID</span>
                        <span>{inputValue.id}</span>
                    </div>
                    <div className={style.form}>
                        <span className={style.field}>Điểm giao dịch</span>
                        <input name='name' type='text' value={inputValue.name} onChange={handleInput} />
                    </div>
                    <div className={style.form}>
                        <label className={style.field}>Tỉnh/Thành phố</label>
                        <input name='province' type='text' value={inputValue.province} onChange={handleInput} />
                    </div>
                    <div className={style.form}>
                        <label className={style.field}>Quận/Huyện</label>
                        <input name='district' type='text' value={inputValue.district} onChange={handleInput} />
                    </div>
                    <div className={style.form}>
                        <label className={style.field}>Quản lý</label>
                        {/* <input name='managerID' type='text' value={inputValue.managerId}  onChange={handleInput} /> */}
                        <select value={managerId} onChange={handleSelect}>
                            <option value={props.transaction.managerId}>{props.transaction.managerId}</option>
                            {/* {manager} */}
                            {selectManager}
                        </select>
                    </div>
                    <div className={style.form}>
                        <p className={style.field}>ID Điểm tập kết</p>
                        {/* <input name='managerID' type='text' value={inputValue.managerId}  onChange={handleInput} /> */}
                        <select value={warehouseId} onChange={handleSelectWarehouses}>
                            <option value={props.transaction.warehouseId}>{props.transaction.warehouseId}</option>
                            {/* {manager} */}
                            {selectWarehouses}
                        </select>
                    </div>
                    {/* <div className={style.form}>
                        <label className={style.field}>Điểm tập kết</label>
                        <input name='warehouseId' type='text' value={inputValue.district}  onChange={handleInput} />
                    </div> */}

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

export default EditTransaction