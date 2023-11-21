import './App.css';
import calculateTotalSoldTvs from "./helpers/calculateTotalSoldTvs.js";
import inventory, {bestSellingTv} from "./constants/inventory.js";
import calculateTotalOriginalStock from "./helpers/calculateTotalOriginalStock.js";
import calculateCurrentStock from "./helpers/calculateCurrentStock.js";
import generateTvTitel from "./helpers/generateTvTitel.js";
import formatPrice from "./helpers/formatPrice.js";
import generateScreenSizes from "./helpers/generateScreenSizes.js";
import generateArrayOfScreenSizes from './helpers/generateScreenSizes.js';
import check from "./assets/check.png";
import minus from "./assets/minus.png";

function App() {
  function mostSold() {
    console.log("Meest verkocht eerst");
  }

  function cheapest() {
    console.log("Goedkoopste eerst");
  }

  function mostSportCompatible() {
    console.log("Meest geschikt voor sport eerst");
  }

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
      <section className="bestselling-container">
        <h2>Best verkochte tv</h2>
        <article className="tv bestselling-tv">
          <span className="tv-image">
            <img src={bestSellingTv.sourceImg} alt="afbeelding best verkochte tv"/>
          </span>
          <div className="tv-info">
            <h3>{generateTvTitel(bestSellingTv)}</h3>
            <p>{formatPrice(bestSellingTv)}</p>
            <p>{generateArrayOfScreenSizes(bestSellingTv)}</p>
            <ul className="option-list">
              <li><img src={check} alt="aanwezig icoon" className="icon"/>wifi</li>
              <li><img src={minus} alt="niet-aanwezig icoon" className="icon"/>speech</li>
              <li><img src={check} alt="aanwezig icoon" className="icon"/>hdr</li>
              <li><img src={check} alt="aanwezig icoon" className="icon"/>bluetooth</li>
              <li><img src={minus} alt="niet-aanwezig icoon" className="icon"/>ambilight</li>
            </ul>
          </div>
        </article>
      </section>
      <section>
        <h2>Alle tv's</h2>
        <button type="button" onClick={mostSold}>Meest verkocht eerst</button>
        <button type="button" onClick={cheapest}>Goedkoopste eerst</button>
        <button type="button" onClick={mostSportCompatible}>Meest geschikt voor sport eerst</button>
      </section>
    </main>
  )
}

export default App
