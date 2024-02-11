import React from 'react';
import Notification from '../Notification/Notification';
import { Caption, List } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <Caption>Statistics</Caption>
      {total > 0 ? (
        <List>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {total}</p>
          </li>
          <li>
            <p>Positive feedback: {positivePercentage}%</p>
          </li>
        </List>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}
