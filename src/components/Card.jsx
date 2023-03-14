import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

function Card() {
  const { cardId } = useParams();
  const data = useSelector((state) => state.Data.info);
  const card = data.find((dat) => dat.id === parseInt(cardId, 10));
  return (
    <div>
      <div className="header Hcard">
        <h2>{card.date}</h2>
      </div>
      <ul>
        {card.CHINA || card['C N'] ? (
          <li>
            China:
            {card.CHINA || card['C N']}
          </li>
        ) : null }
        {card['UNITED STATES'] || card['U S'] ? (
          <li>
            {' '}
            united states:
            {card['UNITED STATES'] || card['U S']}
          </li>
        ) : null}
        {card['Other Countries'] ? (
          <li>
            {' '}
            other countries:
            {card['Other Countries']}
          </li>
        ) : null}
        {card.Americas ? (
          <li>
            americas:
            {card.Americas}
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
            {card.Europe}
          </li>
        ) : null}
        {card.Japan ? (
          <li>
            Japan:
            {card.Japan}
          </li>
        ) : null}
        <li>
          {' '}
          total:
          {card.total}
        </li>
      </ul>
    </div>
  );
}

export default Card;
