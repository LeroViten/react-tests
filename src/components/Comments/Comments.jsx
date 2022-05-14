import React, { useEffect } from 'react';
import { useStore } from '../../store';
import { commentsConstants } from '../../store/constants';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader';

export default function Comments() {
  const [state, dispatch] = useStore();
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/comments?_page=0&_limit=50',
  );
  useEffect(() => {
    if (data) {
      dispatch({
        type: commentsConstants.COMMENTS_SUCCESS,
        payload: data,
      });
    }
  }, [data]);

  return (
    <div>
      {loading && <Loader />}
      {error && <h2>Something went wrong... 😢 {error}</h2>}
      <ul>
        {data &&
          state.comments.map(({ id, name, body }) => (
            <li key={id} className="item">
              <h3>{name}</h3>
              <p>{body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
