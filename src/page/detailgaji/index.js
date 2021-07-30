import React, { Component } from "react";
import "./detailgaji.css";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderAllowance = () => {
    const { detailUser } = this.props;
    if (detailUser.role === "Manager") {
      return (
        <div className="rowDetail">
          <div className="cellDetail">Tunjangan Entertaint</div>
          <div className="cellDetail">
            Rp. {detailUser.allowance.entertaint}
          </div>
        </div>
      );
    }
    return (
      <>
        <div className="rowDetail">
          <div className="cellDetail">Tunjanagan Makan</div>
          <div className="cellDetail">Rp. {detailUser.allowance.food}</div>
        </div>
        <div className="rowDetail">
          <div className="cellDetail">Tunjanagan Transport</div>
          <div className="cellDetail">Rp. {detailUser.allowance.transport}</div>
        </div>
      </>
    );
  };
  render() {
    const { detailUser } = this.props;
    console.log("detail gaji", detailUser.allowance);
    return (
      <>
        <div className="detailbg">
          <div className="detail-container">
            <div className="rowDetail">
              <div className="cellDetail header">Keterangan</div>
              <div className="cellDetail header">Gaji</div>
            </div>
            <div className="rowDetail">
              <div className="cellDetail">Total Gaji</div>
              <div className="cellDetail">
                Rp.{" "}
                {detailUser.allowance.entertaint
                  ? detailUser.mainSalary + detailUser.allowance.entertaint
                  : detailUser.mainSalary +
                    detailUser.allowance.food +
                    detailUser.allowance.transport}
              </div>
            </div>
            <div className="rowDetail">
              <div className="cellDetail">Gaji</div>
              <div className="cellDetail">Rp. {detailUser.mainSalary}</div>
            </div>
            {this.renderAllowance()}
          </div>
        </div>
      </>
    );
  }
}

export default Detail;
