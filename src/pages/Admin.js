import React from 'react'
import Urlap from '../components/Urlap';
import Tablazat from '../components/Tablazat';

function Admin() {
  return (
    <main className="row">
        <aside className="col-lg-3">
          <h3>Űrlap</h3>
          <Urlap/>
        </aside>
        <article className="row col-lg-9">
          <Tablazat/>
        </article>
    </main>
  )
}

export default Admin