export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type TUserProfileSlice = {
  posts: TPost[];
};
