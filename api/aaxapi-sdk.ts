import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  UUID: any,
};

/** Authorization payload token with the key required for the mutation action requested */
export type AuthPayload = {
   __typename?: 'AuthPayload',
  token: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  approveGroupRequest: AuthPayload,
  /** Changes the password of the account whose reset request matches the provided key. */
  changePassword: AuthPayload,
  createGroupRequest: AuthPayload,
  /** 
 * Login a registered user.
   *                   Returns the token required for authentication.
 **/
  login: AuthPayload,
  rejectGroupRequest: AuthPayload,
  /** 
 * Creates a reset password request, locks the account requested, and sends an
   * email to the requestee with a link to create a new password.
   *                   Returns the key to restore the password.
 **/
  requestResetPassword: AuthPayload,
  /** 
 * Signs up a new user.
   *                   Returns the token required to verify its email account.
 **/
  signUpUser: AuthPayload,
};


export type MutationApproveGroupRequestArgs = {
  email: Scalars['String']
};


export type MutationChangePasswordArgs = {
  key: Scalars['String'],
  newPassword: Scalars['String']
};


export type MutationCreateGroupRequestArgs = {
  groupRequest: UserGroup
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationRejectGroupRequestArgs = {
  email: Scalars['String']
};


export type MutationRequestResetPasswordArgs = {
  email: Scalars['String']
};


export type MutationSignUpUserArgs = {
  email: Scalars['String'],
  firstname: Scalars['String'],
  groupRequest?: Maybe<UserGroup>,
  lastname: Scalars['String'],
  password: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  /** Query data of the currently authenticated user */
  me: User,
};

/** Registered user */
export type User = {
   __typename?: 'User',
  email: Scalars['String'],
  emailVerified: Scalars['Boolean'],
  firstname: Scalars['String'],
  group: UserGroup,
  groupRequest?: Maybe<UserGroup>,
  id: Scalars['UUID'],
  isAdmin: Scalars['Boolean'],
  lastname: Scalars['String'],
  password: Scalars['String'],
};

export enum UserGroup {
  Public = 'PUBLIC',
  Staff = 'STAFF',
  Student = 'STUDENT'
}


export type SignUpUserMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String'],
  firstname: Scalars['String'],
  lastname: Scalars['String'],
  groupRequest?: Maybe<UserGroup>
};


export type SignUpUserMutation = { __typename?: 'Mutation', signUpUser: { __typename?: 'AuthPayload', token: string } };

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', token: string } };

export type RequestResetPasswordMutationVariables = {
  email: Scalars['String']
};


export type RequestResetPasswordMutation = { __typename?: 'Mutation', requestResetPassword: { __typename?: 'AuthPayload', token: string } };

export type ChangePasswordMutationVariables = {
  newPassword: Scalars['String'],
  key: Scalars['String']
};


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'AuthPayload', token: string } };

export type CreateGroupRequestMutationVariables = {
  groupRequest: UserGroup
};


export type CreateGroupRequestMutation = { __typename?: 'Mutation', createGroupRequest: { __typename?: 'AuthPayload', token: string } };

export type ApproveGroupRequestMutationVariables = {
  email: Scalars['String']
};


export type ApproveGroupRequestMutation = { __typename?: 'Mutation', approveGroupRequest: { __typename?: 'AuthPayload', token: string } };

export type RejectGroupRequestMutationVariables = {
  email: Scalars['String']
};


export type RejectGroupRequestMutation = { __typename?: 'Mutation', rejectGroupRequest: { __typename?: 'AuthPayload', token: string } };

export type MeQueryQueryVariables = {};


export type MeQueryQuery = { __typename?: 'Query', me: { __typename?: 'User', email: string, firstname: string, lastname: string, group: UserGroup, isAdmin: boolean } };


export const SignUpUserDocument = gql`
    mutation SignUpUser($email: String!, $password: String!, $firstname: String!, $lastname: String!, $groupRequest: UserGroup = PUBLIC) {
  signUpUser(firstname: $firstname, lastname: $lastname, email: $email, password: $password, groupRequest: $groupRequest) {
    token
  }
}
    `;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
    `;
export const RequestResetPasswordDocument = gql`
    mutation RequestResetPassword($email: String!) {
  requestResetPassword(email: $email) {
    token
  }
}
    `;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($newPassword: String!, $key: String!) {
  changePassword(key: $key, newPassword: $newPassword) {
    token
  }
}
    `;
export const CreateGroupRequestDocument = gql`
    mutation CreateGroupRequest($groupRequest: UserGroup!) {
  createGroupRequest(groupRequest: $groupRequest) {
    token
  }
}
    `;
export const ApproveGroupRequestDocument = gql`
    mutation ApproveGroupRequest($email: String!) {
  approveGroupRequest(email: $email) {
    token
  }
}
    `;
export const RejectGroupRequestDocument = gql`
    mutation RejectGroupRequest($email: String!) {
  rejectGroupRequest(email: $email) {
    token
  }
}
    `;
export const MeQueryDocument = gql`
    query MeQuery {
  me {
    email
    firstname
    lastname
    group
    isAdmin
  }
}
    `;
export function getSdk(client: GraphQLClient) {
  return {
    SignUpUser(variables: SignUpUserMutationVariables): Promise<SignUpUserMutation> {
      return client.request<SignUpUserMutation>(print(SignUpUserDocument), variables);
    },
    Login(variables: LoginMutationVariables): Promise<LoginMutation> {
      return client.request<LoginMutation>(print(LoginDocument), variables);
    },
    RequestResetPassword(variables: RequestResetPasswordMutationVariables): Promise<RequestResetPasswordMutation> {
      return client.request<RequestResetPasswordMutation>(print(RequestResetPasswordDocument), variables);
    },
    ChangePassword(variables: ChangePasswordMutationVariables): Promise<ChangePasswordMutation> {
      return client.request<ChangePasswordMutation>(print(ChangePasswordDocument), variables);
    },
    CreateGroupRequest(variables: CreateGroupRequestMutationVariables): Promise<CreateGroupRequestMutation> {
      return client.request<CreateGroupRequestMutation>(print(CreateGroupRequestDocument), variables);
    },
    ApproveGroupRequest(variables: ApproveGroupRequestMutationVariables): Promise<ApproveGroupRequestMutation> {
      return client.request<ApproveGroupRequestMutation>(print(ApproveGroupRequestDocument), variables);
    },
    RejectGroupRequest(variables: RejectGroupRequestMutationVariables): Promise<RejectGroupRequestMutation> {
      return client.request<RejectGroupRequestMutation>(print(RejectGroupRequestDocument), variables);
    },
    MeQuery(variables?: MeQueryQueryVariables): Promise<MeQueryQuery> {
      return client.request<MeQueryQuery>(print(MeQueryDocument), variables);
    }
  };
}