import React from "react";

const ItemDescription = () => {
  return (
    <div className="mt-10 hidden lg:block ">
      <h2 className="inner-section-header">Item Desription</h2>

      <div className="overflow-x-auto mt-9">
        <table className="table table-compact w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className=" table-header-text">ITEM DESCRIPTION</th>
              <th className="table-header-text">DURATION</th>
              <th className="table-header-text">RATE</th>
              <th className="table-header-text">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <td className="table-item-content">Desgin System</td>
              <td className="table-item-content">12h</td>
              <td className="table-item-content">75.00</td>
              <td className="table-item-content">$ 900.00</td>
            </tr>
            <tr>
              <td className="table-item-content">Wireframing</td>
              <td className="table-item-content">64h</td>
              <td className="table-item-content">60.00</td>
              <td className="table-item-content">$ 360.00</td>
            </tr>
            <tr></tr>
            <p className="mt-5 dashboard-txt">Type description here...</p>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemDescription;
