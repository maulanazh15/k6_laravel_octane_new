// config.js

export const AppConfig = {
    host: 'https://jelitaspmi.homelabchester.my.id',
    endpoints: {
      home: '/',
      login: '/login',
      apiStatus: '/api/status',
    },
    thresholds: {
      http_req_failed: [
        {
          threshold: 'rate<0.05',
          abortOnFail: true,
          delayAbortEval: '1s',
        }
      ], // http errors should be less than 1%
      // http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
    },
  };
  