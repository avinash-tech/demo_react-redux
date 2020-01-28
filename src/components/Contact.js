import React, {Component} from 'react'
// import './About.css';

import { getEmployeeData } from '../redux/action/Employee'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class Contact extends Component {
    constructor(props) {
        super(props) 
        this.state = {

        }
    }
    componentDidMount(){
        this.props.action.getEmployeeData()
    }

    render(){
        return(
            <div>
            {
                this.props.employedata && this.props.employedata.map((item, index) =>(
                    <>
                        <h1>Employee Name:-{item.employee_name}</h1>
                    </>
                ))
            }

            </div>
        )
    }
}

    

const mapStateToProps = (state) => {
    console.log('employedataState',state);
    
    return {
        isLoading: state.loading.isLoading,
        employedata: state.employee.empData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        action: bindActionCreators({ getEmployeeData }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);