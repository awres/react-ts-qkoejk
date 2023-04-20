import * as React from 'react';
import './style.css';


export default function App() {
  function Baner() {
    return (
      <div>
        <h2 className="baner"> Galeria miejsc ciekawych</h2>
      </div>
    );
  }

  function Glowny() {
    return (
      <div className="glowny">
        <img className="glownezdj" src="./zdj/lanzarotte.jpg" />
      </div>
    );
  }
  
  function Lewy() {
    return (
      <div className="lewy">
        <h3>Przeglądaj zdjęcia</h3>
        <img className="dodzdj" src="./assets/fotki/lanzarotte.jpg" /> {/*musi byc tak*/}
        <img className="dodzdj" src="./zdj/pekin.jpg" /> {/*musi byc tak*/}
        <img className="dodzdj" src="./zdj/serengeti.jpg" /> {/*musi byc tak*/}
        <img className="dodzdj" src="./zdj/wenecja.jpg" /> {/*musi byc tak*/}
        <img className="dodzdj" src="./zdj/tajlandia.jpg" /> {/*musi byc tak*/}
      </div>
    );
  }

  function Prawy() {
    return (
      <div className="prawy">
        <h3>Obrazy w naszej Galerii</h3>
        <table>
          <tr>
            <td>Europa</td> <td>Azja</td> <td>Afryka</td>
          </tr>
          <tr>
            <td>2</td> <td>2</td> <td>1</td>
          </tr>
        </table>
        <p>
          Polub nas <img src="./zdj/icon-off.png" />
        </p>
        <a href="https://pixabay.com">Odkryj więcej zdjęć</a>
      </div>
    );
  }
  function Stopka() {
    return (
      <h2 className="baner"> Autor: Pan Wojciech Przemysław 20.04.2023</h2>
    );
  }
  return (
    <div>
      <Baner />
      <Glowny />
      <Lewy />
      <Prawy />
      <Stopka />
    </div>
  );
}
