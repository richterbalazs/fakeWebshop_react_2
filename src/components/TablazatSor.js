import React from 'react';

const TablazatSor = ({ adat, torles, modositas }) => {
  return (
    <tr>
      <td>{adat.nev}</td>
      <td>{adat.ar}</td>
      <td>{adat.kategoria}</td>
      <td>{adat.leiras}</td>
      <td>
        <button onClick={() => modositas(adat.id)}>Módosítás</button>
        <button onClick={() => torles(adat.id)}>Törlés</button>
      </td>
    </tr>
  );
};

export default TablazatSor;