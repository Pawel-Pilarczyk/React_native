import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '@hooks/index';
import {fetchPosts} from '../store/userProfile/thunk';
import {setPosts} from '../store/userProfile/slice';
import {getPosts} from '../store/userProfile/selectors';
export const usePosts = () => {
  const dispatch = useAppDispatch();

  const statePosts = useAppSelector(store => store.userProfile.posts);

  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [isPostsError, setIsPostsError] = useState(false);

  useEffect(() => {
    let canceled = false;

    if (!statePosts.length) {
      setIsPostsLoading(true);

      dispatch(
        fetchPosts({
          onSuccess: response => {
            setIsPostsLoading(false);

            dispatch(setPosts(response));
          },
          onError: () => {
            setIsPostsLoading(false);
            setIsPostsError(true);
          },
        }),
      );
    }

    return () => {
      canceled = true;
    };
  }, [dispatch, statePosts.length]);

  return {
    posts: statePosts,
    isPostsLoading,
    isPostsError,
  };
};
