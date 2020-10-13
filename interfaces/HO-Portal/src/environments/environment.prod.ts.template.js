// Output should be a valid TS-file:
module.exports = `// THIS FILE IS GENERATED BY 'npm run set-env-variables'

export const environment = {
  production: ${process.env.NG_PRODUCTION || true},

  // APIs:
  url_121_service_api: '${process.env.NG_URL_121_SERVICE_API}',

  // Third-party tokens:
  ai_ikey: '${process.env.NG_AI_IKEY}',
  ai_endpoint: '${process.env.NG_AI_ENDPOINT}',
};
`;
