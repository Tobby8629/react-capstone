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
            <div className="detail">
              <h3>
                Year:
                <span>
                  {' '}
                  {data.date}
                </span>
              </h3>
              <p>
                <span className="total">Total revenue: </span>
                {data.total}
              </p>
            </div>
            <Link to={`card/${data.id}`}>
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        ))}
      </div>
    </>

  );
}

export default Home;
