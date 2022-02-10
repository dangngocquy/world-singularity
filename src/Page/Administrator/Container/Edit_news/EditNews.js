import React, { Component } from "react";
import axios from "axios";
import './DeleteNews.css';

export default class DeleteNews extends Component {
  state = {
    id: 0
  };

  handleChange = (e) => {
    this.setState({ id: e.target.value });
  };

  hanldeSubmit = (e) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:3001/user/${this.state.id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.hanldeSubmit}>
          <label>
            Person ID:
            <input type="number" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}
