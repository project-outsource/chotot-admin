// Login
export interface ILoginParams {
  username: string;
  password: string;
}

export interface ILoginResponse {
  access: string;
  refresh: string;
}

// Register
export interface IRegisterParams {
  username: string;
  email?: string;
  password: string;
}

export interface IRegisterResponse extends ILoginResponse {}

export interface IRefreshTokenResponse extends ILoginResponse {}

export interface IUser {
  id: number;
  username: string;
  email: string;
  password?: string;
  fullName: string;
  avatarUrl: string;
  countryId: number;
  isActive: number;
  isActive2fa: number;
  createdAt: string;
  updatedAt: string;
}

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}
