import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import CheckBox from '../CheckBox';
import React, { useState } from 'react'
import FileUpload from '../FileUpload';
import Input from '../Input';
import Select from '../Select';
import Btn from '../../Components/Btn';
import Loading from '../loading';


export default function RequestRent({ type }) {
    const [loading, setloading] = useState(false)
    const [selectdataneed, setSelectdataneed] = useState(null);
    const [statusproduct, setstatusproduct] = useState(null);
    const [garantystatus, setgarantystatus] = useState(null);
    const [selectdataexpire, setSelectdataexpire] = useState(null);
    const [price, setPrice] = useState('')
    const selectdataneedP = ({ ref }) => (
        <div className="w-full">
            <input
                readOnly
                ref={ref} // necessary
                placeholder={'تاریخ نیاز'}
                value={selectdataneed ? selectdataneed.year + '/' + selectdataneed.month + '/' + selectdataneed.day : ''}
                className='text-sm sans-bolish placeholder:text-black
             dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none
              focus:border-primary transition duration-200'
            />
        </div>
    )
    const selectdataexpireP = ({ ref }) => (
        <div className="w-full">
            <input
                readOnly
                ref={ref} // necessary
                placeholder={'اعتبار زمانی این آگهی'}
                value={selectdataexpire ? selectdataexpire.year + '/' + selectdataexpire.month + '/' + selectdataexpire.day : ''}
                className='text-sm sans-bolish placeholder:text-black
             dark:border-secondery rounded-xl py-4 px-6 bg-white border w-full border-gray-300 focus:outline-none
              focus:border-primary transition duration-200'
            />
        </div>
    )
    const handleClose = () => {
        setloading(false);
    };
    const submitHandler = () => {
        setloading(!loading);
        console.log('submitHandler')
    }
    return (
        <div className='my-2 w-full'>
            <Loading handleClose={handleClose} loading={loading} />
            <h1 className='w-full text-3xl my-10 text-brown dark:text-textdark sans-bolisher'><span className='text-primary sans-bolisher'>{type.name}</span></h1>
            <div className="grid lg:grid-cols-3 gap-4 relative w-full mt-3">
                <div className='relative block'>
                    <Input place={'نام کاربر درخواست کننده'} value={''} loading={loading} />
                </div>
                <div className='relative block w-full'>
                    <div className='w-full'>
                        <DatePicker
                            value={selectdataneed}
                            onChange={setSelectdataneed}
                            locale={'fa'}
                            renderInput={selectdataneedP} // render a custom input
                            shouldHighlightWeekends
                            calendarClassName='sans-bolish w-full'
                        />
                    </div>
                </div>
                <div className='relative block'>
                    <Input place={'تعداد'} type={'number'} value={''} loading={loading} />
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 relative w-full mt-3">
                <div className='relative block'>
                    <Select place={'وضعیت کالا'} value={statusproduct} onChange={setstatusproduct} data={[{ name: 'نو' }, { name: 'دست دوم' }]} />
                </div>
                <div className='relative block'>
                    <Select place={'گارانتی'} value={garantystatus} onChange={setgarantystatus} data={[{ name: 'دارد' }, { name: 'ندارد' }]} />
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 relative w-full mt-3">
                <div className='relative block'>
                    <Input place={'حداقل و حداکثر قیمت پیشنهادی'} value={price} onChange={(event) => setPrice(event.target.value)} type={'text'} inputMode={'number'} />
                    {price.length > 2 && <div className="my-2 sans-bolish text-gray-400 text-sm">{Number(price).toLocaleString() + '   ' + 'تومان'}</div>}
                </div>
                <div className='relative block'>
                    <div className='w-full'>
                        <DatePicker
                            value={selectdataexpire}
                            onChange={setSelectdataexpire}
                            locale={'fa'}
                            renderInput={selectdataexpireP} // render a custom input
                            shouldHighlightWeekends
                            calendarClassName='sans-bolish w-full'
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center mt-4">
                <CheckBox title={'را خوانده ام و موارد مربوطه را میپذیرم'} titlelink={'قوانین ثبت کالا یا تجهیزات'} />
            </div>
            <div className='mt-6 w-full relative'>
                <Btn title={'بارگذاری'} onClick={submitHandler} />
            </div>

        </div>
    )
}

