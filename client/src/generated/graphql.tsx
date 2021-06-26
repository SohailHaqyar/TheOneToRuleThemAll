import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** `Date` type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
};

export type Comment = {
  __typename?: 'Comment';
  created_at: Scalars['Timestamp'];
  updated_at: Scalars['Timestamp'];
  id: Scalars['String'];
  body: Scalars['String'];
  post: Post;
  user: User;
};

export type CreateCommentInput = {
  postId: Scalars['String'];
  body: Scalars['String'];
};

export type CreatePostInput = {
  title: Scalars['String'];
  body: Scalars['String'];
};

export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  post: Post;
  deleted: Scalars['Boolean'];
};

export type FollowRes = {
  __typename?: 'FollowRes';
  followResults?: Maybe<Following>;
  unFollowResults?: Maybe<Scalars['String']>;
};

export type Following = {
  __typename?: 'Following';
  created_at: Scalars['Timestamp'];
  updated_at: Scalars['Timestamp'];
  follower: User;
  following: User;
};

export type Like = {
  __typename?: 'Like';
  created_at: Scalars['Timestamp'];
  updated_at: Scalars['Timestamp'];
  id: Scalars['String'];
  post: Post;
  user: User;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: User;
  continueWithGoogle: LoginResponse;
  followUser: FollowRes;
  createPost: Post;
  updatePost: Post;
  deletePost: DeleteResponse;
  likePost: Post;
  addComment: Comment;
  removeComment: Scalars['String'];
};


export type MutationRegisterArgs = {
  registerUserInput: RegisterUserInput;
};


export type MutationContinueWithGoogleArgs = {
  googleIdToken: Scalars['String'];
};


export type MutationFollowUserArgs = {
  id: Scalars['String'];
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};


export type MutationDeletePostArgs = {
  postId: Scalars['String'];
};


export type MutationLikePostArgs = {
  postId: Scalars['String'];
};


export type MutationAddCommentArgs = {
  createCommentInput: CreateCommentInput;
};


export type MutationRemoveCommentArgs = {
  commentId: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  created_at: Scalars['Timestamp'];
  updated_at: Scalars['Timestamp'];
  id: Scalars['String'];
  title: Scalars['String'];
  body: Scalars['String'];
  user: User;
  likes: Array<Like>;
  comments: Array<Comment>;
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  user: User;
  me: User;
  getFollowers: Array<User>;
  getFollowing: Array<User>;
  getUserFollowers: Array<User>;
  getUserFollowings: Array<User>;
  WhoToFollow: Array<User>;
  helloAuth: Scalars['String'];
  findAll?: Maybe<Array<Post>>;
  findAllTrendingPosts?: Maybe<Array<Post>>;
  findOnePost: Post;
  comments: Array<Comment>;
};


export type QueryUserArgs = {
  userId: Scalars['String'];
};


export type QueryGetUserFollowersArgs = {
  id: Scalars['String'];
};


export type QueryGetUserFollowingsArgs = {
  id: Scalars['String'];
};


export type QueryFindOnePostArgs = {
  postId: Scalars['String'];
};


export type QueryCommentsArgs = {
  postId: Scalars['String'];
};

export type RegisterUserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type UpdatePostInput = {
  id: Scalars['String'];
  title: Scalars['String'];
  body: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  imageUrl: Scalars['String'];
  posts: Array<Post>;
  likes: Array<Like>;
  comments: Array<Comment>;
  followers: Array<Following>;
  following: Array<Following>;
};

export type AddCommentMutationVariables = Exact<{
  postId: Scalars['String'];
  body: Scalars['String'];
}>;


export type AddCommentMutation = (
  { __typename?: 'Mutation' }
  & { addComment: (
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'body'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'username' | 'imageUrl'>
    ) }
  ) }
);

export type ContinueWithGoogleMutationVariables = Exact<{
  googleIdToken: Scalars['String'];
}>;


export type ContinueWithGoogleMutation = (
  { __typename?: 'Mutation' }
  & { continueWithGoogle: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'access_token'>
  ) }
);

export type CreatePostMutationVariables = Exact<{
  createPostInput: CreatePostInput;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'created_at'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'username' | 'imageUrl'>
    ) }
  ) }
);

