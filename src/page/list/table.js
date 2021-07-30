import "./list.css";
import { RowTable } from "../../component";

import React, { Component } from "react";

const Header = () => {
  return (
    <div class="row">
      <div class="cell header">No</div>
      <div class="cell header">Nama</div>
      <div class="cell header">Jabatan</div>
      <div class="cell header">Username</div>
      <div class="cell header">Password</div>
      <div class="cell header">Total Gaji</div>
      <div class="cell header">Action</div>
    </div>
  );
};

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: {
        no: -1,
        status: false,
      },
      isAddNew: false,
      data: {
        row: "",
        name: "",
        username: "",
        password: "",
      },
      addData: {
        id: "",
        name: "",
        username: "",
        password: "",
      },
      loggedUser: {
        name: "",
        username: "",
        password: "",
        role: "",
      },
    };
  }

  componentDidMount() {
    const { loggedUser } = this.props;
    this.setState({ loggedUser: loggedUser });
  }

  handlePage = (val) => {
    this.props.onSelectPage(val);
    console.log("panggil data tabel:", val);
  };

  handleEdit = (e) => {
    console.log("edit ", e.target.attributes[0].value);
    console.log("data tabel", this.state.loggedUser);

    this.props.onEditEvent(e.target.attributes[0].value);
    // console.log("Row-i:",e.target.parentElement.parentElement)
  };

  handleDetail = (e) => {
    console.log("detail", e.target.attributes[0].value);
    this.props.onDetailEvent(e.target.attributes[0].value);
  };

  handleChange = (e) => {
    let property = `${e.target.name}`;
    this.setState((prevState) => {
      let data = { ...prevState.data };
      data[property] = `${e.target.value}`;
      return { data };
    });
  };

  render() {
    const { pageConfig, dataUser } = this.props;

    let filteredData = [];
    let entries = pageConfig.currentEntries;
    let current = pageConfig.currentPage;
    let startIndex = entries * (current - 1);
    let endIndex = entries + entries * (current - 1);
    console.log("pageconfig", pageConfig);
    for (let i = startIndex; i < endIndex; i++) {
      if (i < dataUser.length) {
        const user = dataUser[i];
        filteredData.push(user);
      }
    }

    startIndex++;
    console.log("jabatan", this.state.loggedUser.role);
    let showData = filteredData.map((data, index) => {
      return (
        <RowTable
          keyNum={index}
          startIndex={startIndex}
          data={data}
          onEditEvent={this.handleEdit}
          onDetailEvent={this.handleDetail}
          buttonName={["Edit", "Detail"]}
          loggedUser={this.state.loggedUser}
        />
      );
    });

    return (
      <React.Fragment>
        <div class="tbl">
          <Header />
          {showData}
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
