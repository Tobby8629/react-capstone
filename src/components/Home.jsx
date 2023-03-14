import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home() {
  const [date, setdate] = useState('');
  const data = useSelector((state) => state.Data.info);

  const searchfilter = (e) => {
    const { value } = e.target;
    setdate(value);
  };

  return (

    <>
      <div className="header">
        <h2>Global Apple product Revenue</h2>
      </div>
      <div className="home">
        <div className="form">
          <input type="text" placeholder="filter by year example 2022-09-03" onChange={searchfilter} />
        </div>
        {data.filter((info) => info.date.includes(date)).map((data) => (
          <div className="each" key={data.id}>
            <h3>{data.date}</h3>
            <div className="detail">
              <p>
                Total revenue globally:
                {data.total}
              </p>
              <Link to={`card/${data.id}`}> details </Link>
            </div>
          </div>
        ))}
      </div>
    </>

  );
}

export default Home;
