import { commentsConstants } from '../constants';

export const commentsReducer = (state, action) => {
  switch (action.type) {
    case commentsConstants.COMMENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case commentsConstants.COMMENTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };
    }
    case commentsConstants.COMMENTS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
