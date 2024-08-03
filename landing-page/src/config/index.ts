import dotenv from 'dotenv';

dotenv.config();

const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = process.env[key];
  if (!value && !defaultValue) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value || defaultValue!;
};

export const config = {
  apiUrl: getEnvVar('REACT_APP_API_URL'),
  strapiToken: getEnvVar('REACT_APP_STRAPI_TOKEN'),
};
