import './App.css';
import calculateTotalSoldTvs from "./helpers/calculateTotalSoldTvs.js";
import inventory from "./constants/inventory.js";
import calculateTotalOriginalStock from "./helpers/calculateTotalOriginalStock.js";
import calculateCurrentStock from "./helpers/calculateCurrentStock.js";

function App() {
  return (
    <main className="page-container">

      <h1>Tech it Easy dashboard</h1>
      <section>
        <h2>Verkoopoverzicht</h2>
        <div className="dashboard-container">
          <article className="dashboard-item item-soldTvs">
            <h3>Aantal verkochte producten</h3>
            <p>{console.log("het totale aantal verkochte tv's is: " + calculateTotalSoldTvs(inventory))}</p>
            <h2>{calculateTotalSoldTvs(inventory)}</h2>
          </article>
          <article className="dashboard-item item-originalStock">
            <h3>Aantal ingekochte producten</h3>
            <p>{console.log("het totale aantal ingekochte tv's is: " + calculateTotalOriginalStock(inventory))}</p>
            <h2>{calculateTotalOriginalStock(inventory)}</h2>
          </article>
          <article className="dashboard-item item-currentStock">
            <h3>Aantal te verkopen producten</h3>
            <p>{console.log("aantal te verkopen tv's is: " + calculateCurrentStock(inventory))}</p>
            <h2>{calculateCurrentStock()}</h2>
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
