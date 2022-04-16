import React from 'react';

export default function Comments({ comments }) {
  return (
    <div>
      <ul>
        {comments &&
          comments.map(({ id, name, body }) => (
            <li key={id}>
              <h3>{name}</h3>
              <p>{body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
