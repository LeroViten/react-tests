import { showAlert } from './actions';
import { CREATE_POST } from './types';

const forbiddenWords = ['fuck', 'spam', 'shit', 'bitch', 'poop'];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const foundInTitle = forbiddenWords.filter(word =>
          action.payload.title.toLowerCase().includes(word),
        );
        const foundInBody = forbiddenWords.filter(word =>
          action.payload.body.toLowerCase().includes(word),
        );

        if (foundInTitle.length || foundInBody.length) {
          return dispatch(showAlert('You cannot use these words in your post!'));
        }
      }
      return next(action);
    };
  };
}
