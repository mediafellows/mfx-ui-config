const {merge, trim, isPlainObject} = require('lodash')
const {execSync} = require('child_process')
const {existsSync} = require('fs')

const config = {
  envs: {
    development: {
      environment: 'development',
      rollbar: SCRAMBLED:3Orxmf7EcInqytNaSmSg+e2QxahxN9bK3gjLcn8nNR/RpfHPqIQpGnCTI6ZXZ6z6ev4G4GTuwp3x08vE/AhR2MY6PlL0xpDS6MbcUczBig0=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
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
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
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
              distribution_ids: SCRAMBLED:8N31ufPCKJPg9YxcEiC97nwCLLSWqF7j3p9vc8d//P8ePyDd7LZ5dpRrFohr7T2mPqZtWZgBerKvjD5y
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
            'studiocanal': {
              bucket: 'mpx-v2-staging-buyer-fe-studiocanal',
              distribution_ids: SCRAMBLED:v4iwiOLkFOzZzskiRmGc/rc6noYFxU10BIDiOD4CivIEN0OJe7ymYnXNuoPeFvd3Mmm8QgPtAFyFAPr3
            },
            'bavaria': {
              bucket: 'mpx-v2-staging-buyer-fe-bavaria',
              distribution_ids: SCRAMBLED:/I7QitjRIK7+w9xMNQGi7e9QULYf2CPqKVbHj/MKxT6YOlLmfdjKYpRlnWJpi99rQV7Fk3mJBmkeERvf
            },
            'mcg': {
              bucket: 'mpx-v2-staging-buyer-fe-mcg',
              distribution_ids: SCRAMBLED:5NvVp+jBLJ/x9NxUEzipwVLesCEysuEaVeIDa45rFtIZLrV8lSx6b58WKbDZ2rCyFytKmhhxxQ7Oj8Rs
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
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
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
            'studiocanal': {
              bucket: 'mpx-v2-presentation-buyer-fe-studiocanal',
              distribution_ids: SCRAMBLED:ocywg4LJKI68l/d0RiPpwiw/Z9Yd9p9Md/T5D5Z8/+ZGO89z85EJlK88lK6mUmU7abyjvTUa1F6dNckk
            },
            'bavaria': {
              bucket: 'mpx-v2-presentation-buyer-fe-bavaria',
              distribution_ids: SCRAMBLED:8P3s5MjLMJOkk994Bm64yh4MYBTzLNa7FcfScf/G6DR0ErTQOLRgPdjjEuYdyndvUDsP7IVEWYnNRriy
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
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
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
          projects: {},
        },
        'mpx-ui-old-gcui': {
          projects: {},
        },
        'mpx-ui-orf': {
          projects: {},
        },
        'mpx-ui-nbcu': {
          projects: {},
        },
        'mpx-ui-fremantle': {
          projects: {},
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
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
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
              // Cloudfront distribution ids for (in this order): generic (mediastore.app domains), ftd, eone, rasi, dmd, studiocanal, bavaria:
              distribution_ids: SCRAMBLED:6N7RkejMBYjVy9R4C3m48/X+Sena6z9m0m7yrb2XVx57785qI5F5ge+6z/qwqPKVxVEWngZL3P0D9BVugtsYWQP2J0+DhBOYRqt91upa2QGhAOxlr9UknSUZW71wSmUumHouP6kkkWlQzsSMz9DCgv37oeg6HfpVFzwmPezhIGyB+AEqf9rTBfTRIelxvaKuFnwCEbY0/t9ju1Eekp9ewifnxH4N7Rd5SFUuaKbLaHJHre+7Id7XBknzYOdJKIK58pwK2BUOKkjC7zS2
            },
            'fremantle': {
              bucket: 'mfx-v2-production-admin-fe-fremantle',
              distribution_ids: SCRAMBLED:ztfWh8jJFoymyvclLh3i78hirMaWkXlzSycHkMjsmMyI0PbvVbMmQ6vqgmZtoch/hcFOHAR9VRlgnM3FsZgybcIZk3fxlbw0XfnN9QYeeT9EdYkC
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
              distribution_ids: SCRAMBLED:+o7WgsjDFYj19tQgDTuq2UBrVpPw82H9A1TFrgx/99u52c/cSwFFcMOe+kslqaRCLWZeRinxZiPmL/HOFR2y5SxXPqPTL94zn3hYaIijoEUFWxMo
            },
            'tf1pro': {
              bucket: 'mfx-v2-production-admin-fe-tf1pro',
              distribution_ids: SCRAMBLED:y8npr/i3KKLL1c9kOCaR2NQYN2f4TUrNzBk6yFP7kAbNcfKXnPLBTWE4VrfwuIBbjknaXEYHwj65iaDNu1Kx77cWWiIRZ2A5W8dFWsGkIyIOFopq
            },
            'orf': {
              bucket: 'mfx-v2-production-admin-fe-orf',
              distribution_ids: SCRAMBLED:2+raqcfVCZf59ed8PBuJ2DKVFXBGcCXeZsCOsQsaqQO2knVOeGpgqfV+JHXHQWbuX1QX+y37MSUvKic0/n6DqTpROtE8f/ZDyPF5CAO3tY0=
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
              distribution_ids: SCRAMBLED:y/vXmvvoNZ3D3olPBBno/wIs0oo33r6N+z3Beg5SeGrEifFjAy/Rr5U77QRgR2YsRDxqtQwwD8ZKY589t3GCSljRdDn6oLaWamqJuuQ72VN96o5z
            },
            'propagate': {
              bucket: 'mfx-v2-production-buyer-fe-propagate',
              distribution_ids: SCRAMBLED:+/zznfnCNYiiydFcBxGa/gfggayQDL5FXVl0/EX+CiUMv3/zxQluSlIlthO8xQJD2SHoH5S5/I0w4z00iGTSicGVY2HbmJgQOtmOPem46ywHb5pd
            },
            'rasi': {
              bucket: 'mfx-v2-production-buyer-fe-rasi',
              distribution_ids: SCRAMBLED:z8z1rfS+J4Oh6tQvHS+9zomEhvUfhP+RtBJWnQV6VxIeN9mRDHRzi1110EWiA4aWc0cRlRGFQdiszGXzWD7LZEoc9fMbTHD+YAptXnU2OTNkWlDS
            },
            'tf1pro': {
              bucket: 'mfx-v2-production-buyer-fe-tf1pro',
              distribution_ids: SCRAMBLED:xtr1s8vJFon28o98HDGnydSMq2FYynkUIV3FoWCWr1E0wzt7/gS9gXF7CYKfeGuvM3kA+Bb38G6S19N/CNMrrc1cr4jFeIXgSh3YOW6WHJHYE5YL
            },
            'studiocanal': {
              bucket: 'mfx-v2-production-buyer-fe-studiocanal',
              distribution_ids: SCRAMBLED:4NXSm4HDL7Olw8dAT2W4kG4WiaG5vk8IZbhiG8zbDGtxufwYFS/b4jRlAwRhw+JxuCgEbcympSZf67VNvH/xR4D0OvVynLQ8EkX9FNwMnGdFcGU1
            },
            'bavaria': {
              bucket: 'mfx-v2-production-buyer-fe-bavaria',
              distribution_ids: SCRAMBLED:45fSrNrpNoG88shcSmOW1KRNGe0whLxUFVBahrqn0J4OpyGOuTMbeAA9buzccmV7JnNiDWNYZGk7QwnfJ/XhE6PIIGfgaBIAKBqZJm65GkXsjKgy
            },
          },
        },
        'mpx-ui-old-gcui': {
          projects: {
            'dynamic-television': {
              bucket: 'mfx-v2-production-buyer-fe-dtv',
              distribution_ids: SCRAMBLED:34nWhtLRN7Pgi/kuCSac3EV6VvCpKQKZS5mEf726YJd94wPBHl+b8pGnSs5IWVE+JnsJqQvYV5Z0AmPXRiPA+YhAjngpj7YFjeXeVrOCuljhV3eF
            },
            'e-one': {
              bucket: 'mfx-v2-production-buyer-fe-eone',
              distribution_ids: SCRAMBLED:+OLBpPvhDPHk9sV6DxSFiAYZSaRPNiv1OKng1JphN0HS8J+iXfdKxTbjV/CxjaVgFbK+wMwe+XoJXXqPzek1m6TJUn7mU6yh8D6eql4/i5E=
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
              distribution_ids: SCRAMBLED:5PPQ/+fkKL/+0sRaKASlzI9uPZYCLTd5dycfnSTEnsl2cvRfqCz2Akl79SNerrx3HR5hDMtdvDEmxFbUbfqm4/okCrNwETZcv3rr8e7MsTHCSRO9
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
