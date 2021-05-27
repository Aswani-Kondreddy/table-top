import React, { Component } from "react";
import { connect } from "react-redux";

class Details extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        {" "}
        <div style={{ width: "500px", margin: "auto" }}>
          <h2 style={{ color: "blueviolet" }}>Player Details</h2>
          <p>
            <b>First Name : </b>
            {this.props.data.firstName}
          </p>
          <p>
            <b>Last Name : </b>
            {this.props.data.lastName}
          </p>
          <p>
            <b>Campaign Name : </b>
            {this.props.data.campaignName}
          </p>
          <p>
            <b>Contact Number : </b>
            {this.props.data.contactNumber}
          </p>
          <p>
            <b>Sessions : </b>
            {this.props.data.sessions}
          </p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ data: state.data });

export default connect(mapStateToProps)(Details);
