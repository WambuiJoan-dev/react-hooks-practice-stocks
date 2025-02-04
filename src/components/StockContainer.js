import React from "react";
import Stock from "./Stock";

function stockContainer({stocks, onAddStock}) {
  const stockList = stocks.map((stock)=>(
    <stock
      key={stock.id} stock={stock} onStockClic={onAddStock}
    />
  ))
  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default stockContainer;
