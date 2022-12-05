import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [edad, setEdad] = useState(0);
  const personaInicial = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José',
  };
  const [persona, setPersona] = useState(personaInicial);
  const tick = () => {
    setEdad(edad + 1);
    setPersona({ ...persona, fecha: new Date(), edad });
  };

  useEffect(() => {
    const intervalID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, [persona]);

  return (
    <div>
      <h2>
        Hora Actual:
        {persona.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {persona.nombre} {persona.apellidos}
      </h3>
      <h1>Edad: {persona.edad}</h1>
    </div>
  );
};

export default Clock;
