import React, { Component } from "react";
import CellTable from "../cell";

class RowTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      data,
      keyNum,
      startIndex,
      onEditEvent,
      onDetailEvent,
      buttonName,
      totalCurrentRowPage,
      loggedUser,
    } = this.props;
    const number = startIndex + keyNum;
    const totalSalary = data.allowance.entertaint
      ? data.mainSalary + data.allowance.entertaint
      : data.mainSalary + data.allowance.food + data.allowance.transport;
    return (
      <>
        <div key={number} class="row">
          <CellTable number={number} addClassType="num" />
          <CellTable data={data.name} />
          <CellTable data={data.role} />
          <CellTable data={data.username} />
          <CellTable data={data.password} addClassType="pass" />
          <CellTable data={`Rp${totalSalary}`} />
          <CellTable
            loggedUser={loggedUser}
            dataId={data.id}
            totalCurrentRowPage={totalCurrentRowPage}
            onEditEvent={onEditEvent}
            onDetailEvent={onDetailEvent}
            buttonName={buttonName}
            addClassType="action"
          />
        </div>
      </>
    );
  }
}

export default RowTable;
