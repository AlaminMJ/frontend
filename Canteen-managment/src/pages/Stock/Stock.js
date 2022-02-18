import react, { useState, useEffect } from "react";
import MaterialTable from "material-table";
const Stock = () => {
  return (
    <div className="container">
      <h1 className="text-primary text-center display-4"> Stock </h1>
      <MaterialTable
        className="m-4"
        columns={[
          { title: "Code", field: "code" },
          { title: "Product Name", field: "productName" },
          { title: "Balance", field: "balance", type: "numeric" },
          { title: "Amount", field: "total", type: "numeric" }
        ]}
        data={[
          { code: "200", productName: "rice", balance: 500, total: 250000 }
        ]}
        title="Stock"
        options={{
          exportButton: true
        }}
      />
    </div>
  );
};
export default Stock;
