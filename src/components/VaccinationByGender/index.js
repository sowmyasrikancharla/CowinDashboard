// Write your code here
import {PieChart, Pie, Legend, ResponsiveContainer, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {semiPieChartDetails} = props
  console.log(semiPieChartDetails)
  return (
    <div height="20%" width="98%" className="res2-con">
      <h2 className="vaccination-head">Vaccination by gender</h2>
      <PieChart className="main2-con" width={1000} height={500}>
        <Pie
          cx="50%"
          cy="40%"
          data={semiPieChartDetails}
          startAngle={180}
          endAngle={0}
          innerRadius="30%"
          outerRadius="50%"
          dataKey="count"
        >
          <Cell name="Male" fill=" #f54394" />
          <Cell name="Female" fill=" #5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="middle"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
