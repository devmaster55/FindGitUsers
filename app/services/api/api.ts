import {ApisauceInstance, create, ApiResponse} from 'apisauce';
import {getGeneralApiProblem} from './api-problem';
import {ApiConfig, DEFAULT_API_CONFIG} from './api-config';
import * as Types from './api.types';

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance;

  /**
   * Configurable options.
   */
  config: ApiConfig;

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json',
        Authorization: this.config.token,
      },
    });
  }

  /**
   * Search users by username.
   */
  async searchUsers(searchKey: string): Promise<Types.GetUsersResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(
      '/search/users',
      {
        q: searchKey,
        // per_page: 5,
      },
    );

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) {
        return problem;
      }
    }

    try {
      const rawUsers = response.data;
      const resultUsers = await Promise.all(
        rawUsers.items.map(async (item: any) => {
          const result = await this.getUserDetail(item.login);
          return result?.user;
        }),
      );
      return {kind: 'ok', users: resultUsers};
    } catch {
      return {kind: 'bad-data'};
    }
  }

  /**
   * Get user detail
   */
  async getUserDetail(username: string): Promise<Types.GetUserResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(
      `/users/${username}`,
    );

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) {
        return problem;
      }
    }

    // transform the data into the format we are expecting
    try {
      const rawUser = response.data;
      const resultUser: Types.User = rawUser;
      return {kind: 'ok', user: resultUser};
    } catch {
      return {kind: 'bad-data'};
    }
  }

  /**
   * Get followers
   */
  async getFollowers(username: string): Promise<Types.GetUsersResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(
      `/users/${username}/followers`,
    );

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) {
        return problem;
      }
    }

    const convertUser = (raw: any) => {
      return {
        id: raw.id,
        login: raw.login,
        avatar_url: raw.avatar_url,
      };
    };

    // transform the data into the format we are expecting
    try {
      const rawUsers = response.data;
      const resultUsers = rawUsers.map(convertUser);
      return {kind: 'ok', users: resultUsers};
    } catch {
      return {kind: 'bad-data'};
    }
  }

  /**
   * Get following
   */
  async getFollowing(username: string): Promise<Types.GetUsersResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(
      `/users/${username}/following`,
    );

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) {
        return problem;
      }
    }

    const convertUser = (raw: any) => {
      return {
        id: raw.id,
        login: raw.login,
        avatar_url: raw.avatar_url,
      };
    };

    // transform the data into the format we are expecting
    try {
      const rawUsers = response.data;
      const resultUsers = rawUsers.map(convertUser);
      return {kind: 'ok', users: resultUsers};
    } catch {
      return {kind: 'bad-data'};
    }
  }
}
