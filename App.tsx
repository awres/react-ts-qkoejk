import React, { useState } from 'react';
import './style.css';
import './main.js';

export default function Stronka() {
  function BanerFS() {
    return (
      <div>
        <h2 className="baner"> Galeria miejsc ciekawych</h2>
      </div>
    );
  }

  function SrodekFS() {
    return (
      <div className="srodek">
        <img className="srdkzdj" src="./fotki/dowolne.jpg" />
      </div>
    );
  }

  function LewaFS() {
    const [imageSrc, setImageSrc] = useState('dowolne.jpg');

    const handleImageSwitcher = (image) => {
      setImageSrc(`${image}.jpg`);
    };

    return (
      <div className="lewa">
        <h3>Przeglądaj zdjęcia</h3>

        <img
          onClick={() => handleImageSwitcher('lanzarotte')}
          className="zdjecia"
          src="./fotki/lanzarotte.jpg"
        />
        <img
          onClick={() => handleImageSwitcher('pekin')}
          className="zdjecia"
          src="./fotki/pekin.jpg"
        />
        <img
          onClick={() => handleImageSwitcher('serengeti')}
          className="zdjecia"
          src="./fotki/serengeti.jpg"
        />
        <img
          onClick={() => handleImageSwitcher('wenecja')}
          className="zdjecia"
          src="./fotki/wenecja.jpg"
        />
        <img
          onClick={() => handleImageSwitcher('tajlandia')}
          className="zdjecia"
          src="./fotki/tajlandia.jpg"
        />
      </div>
    );
  }

  function PrawaFS() {
    return (
      <div className="prawa">
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
          Polub nas <img src="./fotki/icon-off.png" />
        </p>
        <a href="https://pixabay.com">Odkryj więcej zdjęć</a>
      </div>
    );
  }
  function StopkaFS() {
    return <h2 className="stopka"> Autor: Filip Serwatka</h2>;
  }
  return (
    <div>
      <BanerFS />
      <SrodekFS />
      <LewaFS />
      <PrawaFS />
      <StopkaFS />
    </div>
  );
}
