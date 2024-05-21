const {merge, trim, reduce} = require('lodash')
const {execSync} = require('child_process')

const defaultCSP = {
  'default-src': ["'self'"],
  'child-src': ["blob:"],
  'script-src': [
    "'self' 'unsafe-inline' 'unsafe-eval'",
    "www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",
    "https://cdnjs.cloudflare.com/ajax/libs/rollbar.js",
    "https://www.google.com/recaptcha",
    "*.googletagmanager.com",
    "*.gstatic.com",
    "*.theoplayer.com",
    "*.hotjar.com",
  ],
  'style-src': [
    "'self' 'unsafe-inline'",
    "fonts.googleapis.com",
    "cdn.linearicons.com",
    "*.typekit.net",
    "*.theoplayer.com",
  ],
  'connect-src': [
    "'self'",
    "https://*.{{base_domain}} wss://*.{{base_domain}}",
    "*.s3-accelerate.amazonaws.com *.s3.amazonaws.com",
    "*.chime.aws wss://*.chime.aws",
    "*.hotjar.com wss://*.hotjar.com",
    "*.google-analytics.com",
    "*.theoplayer.com",
    "api.rollbar.com",
  ],
  'font-src': [
    "'self' data:",
    "fonts.googleapis.com fonts.gstatic.com",
    "use.typekit.net",
    "cdn.linearicons.com",
  ],
  'img-src': [
    "'self' data: blob:",
    "*.{{base_domain}}",
    "*.s3-accelerate.amazonaws.com *.s3.amazonaws.com",
    "*.google-analytics.com maps.gstatic.com maps.googleapis.com",
    "licensing.theoplayer.com",
  ],
  'media-src': [
    "'self' data: blob:",
    "*.{{base_domain}}",
    "*.s3-accelerate.amazonaws.com *.s3.amazonaws.com",
  ],
  'worker-src': [
    "'self' data: blob:",
    "*.theoplayer.com",
  ],
  'object-src': [
    "'self'",
    "*.s3-accelerate.amazonaws.com *.s3.amazonaws.com",
  ],
  'frame-src': [
    "'self'",
    "https://www.google.com/recaptcha/api2/",
    "https://vars.hotjar.com/",
    "*.s3-accelerate.amazonaws.com *.s3.amazonaws.com",
  ],
};

const config = {
  envs: {
    mpx_staging: {
      environment: 'staging',
      aws_profile: 'staging',
      branch: 'staging',
      rollbar: 'abcdef',
      slack_url: 'abcdef',
      base_domain: "mediastore.dev",
      endpoints: {
        um: "https://um.api.mediastore.dev/v20140601",
        pm: "https://pm.api.mediastore.dev/v20140601",
        am: "https://am.api.mediastore.dev/v20140601",
        ac: "https://ac.api.mediastore.dev/v20140601",
        sm: "https://sm.api.mediastore.dev/v20140601",
        mc: "https://mc.api.mediastore.dev/v20140601",
        jc: "https://jc.api.mediastore.dev/v20140601",
        tuco: "https://tuco.api.mediastore.dev",
        pigeon: "https://pigeon.api.mediastore.dev",
        viscacha: "https://viscacha.api.mediastore.dev",
      },
      repos: {
        'mpx-ui-admin': {
          projects: {
            'generic': {
              bucket: 'mpx-ui-admin',
              distribution_ids: [],
            },
          },
        },
        'mpx-ui-gcui': {
          projects: {
            'base2': {
              bucket: 'mpx-ui-gcui',
              distribution_ids: [],
            },
          },
        },
        'mpx-ui-old-gcui': {
          projects: {
            'base1': {
              bucket: 'mpx-ui-old-gcui',
              distribution_ids: [],
            },
          },
        },
        'mpx-ui-orf': {
          projects: {
            'orf': {
              bucket: 'mpx-ui-orf',
              distribution_ids: [],
            },
          },
        },
        'mpx-ui-nbcu': {
          projects: {
            'nbcu': {
              bucket: 'mpx-ui-nbcu',
              distribution_ids: [],
            },
          },
        },
        'mpx-ui-fremantle': {
          projects: {
            'fremantle': {
              bucket: 'mpx-ui-fremantle',
              distribution_ids: [],
            },
          },
        },
        'mpx-ui-lahm': {
          projects: {
            'lahm': {
              bucket: 'mpx-ui-lahm',
              distribution_ids: [],
            },
          },
        },
      },
    },
  },
}

const fetch = (object, head, tail) => {
  const key = tail.shift()
  const val = object[key]

  if (!val) {
    if (head.length > 0) {
      throw new Error(`'${key}' not configured in '${head.join('.')}'!`)
    }
    else {
      throw new Error(`'${key}' not configured!`)
    }
  }

  if (tail.length === 0) {
    // goal!
    if ((typeof val) === 'object') return merge(
      {
        fetch: (path) => {
          return fetch(val, [], path.split('.'))
        }
      },
      val,
    )
    else return val
  }
  return fetch(val, head.concat(key), tail)
}

const exp = merge(
  {
    contentSecurityPolicy: (baseDomain, additions) => {
      return reduce(defaultCSP, (acc, value, key) => {
        const list = additions && additions[key] ? value.concat(additions[key]) : value.slice();
        const result = list.join(' ').replace(/{{base_domain}}/g, baseDomain);

        return acc + `${key} ${result}; `;
      }, "");
    },
    gitBranch: () => {
      return trim(execSync("git rev-parse --abbrev-ref HEAD").toString())
    },
    env: (name) => {
      const envConfig = fetch(config, [], ['envs', name])
      return envConfig
    }
  },
  config,
)

module.exports = exp
