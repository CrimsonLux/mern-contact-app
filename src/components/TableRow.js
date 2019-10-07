// TableRow.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//This file is responsible for the display of data fetched from the backend
class TableRow extends Component {

  //delete function
  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.person_name}
          </td>
          <td>
            {this.props.obj.business_name}
          </td>
          <td>
            {this.props.obj.business_gst_number}
          </td>
          <td className="text-right">
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-outline-success mr-2">Edit</Link>
            <button onClick={this.delete} className="btn btn-outline-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;