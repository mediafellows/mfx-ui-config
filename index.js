const config = {
  suffix: 'T1QSP9Y1J/B5V1AM1C6/bUq4VSMqa5yrHYZRzNYFMoTK',
  environments: {
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
      frontends: {
        'mpx-ui-gcui': {
          'base2': {
            bucket: 'mpx-v2-production-buyer-fe-mpx',
            distribution_ids: ['E3OVGR028R78SH'],
          }
        },
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
      frontends: {
        'mpx-ui-gcui': {
          'base2': {
            bucket: 'mpx-v2-staging-buyer-fe-mpx',
            distribution_ids: ['E13JQIPFDFHOUI'],
          }
        },
      },
    },
  },
}

module.exports = (env) => {
  const error = (key) => {
    throw new Error(`'${key}' not configured!`)
  }
  const conf = config.environments[env]
  if (!conf) error(env)

  return {
    ...config,
    ...conf,
    get env() {
      const {env} = conf
      if (!env) error('env')
      return env
    },
    get aws_profile() {
      const {aws_profile} = conf
      if (!aws_profile) error('aws_profile')
      return aws_profile
    },
    get branch() {
      const {branch} = conf
      if (!branch) error('branch')
      return branch
    },
    get endpoints() {
      const {endpoints} = conf
      if (!endpoints) error('endpoints')
      return endpoints
    },
    project: (repoName, projectName) => {
      const {frontends} = conf
      if (!frontends) error('frontends')
      const repo = frontends[repoName]
      if (!repo) error(repoName)
      const project = repo[projectName]
      if (!project) error(projectName)
      return project
    },
  }
}
