const config = {
  suffix: 'T1QSP9Y1J/B5V1AM1C6/bUq4VSMqa5yrHYZRzNYFMoTK',
  mpx_production: {
    env: 'production',
    aws_profile: 'production',
    branch: 'legacy',
    endpoints: {
      tuco: "https://tuco.api.mediapeers.biz",
      pigeon: "https://pigeon.api.mediapeers.biz",
      um: "https://um.api.mediapeers.biz/v20140601",
      pm: "https://pm.api.mediapeers.biz/v20140601",
      am: "https://am.api.mediapeers.biz/v20140601",
      ac: "https://ac.api.mediapeers.biz/v20140601",
      sm: "https://sm.api.mediapeers.biz/v20140601",
      mc: "https://mc.api.mediapeers.biz/v20140601",
    },
    'mpx-ui-gcui': {
      'base2': {
        bucket: 'mpx-v2-production-buyer-fe-mpx',
        distribution_ids: ['E3OVGR028R78SH'],
      }
    },
  },
  mpx_staging: {
    env: 'staging',
    aws_profile: 'staging',
    branch: 'staging',
    endpoints: {
      tuco: "https://tuco.api.mediapeers.mobi",
      pigeon: "https://pigeon.api.mediapeers.mobi",
      um: "https://um.api.mediapeers.mobi/v20140601",
      pm: "https://pm.api.mediapeers.mobi/v20140601",
      am: "https://am.api.mediapeers.mobi/v20140601",
      ac: "https://ac.api.mediapeers.mobi/v20140601",
      sm: "https://sm.api.mediapeers.mobi/v20140601",
      mc: "https://mc.api.mediapeers.mobi/v20140601",
    },
    'mpx-ui-gcui': {
      'base2': {
        bucket: 'mpx-v2-staging-buyer-fe-mpx',
        distribution_ids: ['E13JQIPFDFHOUI'],
      }
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
    if ((typeof val) === 'object') return {
      ...val,
      fetch: (path) => {
        return fetch(val, [], path.split('.'))
      }
    }
    else return val
  }
  return fetch(val, head.concat(key), tail)
}

const exp = {
  ...config,
  fetch: (path) => {
    return fetch(config, [], path.split('.'))
  },
}

module.exports = exp
