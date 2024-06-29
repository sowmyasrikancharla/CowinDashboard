import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failed: 'FAILED',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiConstants.initial,
    barChartData: [],
    semiPieChartData: [],
    pieChartData: [],
  }

  componentDidMount() {
    this.setState({apiStatus: apiConstants.inprogress})
    this.getCowinData()
  }

  getCowinData = async () => {
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const last7DaysData = data.last_7_days_vaccination
      const formattedLast7DaysData = last7DaysData.map(eachDate => ({
        vaccineDate: eachDate.vaccine_date,
        dose1: eachDate.dose_1,
        dose2: eachDate.dose_2,
      }))
      const vaccinationByAge = data.vaccination_by_age
      const vaccinationByGender = data.vaccination_by_gender
      this.setState({
        apiStatus: apiConstants.success,
        barChartData: formattedLast7DaysData,
        semiPieChartData: vaccinationByAge,
        pieChartData: vaccinationByGender,
      })
    } else {
      this.setState({apiStatus: apiConstants.failed})
    }
  }

  renderSuccessView = () => {
    const {apiStatus, barChartData, pieChartData, semiPieChartData} = this.state
    console.log('success')
    return (
      <div className="main-cowin-con">
        <h2 className="vaccination-head">CoWIN Vaccination In India</h2>
        <VaccinationCoverage barChartDataDetails={barChartData} />
        <VaccinationByGender semiPieChartDetails={semiPieChartData} />
        <VaccinationByAge pieChartDetails={pieChartData} />
      </div>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-con">
      <h2 className="vaccination-head">CoWIN Vaccination In India</h2>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="vaccination-head">Something went wrong</h1>
    </div>
  )

  renderAllVisuals = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.failed:
        return this.renderFailureView()
      case apiConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="main-cowin-con">
        <div className="logo-head-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png "
            alt="website logo"
            className="logo-design"
          />
          <h1 className="cowin-head">Co-WIN</h1>
        </div>
        {this.renderAllVisuals()}
      </div>
    )
  }
}
export default CowinDashboard
