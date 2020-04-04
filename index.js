const {merge, trim, isPlainObject} = require('lodash')
const {execSync} = require('child_process')
const {existsSync} = require('fs')

const config = {
  envs: {
    development: {
      environment: 'development',
      rollbar: SCRAMBLED:3Orxmf7EcInqytNaSmSg+e2QxahxN9bK3gjLcn8nNR/RpfHPqIQpGnCTI6ZXZ6z6ev4G4GTuwp3x08vE/AhR2MY6PlL0xpDS6MbcUczBig0=
      slack_url: SCRAMBLED:yMj7mp7xK67/48xMLDy4ziZZBmdWNtE6ltOITNn/khtwINPO7QeEIjZ6c2XBCCXzfK9IqJ2/kVZ4wakNtsRpsams2yBWHWiluYhqXTtfBJC84Fzv2ONeEfDztnz2azakAjjxZqcLa5BdjKGjzCHffIGwQhYYzuLp68Swy3vbjXYM52+HtapTT8NW62Y=
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
      repos: {
        'mpx-ui-admin': {
          projects: {
            'generic': { },
            'fremantle': { },
            'lahm': { },
            'nbcu': { },
            'dtv': { },
            'ams': { },
            'hulu': { },
            'netflix': { },
            'hbo': { },
            'lgt': { },
            'tf1pro': { },
            'orf': { },
          },
        },
      },
    },
    mpx_staging: {
      environment: 'staging',
      aws_profile: 'staging',
      branch: 'master',
      rollbar: SCRAMBLED:+vzVvfn2AOjm49NxSxm8kITJ5aHwis8UaCi9vHcsFCRmbks28d2E5+f4M0GfIL/e8tWvbSUwh3kVThAH8xX0vaxOCB3AfgXSgUlXXbkoP9Y=
      slack_url: SCRAMBLED:yMj7mp7xK67/48xMLDy4ziZZBmdWNtE6ltOITNn/khtwINPO7QeEIjZ6c2XBCCXzfK9IqJ2/kVZ4wakNtsRpsams2yBWHWiluYhqXTtfBJC84Fzv2ONeEfDztnz2azakAjjxZqcLa5BdjKGjzCHffIGwQhYYzuLp68Swy3vbjXYM52+HtapTT8NW62Y=
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
              bucket: 'mpx-v2-staging-admin-fe-generic',
              distribution_ids: SCRAMBLED:3ojQj8fRJpTA181dDjyGjGpZFbU3J7BiFebJCAmuTgaNsPONxpEp/Nkzorpz11+PqSp0Q0sPdYv6Di3h
            },
            'fremantle': {
              bucket: 'mpx-v2-staging-admin-fe-fremantle',
              distribution_ids: SCRAMBLED:4dzH/dKxbJ3AxYh0DTro6e3sXS/EDHBX3RGH5pzV5glL7SufsDWD7M4nQLf/2fN1KUf+2Y1eAXbwDDbc
            },
            'lahm': {
              bucket: 'mpx-v2-staging-admin-fe-lahm',
              distribution_ids: SCRAMBLED:4dzH/dKxbJ3AxYh0DTro6e3sXS/EDHBX3RGH5pzV5glL7SufsDWD7M4nQLf/2fN1KUf+2Y1eAXbwDDbc
            },
            'nbcu': {
              bucket: 'mpx-v2-staging-admin-fe-nbcu',
              distribution_ids: SCRAMBLED:2M+1/oXvE4vU0e1ZECa+lJEYM2VX6WfPIACcx0eWyqCeu6nK9nnzyH7tnCBzwc9X+w9vBrRePXJe0oNi
            },
            'dtv': {
              bucket: 'mpx-v2-staging-admin-fe-dtv',
              distribution_ids: SCRAMBLED:xt7bgMDQN/DEkPxcGBnn3zRthOzP3dvob92ZMrwZuTr89IF8n2bGuyA9S2kVkAbL/zwVwgiuT6qzkYbF
            },
            'ams': {
              bucket: 'mpx-v2-staging-admin-fe-ams',
              distribution_ids: SCRAMBLED:7v+6rMXNCp363udhNCG3+TDXIMc/nm8RwWUkOGlf25xbKampfV/xcXyzsrTD3QgzxWBTT5VZqb+Qer+x
            },
            'hulu': {
              bucket: 'mpx-v2-staging-admin-fe-hulu',
              distribution_ids: SCRAMBLED:/+zopojkD7DK05JiPSWdyxtUEcm0NeITNpordE+Iv9HSkNynLFcqevdNNzZCXRzH/c7IJtecIFwUIp+/
            },
            'netflix': {
              bucket: 'mpx-v2-staging-admin-fe-netflix',
              distribution_ids: SCRAMBLED:08D2qMe2BpTRwvVkSiCg0UxstEF7EBc4CmDe23uXjlvMepWCfDZvaDdxOgyAOR9LDTMOQKSZEudl+1B+
            },
            'hbo': {
              bucket: 'mpx-v2-staging-admin-fe-hbo',
              distribution_ids: SCRAMBLED:5fbwnOC3EoOinftjMhmc7Z1GMMNyYTa0HDJiUSUmtuME3PG6q6e+c+skavVbSuDrYM5a6UUbboQyZYkj
            },
            'lgt': {
              bucket: 'mpx-v2-staging-admin-fe-lgt',
              distribution_ids: SCRAMBLED:wc/RisTPJrPnxuhVKW697buEa9rPad0v/8G/goz//CpJIGO+JGgJ7tUQWlrz09c6oT0ns3jxLdOTXR5V
            },
            'tf1pro': {
              bucket: 'mpx-v2-staging-admin-fe-tf1pro',
              distribution_ids: SCRAMBLED:4PL4uOvPBLCqw/VQSyWAjaZyk/UiuWOAYiUQ24anAMWMxeh+ew2y4mEc8VxEllY8oVs/m1HFtFXNvDJM
            },
            'orf': {
              bucket: 'mpx-v2-staging-admin-fe-orf',
              distribution_ids: SCRAMBLED:0uLIvNjEFf7B8OchMjifw7te31VpDtMyNIfgctzWcVnsyv6MjOZbEt2dFAsB41hl2I4ZkSHQNf6lhO1s
            },
          },
        },
        'mpx-ui-gcui': {
          projects: {
            'base2': {
              bucket: 'mpx-v2-staging-buyer-fe-mpx',
              distribution_ids: SCRAMBLED:zdmtqt3LeqLd8dw9NQWF4hbrrT+VoD2P3M2jl7cgGPPuVxnEgBZP8/BhwZmbs4tD4f6LgdnXGwn42HyO
            },
            'demo': {
              bucket: 'mpx-v2-staging-buyer-fe-demo',
              distribution_ids: SCRAMBLED:5YzmvfzNEIjyw415Rgbni0J8AfsyQhkhhEj6djOo+blxHzEP9tRtDq3vbUHclvl1Jyhkw1sUskkyxSPK
            },
            'dmd': {
              bucket: 'mpx-v2-staging-buyer-fe-dmd',
              distribution_ids: SCRAMBLED:xMHSkcfiNJD9/cdfPDiZ4iMeXc9BH9IzPMggZ1ki/+HJPSVk8r2C9mnuI8uDxQxUTnbcbzsoYBdS/qPx
            },
            'ftd': {
              bucket: 'mpx-v2-staging-buyer-fe-ftd',
              distribution_ids: SCRAMBLED:xt7zqtXAcfHC4fM5JBnh6drLiCRrRAZt0V7mJyi8ZD3D1eqU13+UH+t+YYXvv1RYzuw9HzVio6nYzdia
            },
            'propagate': {
              bucket: 'mpx-v2-staging-buyer-fe-propagate',
              distribution_ids: SCRAMBLED:w/v08/y+N5Pj3v5QOBSo9pHQcrH+QPvFV6pcGRn5emYjGvmo1pXf8a92GUSJo06gBOT5EGZS6EqOn+eC
            },
            'rasi': {
              bucket: 'mpx-v2-staging-buyer-fe-rasi',
              distribution_ids: SCRAMBLED:uMzFvIS+Duj5i9hUFBO1iD4MY7LovG7yhTFUbz/E55i1c5AWKL59duOTpg3Ly8zS022O3bEkhar3W0pN
            },
            'tf1pro': {
              bucket: 'mpx-v2-staging-buyer-fe-tf1pro',
              distribution_ids: SCRAMBLED:0onT/P3eKKHH3Yt0FiCUgslP/SHKWzKLU/2sbOKHOWSANpher0fMkse+WkSsulGo8nGH/FuV7vgBir3R
            },
          },
        },
        'mpx-ui-old-gcui': {
          projects: {
            'dynamic-television': {
              bucket: 'mpx-v2-staging-buyer-fe-dtv',
              distribution_ids: SCRAMBLED:44Cz5MfWGqb9/OU5NGGmza/wUrWj2u8cuh1oOESR/JDxeT0tgph5k0TAAJ5m85IynlWC9fjWfY8OesTW
            },
            'e-one': {
              bucket: 'mpx-v2-staging-buyer-fe-eone',
              distribution_ids: SCRAMBLED:2oHqvPfrGpH609g9Nm6S+g9CuHmwZql2haUz19PdZ2HmGcgF6nsAhhlYP6rEybBysBNjXy54NaKyO3/K
            },
          },
        },
        'mpx-ui-orf': {
          projects: {
            'orf': {
              bucket: 'mpx-v2-staging-buyer-fe-orf',
              distribution_ids: SCRAMBLED:wNvJrePREfCh4IRVKHmF6AaEheeIXDGtkoA0ASLxJpXO4Ubfwix8bJfQv1sVopo0g8TwQ33MS+9Zzcby
            },
          },
        },
        'mpx-ui-nbcu': {
          projects: {
            'nbcu': {
              bucket: 'mpx-v2-staging-buyer-fe-nbcu',
              distribution_ids: SCRAMBLED:/tG6//rWL6qli/9iTWSo/X/Sna2PCir1qKHObP8BoruDYDHJQadHSaOBso5q9fFcYCOcGFkJpEcg0hEQ
            },
          },
        },
        'mpx-ui-fremantle': {
          projects: {
            'fremantle': {
              bucket: 'mpx-v2-staging-buyer-fe-fremantle',
              distribution_ids: SCRAMBLED:2P/zuOjjEPLB4NF5BhymzEPejZBoguZ3L4GIGy85KXq2GoRrsd+yDQPK8otQVLkFX63ygRqTOSV6vXya
            },
          },
        },
        'mpx-ui-lahm': {
          projects: {
            'lahm': {
              bucket: 'mpx-v2-staging-buyer-fe-lahm',
              distribution_ids: SCRAMBLED:4cjYrui/B5PV4opdHQWF/SjVBxS8qOSUvqOUtC5eblaoGH1X0KG5AtFmK1JbDmkBdD7C43mGzLhpsLp+
            },
          },
        },
      },
    },
    mpx_presentation: {
      environment: 'presentation',
      aws_profile: 'presentation',
      branch: 'presentation',
      rollbar: SCRAMBLED:vPftp+vPM6zHxddOGTqD+jm4+nD1PAUfSvvvr/MnTAH71Ua3w2pWe9YgAWi/qmhVDboPVW4XTNuhPfwkQJZSJsKf9c+lzK5SUmMJoWA90s4=
      slack_url: SCRAMBLED:yMj7mp7xK67/48xMLDy4ziZZBmdWNtE6ltOITNn/khtwINPO7QeEIjZ6c2XBCCXzfK9IqJ2/kVZ4wakNtsRpsams2yBWHWiluYhqXTtfBJC84Fzv2ONeEfDztnz2azakAjjxZqcLa5BdjKGjzCHffIGwQhYYzuLp68Swy3vbjXYM52+HtapTT8NW62Y=
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
        'mpx-ui-admin': {
          projects: {
            'generic': {
              bucket: 'mpx-v2-presentation-admin-fe-generic',
              distribution_ids: SCRAMBLED:x470nMftLZDpzvMhORe7/bG/REMhzmFf6EZ3NoBxaS5zN8rpZds1vRFrv05lpMItkjYLUO2Z49AA7572
            },
            'fremantle': {
              bucket: 'mpx-v2-presentation-admin-fe-fremantle',
              distribution_ids: SCRAMBLED:4MvgqMHjNabyy9FxOCKRiuPhk9ff99dyepiaqr6PhHqI7Ac+IQdYwJuqU4Ds892CMqQhOfKB58mURvqU
            },
            'lahm': {
              bucket: 'mpx-v2-presentation-admin-fe-lahm',
              distribution_ids: SCRAMBLED:+o+3uuL+FK7X7eVODhyHkMspey/nbPgeXCiQSWQ7LNrdVRoGx5aWKIekSsPrNP7Q3kc2wMOJlTjXMUP/
            },
            'nbcu': {
              bucket: 'mpx-v2-presentation-admin-fe-nbcu',
              distribution_ids: SCRAMBLED:2//zovTiGqj5yth8FTO80wovEFvDZHcHDSrxnwNfj066KP/52nH1xAXlhm9M6VA63mOGRSrwsN4aVg3x
            },
            'dtv': {
              bucket: 'mpx-v2-presentation-admin-fe-dtv',
              distribution_ids: SCRAMBLED:7IqwqvSzcqnex/ViPyKcg2ahCoULjKBl15pu9N9yHQ2g26apBkCKh+4NuH0ex3b9yCaawPxaFI6A8Cvb
            },
            'ams': {
              bucket: 'mpx-v2-presentation-admin-fe-ams',
              distribution_ids: SCRAMBLED:2oDsqdrcJrGnxo4iDhvh9rBBvqpEI4gqmPoJtFniqwKE6MjH8yMiUU8Uze3zA+d/GCIw3jIogLTAqHdR
            },
            'hulu': {
              bucket: 'mpx-v2-presentation-admin-fe-hulu',
              distribution_ids: SCRAMBLED:wYr1k+vPdq39/cRmPT2Ggqerm5M+m2dEuD5VMBH0R9VbYQHJLAeaybI+/Va+qDcSZihhiqKzpctiPJxu
            },
            'netflix': {
              bucket: 'mpx-v2-presentation-admin-fe-netflix',
              distribution_ids: SCRAMBLED:2f/IosXkEJDYkOkhRjW27+79j9DzpNxJnlhaZ3xj20OOQCJYQ3MoQEaiEPJEsDW+X8RgTAiX32+/TUWn
            },
            'hbo': {
              bucket: 'mpx-v2-presentation-admin-fe-hbo',
              distribution_ids: SCRAMBLED:uO7qquDrEov37eRVNge9ytzJFss+nUSRnmMG8ANCYQjtojnxpIScs+EiXMtmWgfy727oG7rPzNfnpoiT
            },
            'lgt': {
              bucket: 'mpx-v2-presentation-admin-fe-lgt',
              distribution_ids: SCRAMBLED:zeDEncLgcKHb1vl7BwSF0e8EjOFWUrpjA2nPijTdqc0bPNAU/zN01ksxzx2oPW2mFymE0V/kmrpdlZN2
            },
            'tf1pro': {
              bucket: 'mpx-v2-presentation-admin-fe-tf1pro',
              distribution_ids: SCRAMBLED:4dnajZr+C7X594hsVWbp1CTwN/7cMapT7IC4rniQQ8Ke6yuNdjLXnWgFyQfVr/jKB+zxKZBrCjrB8k/s
            },
            'orf': {
              bucket: 'mpx-v2-presentation-admin-fe-orf',
              distribution_ids: SCRAMBLED:yNrvnfzPDobjy4RXFxSd2jxSthAIyRwiR1kn28zyPIBzJUhxyx1H9FEmsseRO1lzgtE6nrgUwN64BQBC
            },
          },
        },
        'mpx-ui-gcui': {
          projects: {
            'base2': {
              bucket: 'mpx-v2-presentation-buyer-fe-mpx',
              distribution_ids: SCRAMBLED:4NDBjPjKEpbQ0opGMyH/6hSW/ln/CxbmB5OSwbzbnJjKt4nqJ8y/sgCROyFOCwhINZU2VzuDKMRQSJME
            },
            'demo': {
              bucket: 'mpx-v2-presentation-buyer-fe-demo',
              distribution_ids: SCRAMBLED:/d7lgYPFOYul4+pEHSKn+BIqDBc/xCarun75dxttE3t9pmZ30UmjtRvb+dzE5oRrVll9TudENjAwrySL
            },
            'dmd': {
              bucket: 'mpx-v2-presentation-buyer-fe-dmd',
              distribution_ids: SCRAMBLED:8o/y/t2xJJLD6t9kPAPpyyU1985wE+8czlTH9JYyFwfibEbMqb8M3hvBO9Amr5jxdXLWIt1v1yWOp7ox
            },
            'ftd': {
              bucket: 'mpx-v2-presentation-buyer-fe-ftd',
              distribution_ids: SCRAMBLED:2+70qPbjbP7GxuxPVWe6zN4CJjqXSibjDFFwHclQzINjkBfCd+6Re2Yqas5Wia8jJ2ri26zPz85cuP+s
            },
            'propagate': {
              bucket: 'mpx-v2-presentation-buyer-fe-propagate',
              distribution_ids: SCRAMBLED:stbA+9veCfWkwuRuGxW/3XY97/rQqcCOAXuT796smetufOMV54sQ3E/bnQysPX5u2G0GLPiMH2a5CF+K
            },
            'rasi': {
              bucket: 'mpx-v2-presentation-buyer-fe-rasi',
              distribution_ids: SCRAMBLED:5ei0ndfqO6/b1/U5ETzj68+oZ0AL1yoXTDPqzSEbca++sdK4dmfZ3Oq53LBcqZAPJpqI79exB+Q1RFET
            },
            'tf1pro': {
              bucket: 'mpx-v2-presentation-buyer-fe-tf1pro',
              distribution_ids: SCRAMBLED:odXv4OHrDqqq7+4gFz282hk+eGHY3NBTu1TVo+n6IoeTMnmQkgpFjRlqhye+TNmQiuzp5BDmsg7IQCqz
            },
          },
        },
        'mpx-ui-old-gcui': {
          projects: {
            'dynamic-television': {
              bucket: 'mpx-v2-presentation-buyer-fe-dtv',
              distribution_ids: SCRAMBLED:2tTn/PT2FoH8xfxgMjumyytOBoRT/GGprf6XconoKb0ZFOIobYsBC2eKoBdUusWDqNNPmK9eRfrBDShP
            },
            'e-one': {
              bucket: 'mpx-v2-presentation-buyer-fe-eone',
              distribution_ids: SCRAMBLED:5fnShtn0NIWnx9BDSwf/49rEZj33Phg4hj0RUnF5G3SI6z9n4fLAF5/BrOk1uGDN8q8VcPXyRRI3uLO+
            },
          },
        },
        'mpx-ui-orf': {
          projects: {
            'orf': {
              bucket: 'mpx-v2-presentation-buyer-fe-orf',
              distribution_ids: SCRAMBLED:69nQjPeyIoHBzfJ1DGeq7XrsDDCujVtQfVMyGuZ2p+bnGha1ZLD2NIbE00DCQvvmGazEfMze4uTXpkHu
            },
          },
        },
        'mpx-ui-nbcu': {
          projects: {
            'nbcu': {
              bucket: 'mpx-v2-presentation-buyer-fe-nbcu',
              distribution_ids: SCRAMBLED:3dvhgsO/FLPn6/VTND3g7bV9sUyfV3FGsTIj/cQQ5JBQEH8Iezhelc8T2NiRRIvg8/DRwpPd6E6D7/1+
            },
          },
        },
        'mpx-ui-fremantle': {
          projects: {
            'fremantle': {
              bucket: 'mpx-v2-presentation-buyer-fe-fremantle',
              distribution_ids: SCRAMBLED:/sGpj938K77CzvpVDDGS8ZT7tY30aIozOMXWvGB5jGnXKNDqMhCeuhNJrhSvzvgSwSWvTccwcOBjZkDj
            },
          },
        },
        'mpx-ui-lahm': {
          projects: {
            'lahm': {
              bucket: 'mpx-v2-presentation-buyer-fe-lahm',
              distribution_ids: SCRAMBLED:3v314PDyE4X88sp+PRma2ZsFCL6plCHS3Rawa6Nn9YDn+xNvK0nqKR6yjVWwj+tq+kfq3uRkPMFGwVEP
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
      slack_url: SCRAMBLED:yMj7mp7xK67/48xMLDy4ziZZBmdWNtE6ltOITNn/khtwINPO7QeEIjZ6c2XBCCXzfK9IqJ2/kVZ4wakNtsRpsams2yBWHWiluYhqXTtfBJC84Fzv2ONeEfDztnz2azakAjjxZqcLa5BdjKGjzCHffIGwQhYYzuLp68Swy3vbjXYM52+HtapTT8NW62Y=
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
        'mpx-ui-admin': {
          projects: {
            'generic': {
              bucket: 'mpx-v2-production-admin-fe-generic',
              distribution_ids: SCRAMBLED:vojWvNz0e7/59/wlSRmE4VIL62+sJxpbWqeHWtbEW1o4pZDRvJtSmwgecaSlRnvMOVrfu80SN/cd/Gjz
            },
            'ams': {
              bucket: 'mpx-v2-production-admin-fe-ams',
              distribution_ids: SCRAMBLED:6YDprsvPJ6jDyNIuDxyIz98F7fB7Ce9KY9UhtshvX5TuZIRatGMBzPCJnX3FvZL/16v9IuEZgyewNVCJmCoG3exNOJ0zj19RMtoXLM9QQIx3CI0c
            },
            'hulu': {
              bucket: 'mpx-v2-production-admin-fe-hulu',
              distribution_ids: SCRAMBLED:wvLboeO0Npei5o9VEQWEjqJ6/3jUSiCD9yCS4XT5vpehruV8gfxAP2z6Z7qcw1v/5zRbrQn+JDh73frqLd4RlRmv1XSxQSe4Dv4SsQgab8YIKWXn
            },
            'netflix': {
              bucket: 'mpx-v2-production-admin-fe-netflix',
              distribution_ids: SCRAMBLED:/dTTncj1Gf/6weR0DgS01E++UnDDWGQJZCPESDH1Sk6AvzjCvPywqSPn0KY+Sbjar3lkis78TSc15mE3tdzyHJK5l8u3M1REr1hpphk80XA=
            },
            'hbo': {
              bucket: 'mpx-v2-production-admin-fe-hbo',
              distribution_ids: SCRAMBLED:vOrAv/3qMZfe09BHMCKeiPyBgNkj8lIV627Cm2IBU+W2CnoP7ieRIlb23C9lRdXBfCZ5/1SUW4hVsg3T
            },
            'lgt': {
              bucket: 'mpx-v2-production-admin-fe-lgt',
              distribution_ids: SCRAMBLED:3uHL+/jNJqug8vp/KGKB/r5O3z+EOAy7FfiKk9751NS2cPQEcQ20lJksBpd5+StNKIOEkHAhhelXR2/MfjlxDFb/rOd4FAxi5OHVX/W02yE=
            },
          },
        },
        'mpx-ui-gcui': {
          projects: {
            'base2': {
              bucket: 'mpx-v2-production-buyer-fe-mpx',
              distribution_ids: SCRAMBLED:6PnojYTtMJWk6upbDDfn0p0A/Lc++0LgDlueS6mzTMWlRbIOh078IlE+e3SDA1dV4C2zUnApouSAK6lx
            },
            'demo': {
              bucket: 'mpx-v2-production-buyer-fe-demo',
              distribution_ids: SCRAMBLED:xMHSkcfiNJD9/cdfPDiZ4iMeXc9BH9IzPMggZ1ki/+HJPSVk8r2C9mnuI8uDxQxUTnbcbzsoYBdS/qPx
            },
            'dmd': {
              bucket: 'mpx-v2-production-buyer-fe-dmd',
              distribution_ids: SCRAMBLED:3Je6jsbzM7X955ZGKDeTzkM7+nQR33JTyPhVc4rphHor7o3Swu7jF94fxjtX09bxE+NyxQgXc4izz5wp
            },
            'ftd': {
              bucket: 'mpx-v2-production-buyer-fe-ftd',
              distribution_ids: SCRAMBLED:y+C2qejiKqLX9NZfN2XojIGeMlMqH9nNemGkL5rQGMRrY5PchBPadAG2sfWv+GAFbOup1ygMFE28e1Go
            },
            'propagate': {
              bucket: 'mpx-v2-production-buyer-fe-propagate',
              distribution_ids: SCRAMBLED:587mjoH0Ip7SxY1sNTrkg8eriK3zISIXlMUsLkvrinVBAMtbSdKvca6LWzljrNWDZpqRc5kjW2P+n+oQ
            },
            'rasi': {
              bucket: 'mpx-v2-production-buyer-fe-rasi',
              distribution_ids: SCRAMBLED:w9LuqePUMbfW3YpZOmCS45VpHTYZ2KZHwiS+Z3yIiQK92ugDSkuFRMGFqUs/oF4EPfBr1GDqAe7ITrJA
            },
            'tf1pro': {
              bucket: 'mpx-v2-production-buyer-fe-tf1pro',
              distribution_ids: SCRAMBLED:7fqw+9zuMajplctQNxW26RakuwPVNddvZ6xQQZjpZ+0mMzEFEjHxlTv1ogEJmH3/QB87xbYasQW7shv0
            },
          },
        },
        'mpx-ui-old-gcui': {
          projects: {
            'dynamic-television': {
              bucket: 'mpx-v2-production-buyer-fe-dtv',
              distribution_ids: SCRAMBLED:0N6xj8T8OYuikop/Fju3zfPA0uAPZAp5tQiBlSKT1HWpsA0IzXoYZ1FZpEYnfbmeDVMpd1tk0SHdatch
            },
            'e-one': {
              bucket: 'mpx-v2-production-buyer-fe-eone',
              distribution_ids: SCRAMBLED:3u+3rv/KdaXc68l7SB2h062xCwllDWoX5NyiJ3qlEJ5HNZRm8doGqodnmYBo1VJFmujSHvVtdigRjbm9
            },
          },
        },
        'mpx-ui-orf': {
          projects: {
            'orf': {
              bucket: 'mpx-v2-production-buyer-fe-orf',
              distribution_ids: SCRAMBLED:/frx//PvMfLB985iPGKIz6c3+wUrDzrcCfeiQ8e7huG1L5VjHG1CqO6rZ//fKs2663uYkNDvI0qprsPy
            },
          },
        },
        'mpx-ui-nbcu': {
          projects: {
            'nbcu': {
              bucket: 'mpx-v2-production-buyer-fe-nbcu',
              distribution_ids: SCRAMBLED:+PbPjYHeLajK69ZQLznj87nSZKYnpNn2ahSOv+uA5ybNO58LtQuLJYUPvspYHwFVOCT4r1rotZ0e3w12
            },
          },
        },
        'mpx-ui-fremantle': {
          projects: {
            'fremantle': {
              bucket: 'mpx-v2-production-buyer-fe-fremantle',
              distribution_ids: SCRAMBLED:+P/brdLpBpfi7PxUFiWC15vObhrK4eTOGVoo9hFCq0EnM0hsONlk0G4Bk2uA1Yz2Xm/zHKS6XolkoaVj
            },
          },
        },
        'mpx-ui-lahm': {
          projects: {
            'lahm': {
              bucket: 'mpx-v2-production-buyer-fe-lahm',
              distribution_ids: SCRAMBLED:8u/Fid3Sd4X0/dJmHGWKgpSQwpr7tg8LjPH20PNneio/fooUk+eGYKrDiizTO2fh6LFZP14RfABb4d9SqWGHxrWH7V7ZLyZez7DNHnQRdcYgJY4E
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
      slack_url: SCRAMBLED:yMj7mp7xK67/48xMLDy4ziZZBmdWNtE6ltOITNn/khtwINPO7QeEIjZ6c2XBCCXzfK9IqJ2/kVZ4wakNtsRpsams2yBWHWiluYhqXTtfBJC84Fzv2ONeEfDztnz2azakAjjxZqcLa5BdjKGjzCHffIGwQhYYzuLp68Swy3vbjXYM52+HtapTT8NW62Y=
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
        'mpx-ui-admin': {
          projects: {
            'generic': {
              bucket: 'mfx-v2-production-admin-fe-generic',
              distribution_ids: SCRAMBLED:38+0+fbEAbKlkoxUTmOi4yoog1eByWHi9KvwdYoL/udfIdhShhTXO04ICmSPOexFPq1ju3mGOc9JmQjy
            },
            'fremantle': {
              bucket: 'mfx-v2-production-admin-fe-fremantle',
              distribution_ids: SCRAMBLED:5PnQotbxMI7dl+51SxHmzBRl9Qm8mM4xXXFsDxVDJIq7hvIsuRPp4whDJKVR8mrtwg1wz3sjoTGSxnM+
            },
            'lahm': {
              bucket: 'mfx-v2-production-admin-fe-lahm',
              distribution_ids: SCRAMBLED:zo32hvnsLfHg74tELm+f2quze2/iTVJysqbCAee7RO1R9lrbAuPgjGVR0E89OqtZuyb+LTxF4x5RH6uE
            },
            'nbcu': {
              bucket: 'mfx-v2-production-admin-fe-nbcu',
              distribution_ids: SCRAMBLED:683z+vXQCaH5y4tHCyH/kD/elolMeqvdtkQblqSBsmR3HXn2hZ7JS4/EO4f9YNpjN+o0H6o63nR6yfuW0MR+6NiuxuZEfrVXxq8qinruIj+AfIp0
            },
            'dtv': {
              bucket: 'mfx-v2-production-admin-fe-dtv',
              distribution_ids: SCRAMBLED:uP/VqOTtN4qn1IpiEmKbw5+FdySkEd26SJaCfs8yIkj/327aK7klsGqLcjdm6XG4D0w5RSbYh7Yy1U6F
            },
            'tf1pro': {
              bucket: 'mfx-v2-production-admin-fe-tf1pro',
              distribution_ids: SCRAMBLED:8MnnmNDWKY7LwsVBC2OT3OWq5KY6J7Q+o0V3TURw6hIeB/LnrP6+BQ1W42Ufp7T3ZrVl3NrWqrzCwXJt
            },
            'orf': {
              bucket: 'mfx-v2-production-admin-fe-orf',
              distribution_ids: SCRAMBLED:/NT4pMDiIJ780u5zEx28yHg7VYxBk+Q1bd03hD7TTP0qe6WTfQpYwZ64BvnqSeY9AmON3qZDTei+SwzN
            },
          },
        },
        'mpx-ui-gcui': {
          projects: {
            'base2': {
              bucket: 'mfx-v2-production-buyer-fe-mpx',
              distribution_ids: SCRAMBLED:uODqpZrgJrb/1PlyRzyI6WxlY1WiwKfkf7PtTfEWD5nHij3SXiSCHvy025Ikq1dBPrlHhgLNCnQpRYpj
            },
            'demo': {
              bucket: 'mfx-v2-production-buyer-fe-demo',
              distribution_ids: SCRAMBLED:49Sy+MnAE7HnkfxuK26yyg7lCgSIqXbIkizL4nISW+xJSzZBxIgsxcTaN3y9kufRDLsM/imiKWuL0gJK
            },
            'dmd': {
              bucket: 'mfx-v2-production-buyer-fe-dmd',
              distribution_ids: SCRAMBLED:pc7zitTxcp7r1YpYNWOhgyV6LdRRP7AkgYzHcLOpAkzP8R2M0iCRjxrE1LQE9K36wzEKgkXTvsbYbzl3B3JuHLAfvrzoAebtcezxI7+jWE8=
            },
            'ftd': {
              bucket: 'mfx-v2-production-buyer-fe-ftd',
              distribution_ids: SCRAMBLED:x+D0mP7AN4mk/fZ5RhKc9jo9esmihjCVMp+1xsvsPCh+zZD4PAHNGEgU/1UwK96e+UxVVOPIbmaJffVV
            },
            'propagate': {
              bucket: 'mfx-v2-production-buyer-fe-propagate',
              distribution_ids: SCRAMBLED:3fG25PTHEoH288wnN3m9lKz3zvKTdLwZIRPv6Xby5rVi0g9b5Z9YuMeuOYq5zmyn9/925ZIP82kg1Dur
            },
            'rasi': {
              bucket: 'mfx-v2-production-buyer-fe-rasi',
              distribution_ids: SCRAMBLED:+PnLscbzJZDWx4txCj2G6Gp9ExsUdXQS9JtcVNrlGBRPX6m0qAUM0yePLR73+FTJ8IxTledd9F+5iK2j
            },
            'tf1pro': {
              bucket: 'mfx-v2-production-buyer-fe-tf1pro',
              distribution_ids: SCRAMBLED:xtr1s8vJFon28o98HDGnydSMq2FYynkUIV3FoWCWr1E0wzt7/gS9gXF7CYKfeGuvM3kA+Bb38G6S19N/CNMrrc1cr4jFeIXgSh3YOW6WHJHYE5YL
            },
          },
        },
        'mpx-ui-old-gcui': {
          projects: {
            'dynamic-television': {
              bucket: 'mfx-v2-production-buyer-fe-dtv',
              distribution_ids: SCRAMBLED:vPXvjILIepfg3Mh/MzKxgrI6FRUhefwfkiaJCuXXs09BRlQh/9opsh2epsy2eqsYe0cvcJ2Vat/DQG+d
            },
            'e-one': {
              bucket: 'mfx-v2-production-buyer-fe-eone',
              distribution_ids: SCRAMBLED:5s2znOjMBIDcwoouOzWc2Gqtxl14jgHE5oiIgMvU0TZQEhK9VAX4Ca8LKXR7PecufFyAwGDm1Y0tIM3K
            },
          },
        },
        'mpx-ui-orf': {
          projects: {
            'orf': {
              bucket: 'mfx-v2-production-buyer-fe-orf',
              distribution_ids: SCRAMBLED:5/vRucjtCKugi85yOgez9BPGV8JH0qH9leMVwZMx+i1/aS1o58a433lOhk9xMzrlYZhNCi59M8YkfHCs
            },
          },
        },
        'mpx-ui-nbcu': {
          projects: {
            'nbcu': {
              bucket: 'mfx-v2-production-buyer-fe-nbcu',
              distribution_ids: SCRAMBLED:08y2/sn/JIHJz851STXpikF7naM+y+vauuWH15yabQa6+qXs/36sWa+qp5h2TxY97RTdhOPYUxiLog309nmW7MwPA8w5wKJHdI/5WO5BTK665bm3
            },
          },
        },
        'mpx-ui-fremantle': {
          projects: {
            'fremantle': {
              bucket: 'mfx-v2-production-buyer-fe-fremantle',
              distribution_ids: SCRAMBLED:zerBmobAGanDkM45OXmBjJWlcXBXGV9q3elmbQoKLQZn4T4LDeIeT58r59TSZqePghDBi21mmX1o1/ME
            },
          },
        },
        'mpx-ui-lahm': {
          projects: {
            'lahm': {
              bucket: 'mfx-v2-production-buyer-fe-lahm',
              distribution_ids: SCRAMBLED:6+npoprnG7e8541sFjSK8R3W7IOFw4z9gLZAUhFvjfsBGphfJP8Xh5bL5IUJ9zNF+PzS0WVQ7gxVi3+u
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
    if (isPlainObject(val)) return merge(
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
      const overridesPath = `${process.cwd()}/config/${name}.json`

      if (existsSync(overridesPath)) {
        console.log(`loading overrides from ${overridesPath}..`)
        const overrides = require(overridesPath)
        const merged = merge({}, config, {envs: { [name]: overrides }})

        return fetch(merged, [], ['envs', name])
      }
      else {
        return fetch(config, [], ['envs', name])
      }
    }
  },
  config,
)

module.exports = exp
