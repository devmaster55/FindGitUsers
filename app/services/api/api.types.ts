import {GeneralApiProblem} from './api-problem';

export interface User {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  followers_url: string;
  following_url: string;
  location: string;
  email: string;
  blog: string;
  company: string;
  public_repos: number;
}

export type GetUsersResult = {kind: 'ok'; users: User[]} | GeneralApiProblem;
export type GetUserResult = {kind: 'ok'; user: User} | GeneralApiProblem;
