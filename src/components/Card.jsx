import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

function Card() {
  const { cardId } = useParams();
  const data = useSelector((state) => state.Data.info);
  const card = data.find((dat) => dat.id === parseInt(cardId, 10));
  return (
    <div className="card">
      <div className="header Hcard">
        <h2>{card.date}</h2>
      </div>
      <div className="subhead">
        Breakdown of revenue -
        <span>
          {' '}
          {card.date}
        </span>
      </div>
      <ul>
        {card.CHINA || card['C N'] ? (
          <li>
            China:
            <span>
              {' '}
              {card.CHINA || card['C N']}
            </span>
          </li>
        ) : null }
        {card['UNITED STATES'] || card['U S'] ? (
          <li>
            {' '}
            united states:
            <span>
              {' '}
              {card['UNITED STATES'] || card['U S']}
            </span>
          </li>
        ) : null}
        {card['Other Countries'] ? (
          <li>
            {' '}
            other countries:
            <span>
              {' '}
              {card['Other Countries']}
            </span>
          </li>
        ) : null}
        {card.Americas ? (
          <li>
            americas:
            <span>
              {' '}
              {card.Americas}
            </span>
          </li>
        ) : null }
        {card['Asia-Pacific'] ? (
          <li>
            Asia-pacific:
            {card['Asia-Pacific']}
          </li>
        ) : null}
        {card.Europe ? (
          <li>
            Europe:
            <span>
              {' '}
              {card.Europe}
            </span>
          </li>
        ) : null}
        {card.Japan ? (
          <li>
            Japan:
            <span>
              {' '}
              {card.Japan}
            </span>
          </li>
        ) : null}
        <li>
          {' '}
          total:
          <span>
            {' '}
            {card.total}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Card;
