import React from 'react';
import { useSelector } from 'react-redux';


function Home() {
  const data = useSelector((state)=> state.Data.info)
  console.log(data)
  return (
    <div className="home">
      {data.map((data)=>(
        <div className='each' key={data.id}>
          <h3>{data.date}</h3>
          <p>Total revenue globally: {data.total}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
