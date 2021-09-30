import {Moment} from 'moment/moment'
import moment from 'moment'
export function generateLabelsByDataGap(data_from: Date, data_to: Date): string[] {
    let labels: string[] = []
    labels.push(moment(data_from).format('YYYY'))
    labels.push(moment(data_to).format('YYYY'))
    return labels
}