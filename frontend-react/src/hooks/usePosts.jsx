import { useEffect, useReducer, useState } from "react";
import { actions } from "../actions";
import { api } from "../api";
import postReducer, { initialState } from "../reducers/postReducer";

const usePosts = ({ page, limit, isUnAuthenticated = false }) => {
  const [postsState, dispatch] = useReducer(postReducer, initialState);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController(); //  cancel API call

    const loadPosts = async () => {
      dispatch({ type: actions.feedPost.POST_FETCHING });

      try {
        const url = isUnAuthenticated
          ? `/posts/?page=1&limit=4`
          : `/posts/?page=${page}&limit=${limit}`;

        const response = await api.get(url, { signal: controller.signal });

        if (!isMounted) return;

        const data = response.data;

        if (data.length > 0) {
          dispatch({
            type: actions.feedPost.POST_FETCHED,
            data,
          });
        } else {
          setHasMore(false);
        }
      } catch (error) {
        if (!isMounted) return;

        const message =
          error?.response?.data?.message || "Failed to fetch feed posts";
        dispatch({
          type: actions.feedPost.POST_FETCHING_ERROR,
          error: message,
        });
      }
    };

    loadPosts();

    return () => {
      isMounted = false;
      controller.abort(); // cancel request on component unmounts(Specially for dev mode)
    };
  }, [page, limit, isUnAuthenticated]);

  return { postsState, dispatch, hasMore };
};

export default usePosts;
