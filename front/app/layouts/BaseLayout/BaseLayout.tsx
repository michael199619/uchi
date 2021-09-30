import {FC, PropsWithChildren} from 'react'
import styles from './BaseLayout.module.sass'
import Link from 'next/link'
import Image from 'next/image'

import {Props} from '../../types/props'
import MainIcon from './icons/main.svg'
import MapIcon from './icons/map.svg'
import AnalyticsIcon from './icons/analitycs.svg'
import ProfileIcon from './icons/profile.svg'
import QuestioningIcon from './icons/questioning.svg'

interface BaseLayoutProps extends Props{
    title: string
}

const BaseLayout: FC<BaseLayoutProps> = ({children, title, className}) => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.SideBar}>

                <div className={styles.NavBar}>
                    <div className={styles.LinkWrapper}>
                        <Image src={MainIcon} alt="" className={styles.LinkIcon}/>
                        <Link href="/">
                            <a href="" className={styles.LinkText}>Главная</a>
                        </Link>
                    </div>
                    <div className={styles.LinkWrapper}>
                        <Image src={AnalyticsIcon} alt="" className={styles.LinkIcon}/>
                        <Link href="/analitycs">
                            <a href="" className={styles.LinkText}>Аналитика</a>
                        </Link>
                    </div>
                    <div className={styles.LinkWrapper}>
                        <Image src={MapIcon} alt="" className={styles.LinkIcon}/>
                        <Link href="/map">
                            <a href="" className={styles.LinkText}>Карта</a>
                        </Link>
                    </div>
                    <div className={styles.LinkWrapper}>
                        <Image src={QuestioningIcon} alt="" className={styles.LinkIcon}/>
                        <Link href="/questioning">
                            <a href="" className={styles.LinkText}>Анкетирование</a>
                        </Link>
                    </div>
                    <div className={styles.LinkWrapper}>
                        <Image src={ProfileIcon} alt="" className={styles.LinkIcon}/>
                        <Link href="/profile">
                            <a href="" className={styles.LinkText}>Профиль</a>
                        </Link>
                    </div>
                </div>
                <p className={styles.Text}>росатом.аналитика — от людей и для людей</p>
            </div>
            <div className={styles.ContentWrapper}>
                <div className={styles.ColorBar}/>
                <div className={styles.ContentSubWrapper}>
                    <header className={`${styles.Header} ${className}`}>
                        <p className={styles.HeaderTitle}>{title}</p>
                    </header>
                    <div className={`${styles.ContentInner} ${className}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

// @ts-ignore
export default BaseLayout