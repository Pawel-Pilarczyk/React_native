import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAppDispatch, usePosts} from '@hooks';
import {setPosts} from '@store/userProfile/slice';
import {fetchPosts} from '@store/userProfile/thunk';
import {RootStackParamList} from '../../navigation/types';
import {Post, Typography} from '@components';
import {normalize} from '@utils';
import {colors} from '@constants';

export type TPostsProps = NativeStackScreenProps<RootStackParamList, 'Posts'>;

const Posts = ({navigation}: TPostsProps) => {
  const dispatch = useAppDispatch();
  const {posts, isPostsLoading} = usePosts();

  useEffect(() => {
    !posts.length &&
      dispatch(
        fetchPosts({
          onSuccess: response => {
            dispatch(setPosts(response));
          },
          onError: error => {
            console.log(error);
          },
        }),
      );
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      {isPostsLoading ? (
        <Typography style={styles.loading} color={colors.BLACK}>
          Loading...
        </Typography>
      ) : (
        posts.map((post: any) => <Post post={post} key={post.id} />)
      )}
    </ScrollView>
  );
};

export default Posts;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: normalize(20, 'width'),
  },
  loading: {
    textAlign: 'center',
  },
});