export type FollowUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type FollowUserMutation = (
  { __typename?: 'Mutation' }
  & { followUser: (
    { __typename?: 'FollowRes' }
    & Pick<FollowRes, 'unFollowResults'>
    & { followResults?: Maybe<(
      { __typename?: 'Following' }
      & { follower: (
        { __typename?: 'User' }
        & Pick<User, 'id'>
      ), following: (
        { __typename?: 'User' }
        & Pick<User, 'id'>
      ) }
    )> }
  ) }
);

export type LikePostMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type LikePostMutation = (
  { __typename?: 'Mutation' }
  & { likePost: (
    { __typename?: 'Post' }
    & { likes: Array<(
      { __typename?: 'Like' }
      & Pick<Like, 'id'>
    )> }
  ) }
);

export type AllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPostsQuery = (
  { __typename?: 'Query' }
  & { findAll?: Maybe<Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'title' | 'id' | 'body' | 'created_at'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'username' | 'imageUrl' | 'id'>
    ), likes: Array<(
      { __typename?: 'Like' }
      & Pick<Like, 'id'>
    )>, comments: Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'body'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username' | 'imageUrl'>
      ) }
    )> }
  )>> }
);

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'imageUrl' | 'email'>
  )> }
);

export type CommentsQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type CommentsQuery = (
  { __typename?: 'Query' }
  & { comments: Array<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'body'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'username' | 'imageUrl'>
    ) }
  )> }
);

export type FollowersQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FollowersQuery = (
  { __typename?: 'Query' }
  & { getUserFollowers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'imageUrl'>
  )> }
);

export type FollowingsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FollowingsQuery = (
  { __typename?: 'Query' }
  & { getUserFollowings: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'imageUrl'>
  )> }
);

export type HelloAuthQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloAuthQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'helloAuth'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'imageUrl'>
  ) }
);

export type GetPostQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { findOnePost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'created_at'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'imageUrl'>
    ), likes: Array<(
      { __typename?: 'Like' }
      & Pick<Like, 'id'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'imageUrl' | 'username' | 'id'>
      ) }
    )>, comments: Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'body' | 'created_at'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'imageUrl' | 'username'>
      ) }
    )> }
  ) }
);

export type TrendingPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type TrendingPostsQuery = (
  { __typename?: 'Query' }
  & { findAllTrendingPosts?: Maybe<Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'created_at' | 'title'>
    & { comments: Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id'>
    )>, likes: Array<(
      { __typename?: 'Like' }
      & Pick<Like, 'id'>
    )>, user: (
      { __typename?: 'User' }
      & Pick<User, 'username' | 'imageUrl' | 'id'>
    ) }
  )>> }
);

export type GetUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'imageUrl' | 'email'>
    & { posts: Array<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'body' | 'created_at'>
      & { likes: Array<(
        { __typename?: 'Like' }
        & Pick<Like, 'id'>
      )>, comments: Array<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'body'>
        & { user: (
          { __typename?: 'User' }
          & Pick<User, 'imageUrl' | 'username'>
        ) }
      )> }
    )> }
  ) }
);


export const AddCommentDocument = gql`
    mutation AddComment($postId: String!, $body: String!) {
  addComment(createCommentInput: {postId: $postId, body: $body}) {
    id
    body
    user {
      username
      imageUrl
    }
  }
}
    `;
export type AddCommentMutationFn = Apollo.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useAddCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, options);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;
export const ContinueWithGoogleDocument = gql`
    mutation ContinueWithGoogle($googleIdToken: String!) {
  continueWithGoogle(googleIdToken: $googleIdToken) {
    access_token
  }
}
    `;
export type ContinueWithGoogleMutationFn = Apollo.MutationFunction<ContinueWithGoogleMutation, ContinueWithGoogleMutationVariables>;

/**
 * __useContinueWithGoogleMutation__
 *
 * To run a mutation, you first call `useContinueWithGoogleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContinueWithGoogleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [continueWithGoogleMutation, { data, loading, error }] = useContinueWithGoogleMutation({
 *   variables: {
 *      googleIdToken: // value for 'googleIdToken'
 *   },
 * });
 */
