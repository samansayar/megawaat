import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import React, { Fragment, useState } from 'react'
import NavItem from '../Components/NavItem';
import Header from '../Layouts/Header'

export default function Terms() {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };
    return (
        <Header title={'قوانین و مقررات'}>
            <div className='lg:pt-32 lg:px-52 mt-10 pb-40 z-40'>
                <div className='lg:text-[50px] text-2xl -z-40 sans-bolisher lg:py-8 py-4 text-blacker dark:text-textdark'>قوانین و مقررات</div>
                <div className='p-8 lg:mt-10 bg-white rounded-[25px] dark:bg-brown w-full flex justify-center flex-col space-y-6 items-center'>
                    <Accordion className='font-static w-full'
                        open={open === 1}
                        animate={customAnimation}
                        onClick={() => handleOpen(1)}>
                        <AccordionHeader className='font-static lg:text-md text-sm dark:text-black'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</AccordionHeader>
                        <AccordionBody className='font-static leading-9 dark:text-textdark'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </AccordionBody>
                    </Accordion>
                    <Accordion className='font-static w-full'
                        open={open === 2}
                        animate={customAnimation}
                        onClick={() => handleOpen(2)}>
                        <AccordionHeader className='font-static lg:text-md text-sm dark:text-black'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</AccordionHeader>
                        <AccordionBody className='font-static leading-9 dark:text-textdark'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </AccordionBody>
                    </Accordion>
                    <Accordion className='font-static w-full'
                        open={open === 3}
                        animate={customAnimation}
                        onClick={() => handleOpen(3)}>
                        <AccordionHeader className='font-static lg:text-md text-sm dark:text-black'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</AccordionHeader>
                        <AccordionBody className='font-static leading-9 dark:text-textdark'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </AccordionBody>
                    </Accordion>
                    <Accordion className='font-static w-full'
                        open={open === 4}
                        animate={customAnimation}
                        onClick={() => handleOpen(4)}>
                        <AccordionHeader className='font-static lg:text-md text-sm dark:text-black'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</AccordionHeader>
                        <AccordionBody className='font-static leading-9 dark:text-textdark'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </AccordionBody>
                    </Accordion>
                    <Accordion className='font-static w-full'
                        open={open === 5}
                        animate={customAnimation}
                        onClick={() => handleOpen(5)}>
                        <AccordionHeader className='font-static lg:text-md text-sm dark:text-black'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</AccordionHeader>
                        <AccordionBody className='font-static leading-9 dark:text-textdark'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </Header>
    )
}
