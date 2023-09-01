import React, { useState } from "react";



const DictionaryApp = ({ zawartoscSlownik }) => {
    const [szukajSlowa, setSzukajSlowa] = useState('');

    const [definicja, setDefinicje] = useState('')
    const [noweSlowo, setNoweSlowo] = useState('');
    const [nowaDefinicja, setNowaDefinicja] = useState('')
    const [istnieje, setIstnieje] = useState(false);

    // dodane 5 staly ktore maja za zadanie szukac slowa , definiuowac, dodac nowe slowo, nowa definicje i sprzwdzic czy istnieej



    const getStorageData = () => {
        const storageString = localStorage.getItem('dictionaryApp');
        if (storageString) {
            return JSON.parse(storageString);
        }
        return [];
    }
// stala dzeki ktorej uzyskujemy dostep lokalnej pamieci magazynowej

    const saveDataToStorage = (data) => {
        localStorage.setItem('dictionaryApp', JSON.stringify(data));
    };

// zapisujemy w pamieci lokalnej magazynowej


    const handelSzukaj = () => {
        const storedData = getStorageData();
        const znajdzDefinicje = storedData.find(entry => entry.slowo === szukajSlowa);
        setDefinicje(znajdzDefinicje ? znajdzDefinicje.definicja : "nie znaleziono");
    }
    
    // handelszukaj bedzie nam szukac pod przycikiem onClick  w inpucie
    // ktory przejrzy dostepona zawartosc 



    const handleDodaj = () => {
        setIstnieje(true);
    };
    // bedzie odpowiadac ze aktualizacje stanu 'istnieje' przez fukncje set Istieje na true

    const handleZapisz = () => {
        if (noweSlowo && nowaDefinicja) {
            // jesli noweslowo i nowadefincja jest to zawartosc slownika noweslow bedzie sie rownac sie nowadefinicja

            zawartoscSlownik[noweSlowo] = nowaDefinicja;
            const newEntry = { slowo: noweSlowo, definicja: nowaDefinicja };
            const storedData = getStorageData();
            const updatedData = [...storedData, newEntry];
            saveDataToStorage(updatedData);
            setNoweSlowo("");
            setNowaDefinicja("");
            setIstnieje(false);



        }
        // handle zapsisz bedziez odpowiadc za zapsianie nowego slowa a takze usuwanie starego .


    };


    return (
        <div className="dictionary-app">
            <h1>Slowniczek</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="wpisz slowo"
                    value={szukajSlowa}
                    onChange={(e) => setSzukajSlowa(e.target.value)}
                />
                <button onClick={handelSzukaj}> Szukaj</button>
            </div>
            <div className="definicja">
                <h2>Definicja</h2>
                <p>{definicja}</p>
            </div>


            {istnieje ? (
                <div className="add-word-container">
                    <h2>Dodaj slowo</h2>
                    <input
                        type="text"
                        placeholder="Dodaj nowe slowo"
                        value={noweSlowo}
                        onChange={(e) => setNoweSlowo(e.target.value)}
                    />
                    <textarea
                        placeholder="Definicja"
                        value={nowaDefinicja}
                        onChange={(e) => setNowaDefinicja(e.target.value)}
                    />
                    <button onClick={handleZapisz}>Zapisz</button>
                </div>
            ) : (
                <button onClick={handleDodaj}>Dodaj nowe slow</button>
            )}







        </div>
        // input z przyciskiem do szukania slowa z onChange e.target.value
    )
};

export default DictionaryApp;