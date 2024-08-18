import { post } from "./handlers";

export class TokenManager {
  //? Login
  public static async login() {}

  //? Signup
  public static async signup() {}

  //? Get Access Token

  //? Get Refresh Token

  //? Get User Role

  //? Check Access Token

  //? Revoke Token

  //? Regenerate Access Token
}

export interface LoginType {
  encoded: Encoded;
  jrn: number;
}

export interface Encoded {
  data: Data | {};
  isError: boolean;
  error: Error | {};
}

export interface Data {
  accessToken: string;
  accessTokenExpiresAt: string;
  refreshToken: string;
  refreshTokenExpiresAt: string;
  client: string;
  user: string;
  createrAt: string;
  tokenAvailerId: string;
  name: string;
  email: string;
  picture: string;
  role: string;
}

export interface Error {
  code: number;
  message: string;
  errMsg: string;
}

export const LogIn = async (body: {
  email: string;
  password: string;
}): Promise<Data> => {
  try {
    let data: LoginType = await post("/auth/login", body);

    console.log("login data: ", data);
    return data?.encoded?.data as Data;
  } catch (error) {
    throw error;
  }
};
