import React from 'react'
import Card from '@/Components/Card'

const Home: React.FC = () => {

  const cardsData = [
    { id: 1, name: 'Adaugo Chibuike Sandra' },
    { id: 2, name: 'Anna Green' },
    { id: 3, name: 'Chris Johnson' },
];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {cardsData.map((card) => (
      <Card key={card.id} id={card.id} name={card.name} />
    ))}
  </div>
  )
}

export default Home