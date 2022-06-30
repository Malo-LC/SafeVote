import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './sondage.css';

export function Sondage() {
  const [sondages, setSondages] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/getSondages')
      .then((res) => {
        setSondages(res.data.sondages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (sondages.length === 0) {
    return (
      <div className="sondageBig">
        <div className="sondage">
          <h1>Sondage</h1>
          <p>Aucun sondage</p>
          <Link to="/sondage/creer">
            <button type="button" className="button-31user">
              Creer un sondage
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="sondageBig">
      <div className="sondage">
        <h1>Sondage</h1>
        <p>Voici les sondages disponibles :</p>
        <div className="sondageList">
          {sondages.map((sondage) => (
            <Link
              className="sondageItem"
              key={sondage.idSondage}
              to={`/sondage/${sondage.idSondage}`}
            >
              <h1>{sondage.titre}</h1>
              <p>{sondage.descr}</p>
            </Link>
          ))}
        </div>
        <Link to="/sondage/creer">
          <button type="button" className="button-31user">
            Creer un sondage
          </button>
        </Link>
      </div>
    </div>
  );
}
