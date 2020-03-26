const config = {
  environments: {
    mpx_production: {
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
  },
}

export default (env) => {
  return {
    error: (key) => {
      throw new Error(`'${key}' not configured!`)
    },
    get conf(env) {
      const conf = config.environments[env]
      if (!conf) this.error(env)
    },
    get aws_profile() {
      const {aws_profile} = this.conf
      if (!aws_profile) this.error('aws_profile')
    },
    get branch() {
      const {branch} = this.conf
      if (!branch) this.error('branch')
    },
    get endpoints() {
      const {endpoints} = this.conf
      if (!endpoints) this.error('endpoints')
    },
    get frontends() {
      const {frontends} = this.conf
      if (!frontends) this.error('frontends')
    },
  }
}
