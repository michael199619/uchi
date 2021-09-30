import {FC} from 'react'
import styles from '../app/styles/index.module.sass'
import BaseLayout from '../app/layouts/BaseLayout/BaseLayout'
import Chart from '../app/components/local/Chart/Chart'
import {Education} from '../app/types/staff'

import {Form} from 'react-bootstrap'
import InfoBlock from '../app/components/local/InfoBlock/InfoBlock'

const Index: FC = () => {
    return (
        <BaseLayout title='Главная' className={styles.Wrapper}>
            <div className={styles.InfoBlock}>
                <InfoBlock title="Текучесть" data="3 человека" dynamic={+20.45}/>
            </div>
            <div className={styles.SelectTimeInterval}>
                <h2 className={styles.Title}>Промежуток времени</h2>
                <Form className="Label">от</Form>
                <Form.Control type="date"/>
                <Form className="Label">до</Form>
                <Form.Control type="date"/>
            </div>
            <div className={styles.Charts}>
                <Chart filter={{age: 32}} staff={[
                    {
                        age: 10,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                    {
                        age: 12,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 30000
                    },
                    {
                        age: 11,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                    {
                        age: 12,
                        education: Education.HIGHER,
                        have_children: false,
                        salary: 20000
                    },
                ]}/>
            </div>
        </BaseLayout>
    )
}

export default Index