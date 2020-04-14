const {merge, trim} = require('lodash')
const {execSync} = require('child_process')

const config = {
  envs: {
    mpx_staging: {
      environment: 'staging',
      aws_profile: 'staging',
      branch: 'staging',
      rollbar: 'abcdef',
      slack_url: 'abcdef',
      endpoints: {
        um: "https://um.api.mediapeers.mobi/v20140601",
        pm: "https://pm.api.mediapeers.mobi/v20140601",
        am: "https://am.api.mediapeers.mobi/v20140601",
        ac: "https://ac.api.mediapeers.mobi/v20140601",
        sm: "https://sm.api.mediapeers.mobi/v20140601",
        mc: "https://mc.api.mediapeers.mobi/v20140601",
        jc: "https://jc.api.mediapeers.mobi/v20140601",
        tuco: "https://tuco.api.mediapeers.mobi",
        pigeon: "https://pigeon.api.mediapeers.mobi",
        viscacha: "https://viscacha.api.mediapeers.mobi",
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
