import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleGetEmployeeList = () =>{
        this.props.history.push('/about')
    }
    handleAddEmployeeList = () =>{
        this.props.history.push('/addemployee')
    }



    render() {
        return (
            <div className="">
                <div >
                
                <h1 className="heading">Add & get employee......</h1>
                    <button type="button"  name="save" className="btn btn-primary" onClick={this.handleAddEmployeeList}>addEmployee</button>
                   
                    <button  type="button" className="col-lg-4 offset-4" name="save" className="btn btn-success" onClick={this.handleGetEmployeeList}>getEmployee</button>
                </div>

                {/* </div>
              
                <div> */}
                   
            </div>


        )
    }
}
export default Home;