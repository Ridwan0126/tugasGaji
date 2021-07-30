import React, { Component } from "react";
import "./list.css";
import Table from "./table";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageConfig: {
        currentEntries: 10,
        currentPage: 1,
      },
      isAddNew: false,
      user: [],
    };
  }

  handleEntries = (entries) => {
    let pageConfigCopy = JSON.parse(JSON.stringify(this.state.pageConfig));
    pageConfigCopy.currentEntries = parseInt(entries);

    this.setState({ pageConfig: pageConfigCopy });
    console.log("call entries:", pageConfigCopy);
    // console.log("call entries:",this.state.pageConfig)
  };
  handlePage = (page) => {
    let pageConfigCopy = JSON.parse(JSON.stringify(this.state.pageConfig));
    pageConfigCopy.currentPage = parseInt(page);

    this.setState({ pageConfig: pageConfigCopy });
    console.log("data di panggil :", page);
  };

  render() {
    const { dataUser, loggedUser, onEditEvent, onDetailEvent } = this.props;
    return (
      <React.Fragment>
        <div className="bgTable">
          <Table
            pageConfig={this.state.pageConfig}
            dataUser={dataUser}
            onSelectPage={this.handlePage}
            loggedUser={loggedUser}
            onEditEvent={onEditEvent}
            onDetailEvent={onDetailEvent}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default About;
