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
      <div className="form">
        <input type="text" placeholder="filter by year example 2022-09-03" onChange={searchfilter} />
      </div>
      <div className="home">
        {data.filter((info) => info.date.includes(date)).map((data) => (
          <div className="each" key={data.id}>
            <Link to={`card/${data.id}`}>
              <h3>{data.date}</h3>
              <div className="detail">
                <p>
                  <span className="total">Total revenue: </span>
                  {data.total}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>

  );
}

export default Home;
