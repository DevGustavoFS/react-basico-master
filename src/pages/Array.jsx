import React from 'react'

const Array = () => {

  const carros = ['Fusca', 'Gol', 'Celta', 'Corola', 'Corsa']
  const pessoas = ['Gustavo', 'Creitin', 'Zubumafu', 'Jorgin', 'Nome']

  return (
    <div>

      <h1>Array</h1>

      <h2>Carros</h2>

      {carros.map( item => (
          <p>{item}</p>
        ))}

      <h2>Pessoas</h2>

     <ul>
      {pessoas.map( item => (
         <li>{item}</li>
        ))}
      </ul>

     </div>
  )
}

export default Array