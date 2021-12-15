import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '@hooks';
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
            dispatch(setPosts(response));
            setIsPostsLoading(false);
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
  }, [dispatch]);

  return {
    posts: statePosts,
    isPostsLoading,
    isPostsError,
  };
};
