// edit.component.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      business_name: '',
      business_gst_number: ''
    }
  }

  //Data is displayed in the text fields since this is the edit form
  componentDidMount() {
    axios.get('http://localhost:4000/business/edit/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          person_name: response.data.person_name,
          business_name: response.data.business_name,
          business_gst_number: response.data.business_gst_number
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

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
    axios.post('http://localhost:4000/business/update/' + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push('/index');
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
            <label className="col-sm-2  col-form-label">Email </label>
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
            <input type="submit" value="Update Contact" className="btn btn-success" />

          </div>
        </form>
      </div>
    )
  }
}