export function useContinueWithGoogleMutation(baseOptions?: Apollo.MutationHookOptions<ContinueWithGoogleMutation, ContinueWithGoogleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContinueWithGoogleMutation, ContinueWithGoogleMutationVariables>(ContinueWithGoogleDocument, options);
      }
export type ContinueWithGoogleMutationHookResult = ReturnType<typeof useContinueWithGoogleMutation>;
export type ContinueWithGoogleMutationResult = Apollo.MutationResult<ContinueWithGoogleMutation>;
export type ContinueWithGoogleMutationOptions = Apollo.BaseMutationOptions<ContinueWithGoogleMutation, ContinueWithGoogleMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($createPostInput: CreatePostInput!) {
  createPost(createPostInput: $createPostInput) {
    id
    title
    body
    user {
      username
      imageUrl
    }
    created_at
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      createPostInput: // value for 'createPostInput'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const FollowUserDocument = gql`
    mutation FollowUser($id: String!) {
  followUser(id: $id) {
    followResults {
      follower {
        id
      }
      following {
        id
      }
    }
    unFollowResults
  }
}
    `;
export type FollowUserMutationFn = Apollo.MutationFunction<FollowUserMutation, FollowUserMutationVariables>;

/**
 * __useFollowUserMutation__
 *
 * To run a mutation, you first call `useFollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followUserMutation, { data, loading, error }] = useFollowUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFollowUserMutation(baseOptions?: Apollo.MutationHookOptions<FollowUserMutation, FollowUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowUserMutation, FollowUserMutationVariables>(FollowUserDocument, options);
      }
export type FollowUserMutationHookResult = ReturnType<typeof useFollowUserMutation>;
export type FollowUserMutationResult = Apollo.MutationResult<FollowUserMutation>;
export type FollowUserMutationOptions = Apollo.BaseMutationOptions<FollowUserMutation, FollowUserMutationVariables>;
export const LikePostDocument = gql`
    mutation LikePost($postId: String!) {
  likePost(postId: $postId) {
    likes {
      id
    }
  }
}
    `;
export type LikePostMutationFn = Apollo.MutationFunction<LikePostMutation, LikePostMutationVariables>;

/**
 * __useLikePostMutation__
 *
 * To run a mutation, you first call `useLikePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likePostMutation, { data, loading, error }] = useLikePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useLikePostMutation(baseOptions?: Apollo.MutationHookOptions<LikePostMutation, LikePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikePostMutation, LikePostMutationVariables>(LikePostDocument, options);
      }
export type LikePostMutationHookResult = ReturnType<typeof useLikePostMutation>;
export type LikePostMutationResult = Apollo.MutationResult<LikePostMutation>;
export type LikePostMutationOptions = Apollo.BaseMutationOptions<LikePostMutation, LikePostMutationVariables>;
export const AllPostsDocument = gql`
    query AllPosts {
  findAll {
    title
    id
    body
    user {
      username
      imageUrl
      id
    }
    created_at
    likes {
      id
    }
    comments {
      id
      body
      user {
        id
        username
        imageUrl
      }
    }
  }
}
    `;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, options);
      }
export function useAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, options);
        }
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsQueryResult = Apollo.QueryResult<AllPostsQuery, AllPostsQueryVariables>;
export const AllUsersDocument = gql`
    query AllUsers {
  users {
    id
    username
    imageUrl
    email
  }
}
    `;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const CommentsDocument = gql`
    query Comments($postId: String!) {
  comments(postId: $postId) {
    id
    body
    user {
      username
      imageUrl
    }
  }
}
    `;

/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useCommentsQuery(baseOptions: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
      }
export function useCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
        }
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<typeof useCommentsLazyQuery>;
export type CommentsQueryResult = Apollo.QueryResult<CommentsQuery, CommentsQueryVariables>;
export const FollowersDocument = gql`
    query Followers($id: String!) {
  getUserFollowers(id: $id) {
    id
    username
    imageUrl
  }
}
    `;

/**
 * __useFollowersQuery__
 *
 * To run a query within a React component, call `useFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFollowersQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFollowersQuery(baseOptions: Apollo.QueryHookOptions<FollowersQuery, FollowersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FollowersQuery, FollowersQueryVariables>(FollowersDocument, options);
      }
export function useFollowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FollowersQuery, FollowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FollowersQuery, FollowersQueryVariables>(FollowersDocument, options);
        }
export type FollowersQueryHookResult = ReturnType<typeof useFollowersQuery>;
export type FollowersLazyQueryHookResult = ReturnType<typeof useFollowersLazyQuery>;
export type FollowersQueryResult = Apollo.QueryResult<FollowersQuery, FollowersQueryVariables>;
export const FollowingsDocument = gql`
    query Followings($id: String!) {
  getUserFollowings(id: $id) {
    id
    username
    email
    imageUrl
  }
}
    `;

/**
 * __useFollowingsQuery__
 *
 * To run a query within a React component, call `useFollowingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFollowingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFollowingsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFollowingsQuery(baseOptions: Apollo.QueryHookOptions<FollowingsQuery, FollowingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FollowingsQuery, FollowingsQueryVariables>(FollowingsDocument, options);
      }
export function useFollowingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FollowingsQuery, FollowingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FollowingsQuery, FollowingsQueryVariables>(FollowingsDocument, options);
        }
export type FollowingsQueryHookResult = ReturnType<typeof useFollowingsQuery>;
export type FollowingsLazyQueryHookResult = ReturnType<typeof useFollowingsLazyQuery>;
export type FollowingsQueryResult = Apollo.QueryResult<FollowingsQuery, FollowingsQueryVariables>;
export const HelloAuthDocument = gql`
    query HelloAuth {
  helloAuth
}
    `;

/**
 * __useHelloAuthQuery__
 *
 * To run a query within a React component, call `useHelloAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloAuthQuery(baseOptions?: Apollo.QueryHookOptions<HelloAuthQuery, HelloAuthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloAuthQuery, HelloAuthQueryVariables>(HelloAuthDocument, options);
      }
export function useHelloAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloAuthQuery, HelloAuthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloAuthQuery, HelloAuthQueryVariables>(HelloAuthDocument, options);
        }
export type HelloAuthQueryHookResult = ReturnType<typeof useHelloAuthQuery>;
export type HelloAuthLazyQueryHookResult = ReturnType<typeof useHelloAuthLazyQuery>;
export type HelloAuthQueryResult = Apollo.QueryResult<HelloAuthQuery, HelloAuthQueryVariables>;
export const MeDocument = gql`
    query ME {
  me {
    id
    username
    email
    imageUrl
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const GetPostDocument = gql`
    query GetPost($postId: String!) {
  findOnePost(postId: $postId) {
    id
    title
    body
    user {
      id
      username
      imageUrl
    }
    likes {
      id
      user {
        imageUrl
        username
        id
      }
    }
    comments {
      id
      body
      user {
        id
        imageUrl
        username
      }
      created_at
    }
    created_at
  }
}
    `;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const TrendingPostsDocument = gql`
    query TrendingPosts {
  findAllTrendingPosts {
    id
    created_at
    title
    comments {
      id
    }
    likes {
      id
    }
    user {
      username
      imageUrl
      id
    }
  }
}
    `;

/**
 * __useTrendingPostsQuery__
 *
 * To run a query within a React component, call `useTrendingPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendingPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendingPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrendingPostsQuery(baseOptions?: Apollo.QueryHookOptions<TrendingPostsQuery, TrendingPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrendingPostsQuery, TrendingPostsQueryVariables>(TrendingPostsDocument, options);
      }
export function useTrendingPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrendingPostsQuery, TrendingPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrendingPostsQuery, TrendingPostsQueryVariables>(TrendingPostsDocument, options);
        }
export type TrendingPostsQueryHookResult = ReturnType<typeof useTrendingPostsQuery>;
export type TrendingPostsLazyQueryHookResult = ReturnType<typeof useTrendingPostsLazyQuery>;
export type TrendingPostsQueryResult = Apollo.QueryResult<TrendingPostsQuery, TrendingPostsQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($userId: String!) {
  user(userId: $userId) {
    id
    username
    imageUrl
    email
    posts {
      id
      title
      body
      likes {
        id
      }
      comments {
        id
        body
        user {
          imageUrl
          username
        }
      }
      created_at
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;