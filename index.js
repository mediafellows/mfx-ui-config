var config = {
  environments: {
    mpx_production: {
      aws_profile: 'production',
      default_branch: 'legacy',
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

module.exports = config
