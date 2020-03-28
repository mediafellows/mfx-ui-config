const {merge} = require('lodash')

const config = {
  slack_token: SCRAMBLED:vPrNquHiCr7r8O5ENgC61KyWqYR412KU7OoHxhyZDcGRH70vKYU0KOCDi7M+Qgy6eHjTnS9wEpSAgwa7D0xk656iXQSkfkSntmNf3Ne8uyps9prdWywl97XcAhR4012W
  envs: {
    development: {
      environment: 'development',
      rollbar: SCRAMBLED:3Orxmf7EcInqytNaSmSg+e2QxahxN9bK3gjLcn8nNR/RpfHPqIQpGnCTI6ZXZ6z6ev4G4GTuwp3x08vE/AhR2MY6PlL0xpDS6MbcUczBig0=
      branch: 'master',
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
    },
    mpx_staging: {
      environment: 'staging',
      aws_profile: 'staging',
      branch: 'staging',
      rollbar: SCRAMBLED:+vzVvfn2AOjm49NxSxm8kITJ5aHwis8UaCi9vHcsFCRmbks28d2E5+f4M0GfIL/e8tWvbSUwh3kVThAH8xX0vaxOCB3AfgXSgUlXXbkoP9Y=
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
        'mpx-ui-gcui': {
          projects: {
            'base2': {
              bucket: 'mpx-v2-staging-buyer-fe-mpx',
              distribution_ids: ['E13JQIPFDFHOUI'],
            },
            'demo': {
              bucket: 'mpx-v2-staging-buyer-fe-demo',
              distribution_ids: ['EELP8L0F3FVKO'],
            },
            'dmd': {
              bucket: 'mpx-v2-staging-buyer-fe-dmd',
              distribution_ids: ['E1CYY05VCIFUY7'],
            },
            'ftd': {
              bucket: 'mpx-v2-staging-buyer-fe-ftd',
              distribution_ids: ['E1XD0E4FIVNUBH'],
            },
            'propagate': {
              bucket: 'mpx-v2-staging-buyer-fe-propagate',
              distribution_ids: ['E2YCRI4KV9UJYE'],
            },
            'rasi': {
              bucket: 'mpx-v2-staging-buyer-fe-rasi',
              distribution_ids: ['E17OE09EPP2P42'],
            },
            'tf1pro': {
              bucket: 'mpx-v2-staging-buyer-fe-tf1pro',
              distribution_ids: ['E39B27OFTRRNMR'],
            },
          },
        },
        'mpx-ui-nbcu': {
          projects: {
            'nbcu': {
              bucket: 'mpx-v2-staging-buyer-fe-nbcu',
              distribution_ids: ['E3CPU44JYU6ZZP'],
            },
          },
        },
      },
    },
    mpx_presentation: {
      env: 'presentation',
      aws_profile: 'presentation',
      branch: 'presentation',
      rollbar: SCRAMBLED:vPftp+vPM6zHxddOGTqD+jm4+nD1PAUfSvvvr/MnTAH71Ua3w2pWe9YgAWi/qmhVDboPVW4XTNuhPfwkQJZSJsKf9c+lzK5SUmMJoWA90s4=
      endpoints: {
        um: "https://um.api.mediapeers.us/v20140601",
        pm: "https://pm.api.mediapeers.us/v20140601",
        am: "https://am.api.mediapeers.us/v20140601",
        ac: "https://ac.api.mediapeers.us/v20140601",
        sm: "https://sm.api.mediapeers.us/v20140601",
        mc: "https://mc.api.mediapeers.us/v20140601",
        jc: "https://jc.api.mediapeers.us/v20140601",
        tuco: "https://tuco.api.mediapeers.us",
        pigeon: "https://pigeon.api.mediapeers.us",
        viscacha: "https://viscacha.api.mediapeers.us",
      },
      repos: {
        'mpx-ui-gcui': {
          projects: {
            'base2': {
              bucket: 'mpx-v2-presentation-buyer-fe-mpx',
              distribution_ids: ['EIOUCVIN20KPV'],
            },
            'demo': {
              bucket: 'mpx-v2-presentation-buyer-fe-demo',
              distribution_ids: ['E2UV5AZ6UM376K'],
            },
            'dmd': {
              bucket: 'mpx-v2-presentation-buyer-fe-dmd',
              distribution_ids: ['E1YGQ6400NI6Q1'],
            },
            'ftd': {
              bucket: 'mpx-v2-presentation-buyer-fe-ftd',
              distribution_ids: ['ERUK47MMPNLUW'],
            },
            'propagate': {
              bucket: 'mpx-v2-presentation-buyer-fe-propagate',
              distribution_ids: ['E2LQNNLHB1K3S7'],
            },
            'rasi': {
              bucket: 'mpx-v2-presentation-buyer-fe-rasi',
              distribution_ids: ['E351ZF1SSNM9TF'],
            },
            'tf1pro': {
              bucket: 'mpx-v2-presentation-buyer-fe-tf1pro',
              distribution_ids: ['E17IIWAUB1EF9U'],
            },
          },
        },
        'mpx-ui-nbcu': {
          projects: {
            'nbcu': {
              bucket: 'mpx-v2-presentation-buyer-fe-nbcu',
              distribution_ids: ['E3C11O1R6T9BAQ'],
            },
          },
        },
      },
    },
    mpx_production: {
      environment: 'production',
      aws_profile: 'production',
      branch: 'legacy',
      rollbar: SCRAMBLED:6P7jg9StKqur/Pl1SG+h9ETUTbm2ih2LPdVD8uXdkviuxm5CuGnyCS3SEq6csasgRUppTYCGCZ6vxeg/iYJqZHbdzMNlHIW8ebhd/VnNhpo=
      endpoints: {
        um: "https://um.api.mediapeers.biz/v20140601",
        pm: "https://pm.api.mediapeers.biz/v20140601",
        am: "https://am.api.mediapeers.biz/v20140601",
        ac: "https://ac.api.mediapeers.biz/v20140601",
        sm: "https://sm.api.mediapeers.biz/v20140601",
        mc: "https://mc.api.mediapeers.biz/v20140601",
        jc: "https://jc.api.mediapeers.biz/v20140601",
        tuco: "https://tuco.api.mediapeers.biz",
        pigeon: "https://pigeon.api.mediapeers.biz",
        viscacha: "https://viscacha.api.mediapeers.biz",
      },
      repos: {
        'mpx-ui-gcui': {
          projects: {
            'base2': {
              bucket: 'mpx-v2-production-buyer-fe-mpx',
              distribution_ids: ['E3OVGR028R78SH'],
            },
            'demo': {
              bucket: 'mpx-v2-production-buyer-fe-demo',
              distribution_ids: ['E1CYY05VCIFUY7'],
            },
            'dmd': {
              bucket: 'mpx-v2-production-buyer-fe-dmd',
              distribution_ids: ['E1S6TZXATGJXUA', 'E19H1GRZUR608S'],
            },
            'ftd': {
              bucket: 'mpx-v2-production-buyer-fe-ftd',
              distribution_ids: ['E2E12LEB9I9IHM', 'E17GM98QGPW6SU'],
            },
            'propagate': {
              bucket: 'mpx-v2-production-buyer-fe-propagate',
              distribution_ids: ['E3H7XXRQH72IOB'],
            },
            'rasi': {
              bucket: 'mpx-v2-production-buyer-fe-rasi',
              distribution_ids: ['E26C1U10ADV7QH', 'EMWCHDOE8LOQP'],
            },
            'tf1pro': {
              bucket: 'mpx-v2-production-buyer-fe-tf1pro',
              distribution_ids: ['E2ZC4T75X1OG0E', 'E2I8KG37JR5TBO'],
            },
          },
        },
        'mpx-ui-nbcu': {
          projects: {
            'nbcu': {
              bucket: 'mpx-v2-production-buyer-fe-nbcu',
              distribution_ids: ['E3QWWRV2O1TAXK', 'E34BEDEYZVUQV5'],
            },
          },
        },
      },
    },
    mfx_production: {
      environment: 'production',
      aws_profile: 'mfx_production',
      branch: 'production',
      rollbar: SCRAMBLED:7ffrkeP2Ooz33N54OmOCjsVGYJ/JbZfj/0ILAbbVZHn+Qbn0eF9f+GwFt/heZfnFU7akpk8KYy9hZETqKIkDQVkR/OJAqHvlIbyoTG4sSYw=
      endpoints: {
        um: "https://um.api.mediastore.app/v20140601",
        pm: "https://pm.api.mediastore.app/v20140601",
        am: "https://am.api.mediastore.app/v20140601",
        ac: "https://ac.api.mediastore.app/v20140601",
        sm: "https://sm.api.mediastore.app/v20140601",
        mc: "https://mc.api.mediastore.app/v20140601",
        jc: "https://jc.api.mediastore.app/v20140601",
        tuco: "https://tuco.api.mediastore.app",
        pigeon: "https://pigeon.api.mediastore.app",
        viscacha: "https://viscacha.api.mediastore.app",
      },
      repos: {
        'mpx-ui-gcui': {
          projects: {
            'base2': {
              bucket: 'mfx-v2-production-buyer-fe-mpx',
              distribution_ids: ['E1D2A8JG3XOH18'],
            },
          },
        },
        'mpx-ui-nbcu': {
          projects: {
            'nbcu': {
              bucket: 'mfx-v2-production-buyer-fe-nbcu',
              distribution_ids: ['E11YNWLNQKE2US'],
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
    fetch: (path) => {
      return fetch(config, [], path.split('.'))
    }
  },
  config,
)

module.exports = exp
