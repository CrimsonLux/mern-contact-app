// create.component.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Defining constructors and setting initial states and binding to events
export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //setting initial states
    this.state = {
      person_name: '',
      business_name: '',
      business_gst_number: ''
    }
  }

  //Binding events 
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    })
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number
    };

    //post the https request 
    axios.post('http://localhost:4000/business/add', obj)
      .then(res => console.log(res.data));

    //this pushes to index after submitting
    this.props.history.push('/index');

    this.setState({
      person_name: '',
      business_name: '',
      business_gst_number: ''
    })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Contact</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">First Name  </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={this.state.person_name}
                onChange={this.onChangePersonName}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Last Name </label>
            <div className="col-sm-10">
              <input type="text"
                className="form-control"
                placeholder="Last Name"
                value={this.state.business_name}
                onChange={this.onChangeBusinessName}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email </label>
            <div className="col-sm-10">
              <input type="text"
                className="form-control"
                placeholder="Email"
                value={this.state.business_gst_number}
                onChange={this.onChangeGstNumber}
              />
            </div>
          </div>
          <div className="form-group text-right">
            <Link to={"/index/"} className="btn btn-outline-secondary mr-1">Close</Link>
            <input type="submit" value="Create Contact" className="btn btn-success" />
          </div>
        </form>
      </div>
    )
  }
}