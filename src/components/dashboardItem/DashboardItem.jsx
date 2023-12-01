import './DashboardItem.css'
import outOfStock from '../../assets/out-of-stock.png'

//Een component bevat altijd:
//1. Functie declaratie (met Hoofdletter!)
//2. Functie geeft HTML terug in de return
//3. Functie moet geexporteerd worden

//Stappenplan component maken
//1. Maak een apart bestandje
//2. Voeg de essentiele onderdelen toe
//3. Kopieer de bestaande code naar jouw component
//4. Importeer het component naar App.jsx en check of de component ook wordt weergegeven (soms moet je een regeltje uitzetten)
//5. Welke overeenkomsten zie je en hoe zou je die properties noemen?
//6. Geef de properties (geef ze ook een waarde) vanuit App.jsx mee aan het component
//7. Ontvang de propererties in het component (props)
//8. Geef de properties op de juiste plek weer
//9. Optioneel: destructure alle properties


function DashboardItem(props) {
    // igv geen props wil gebruiken maar destructuren: (nb ook de props. overal weghalen)
    // function DashboardItem({productDescription, productAmount, productVarient, IsBestseller}) {} NB en de
    console.log(props);

    let classNameString = "dashboard-item";

    if (props.productVarient === "red") {
        classNameString = classNameString + " items-red";
    } else if(props.productVarient === "green") {
        classNameString = classNameString + " items-green";
    } else if(props.productVarient === "blue") {
        classNameString = classNameString + " items-blue"
    }

    console.log(classNameString);

    //alternatieve manier (zonder if/else-statement of een switch statement
    //const classNameString = "dashboard-item items-" + props.productVarient;

    return(
        // <article className="dasboard-item items-">
        <article className={classNameString}>
            <h3>{props.productDescription}</h3>
            {/*<p>{console.log("het totale aantal ingekochte tv's is: " + calculateTotalOriginalStock(inventory))}</p>*/}
            <h2>{props.productAmount}</h2>
            {/*{props.isBestSeller === true ? <img src={outOfStock} alt="Out of stock"/> : <p>Nog over: {props.productAmount}</p>}*/}
            {props.isBestSeller && <img src={outOfStock} alt="Out of stock"/>}
        </article>
    )
}

export default DashboardItem;