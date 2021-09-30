import {FC} from 'react'
import styles from './InfoBlock.module.sass'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import UpTend from './uptend.svg'
import DownTend from './downtend.svg'
interface Props {
    title: string,
    data: string,
    dynamic: number
}
const InfoBlock: FC<Props> = ({title, data, dynamic}) => {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.Left}>
                <p className={styles.Title}>{title}</p>
                <p className={styles.Data}>{data}</p>
                <div className={styles.DynamicWrapper}>
                    <div className={styles.Dynamic}>
                    <Image className={styles.TendIcon} src={dynamic > 0 && UpTend || dynamic < 0 && DownTend}/>
                        <p className={`${styles.DynamicText} ${dynamic > 0 && styles.Green} ${dynamic < 0 && styles.Red}`}>{Math.abs(dynamic)}%</p>
                    </div>
                    <p className={styles.PostText}>За последний месяц</p>
                </div>
            </div>
            <div className={styles.Right}>

            </div>
        </div>
    )
}

export default InfoBlock