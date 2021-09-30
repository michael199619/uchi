import {FC, useState} from 'react'
import styles from './Chart.module.sass'
import {Line} from 'react-chartjs-2'
import {StaffResponse, ChartDataFormat} from '../../../types/staff'
import {Form, FormControl, Dropdown, DropdownButton, InputGroup} from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/DropdownMenu'

const Chart: FC<StaffResponse> = (response) => {
    const [selectedOptions, setSelectedOptions] = useState({})

    function convertStaffResponseToChartDataFormat(response: StaffResponse): ChartDataFormat[] {
        let charts_data_format: ChartDataFormat[] = []
        for (let key in response.filter) {
            // @ts-ignore
            const dataset = response.staff.map(person => person[key])
            // @ts-ignore
            let chart_data: ChartDataFormat = {
                label: key,
                data: dataset,
                type: 'line',
            }
            charts_data_format.push(chart_data)
        }
        return charts_data_format
    }

    const data = convertStaffResponseToChartDataFormat(response)
    const [type, setType] = useState('Dictamen')
    return (
        <div className={styles.Wrapper}>
            <Line className={styles.Chart} data={{
                datasets: [{
                    data: [10, 12, 14, 15, 18, 16, 22, 23],
                    type: 'line',
                    label: 'age',
                }],
                labels: Array.from(Array(data[0].data.length).fill('')),
            }}/>

            <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Стаж"
            />
            <FormControl as="select">
                <option value="">Высшее образование</option>
                <option value="">Средене специальное образование</option>
                <option value="">Среднее общее образование</option>
            </FormControl>
            <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Частота пересмотра зарплаты в месяц"
            />
            <FormControl as="select">
                <option value="">Есть наставник</option>
                <option value="">Нет наставника</option>
            </FormControl>
        </div>
    )
}

export default Chart