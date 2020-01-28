import React,{ Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getEmployeeData } from '../redux/action/Employee'



class About extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        this.props.action.getEmployeeData()
    }


    render() {
        console.log("isLoading",this.props.isLoading)
        return (
            <div className="About">
                <h2>Employees Details...</h2>
                <div>
                    {
                        this.props.employeeData && this.props.employeeData.map((item, index) => (
                            <>

                                <div>
                                    <h3>Employee Id:-{item.id}</h3>
                                    <h3>Employee Name:-{item.employee_name}</h3>
                                    <h3>Employee Age:-{item.employee_age}</h3>
                                    <h3>Employee Salary:-{item.employee_salary}</h3>


                                </div>

                            </>

                        ))
                    }
                </div>


            </div >
        )
    }
}
const mapStateToProps = (state) => {
    console.log('employeeedataaa', state);


    return {
        isLoading: state.loading.isLoading,
        employeeData: state.employee.empData,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        action: bindActionCreators({ getEmployeeData }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);