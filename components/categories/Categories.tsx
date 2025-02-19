import React from 'react'
import classes from './categories.module.css'
import cat1 from '@/public/cat1.png';
import cat2 from '@/public/cat2.png';
import cat3 from '@/public/cat3.jpg';
import Image from 'next/image';

const Categories = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.category}>
                <Image src={cat1} alt='Politics'  layout='responsive' loading='eager' />
                <h2>Politics</h2>
            </div>
            <div className={classes.category}>
                <img src={cat2.src} alt='Economic' width={370} height={190} />
                <h2>Economic</h2>
            </div>
            <div className={classes.category}>
                <Image src={cat3} alt='Sport' width={370} height={190} layout='responsive' placeholder='blur' />
                <h2>Sport</h2>
            </div>
        </div>
    )
}

export default Categories
