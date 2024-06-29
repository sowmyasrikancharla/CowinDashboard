// Write your code here
import {
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
  Bar,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {barChartDataDetails} = props
  const DataFormatter = number => `${(number * 1000).toString()}k`
  return (
    <div className="res-con">
      <h2 className="vaccination-head">Vaccination Coverage</h2>
      <BarChart
        className="main-con"
        data={barChartDataDetails}
        margin={{top: 1, left: 1}}
        width={1000}
        height={300}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: ' #cbd5e1',
            strokeWidth: 0,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: '#cbd5e1',
            strokeWidth: 0,
          }}
        />
        <Legend wrapperStyle={{padding: 40}} verticalAlign="bottom" />
        <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose2" name="Dose 2" fill=" #f54394" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
