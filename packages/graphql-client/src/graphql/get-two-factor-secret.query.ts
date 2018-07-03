import gql from 'graphql-tag';

export const getTwoFactorSecretQuery = gql`
  query {
    twoFactorSecret {
      ascii
      base32
      hex
      qr_code_ascii
      qr_code_hex
      qr_code_base32
      google_auth_qr
      otpauth_url
    }
  }
`;
