import React, { Component } from "react";
import { connect } from "react-redux";

export class ProfilePreviewList extends Component {
  render() {
    return (
      <main className="main">
        <div className="container">
            <div className="profile__preview--container">
                <div className="profile__preview--header">

                </div>
            </div>
            <ul className="profile__preview--list">

            </ul>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispact => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePreviewList);
