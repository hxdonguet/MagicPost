import React from 'react'
import style from './Recruitment.module.css'

function Recruitment() {
    return (
        <>
            <div className={style.subbanner4}>
                <img src="https://i.imgur.com/xLuYgb1.jpg"></img>
                <div className={style.title4}>
                    <div className={style.contain4}>
                        <span className={style.tieude4}>TUYỂN DỤNG</span>
                    </div>
                </div>
            </div>
            <div className={style.ndcg}>
                <div className={style.containndcg}>
                    <div className={style.dinhdangtieudendcg}>
                        <h1 className={style.tieudendcg}>
                            <strong>TUYỂN DỤNG MAGICPOST</strong>
                        </h1>
                    </div>
                    <div className={style.wrsearch}>
                        <div className={style.titletv}>TÌM KIẾM CÔNG VIỆC</div>
                        <form className={style.timviec}>
                            <div className={style.rowpv}>
                                <div className={style.nhapcv}>
                                    <div className={style.plhold}>
                                        <input placeholder="Tên công việc" type="text" className={style.input_custom} value=""></input>
                                    </div>
                                </div>
                                <div className={style.chontinh}>
                                    <div className={style.plhold2}>
                                        <select className={style.input_custom2} value="">
                                            <option>Chọn Tỉnh/Thành phố</option>
                                            <option>Hà Nội</option>
                                            <option>Đà Nẵng</option>
                                            <option>TP Hồ Chí Minh</option>
                                            <option>Tỉnh/Thành phố khác</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={style.xn}>
                                    <button className={style.nutbam}>Tra cứu</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={style.listcv}>
                        <div className={style.rowcv}>
                            <div className={style.rowcv_nd}>
                                <div className={style.ndut}>
                                    DANH SÁCH CÔNG VIỆC ĐANG ỨNG TUYẾN
                                </div>
                                <div className={style.listofcv}>
                                    <li className={style.ctcv}>
                                        <div className={style.namecv}>
                                            <div className={style.titlecv}>
                                                NHÂN VIÊN BƯU CỤC - HÀ NỘI, ĐÀ NẴNG, TP HCM
                                            </div>
                                            <div className={style.diadiem_thoigian}>
                                                <div className={style.diadiemthoigianct}>
                                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVtSURBVHgB7VtLUuNIEC2+QfD1EdwnaLgAY04AfYKBE2B2DAHY4hfs2j5Bezm7oU8whgt036B1g/YELAi+857IwhqPZMsmSyKi60UIlaVSSfWUL6sySxjj4eHh4eHh4eHh4eHhkTfGTEGo1+vlx8fHDRQ/YqtgK8lGdJ6fn8OxsbEQ5cv7+/uL8/Pz0BSA3Ak6ODjYxO5380JKZoCw7yCseXx83DI5IjeC9vf3N9DBzyiW7TF0uo1jX2ktk5OT32PVSw8PDyWcW8a5dewrsXMhtiAvopwTVK1WSwsLCyRmUw5RPk0Q0oDMOlnaEDlWUKyZLsGt6+vrnUajkamNUeGUoN3d3fLU1NTfRjoFYoJhiEkCLLEOi6rJzxD+ac2lf3JGUA85IcjZOjk5aRsFiEW9tu2SJCcE9ZIzMTGxhk6FRhG9JEFuKy7kNm4cAORYX+GEHIJtsm3z4rTL8HNfjAOoW5AM49HDogMfBpFDJz4/P1+BX/nN/HcedHlzc9MeZBVofxmW9E1+bmmPbi4I+oFdGR0Ojo6O6mn1SMzi4uI2iKiaLjG9IDkcrYJ+RMUcdwd1P2hKTVViYj1lbGE/cuijIIlvIId1SA6deBP7HY50Ug7lXJV1eU1aexwZzQuZJL1qFDFpdGGH3yCtgjhwSsISkza6VYXwyJ/xGly7kjRacdoAK2rSip6entZ5yChBzYL29vaWjcx34HvaSXUoKxndSgwdUG+l39BPf0JHjI5zlh1dyzaS6lor4uwbZFWMEtQIQkcqUmynOWY4420jEkSHPmWZMLKt8fHx19EqTUJsi6SzjP2yUYIaQYyZuIeJf02rg7e7KcVgmKFfiAzkPtt92o/uDUIrRglqBOGhItMXOfwPYvZlbJ1RhmK5JnLEaRJi0CvFj0YJmhYUmTUsKFE29A1SvDSjox2/Vy9iGYGSUYL6THp2dvZn0nF0yj70TzMi0MY/3IPsQQS8X4JcAsQs9Tt/d3enRoyFJkEh/9ze3q4knYT0ovNvGWFAUFmKiX7O+kE7mmlAkyA7xJaTTk5PT19wT18kc6ahwAmmJbcn+/gK6+ewf5ehRuR88RbXk07KPKXNMuZMNTMkJENApM6zskw1hoXmKGbf6nLabNd0Q5ANhBGZY6bDw0POfTZZBrlbSXVAWsnmru2L0IAaQRIyRPOUubm5zbQ6DEbl52d0fKAlYc5TwzUMIyid1AmmLCER4dnZmZoPUg1WGYUzYBSZNZLqgKQ6Os3OsuN1CUgDpE3bNhCNrZmxnQqPDUqfmG6g3DSKUM0H0czRMeaDGIx+AhkXaXXjkfqAZjvwKcHp6WljQFuZk3TDQHUeJI44eoNcA+vji14jdRS3knwGj1GO7HA/cgQ1uWdQV07vaueDorQDrIgrp0yK8cF30upKZ1qyRdKKHc8E+igjGQJIexCRQ8PJqoasov7FMqxgTWu5pxeSfPshP7dcrLY6CTXE99iJ4Zd+UnsLJPlGtFwtRTuLxWS+Epqu1FQRlxbuFRhHcLr0zLwNLCh6y5pSy0NaFk6jeZkY2lFNRWqxvDbRcv2Vh/N0B0a1ulGU2tLSUi7Sssjl+yAtqcXbMY6lZZFLwkxDaryG18rPVl4fUOWWUXyr1PKWlkWu3yiOKrUipGWRa056FKkVJS2L3JP2w0qtKGlZFPKddFapFSkti0KWfbJIrWhpWRS2LjZIakVLy6Kwf0Ug0qTmKoYbBYUSRICMBsjgqkX0perMzIyNtbgO1gQ5mVc/XEA9ozj0A0BqyEAyOW+lRn9UNi/fENVNwSjcgoie0SpC0dKymDDvAFdXV+Hq6uqYXXvHKsYfSNT/aTw8PDw8PDw8PDw8PDx+SfwLFufeeJmikf0AAAAASUVORK5CYII='></img>
                                                    <span>Tuyển dụng</span>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALgSURBVHgB7ZtPbtpAFMYfBqQKJMQN6pyg9ASFXXdJTxBygrBEiH8FhNgFThBu0PYEgRPUucF0z8IVSwT0TWuCpUIe43giHH0/yZqxGXsen9+Mn+w3RAAAAAAAAAAQOymyRKPRKKXT6U4qlZr1er0JWaDdbt9ut9sr3iaDweA7WcAhS2QymXsutPFjNv49xUy32y3qa3O1zDfhjixhTSA2vkh2sX39v1gT6K0QeQ6q1WrFQqFwu9lsrtjFD91NN1RXZAdX6EMf81ar1WQ0GimKQCSBeHK8Dsb/q7h5DPi8fe33+2MyJE2GtFqtKhdT3t5RctC2fi6Xy2o+nz+anGjkQfV63c1msw+0d23F24S9yfvvwqnU/a7der2+cRxHUbwUuY9vQd1nG74csMHlokN7e/3lcnkxHo99OpEMGcDilEOdKY5zKvy4VYfasqc91XO53EOz2fxFMcL9uiz8btfnUGJ2pN2M2/2kf9NBMZ/PV7k8eaiZPsUudxW+Yz+OiRP8vvtNLRaL3xQ/2gtU0Jd3rJG2UQeSu3325A9kgJFA4diGn17ec235jla4fYW97KOJS58K/3Ffe7Dug4PSm+fasq0qtOuSAUZDzJRjbh8XgQcrsggCRQEIJBB5iPH4v+MnVYeSQeSA9iVzUJGSE0lHBkNMILIHBbGFlZdUFtDvjCJNB5EF0nHQcDicUQLgt5suz5kUBQwxAQgkAIEEIJAABBKAQAIQSAACCUAgAQgkAIEEIJAABBKAQAIQSAACCUAgAQgkAIEEIJAABBKAQAIQSAACCUAgAVOBnvIMHccpUULgr6qfQrtG6YBGAvH3bS9Uv9ZZr3TmBDZWQ4eM8gmM0oD1ApIgY9QNHZ7ysTmdIew5OmGzSvs0HdXv9y/IAONMexapFIiUOHRCKdvvmZxjPEnrDnRHZDl5MmZUFHE0L1pQFyxLuHyFpU+R4HlScfHI4kx12jABAAAAAAAAwHnwB8+K5fmd17U9AAAAAElFTkSuQmCC'></img>
                                                    <span>21/11/2023</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={style.watchmore}>
                                        <a href='/Details1'>Xem Thêm</a>
                                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIxSURBVHgB7dlPTttAFMfxNw4OjRAo3VWqiHKEHKG5QXsCwrYUqT5BwwlMVegWOAHcINyA3AArCIkdERJy4hAP8/gjOYbNoBnEs36f5USRkq+cyfiZCAAAAAAAAAAAAAAAPgRFwkz3W3/mOf0OFCV6lv1oRFcJeSQqUBp/aVNYPy8sJTTLuj4jBSRIrV5rlpY42EDHzSZ5IipQfetymGt9VFpuT8M1b5HE7UHs9t/6YaDURnHNfJHh8uymq6LxmBwSdQU9W9m+6GmlToprmqgzCVePyTGRgdg0U5smynBxVX1L99YPyCGRP7Fn13G7uRzmA/MlOouv6MPGr4tNckDsFcQ+R8l4Ogu6xH/3C1QvNeclckB0IMaR6LVImvouIon+iRWlcducifIB8dmoSFG/sTXaoTeqTCDmI1KlAjHXkawDZf9bG3dz2lWKvB3vfakF1Kv/HB3ZvMd6kzZ30n2JcVie0y5Zsg5kDmci4zDz2a1vQ6wDqVxHWpPT+533YgL9JUsV3KQfZkYvNulc087K9qhPlir2N+82DqvQQdF9HFaJQL7iMPGBeJI4CdfOyEMcJjoQx3kYt5bGHTyW5aEaOSA20HvEYWLHHenS6kE5jtbqxGUctkQCPY5V1ffiGg/tP90pJ1PEInFX0GSvFfPEsLj2+EQjME80EucnfFF7ULb/tTPXtbPScsITxUaUJOSB9JGr1zhM3JNVc8f5NPTSp77jAAAAAAAAAAAAAADAB3IPfIjUhFXqOo4AAAAASUVORK5CYII='></img>
                                        </div>
                                    </li>
                                    <li className={style.ctcv}>
                                        <div className={style.namecv}>
                                            <div className={style.titlecv}>
                                                CHUYÊN VIÊN KINH DOANH MẠNG LƯỚI
                                            </div>
                                            <div className={style.diadiem_thoigian}>
                                                <div className={style.diadiemthoigianct}>
                                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVtSURBVHgB7VtLUuNIEC2+QfD1EdwnaLgAY04AfYKBE2B2DAHY4hfs2j5Bezm7oU8whgt036B1g/YELAi+857IwhqPZMsmSyKi60UIlaVSSfWUL6sySxjj4eHh4eHh4eHh4eHhkTfGTEGo1+vlx8fHDRQ/YqtgK8lGdJ6fn8OxsbEQ5cv7+/uL8/Pz0BSA3Ak6ODjYxO5380JKZoCw7yCseXx83DI5IjeC9vf3N9DBzyiW7TF0uo1jX2ktk5OT32PVSw8PDyWcW8a5dewrsXMhtiAvopwTVK1WSwsLCyRmUw5RPk0Q0oDMOlnaEDlWUKyZLsGt6+vrnUajkamNUeGUoN3d3fLU1NTfRjoFYoJhiEkCLLEOi6rJzxD+ac2lf3JGUA85IcjZOjk5aRsFiEW9tu2SJCcE9ZIzMTGxhk6FRhG9JEFuKy7kNm4cAORYX+GEHIJtsm3z4rTL8HNfjAOoW5AM49HDogMfBpFDJz4/P1+BX/nN/HcedHlzc9MeZBVofxmW9E1+bmmPbi4I+oFdGR0Ojo6O6mn1SMzi4uI2iKiaLjG9IDkcrYJ+RMUcdwd1P2hKTVViYj1lbGE/cuijIIlvIId1SA6deBP7HY50Ug7lXJV1eU1aexwZzQuZJL1qFDFpdGGH3yCtgjhwSsISkza6VYXwyJ/xGly7kjRacdoAK2rSip6entZ5yChBzYL29vaWjcx34HvaSXUoKxndSgwdUG+l39BPf0JHjI5zlh1dyzaS6lor4uwbZFWMEtQIQkcqUmynOWY4420jEkSHPmWZMLKt8fHx19EqTUJsi6SzjP2yUYIaQYyZuIeJf02rg7e7KcVgmKFfiAzkPtt92o/uDUIrRglqBOGhItMXOfwPYvZlbJ1RhmK5JnLEaRJi0CvFj0YJmhYUmTUsKFE29A1SvDSjox2/Vy9iGYGSUYL6THp2dvZn0nF0yj70TzMi0MY/3IPsQQS8X4JcAsQs9Tt/d3enRoyFJkEh/9ze3q4knYT0ovNvGWFAUFmKiX7O+kE7mmlAkyA7xJaTTk5PT19wT18kc6ahwAmmJbcn+/gK6+ewf5ehRuR88RbXk07KPKXNMuZMNTMkJENApM6zskw1hoXmKGbf6nLabNd0Q5ANhBGZY6bDw0POfTZZBrlbSXVAWsnmru2L0IAaQRIyRPOUubm5zbQ6DEbl52d0fKAlYc5TwzUMIyid1AmmLCER4dnZmZoPUg1WGYUzYBSZNZLqgKQ6Os3OsuN1CUgDpE3bNhCNrZmxnQqPDUqfmG6g3DSKUM0H0czRMeaDGIx+AhkXaXXjkfqAZjvwKcHp6WljQFuZk3TDQHUeJI44eoNcA+vji14jdRS3knwGj1GO7HA/cgQ1uWdQV07vaueDorQDrIgrp0yK8cF30upKZ1qyRdKKHc8E+igjGQJIexCRQ8PJqoasov7FMqxgTWu5pxeSfPshP7dcrLY6CTXE99iJ4Zd+UnsLJPlGtFwtRTuLxWS+Epqu1FQRlxbuFRhHcLr0zLwNLCh6y5pSy0NaFk6jeZkY2lFNRWqxvDbRcv2Vh/N0B0a1ulGU2tLSUi7Sssjl+yAtqcXbMY6lZZFLwkxDaryG18rPVl4fUOWWUXyr1PKWlkWu3yiOKrUipGWRa056FKkVJS2L3JP2w0qtKGlZFPKddFapFSkti0KWfbJIrWhpWRS2LjZIakVLy6Kwf0Ug0qTmKoYbBYUSRICMBsjgqkX0perMzIyNtbgO1gQ5mVc/XEA9ozj0A0BqyEAyOW+lRn9UNi/fENVNwSjcgoie0SpC0dKymDDvAFdXV+Hq6uqYXXvHKsYfSNT/aTw8PDw8PDw8PDw8PDx+SfwLFufeeJmikf0AAAAASUVORK5CYII='></img>
                                                    <span>Tuyển dụng</span>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALgSURBVHgB7ZtPbtpAFMYfBqQKJMQN6pyg9ASFXXdJTxBygrBEiH8FhNgFThBu0PYEgRPUucF0z8IVSwT0TWuCpUIe43giHH0/yZqxGXsen9+Mn+w3RAAAAAAAAAAQOymyRKPRKKXT6U4qlZr1er0JWaDdbt9ut9sr3iaDweA7WcAhS2QymXsutPFjNv49xUy32y3qa3O1zDfhjixhTSA2vkh2sX39v1gT6K0QeQ6q1WrFQqFwu9lsrtjFD91NN1RXZAdX6EMf81ar1WQ0GimKQCSBeHK8Dsb/q7h5DPi8fe33+2MyJE2GtFqtKhdT3t5RctC2fi6Xy2o+nz+anGjkQfV63c1msw+0d23F24S9yfvvwqnU/a7der2+cRxHUbwUuY9vQd1nG74csMHlokN7e/3lcnkxHo99OpEMGcDilEOdKY5zKvy4VYfasqc91XO53EOz2fxFMcL9uiz8btfnUGJ2pN2M2/2kf9NBMZ/PV7k8eaiZPsUudxW+Yz+OiRP8vvtNLRaL3xQ/2gtU0Jd3rJG2UQeSu3325A9kgJFA4diGn17ec235jla4fYW97KOJS58K/3Ffe7Dug4PSm+fasq0qtOuSAUZDzJRjbh8XgQcrsggCRQEIJBB5iPH4v+MnVYeSQeSA9iVzUJGSE0lHBkNMILIHBbGFlZdUFtDvjCJNB5EF0nHQcDicUQLgt5suz5kUBQwxAQgkAIEEIJAABBKAQAIQSAACCUAgAQgkAIEEIJAABBKAQAIQSAACCUAgAQgkAIEEIJAABBKAQAIQSAACCUAgAVOBnvIMHccpUULgr6qfQrtG6YBGAvH3bS9Uv9ZZr3TmBDZWQ4eM8gmM0oD1ApIgY9QNHZ7ysTmdIew5OmGzSvs0HdXv9y/IAONMexapFIiUOHRCKdvvmZxjPEnrDnRHZDl5MmZUFHE0L1pQFyxLuHyFpU+R4HlScfHI4kx12jABAAAAAAAAwHnwB8+K5fmd17U9AAAAAElFTkSuQmCC'></img>
                                                    <span>21/11/2023</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={style.watchmore}>
                                            <a href='/Details2'>Xem Thêm</a>
                                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIxSURBVHgB7dlPTttAFMfxNw4OjRAo3VWqiHKEHKG5QXsCwrYUqT5BwwlMVegWOAHcINyA3AArCIkdERJy4hAP8/gjOYbNoBnEs36f5USRkq+cyfiZCAAAAAAAAAAAAAAAPgRFwkz3W3/mOf0OFCV6lv1oRFcJeSQqUBp/aVNYPy8sJTTLuj4jBSRIrV5rlpY42EDHzSZ5IipQfetymGt9VFpuT8M1b5HE7UHs9t/6YaDURnHNfJHh8uymq6LxmBwSdQU9W9m+6GmlToprmqgzCVePyTGRgdg0U5smynBxVX1L99YPyCGRP7Fn13G7uRzmA/MlOouv6MPGr4tNckDsFcQ+R8l4Ogu6xH/3C1QvNeclckB0IMaR6LVImvouIon+iRWlcducifIB8dmoSFG/sTXaoTeqTCDmI1KlAjHXkawDZf9bG3dz2lWKvB3vfakF1Kv/HB3ZvMd6kzZ30n2JcVie0y5Zsg5kDmci4zDz2a1vQ6wDqVxHWpPT+533YgL9JUsV3KQfZkYvNulc087K9qhPlir2N+82DqvQQdF9HFaJQL7iMPGBeJI4CdfOyEMcJjoQx3kYt5bGHTyW5aEaOSA20HvEYWLHHenS6kE5jtbqxGUctkQCPY5V1ffiGg/tP90pJ1PEInFX0GSvFfPEsLj2+EQjME80EucnfFF7ULb/tTPXtbPScsITxUaUJOSB9JGr1zhM3JNVc8f5NPTSp77jAAAAAAAAAAAAAADAB3IPfIjUhFXqOo4AAAAASUVORK5CYII='></img>
                                        </div>
                                    </li>
                                    <li className={style.ctcv}>
                                        <div className={style.namecv}>
                                            <div className={style.titlecv}>
                                                CÔNG NHÂN KHAI THÁC TRONG NƯỚC
                                            </div>
                                            <div className={style.diadiem_thoigian}>
                                                <div className={style.diadiemthoigianct}>
                                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVtSURBVHgB7VtLUuNIEC2+QfD1EdwnaLgAY04AfYKBE2B2DAHY4hfs2j5Bezm7oU8whgt036B1g/YELAi+857IwhqPZMsmSyKi60UIlaVSSfWUL6sySxjj4eHh4eHh4eHh4eHhkTfGTEGo1+vlx8fHDRQ/YqtgK8lGdJ6fn8OxsbEQ5cv7+/uL8/Pz0BSA3Ak6ODjYxO5380JKZoCw7yCseXx83DI5IjeC9vf3N9DBzyiW7TF0uo1jX2ktk5OT32PVSw8PDyWcW8a5dewrsXMhtiAvopwTVK1WSwsLCyRmUw5RPk0Q0oDMOlnaEDlWUKyZLsGt6+vrnUajkamNUeGUoN3d3fLU1NTfRjoFYoJhiEkCLLEOi6rJzxD+ac2lf3JGUA85IcjZOjk5aRsFiEW9tu2SJCcE9ZIzMTGxhk6FRhG9JEFuKy7kNm4cAORYX+GEHIJtsm3z4rTL8HNfjAOoW5AM49HDogMfBpFDJz4/P1+BX/nN/HcedHlzc9MeZBVofxmW9E1+bmmPbi4I+oFdGR0Ojo6O6mn1SMzi4uI2iKiaLjG9IDkcrYJ+RMUcdwd1P2hKTVViYj1lbGE/cuijIIlvIId1SA6deBP7HY50Ug7lXJV1eU1aexwZzQuZJL1qFDFpdGGH3yCtgjhwSsISkza6VYXwyJ/xGly7kjRacdoAK2rSip6entZ5yChBzYL29vaWjcx34HvaSXUoKxndSgwdUG+l39BPf0JHjI5zlh1dyzaS6lor4uwbZFWMEtQIQkcqUmynOWY4420jEkSHPmWZMLKt8fHx19EqTUJsi6SzjP2yUYIaQYyZuIeJf02rg7e7KcVgmKFfiAzkPtt92o/uDUIrRglqBOGhItMXOfwPYvZlbJ1RhmK5JnLEaRJi0CvFj0YJmhYUmTUsKFE29A1SvDSjox2/Vy9iGYGSUYL6THp2dvZn0nF0yj70TzMi0MY/3IPsQQS8X4JcAsQs9Tt/d3enRoyFJkEh/9ze3q4knYT0ovNvGWFAUFmKiX7O+kE7mmlAkyA7xJaTTk5PT19wT18kc6ahwAmmJbcn+/gK6+ewf5ehRuR88RbXk07KPKXNMuZMNTMkJENApM6zskw1hoXmKGbf6nLabNd0Q5ANhBGZY6bDw0POfTZZBrlbSXVAWsnmru2L0IAaQRIyRPOUubm5zbQ6DEbl52d0fKAlYc5TwzUMIyid1AmmLCER4dnZmZoPUg1WGYUzYBSZNZLqgKQ6Os3OsuN1CUgDpE3bNhCNrZmxnQqPDUqfmG6g3DSKUM0H0czRMeaDGIx+AhkXaXXjkfqAZjvwKcHp6WljQFuZk3TDQHUeJI44eoNcA+vji14jdRS3knwGj1GO7HA/cgQ1uWdQV07vaueDorQDrIgrp0yK8cF30upKZ1qyRdKKHc8E+igjGQJIexCRQ8PJqoasov7FMqxgTWu5pxeSfPshP7dcrLY6CTXE99iJ4Zd+UnsLJPlGtFwtRTuLxWS+Epqu1FQRlxbuFRhHcLr0zLwNLCh6y5pSy0NaFk6jeZkY2lFNRWqxvDbRcv2Vh/N0B0a1ulGU2tLSUi7Sssjl+yAtqcXbMY6lZZFLwkxDaryG18rPVl4fUOWWUXyr1PKWlkWu3yiOKrUipGWRa056FKkVJS2L3JP2w0qtKGlZFPKddFapFSkti0KWfbJIrWhpWRS2LjZIakVLy6Kwf0Ug0qTmKoYbBYUSRICMBsjgqkX0perMzIyNtbgO1gQ5mVc/XEA9ozj0A0BqyEAyOW+lRn9UNi/fENVNwSjcgoie0SpC0dKymDDvAFdXV+Hq6uqYXXvHKsYfSNT/aTw8PDw8PDw8PDw8PDx+SfwLFufeeJmikf0AAAAASUVORK5CYII='></img>
                                                    <span>Tuyển dụng</span>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALgSURBVHgB7ZtPbtpAFMYfBqQKJMQN6pyg9ASFXXdJTxBygrBEiH8FhNgFThBu0PYEgRPUucF0z8IVSwT0TWuCpUIe43giHH0/yZqxGXsen9+Mn+w3RAAAAAAAAAAQOymyRKPRKKXT6U4qlZr1er0JWaDdbt9ut9sr3iaDweA7WcAhS2QymXsutPFjNv49xUy32y3qa3O1zDfhjixhTSA2vkh2sX39v1gT6K0QeQ6q1WrFQqFwu9lsrtjFD91NN1RXZAdX6EMf81ar1WQ0GimKQCSBeHK8Dsb/q7h5DPi8fe33+2MyJE2GtFqtKhdT3t5RctC2fi6Xy2o+nz+anGjkQfV63c1msw+0d23F24S9yfvvwqnU/a7der2+cRxHUbwUuY9vQd1nG74csMHlokN7e/3lcnkxHo99OpEMGcDilEOdKY5zKvy4VYfasqc91XO53EOz2fxFMcL9uiz8btfnUGJ2pN2M2/2kf9NBMZ/PV7k8eaiZPsUudxW+Yz+OiRP8vvtNLRaL3xQ/2gtU0Jd3rJG2UQeSu3325A9kgJFA4diGn17ec235jla4fYW97KOJS58K/3Ffe7Dug4PSm+fasq0qtOuSAUZDzJRjbh8XgQcrsggCRQEIJBB5iPH4v+MnVYeSQeSA9iVzUJGSE0lHBkNMILIHBbGFlZdUFtDvjCJNB5EF0nHQcDicUQLgt5suz5kUBQwxAQgkAIEEIJAABBKAQAIQSAACCUAgAQgkAIEEIJAABBKAQAIQSAACCUAgAQgkAIEEIJAABBKAQAIQSAACCUAgAVOBnvIMHccpUULgr6qfQrtG6YBGAvH3bS9Uv9ZZr3TmBDZWQ4eM8gmM0oD1ApIgY9QNHZ7ysTmdIew5OmGzSvs0HdXv9y/IAONMexapFIiUOHRCKdvvmZxjPEnrDnRHZDl5MmZUFHE0L1pQFyxLuHyFpU+R4HlScfHI4kx12jABAAAAAAAAwHnwB8+K5fmd17U9AAAAAElFTkSuQmCC'></img>
                                                    <span>21/11/2023</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={style.watchmore}>
                                        <a href='/Details3'>Xem Thêm</a>
                                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIxSURBVHgB7dlPTttAFMfxNw4OjRAo3VWqiHKEHKG5QXsCwrYUqT5BwwlMVegWOAHcINyA3AArCIkdERJy4hAP8/gjOYbNoBnEs36f5USRkq+cyfiZCAAAAAAAAAAAAAAAPgRFwkz3W3/mOf0OFCV6lv1oRFcJeSQqUBp/aVNYPy8sJTTLuj4jBSRIrV5rlpY42EDHzSZ5IipQfetymGt9VFpuT8M1b5HE7UHs9t/6YaDURnHNfJHh8uymq6LxmBwSdQU9W9m+6GmlToprmqgzCVePyTGRgdg0U5smynBxVX1L99YPyCGRP7Fn13G7uRzmA/MlOouv6MPGr4tNckDsFcQ+R8l4Ogu6xH/3C1QvNeclckB0IMaR6LVImvouIon+iRWlcducifIB8dmoSFG/sTXaoTeqTCDmI1KlAjHXkawDZf9bG3dz2lWKvB3vfakF1Kv/HB3ZvMd6kzZ30n2JcVie0y5Zsg5kDmci4zDz2a1vQ6wDqVxHWpPT+533YgL9JUsV3KQfZkYvNulc087K9qhPlir2N+82DqvQQdF9HFaJQL7iMPGBeJI4CdfOyEMcJjoQx3kYt5bGHTyW5aEaOSA20HvEYWLHHenS6kE5jtbqxGUctkQCPY5V1ffiGg/tP90pJ1PEInFX0GSvFfPEsLj2+EQjME80EucnfFF7ULb/tTPXtbPScsITxUaUJOSB9JGr1zhM3JNVc8f5NPTSp77jAAAAAAAAAAAAAADAB3IPfIjUhFXqOo4AAAAASUVORK5CYII='></img>
                                        </div>
                                    </li>
                                    <li className={style.ctcv}>
                                        <div className={style.namecv}>
                                            <div className={style.titlecv}>
                                                NHÂN VIÊN KINH DOANH LOGISTICS
                                            </div>
                                            <div className={style.diadiem_thoigian}>
                                                <div className={style.diadiemthoigianct}>
                                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVtSURBVHgB7VtLUuNIEC2+QfD1EdwnaLgAY04AfYKBE2B2DAHY4hfs2j5Bezm7oU8whgt036B1g/YELAi+857IwhqPZMsmSyKi60UIlaVSSfWUL6sySxjj4eHh4eHh4eHh4eHhkTfGTEGo1+vlx8fHDRQ/YqtgK8lGdJ6fn8OxsbEQ5cv7+/uL8/Pz0BSA3Ak6ODjYxO5380JKZoCw7yCseXx83DI5IjeC9vf3N9DBzyiW7TF0uo1jX2ktk5OT32PVSw8PDyWcW8a5dewrsXMhtiAvopwTVK1WSwsLCyRmUw5RPk0Q0oDMOlnaEDlWUKyZLsGt6+vrnUajkamNUeGUoN3d3fLU1NTfRjoFYoJhiEkCLLEOi6rJzxD+ac2lf3JGUA85IcjZOjk5aRsFiEW9tu2SJCcE9ZIzMTGxhk6FRhG9JEFuKy7kNm4cAORYX+GEHIJtsm3z4rTL8HNfjAOoW5AM49HDogMfBpFDJz4/P1+BX/nN/HcedHlzc9MeZBVofxmW9E1+bmmPbi4I+oFdGR0Ojo6O6mn1SMzi4uI2iKiaLjG9IDkcrYJ+RMUcdwd1P2hKTVViYj1lbGE/cuijIIlvIId1SA6deBP7HY50Ug7lXJV1eU1aexwZzQuZJL1qFDFpdGGH3yCtgjhwSsISkza6VYXwyJ/xGly7kjRacdoAK2rSip6entZ5yChBzYL29vaWjcx34HvaSXUoKxndSgwdUG+l39BPf0JHjI5zlh1dyzaS6lor4uwbZFWMEtQIQkcqUmynOWY4420jEkSHPmWZMLKt8fHx19EqTUJsi6SzjP2yUYIaQYyZuIeJf02rg7e7KcVgmKFfiAzkPtt92o/uDUIrRglqBOGhItMXOfwPYvZlbJ1RhmK5JnLEaRJi0CvFj0YJmhYUmTUsKFE29A1SvDSjox2/Vy9iGYGSUYL6THp2dvZn0nF0yj70TzMi0MY/3IPsQQS8X4JcAsQs9Tt/d3enRoyFJkEh/9ze3q4knYT0ovNvGWFAUFmKiX7O+kE7mmlAkyA7xJaTTk5PT19wT18kc6ahwAmmJbcn+/gK6+ewf5ehRuR88RbXk07KPKXNMuZMNTMkJENApM6zskw1hoXmKGbf6nLabNd0Q5ANhBGZY6bDw0POfTZZBrlbSXVAWsnmru2L0IAaQRIyRPOUubm5zbQ6DEbl52d0fKAlYc5TwzUMIyid1AmmLCER4dnZmZoPUg1WGYUzYBSZNZLqgKQ6Os3OsuN1CUgDpE3bNhCNrZmxnQqPDUqfmG6g3DSKUM0H0czRMeaDGIx+AhkXaXXjkfqAZjvwKcHp6WljQFuZk3TDQHUeJI44eoNcA+vji14jdRS3knwGj1GO7HA/cgQ1uWdQV07vaueDorQDrIgrp0yK8cF30upKZ1qyRdKKHc8E+igjGQJIexCRQ8PJqoasov7FMqxgTWu5pxeSfPshP7dcrLY6CTXE99iJ4Zd+UnsLJPlGtFwtRTuLxWS+Epqu1FQRlxbuFRhHcLr0zLwNLCh6y5pSy0NaFk6jeZkY2lFNRWqxvDbRcv2Vh/N0B0a1ulGU2tLSUi7Sssjl+yAtqcXbMY6lZZFLwkxDaryG18rPVl4fUOWWUXyr1PKWlkWu3yiOKrUipGWRa056FKkVJS2L3JP2w0qtKGlZFPKddFapFSkti0KWfbJIrWhpWRS2LjZIakVLy6Kwf0Ug0qTmKoYbBYUSRICMBsjgqkX0perMzIyNtbgO1gQ5mVc/XEA9ozj0A0BqyEAyOW+lRn9UNi/fENVNwSjcgoie0SpC0dKymDDvAFdXV+Hq6uqYXXvHKsYfSNT/aTw8PDw8PDw8PDw8PDx+SfwLFufeeJmikf0AAAAASUVORK5CYII='></img>
                                                    <span>Tuyển dụng</span>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALgSURBVHgB7ZtPbtpAFMYfBqQKJMQN6pyg9ASFXXdJTxBygrBEiH8FhNgFThBu0PYEgRPUucF0z8IVSwT0TWuCpUIe43giHH0/yZqxGXsen9+Mn+w3RAAAAAAAAAAQOymyRKPRKKXT6U4qlZr1er0JWaDdbt9ut9sr3iaDweA7WcAhS2QymXsutPFjNv49xUy32y3qa3O1zDfhjixhTSA2vkh2sX39v1gT6K0QeQ6q1WrFQqFwu9lsrtjFD91NN1RXZAdX6EMf81ar1WQ0GimKQCSBeHK8Dsb/q7h5DPi8fe33+2MyJE2GtFqtKhdT3t5RctC2fi6Xy2o+nz+anGjkQfV63c1msw+0d23F24S9yfvvwqnU/a7der2+cRxHUbwUuY9vQd1nG74csMHlokN7e/3lcnkxHo99OpEMGcDilEOdKY5zKvy4VYfasqc91XO53EOz2fxFMcL9uiz8btfnUGJ2pN2M2/2kf9NBMZ/PV7k8eaiZPsUudxW+Yz+OiRP8vvtNLRaL3xQ/2gtU0Jd3rJG2UQeSu3325A9kgJFA4diGn17ec235jla4fYW97KOJS58K/3Ffe7Dug4PSm+fasq0qtOuSAUZDzJRjbh8XgQcrsggCRQEIJBB5iPH4v+MnVYeSQeSA9iVzUJGSE0lHBkNMILIHBbGFlZdUFtDvjCJNB5EF0nHQcDicUQLgt5suz5kUBQwxAQgkAIEEIJAABBKAQAIQSAACCUAgAQgkAIEEIJAABBKAQAIQSAACCUAgAQgkAIEEIJAABBKAQAIQSAACCUAgAVOBnvIMHccpUULgr6qfQrtG6YBGAvH3bS9Uv9ZZr3TmBDZWQ4eM8gmM0oD1ApIgY9QNHZ7ysTmdIew5OmGzSvs0HdXv9y/IAONMexapFIiUOHRCKdvvmZxjPEnrDnRHZDl5MmZUFHE0L1pQFyxLuHyFpU+R4HlScfHI4kx12jABAAAAAAAAwHnwB8+K5fmd17U9AAAAAElFTkSuQmCC'></img>
                                                    <span>21/11/2023</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={style.watchmore}>
                                        <a href='/Details4'>Xem Thêm</a>
                                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIxSURBVHgB7dlPTttAFMfxNw4OjRAo3VWqiHKEHKG5QXsCwrYUqT5BwwlMVegWOAHcINyA3AArCIkdERJy4hAP8/gjOYbNoBnEs36f5USRkq+cyfiZCAAAAAAAAAAAAAAAPgRFwkz3W3/mOf0OFCV6lv1oRFcJeSQqUBp/aVNYPy8sJTTLuj4jBSRIrV5rlpY42EDHzSZ5IipQfetymGt9VFpuT8M1b5HE7UHs9t/6YaDURnHNfJHh8uymq6LxmBwSdQU9W9m+6GmlToprmqgzCVePyTGRgdg0U5smynBxVX1L99YPyCGRP7Fn13G7uRzmA/MlOouv6MPGr4tNckDsFcQ+R8l4Ogu6xH/3C1QvNeclckB0IMaR6LVImvouIon+iRWlcducifIB8dmoSFG/sTXaoTeqTCDmI1KlAjHXkawDZf9bG3dz2lWKvB3vfakF1Kv/HB3ZvMd6kzZ30n2JcVie0y5Zsg5kDmci4zDz2a1vQ6wDqVxHWpPT+533YgL9JUsV3KQfZkYvNulc087K9qhPlir2N+82DqvQQdF9HFaJQL7iMPGBeJI4CdfOyEMcJjoQx3kYt5bGHTyW5aEaOSA20HvEYWLHHenS6kE5jtbqxGUctkQCPY5V1ffiGg/tP90pJ1PEInFX0GSvFfPEsLj2+EQjME80EucnfFF7ULb/tTPXtbPScsITxUaUJOSB9JGr1zhM3JNVc8f5NPTSp77jAAAAAAAAAAAAAADAB3IPfIjUhFXqOo4AAAAASUVORK5CYII='></img>
                                        </div>
                                    </li>
                                    <li className={style.ctcv}>
                                        <div className={style.namecv}>
                                            <div className={style.titlecv}>
                                                NHÂN VIÊN KINH DOANH - CHI NHÁNH HÀ NỘI, ĐÀ NẴNG,
                                            </div>
                                            <div className={style.titlecv}>
                                                TP HỒ CHÍ MINH
                                            </div>
                                            <div className={style.diadiem_thoigian}>
                                                <div className={style.diadiemthoigianct}>
                                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVtSURBVHgB7VtLUuNIEC2+QfD1EdwnaLgAY04AfYKBE2B2DAHY4hfs2j5Bezm7oU8whgt036B1g/YELAi+857IwhqPZMsmSyKi60UIlaVSSfWUL6sySxjj4eHh4eHh4eHh4eHhkTfGTEGo1+vlx8fHDRQ/YqtgK8lGdJ6fn8OxsbEQ5cv7+/uL8/Pz0BSA3Ak6ODjYxO5380JKZoCw7yCseXx83DI5IjeC9vf3N9DBzyiW7TF0uo1jX2ktk5OT32PVSw8PDyWcW8a5dewrsXMhtiAvopwTVK1WSwsLCyRmUw5RPk0Q0oDMOlnaEDlWUKyZLsGt6+vrnUajkamNUeGUoN3d3fLU1NTfRjoFYoJhiEkCLLEOi6rJzxD+ac2lf3JGUA85IcjZOjk5aRsFiEW9tu2SJCcE9ZIzMTGxhk6FRhG9JEFuKy7kNm4cAORYX+GEHIJtsm3z4rTL8HNfjAOoW5AM49HDogMfBpFDJz4/P1+BX/nN/HcedHlzc9MeZBVofxmW9E1+bmmPbi4I+oFdGR0Ojo6O6mn1SMzi4uI2iKiaLjG9IDkcrYJ+RMUcdwd1P2hKTVViYj1lbGE/cuijIIlvIId1SA6deBP7HY50Ug7lXJV1eU1aexwZzQuZJL1qFDFpdGGH3yCtgjhwSsISkza6VYXwyJ/xGly7kjRacdoAK2rSip6entZ5yChBzYL29vaWjcx34HvaSXUoKxndSgwdUG+l39BPf0JHjI5zlh1dyzaS6lor4uwbZFWMEtQIQkcqUmynOWY4420jEkSHPmWZMLKt8fHx19EqTUJsi6SzjP2yUYIaQYyZuIeJf02rg7e7KcVgmKFfiAzkPtt92o/uDUIrRglqBOGhItMXOfwPYvZlbJ1RhmK5JnLEaRJi0CvFj0YJmhYUmTUsKFE29A1SvDSjox2/Vy9iGYGSUYL6THp2dvZn0nF0yj70TzMi0MY/3IPsQQS8X4JcAsQs9Tt/d3enRoyFJkEh/9ze3q4knYT0ovNvGWFAUFmKiX7O+kE7mmlAkyA7xJaTTk5PT19wT18kc6ahwAmmJbcn+/gK6+ewf5ehRuR88RbXk07KPKXNMuZMNTMkJENApM6zskw1hoXmKGbf6nLabNd0Q5ANhBGZY6bDw0POfTZZBrlbSXVAWsnmru2L0IAaQRIyRPOUubm5zbQ6DEbl52d0fKAlYc5TwzUMIyid1AmmLCER4dnZmZoPUg1WGYUzYBSZNZLqgKQ6Os3OsuN1CUgDpE3bNhCNrZmxnQqPDUqfmG6g3DSKUM0H0czRMeaDGIx+AhkXaXXjkfqAZjvwKcHp6WljQFuZk3TDQHUeJI44eoNcA+vji14jdRS3knwGj1GO7HA/cgQ1uWdQV07vaueDorQDrIgrp0yK8cF30upKZ1qyRdKKHc8E+igjGQJIexCRQ8PJqoasov7FMqxgTWu5pxeSfPshP7dcrLY6CTXE99iJ4Zd+UnsLJPlGtFwtRTuLxWS+Epqu1FQRlxbuFRhHcLr0zLwNLCh6y5pSy0NaFk6jeZkY2lFNRWqxvDbRcv2Vh/N0B0a1ulGU2tLSUi7Sssjl+yAtqcXbMY6lZZFLwkxDaryG18rPVl4fUOWWUXyr1PKWlkWu3yiOKrUipGWRa056FKkVJS2L3JP2w0qtKGlZFPKddFapFSkti0KWfbJIrWhpWRS2LjZIakVLy6Kwf0Ug0qTmKoYbBYUSRICMBsjgqkX0perMzIyNtbgO1gQ5mVc/XEA9ozj0A0BqyEAyOW+lRn9UNi/fENVNwSjcgoie0SpC0dKymDDvAFdXV+Hq6uqYXXvHKsYfSNT/aTw8PDw8PDw8PDw8PDx+SfwLFufeeJmikf0AAAAASUVORK5CYII='></img>
                                                    <span>Tuyển dụng</span>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALgSURBVHgB7ZtPbtpAFMYfBqQKJMQN6pyg9ASFXXdJTxBygrBEiH8FhNgFThBu0PYEgRPUucF0z8IVSwT0TWuCpUIe43giHH0/yZqxGXsen9+Mn+w3RAAAAAAAAAAQOymyRKPRKKXT6U4qlZr1er0JWaDdbt9ut9sr3iaDweA7WcAhS2QymXsutPFjNv49xUy32y3qa3O1zDfhjixhTSA2vkh2sX39v1gT6K0QeQ6q1WrFQqFwu9lsrtjFD91NN1RXZAdX6EMf81ar1WQ0GimKQCSBeHK8Dsb/q7h5DPi8fe33+2MyJE2GtFqtKhdT3t5RctC2fi6Xy2o+nz+anGjkQfV63c1msw+0d23F24S9yfvvwqnU/a7der2+cRxHUbwUuY9vQd1nG74csMHlokN7e/3lcnkxHo99OpEMGcDilEOdKY5zKvy4VYfasqc91XO53EOz2fxFMcL9uiz8btfnUGJ2pN2M2/2kf9NBMZ/PV7k8eaiZPsUudxW+Yz+OiRP8vvtNLRaL3xQ/2gtU0Jd3rJG2UQeSu3325A9kgJFA4diGn17ec235jla4fYW97KOJS58K/3Ffe7Dug4PSm+fasq0qtOuSAUZDzJRjbh8XgQcrsggCRQEIJBB5iPH4v+MnVYeSQeSA9iVzUJGSE0lHBkNMILIHBbGFlZdUFtDvjCJNB5EF0nHQcDicUQLgt5suz5kUBQwxAQgkAIEEIJAABBKAQAIQSAACCUAgAQgkAIEEIJAABBKAQAIQSAACCUAgAQgkAIEEIJAABBKAQAIQSAACCUAgAVOBnvIMHccpUULgr6qfQrtG6YBGAvH3bS9Uv9ZZr3TmBDZWQ4eM8gmM0oD1ApIgY9QNHZ7ysTmdIew5OmGzSvs0HdXv9y/IAONMexapFIiUOHRCKdvvmZxjPEnrDnRHZDl5MmZUFHE0L1pQFyxLuHyFpU+R4HlScfHI4kx12jABAAAAAAAAwHnwB8+K5fmd17U9AAAAAElFTkSuQmCC'></img>
                                                    <span>21/11/2023</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={style.watchmore}>
                                        <a href='/Details5'>Xem Thêm</a>
                                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIxSURBVHgB7dlPTttAFMfxNw4OjRAo3VWqiHKEHKG5QXsCwrYUqT5BwwlMVegWOAHcINyA3AArCIkdERJy4hAP8/gjOYbNoBnEs36f5USRkq+cyfiZCAAAAAAAAAAAAAAAPgRFwkz3W3/mOf0OFCV6lv1oRFcJeSQqUBp/aVNYPy8sJTTLuj4jBSRIrV5rlpY42EDHzSZ5IipQfetymGt9VFpuT8M1b5HE7UHs9t/6YaDURnHNfJHh8uymq6LxmBwSdQU9W9m+6GmlToprmqgzCVePyTGRgdg0U5smynBxVX1L99YPyCGRP7Fn13G7uRzmA/MlOouv6MPGr4tNckDsFcQ+R8l4Ogu6xH/3C1QvNeclckB0IMaR6LVImvouIon+iRWlcducifIB8dmoSFG/sTXaoTeqTCDmI1KlAjHXkawDZf9bG3dz2lWKvB3vfakF1Kv/HB3ZvMd6kzZ30n2JcVie0y5Zsg5kDmci4zDz2a1vQ6wDqVxHWpPT+533YgL9JUsV3KQfZkYvNulc087K9qhPlir2N+82DqvQQdF9HFaJQL7iMPGBeJI4CdfOyEMcJjoQx3kYt5bGHTyW5aEaOSA20HvEYWLHHenS6kE5jtbqxGUctkQCPY5V1ffiGg/tP90pJ1PEInFX0GSvFfPEsLj2+EQjME80EucnfFF7ULb/tTPXtbPScsITxUaUJOSB9JGr1zhM3JNVc8f5NPTSp77jAAAAAAAAAAAAAADAB3IPfIjUhFXqOo4AAAAASUVORK5CYII='></img>
                                        </div>
                                    </li>
                                </div>
                            </div>
                            <div className={style.rowcv_ha}>
                                <a href='/Recruitment'><img className={style.listha} src='https://admin.ems.com.vn/filemedia/post/Nh%C3%A2n%20vi%C3%AAn%20kinh%20doanh.1613703193.webp'></img></a>
                                <a href='/Recruitment'><img className={style.listha} src='https://admin.ems.com.vn/filemedia/post/2-1606124727.webp'></img></a>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
export default Recruitment