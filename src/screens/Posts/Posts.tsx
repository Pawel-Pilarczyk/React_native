import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAppDispatch, useAppSelector} from '@hooks/index';
import {RootStackParamList} from '../../navigation/types';
import {fetchPosts} from '../../store/userProfile/thunk';
import {Post} from '@components/index';
import {normalize} from '@utils/index';

export type TPostsProps = NativeStackScreenProps<RootStackParamList, 'Posts'>;

const Posts = ({navigation}: TPostsProps) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.userProfile.posts);

  useEffect(() => {
    !posts.length && dispatch(fetchPosts());
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
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
});
