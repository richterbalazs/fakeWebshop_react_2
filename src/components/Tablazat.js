import React, { useState } from 'react';
import TablazatSor from './TablazatSor';
import './Tablazat.css';

const Tablazat = () => {
  const [adatok, setAdatok] = useState([
    { id: 1, nev: 'Póló', ar: 3000, kategoria: 'Férfi', leiras: 'Egyszerű póló'},
    { id: 2, nev: 'Nadrág', ar: 2205, kategoria: 'Férfi', leiras: 'Egyszerű nadrág' },
    { id: 3, nev: 'Zokni', ar: 4040, kategoria: 'Férfi', leiras: 'Egyszerű zokni' },
  ]);

  const torles = (id) => {
    setAdatok(adatok.filter((adat) => adat.id !== id));
  };

  const modositas = (id) => {
    // Az adott adatot keresem, amit módosítani szeretnénk
    const adat = adatok.find((adat) => adat.id === id);
    
    // Promptok a felhasználói inputhoz
    const ujNev = prompt('Add meg az új nevet:', adat.nev);
    const ujAr = prompt('Add meg az új árat:', adat.ar);
    const ujKategoria = prompt('Add meg az új árat!:', adat.kategoria);
    const ujLeiras = prompt('Add meg az új leírást:', adat.leiras);

    // A frissített adatokat új listába helyezzük
    const ujAdatok = adatok.map((adat) => {
      if (adat.id === id) {
        return { ...adat, nev: ujNev, ar: ujAr, kategoria: ujKategoria, leiras: ujLeiras };
      }
      return adat;
    });

    // Az állapot frissítése
    setAdatok(ujAdatok);
  };

  return (
    <div>
      <h1>Admin Táblázat</h1>
      <table>
        <thead>
          <tr>
            <th>Termék neve</th>
            <th>Termék ára</th>
            <th>Termék kategóriája</th>
            <th>Termék leírása</th>
          </tr>
        </thead>
        <tbody>
          {adatok.map((adat) => (
            <TablazatSor
              key={adat.id}
              adat={adat}
              torles={torles}
              modositas={modositas}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablazat;