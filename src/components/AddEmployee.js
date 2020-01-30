import React, { Component } from 'react'
// import './About.css';

import { getEmployeeData, addEmployee } from '../redux/action/Employee'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class AddEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: '',
            age: '',
            id: "",
            nameError: '',
            salaryError: '',
            ageError: '',
            idError: ''


        }
    }
    componentDidMount() {
        this.props.action.getEmployeeData()
    }


    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    handleOnSubmit = () => {
        let req = {
            name: this.state.name,
            salary: this.state.salary,
            age: this.state.age,
            id: this.state.id
        }
        this.props.action.addEmployee(req)


    }

    render() {
        return (
            <div>
                <div className="col-lg-4 offset-4">
                    <br></br><br></br><br></br><br></br><br></br>
                    <form>
                        <h3>Add New Employee.</h3>
                        <div>
                            <label>Name</label>
                            <input type="text"
                                placeholder="Enter Name"
                                className="form-control"
                                maxLength={30}
                                required
                                name="name"
                                value={this.state.name}
                                onChange={this.handleOnChange}
                            />
                        </div>
                        <div>
                            <label>Salary</label>
                            <input type="number"
                                placeholder="Enter Salary"
                                className="form-control"
                                required
                                maxLength={15}
                                name="salary"
                                value={this.state.salary}
                                onChange={this.handleOnChange}
                            />
                        </div>
                        <div>
                            <label>Age</label>
                            <input type="number"
                                placeholder="Enter Age"
                                requird
                                className="form-control"
                                maxLength={15}
                                name="age"
                                value={this.state.age}
                                onChange={this.handleOnChange}
                            />
                        </div>

                        <div>
                            <label>Id</label>
                            <input type="text"
                                placeholder="Enter Id"
                                required
                                className="form-control"
                                maxLength={15}
                                name="id"
                                value={this.state.id}
                                onChange={this.handleOnChange}
                            />
                        </div>
                        <br></br>
                        <div>
                        <button>Save</button>
                            {/* <button type="" name="save" className="btn btn-success" onClick={this.handleOnSubmit}>Success</button> */}

                        </div>


                    </form>

                </div>

            </div>
        )
    }
}



const mapStateToProps = (state) => {
    console.log('employedataState', state);

    return {
        isLoading: state.loading.isLoading,
        employedata: state.employee.empData,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        action: bindActionCreators({ getEmployeeData, addEmployee }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);