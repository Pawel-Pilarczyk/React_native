import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TPost} from '../store/userProfile/types';
import {normalize} from '@utils/index';
import {colors} from '@constants/index';
import {Typography} from '@components/index';

type TPostProps = {
  post: TPost;
};

const Post = ({post}: TPostProps) => {
  const {body, title} = post;
  return (
    <View style={styles.wrapper}>
      <Typography
        color={colors.BLACK}
        size={16}
        type={'semiBold'}
        style={styles.title}>
        {title}
      </Typography>
      <Typography color={colors.BLACK} style={styles.text}>
        {body}
      </Typography>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  wrapper: {
    height: normalize(200, 'height'),
    overflow: 'hidden',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  title: {
    textAlign: 'center',
    paddingVertical: normalize(10, 'height'),
    backgroundColor: colors.VIOLET_LIGHT,
  },
  text: {
    textAlign: 'center',
    paddingTop: normalize(10, 'height'),
  },
});
