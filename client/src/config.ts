// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'w3jsa36kra'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: 'dev-ubqmtmms0kxyb5jk.us.auth0.com',            // Auth0 domain
  clientId: 'ewNpRcgSIlJdfJ7JpNJWKR8HSd2Uowuq',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
