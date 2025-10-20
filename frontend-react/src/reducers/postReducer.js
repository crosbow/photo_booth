import { actions } from "../actions";

export const initialState = {
  posts: [],
  loading: false,
  error: false,
};

const postReducer = (prevState, action) => {
  switch (action.type) {
    case actions.feedPost.POST_FETCHING: {
      return {
        ...prevState,
        loading: true,
      };
    }

    case actions.feedPost.POST_FETCHED: {
      return {
        ...prevState,
        loading: false,
        posts: [...prevState.posts, ...action.data],
      };
    }

    case actions.feedPost.POST_FETCHING_ERROR: {
      return {
        ...prevState,
        loading: false,
        error: action.error,
      };
    }

    default: {
      return prevState;
    }
  }
};

export default postReducer;
