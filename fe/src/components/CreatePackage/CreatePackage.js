import React, { useState } from 'react'
import style from './CreatePackage.module.css'
import { useCreatePackageMutation } from '../../app/features/api/packageSlice'

function CreatePackage({ close }) {
    const initialValue = {
        senderName: '',
        senderContact: '',
        senderCity: '',
        senderTown: '',
        senderAddress: '',
        receiverName: '',
        receiverContact: '',
        receiverCity: '',
        receiverTown: '',
        receiverAddress: '',
        packageName: '',
        packageWeight: '',
        weightCaculationUnit: '',
        packageLength: '',
        packageWidth: '',
        packageHeight: '',
        packageNote: '',
        packageDeliveyMethod: '',
        packagePrice: '',
    }
    const [createPackage, {isLoading}] = useCreatePackageMutation()
    const [inputValue, setInputValue] = useState(initialValue)

    const handleInput = (e) => {
        setInputValue({... inputValue, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e)=> {
        e.preventDefault();
        inputValue.weightCaculationUnit = packageWeight;
        inputValue.packageDeliveyMethod = deliveryMethod;
        initialValue.packagePrice = handlePrice()
        console.log(inputValue)
        try{
            await createPackage(inputValue).unwrap()
            close(false);
        }catch(err) {
            console.log(err)
        }
    }

    const [packageWeight, setPackageWeight] = useState('gram')
    const [deliveryMethod, setdeliveryMethod] = useState('normal')
    
    const handlePackageWeight = (e) => {
        setPackageWeight(e.target.value)
    }

    const handleDeliveryMethod = (e) => {
        setdeliveryMethod(e.target.value)
    }

    const handlePrice = () => {
        let price
        if(deliveryMethod == 'normal') {
            price = 20000
        }else if(deliveryMethod == 'speed') {
            price = 35000
        } else {
            price = 70000
        }
        if(packageWeight == 'kg' && parseInt(inputValue.packageWeight) >= 5) {
            price += 10000
        }
        if(parseInt(initialValue.packageLength) >= 2 && parseInt(initialValue.packageHeight) >= 2 && parseInt(initialValue.packageWidth) >= 1.0) {
            price += 10000
        }
        return price
    }

    return (
        <div className={style.overlay}>
            <form className={style.modal_content} onSubmit={handleSubmit} >
                <div className={style.title_form}>Tạo đơn hàng</div>
                <div className={style.user_details}>
                    <div className={style.userInfo}>
                        <div className={style.title}>Thông tin người gửi</div>
                        <div className={style.field}>
                            <label htmlFor="senderName">Họ và tên:</label>
                            <input
                                type="text"
                                name="senderName"
                                className={style.form_control}
                                value={inputValue.senderName}
                                onChange={handleInput}
                            />
                        </div>
                        <div className={style.field}>
                            <label htmlFor="senderContact">Số điện thoại:</label>
                            <input
                                type="text"
                                name="senderContact"
                                className={style.form_control}
                                value={inputValue.senderContact}
                                onChange={handleInput}
                            />
                        </div>
                        <div className={style.field}>
                            <label htmlFor="senderCity">Khu vực:</label>
                            <input
                                type="text"
                                name="senderCity"
                                placeholder='Chọn Tỉnh/TP'
                                className={style.form_control}
                                value={inputValue.senderCity}
                                onChange={handleInput}
                            />
                        </div>
                        <div className={style.field}>
                            <label htmlFor="senderTown">Xã/Phường:</label>
                            <input
                                type="text"
                                name="senderTown"
                                placeholder='Chọn Phường/Xã'
                                className={style.form_control}
                                value={inputValue.senderTown}
                                onChange={handleInput}
                            />
                        </div>
                        <div className={style.field}>
                            <label htmlFor="senderAddress">Địa chỉ cụ thể:</label>
                            <input
                                type="text"
                                name="senderAddress"
                                className={style.form_control}
                                value={inputValue.senderAddress}
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div className={style.vertical}></div>
                    <div className={style.userInfo}>
                        <div className={style.title}>Thông tin người nhận</div>
                        <div className={style.field}>
                            <label htmlFor="receiverName">Họ và tên:</label>
                            <input
                                type="text"
                                name="receiverName"
                                className={style.form_control}
                                value={inputValue.receiverName}
                                onChange={handleInput}
                            />
                        </div>
                        <div className={style.field}>
                            <label htmlFor="receiverContact">Số điện thoại:</label>
                            <input
                                type="text"
                                name="receiverContact"
                                className={style.form_control}
                                value={inputValue.receiverContact}
                                onChange={handleInput}
                            />
                        </div>
                        <div className={style.field}>
                            <label htmlFor="receiverCity">Khu vực:</label>
                            <input
                                type="text"
                                name="receiverCity"
                                placeholder='Chọn Tỉnh/TP'
                                className={style.form_control}
                                value={inputValue.receiverCity}
                                onChange={handleInput}
                            />
                        </div>
                        <div className={style.field}>
                            <label htmlFor="receiverTown">Xã/Phường:</label>
                            <input
                                type="text"
                                name="receiverTown"
                                placeholder='Chọn Phường/Xã'
                                className={style.form_control}
                                value={inputValue.receiverTown}
                                onChange={handleInput}
                            />
                        </div>
                        <div className={style.field}>
                            <label htmlFor="receiverAddress">Địa chỉ cụ thể:</label>
                            <input
                                type="text"
                                name="receiverAddress"
                                className={style.form_control}
                                value={inputValue.receiverAddress}
                                onChange={handleInput}
                            />
                        </div>
                    </div>

                </div>
                <div className={style.userInfo}>
                    <div className={style.title}>Thông tin hàng hóa</div>
                    <div className={style.packageInfo}>
                        <div >
                            <div className={style.field}>
                                <label htmlFor="packageName">Tên hàng hóa:</label>
                                <input
                                    type="text"
                                    name="packageName"
                                    className={style.form_control}
                                    value={inputValue.packageName}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className={style.field}>
                                <label htmlFor="">Khối lượng:</label>
                                <div className={style.multiInfo}>
                                    <input
                                        type="text"
                                        name="packageWeight"
                                        className={style.form_control}
                                        // value={}
                                        onChange={handleInput}
                                    />
                                    <select className={style.selectOption} value={packageWeight} onChange={handlePackageWeight}>
                                        <option value="gram">gram</option>
                                        <option value="kg">kg</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="" className={style.size}>Kích thước(không bắt buộc):</label>
                                <div className={style.field}>
                                    <input
                                        type="text"
                                        name="packageLength"
                                        placeholder='Dài'
                                        className={style.form_control}
                                        // value={package.}
                                        onChange={handleInput}
                                    />
                                    <input
                                        type="text"
                                        name="packageWidth"
                                        placeholder='Rộng'
                                        className={style.form_control}
                                        onChange={handleInput}
                                    />
                                    <input
                                        type="text"
                                        name="packageHeight"
                                        placeholder='Cao'
                                        className={style.form_control}
                                        onChange={handleInput}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className={style.vertical}></div>
                        <div>
                            <div className={style.field}>
                                <label htmlFor="packageDeliveryMethod">Hình thức giao hàng:</label>
                                <select className={style.selectOption} name='packageDeliveryMethod' value={deliveryMethod} onChange={handleDeliveryMethod}>
                                    <option value="normal">Thường</option>
                                    <option value="speed">Nhanh</option>
                                    <option value="superSpeed">Hỏa tốc</option>
                                </select>
                            </div>
                            <div className={style.field}>
                                <label htmlFor="packageNote">Ghi chú:</label>
                                <input
                                        type="text"
                                        name="packageNote"
                                        placeholder=''
                                        className={style.form_control}
                                        value={inputValue.packageNote}
                                        onChange={handleInput}
                                    />
                            </div>
                            <div>
                                <span>Tổng tiền: {handlePrice()} vnđ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.fields}>
                    <button type='submit' className={`${style.btn_close} ${style.btn}`} onClick={() => close(false)}>
                        Đóng</button>
                    <button type='submit' className={`${style.btn_create} ${style.btn}`}>
                        Tạo
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreatePackage