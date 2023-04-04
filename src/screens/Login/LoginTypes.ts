export type FormState = {
  username: string;
  mobile_number: number;
};

export type OtpState = {
  otp: number | null;
};

export interface ILoginRequest {
  username: string | undefined;
  mobile_number: number | undefined;
  country_code: string | undefined;
  referral_code: string | undefined;
}

export interface IValidateRequest {
  auth_token: string | undefined;
  otp: string | undefined;
}

export interface IResendRequest {
  auth_token: string | undefined;
}
