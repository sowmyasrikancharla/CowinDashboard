// Write your code here
// Write your code here
import {PieChart, Pie, Legend, ResponsiveContainer, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {pieChartDetails} = props
  console.log(pieChartDetails)
  return (
    <div className="res3-con" width="100%" height="30%">
      <h2 className="vaccination-head">Vaccination by age</h2>
      <PieChart className="main3-con" width={1000} height={300}>
        <Pie
          cx="50%"
          cy="40%"
          data={pieChartDetails}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="50%"
          dataKey="count"
        >
          <Cell name="18-44" fill=" #f54394" />
          <Cell name="44-60" fill=" #5a8dee" />
          <Cell name="Above 60" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
