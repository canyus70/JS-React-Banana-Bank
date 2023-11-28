import { useState } from "react";
import "./Home.css"



const Home = () => {

    const [kontostand, setKontostand] = useState(0);
    const [betrag, setBetrag] = useState("");

    const einzahlung = () => {
        setKontostand(kontostand + betrag)
        if(kontostand < 0) {
            window.alert("Parayokulus")
        }
    }

    const auszahlung = () => {
        setKontostand(kontostand - betrag)
        if(kontostand < 0) {
            window.alert("Parayokulus")
        }
    }



    return ( 
        <section>
            <h1>Banana Bank</h1>
            <div className="konto">
                <h2>Mein Girokonto</h2>
                <div className="saldo">
                <p>{kontostand.toFixed(2)}</p>

                </div>
                <div className="geldbetrag">
                    <input type="number" name="" id="" placeholder="Betrag in €" 
                    onChange={(event) => setBetrag(Number(event.target.value))} value={betrag}/>
                </div>
                <button className="einzahlen" onClick={einzahlung}>Einzahlen</button>
                <button className="auszahlen" onClick={auszahlung}>Auszahlen</button>

            </div>
        </section>
     );
}
 
export default Home;