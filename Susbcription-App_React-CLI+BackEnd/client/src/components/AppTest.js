import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [url, setUrl] = useState('http://localhost:5000/subscriptions');
  const [respuestaAPI, setRespuestaAPI] = useState({ respuesta: 'OK' });

  useEffect(() => {
    const consultaAPI = async () => {
      const consulta = await axios({ url });
      setRespuestaAPI(consulta.data.data);
    };

    consultaAPI();
  }, []);

  const MostrarRespuesta = () => {
    return Object.keys(respuestaAPI).map((key) => {
      return (
        <div key={key}>
          {key}: {JSON.stringify(respuestaAPI[key].name)}
        </div>
      );
    });
  };

  return (
    <div>
      <MostrarRespuesta key={key} allSubscriptions={JSON.stringify(respuestaAPI[key])}/>
    </div>
  );
};

export default App;
