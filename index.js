const {merge, trim, reduce, isPlainObject} = require('lodash')
const {execSync} = require('child_process')
const {existsSync} = require('fs')

const defaultCSP = {
  'default-src': ["'none'"],
  'child-src': ["'blob:'"],
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
    "https://{{base_domain}} wss://{{base_domain}}",
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
    "{{base_domain}}",
    "*.s3-accelerate.amazonaws.com *.s3.amazonaws.com",
    "*.google-analytics.com maps.gstatic.com maps.googleapis.com",
    "licensing.theoplayer.com",
  ],
  'media-src': [
    "'self' blob:",
    "{{base_domain}}",
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
    development: {
      environment: 'development',
      rollbar: SCRAMBLED:3Orxmf7EcInqytNaSmSg+e2QxahxN9bK3gjLcn8nNR/RpfHPqIQpGnCTI6ZXZ6z6ev4G4GTuwp3x08vE/AhR2MY6PlL0xpDS6MbcUczBig0=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      branch: 'master',
      base_domain: "*.mediastore.dev",
      endpoints: {
        um: "https://um.api.mediastore.dev/v20140601",
        pm: "https://pm.api.mediastore.dev/v20140601",
        am: "https://am.api.mediastore.dev/v20140601",
        ac: "https://ac.api.mediastore.dev/v20140601",
        sm: "https://sm.api.mediastore.dev/v20140601",
        mc: "https://mc.api.mediastore.dev/v20140601",
        jc: "https://jc.api.mediastore.dev/v20140601",
        cc: "https://cc.api.mediastore.dev/v20140601",
        tuco: "https://tuco.api.mediastore.dev",
        pigeon: "https://pigeon.api.mediastore.dev",
        viscacha: "https://viscacha.api.mediastore.dev",
        reportURI: "https://mediafellows2staging.report-uri.com/r/d/csp/enforce",
      },
      repos: {
        'mpx-ui-admin': {
          projects: {
            'generic': { },
            'fremantle': { },
            'lahm': { },
            'nbcu': { },
            'dtv': { },
            'tf1pro': { },
            'orf': { },
            'itv': { },
          },
        },
      },
    },
    mf_staging: {
      environment: 'staging',
      aws_profile: 'mf_staging',
      branch: 'master',
      rollbar: SCRAMBLED:+vzVvfn2AOjm49NxSxm8kITJ5aHwis8UaCi9vHcsFCRmbks28d2E5+f4M0GfIL/e8tWvbSUwh3kVThAH8xX0vaxOCB3AfgXSgUlXXbkoP9Y=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      base_domain: "*.mediastore.dev",
      endpoints: {
        um: "https://um.api.mediastore.dev/v20140601",
        pm: "https://pm.api.mediastore.dev/v20140601",
        am: "https://am.api.mediastore.dev/v20140601",
        ac: "https://ac.api.mediastore.dev/v20140601",
        sm: "https://sm.api.mediastore.dev/v20140601",
        mc: "https://mc.api.mediastore.dev/v20140601",
        jc: "https://jc.api.mediastore.dev/v20140601",
        cc: "https://cc.api.mediastore.dev/v20140601",
        tuco: "https://tuco.api.mediastore.dev",
        pigeon: "https://pigeon.api.mediastore.dev",
        viscacha: "https://viscacha.api.mediastore.dev",
        reportURI: "https://mediafellows2staging.report-uri.com/r/d/csp/enforce",
      },
      repos: {
        'mpx-ui-admin': {
          projects: {
            'generic': {
              bucket: 'mfx-v2-staging-admin-fe-generic',
              distribution_ids: SCRAMBLED:3eHVosPALIHKzPkjMGWhjthLQGiKyLcEsiYzWGm0uhKU3lBsFF6hkEVGPyJG1RZV4Ce6W/5wqixsRd1r
            },
            'lahm': {
              bucket: 'mfx-v2-staging-admin-fe-lahm',
              distribution_ids: SCRAMBLED:/c3K+vzwMIve4YVmJA/n9tFis3899cxmlni6YSyyYUaZdVVFEi1WEJlx4nFjqT1u2x9JL50gqg9jTyCH
            },
            'nbcu': {
              bucket: 'mfx-v2-staging-admin-fe-nbcu',
              distribution_ids: SCRAMBLED://27honOBr7nw8lGBCO/2UhEu+YVxOMTqJsWtT7JFBOai9QXxOwZZ6T8ROBkDujhuoZGIDfPof9XjYf9
            },
            'dtv': {
              bucket: 'mfx-v2-staging-admin-fe-dtv',
              distribution_ids: SCRAMBLED:+JP6oef+Nbf/3N4nTi+mwVi9uQJdTcnHNIUTEeBndSblVg/iQZOIRLaV9u2uxStkjI4Kmmj7LrKGjKr1
            },
            'tf1pro': {
              bucket: 'mfx-v2-staging-admin-fe-tf1pro',
              distribution_ids: SCRAMBLED:6fXkpOGpOYyi9tlRBi6qj/+xYMqYkfwmd/rvtCarsp3i16fK69f1lVgqLf/em9Mg8YyfCDjTtc9cyomd
            },
            'orf': {
              bucket: 'mfx-v2-staging-admin-fe-orf',
              distribution_ids: SCRAMBLED:4vHXptLDd57WnOxnMBO7/TUg4m5i2dTtWLZCY3y5tAN3h3Dxpjzf0mBmDY7pvbt3W9dVwoymM87a5CIW
            },
            'lgt': {
              bucket: 'mfx-v2-staging-admin-fe-lgt',
              distribution_ids: SCRAMBLED:0Mm1j8eyIb7DweRyTxDjje0paGeKzhzS9ZxlCXJaM8WfclzEF+gSqgYY3iZpfDM7J4NDNGQDpi/GBvmX
            },
            'itv': {
              bucket: 'mfx-v2-staging-admin-fe-itv',
              distribution_ids: SCRAMBLED:3MzsoNWtLa3A949UNCW76j2+YpC6k2hpBZhkJ+rp370/oTCMoKn/gLobcKXCGaNB0FnhNDOesbbSNgJI
            },
          },
        },
        'mpx-ui-gcui': {
          projects: {
            'base2': {
              bucket: 'mfx-v2-staging-buyer-fe-mpx',
              distribution_ids: SCRAMBLED:4/nU+oT1FI/U/Ml8SiC/jNs6/ea/Nq3BfC7QffjI/EkTxWHduHnTUOrx/FpP98WeIKad09AI7bT0vBm4
            },
            'demo': {
              bucket: 'mfx-v2-staging-buyer-fe-demo',
              distribution_ids: SCRAMBLED:/O7EmOHCArf44N9EMAWC4/b0ZvH8jPDWGohL6C7IOc97gg8bewslBknDTyPgN0UDFfconxJqtyHlAHZM
            },
            'dmd': {
              bucket: 'mfx-v2-staging-buyer-fe-dmd',
              distribution_ids: SCRAMBLED:0vHjmsDoBpek6tJgCxzm4nrMsnEPrvFQ3iLj+HTUZGtmSA6+BcDjogXV06u6SY07TLi8ozzkb4mC6VWX
            },
            'ftd': {
              bucket: 'mfx-v2-staging-buyer-fe-ftd',
              distribution_ids: SCRAMBLED:ofbSoNX0LJe8wYpMHBCAzvRG3TluDj3DCYHZeh9kBlUenatM4nfQpoIAdHO7LVxgK6yDJVZsnVjXKKE3
            },
            'propagate': {
              bucket: 'mfx-v2-staging-buyer-fe-propagate',
              distribution_ids: SCRAMBLED:/YrOheDHEp/k9fxxEBH7yXmkUMK3WX4FPeuz4LQgrKADGfpGbPd+7wue+P085irYoApARj9tXmtngTUd
            },
            'rasi': {
              bucket: 'mfx-v2-staging-buyer-fe-rasi',
              distribution_ids: SCRAMBLED:zonhuYbqdezg9vB1DCGcg08cj70rbwVMfpxamm14V6rB8XljsOY6I3XGNX/bG7LvaxHwkVh+Swz5aSBI
            },
            'tf1pro': {
              bucket: 'mfx-v2-staging-buyer-fe-tf1pro',
              distribution_ids: SCRAMBLED:6NT0udfIOq/cxclHEzCT3mP0AzEy/kqkbmOkFuDp4wqQ/WcMvw3qrecwRGHjmBEHqkPf7dShQ0SuGXAE
            },
            'studiocanal': {
              bucket: 'mfx-v2-staging-buyer-fe-studiocanal',
              distribution_ids: SCRAMBLED:6NT0udfIOq/cxclHEzCT3mP0AzEy/kqkbmOkFuDp4wqQ/WcMvw3qrecwRGHjmBEHqkPf7dShQ0SuGXAE
            },
            'bavaria': {
              bucket: 'mfx-v2-staging-buyer-fe-bavaria',
              distribution_ids: SCRAMBLED:yZO3v/O+E6LHndx3HCOgg72N6/FkQk0B6JVjSNqSi0s6OELlRslzolucQjev0v94/P+V/zSvqjrdfMK0
            },
            'mcg': {
              bucket: 'mfx-v2-staging-buyer-fe-mcg',
              distribution_ids: SCRAMBLED:uI77pv+1FaPGj4pBPCeb4Yb9IrFHvbeiB5pwjqfghAQleIgigX44skFm/CncGosYd5OC7ylxzepOc/f/
            },
            'itv': {
              bucket: 'mfx-v2-staging-buyer-fe-itv',
              distribution_ids: SCRAMBLED:x8/R+oT3L5a43IVxDj+J/tYL7U2RNRsuRW3xlq3ZkLVmGV0A7QP+pTxQEgzl1zKJ1mmON1vdZFJE7Rfv
            },
          },
        },
        'mpx-ui-old-gcui': {
          projects: {
            'dynamic-television': {
              bucket: 'mfx-v2-staging-buyer-fe-dtv',
              distribution_ids: SCRAMBLED:woq7+NDABpHZi+pEJBuY4vgaipxLJjpcYFVwlsX1VDyK1bi7Evz60qxg8KsCUnhhHgRQ0N+IExae1jiR
            },
            'e-one': {
              bucket: 'mfx-v2-staging-buyer-fe-eone',
              distribution_ids: SCRAMBLED:zOjo+57NFaGl/NhdSDmD9znPP9h4LnPtnNo4PnTHDyIj8PWGjjgS9+Qy+zq/FMIe4x1qbb+TBF8ce3Kq
            },
          },
        },
        'mpx-ui-orf': {
          projects: {
            'orf': {
              bucket: 'mfx-v2-staging-buyer-fe-orf',
              distribution_ids: SCRAMBLED:st3ApNTRd73Kk/54TiKawTKikMpJ+HAffjgAQ+b1S8x6snXN5nHI3S1dW8HOMxcJv/HEN9VrL6iQfnSK
            },
          },
        },
        'mpx-ui-nbcu': {
          projects: {
            'nbcu': {
              bucket: 'mfx-v2-staging-buyer-fe-nbcu',
              distribution_ids: SCRAMBLED:79z4oJqyJrfL1+dCCX2Az2Yz/L10RWS4tuW5OvZ3772KmWiZ8dLC4SIoFPQprk6a4rmm+iTk/JTNS1pa
            },
          },
        },
        'mpx-ui-lahm': {
          projects: {
            'lahm': {
              bucket: 'mfx-v2-staging-buyer-fe-lahm',
              distribution_ids: SCRAMBLED:2tTQqtnVM63b/vZFPRPji4+iaP5q2wqI+YL0Ghi/V36+yZS2ikxuqXdNdipisYBHSd+luZ8jTthyczH8
            },
          },
        },
        'mfx-ui-tf1int': {
          projects: {
            'tf1int': {
              bucket: 'mfx-v2-staging-buyer-fe-tf1int',
              distribution_ids: SCRAMBLED:0o/1/YHoLKvq/PQuHySViIN6Hyh+F5969f8YrPIUhuPEEzMSsKccikfaqOpH5RdLyTkXa3kWu7zNq+Z+
            },
          },
        },
        'mfx-ui-lionsgate': {
          projects: {
            'lionsgate': {
              bucket: 'mfx-v2-staging-buyer-fe-lgt',
              distribution_ids: SCRAMBLED:svO2vIDlDpLl0fZiTBKyg2SOyRhZx50V0g200qxGFnunIdJ0ZqlX+suIOS0mAPI8hPb+UGkf0IbE9yf0
            },
          },
        },
        'mfx-ui-admin-v3': {
          projects: {
            'generic': {
              bucket: 'mfx-v2-staging-admin-fe-mfx',
              distribution_ids: SCRAMBLED:xIDauYHlE+ykzYRQBzGk8mqs6IW3jphIio6tydPt6ax9vm0Iy2Pa+YTEiRDvPc+agSqa9Az7VwIG+7IS
            },
          },
        },
      },
    },
    mf_presentation: {
      environment: 'presentation',
      aws_profile: 'mf_presentation',
      branch: 'presentation',
      rollbar: SCRAMBLED:vPftp+vPM6zHxddOGTqD+jm4+nD1PAUfSvvvr/MnTAH71Ua3w2pWe9YgAWi/qmhVDboPVW4XTNuhPfwkQJZSJsKf9c+lzK5SUmMJoWA90s4=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      base_domain: "*.mediastore.review",
      endpoints: {
        um: "https://um.api.mediastore.review/v20140601",
        pm: "https://pm.api.mediastore.review/v20140601",
        am: "https://am.api.mediastore.review/v20140601",
        ac: "https://ac.api.mediastore.review/v20140601",
        sm: "https://sm.api.mediastore.review/v20140601",
        mc: "https://mc.api.mediastore.review/v20140601",
        jc: "https://jc.api.mediastore.review/v20140601",
        cc: "https://cc.api.mediastore.review/v20140601",
        tuco: "https://tuco.api.mediastore.review",
        pigeon: "https://pigeon.api.mediastore.review",
        viscacha: "https://viscacha.api.mediastore.review",
        reportURI: "https://mediafellows2presentation.report-uri.com/r/d/csp/enforce",
      },
      repos: {
        'mpx-ui-admin': {
          projects: {
            'generic': {
              bucket: 'mfx-v2-presentation-admin-fe-generic',
              distribution_ids: SCRAMBLED:5Nz04N7OKJ+m7IpwBG6Y1ob2xHeYJigZe1ygM16NZQdjeiuDVwp4AYZ3RKKMMREEMoMrMx57+QLUk6jk
            },
            'lahm': {
              bucket: 'mfx-v2-presentation-admin-fe-lahm',
              distribution_ids: SCRAMBLED:4NC3koOyNKXLwo9HC2Od6oGJ9vZHsF41hrZGId7eIKQRsoXVPoA6K6c9hwmp+2aFOI7KoP3wZEXTOKUc
            },
            'nbcu': {
              bucket: 'mfx-v2-presentation-admin-fe-nbcu',
              distribution_ids: SCRAMBLED:v8nD8tjTAo7ewdZTFy6A9++X1V5mMm1qEWpOcyiLRdCTShhBWN4r3/vPrQdgcT4hyqh/isVaJoaN50qs
            },
            'dtv': {
              bucket: 'mfx-v2-presentation-admin-fe-dtv',
              distribution_ids: SCRAMBLED:zNbYj/bXIej//c85SySZ2QiH9DON6slGEhABE5FzU80gCHVWXu4pVQ9QXBFDAuotpeEywhIXPjVmCxNB
            },
            'tf1pro': {
              bucket: 'mfx-v2-presentation-admin-fe-tf1pro',
              distribution_ids: SCRAMBLED:zNbYj/bXIej//c85SySZ2QiH9DON6slGEhABE5FzU80gCHVWXu4pVQ9QXBFDAuotpeEywhIXPjVmCxNB
            },
            'orf': {
              bucket: 'mfx-v2-presentation-admin-fe-orf',
              distribution_ids: SCRAMBLED:sozljuu2Lp/9nfZ9JzOfzjYc9Ia1s6QbdSLbTovO1JhCcSaIAU17bi+pjTm0dsBiO2N5DIkk6u8HQqFy
            },
            'lgt': {
              bucket: 'mfx-v2-presentation-admin-fe-lgt',
              distribution_ids: SCRAMBLED:/OzvmYm1KKi44spdJG/lie6GCFy+/1DrwesjF6cUVgYDT5DI9MpRSrHfgpSiLv9xufZGwEEASAUwCZcI
            },
            'itv': {
              bucket: 'mfx-v2-presentation-admin-fe-itv',
              distribution_ids: SCRAMBLED:pdz4oOTSMZ6j3vQmByK8i4x3pnU/FcG6f7AvXcFx9fCvpPDztEZus157z6GMSFRCBohYi9o+wQiNMw1S
            },
          },
        },
        'mpx-ui-gcui': {
          projects: {
            'base2': {
              bucket: 'mfx-v2-presentation-buyer-fe-mpx',
              distribution_ids: SCRAMBLED:8oHQmf+3Apb94dt3TxWJyh+zbtHffNC5vnXehpW6/5VjmgjSIdlERlyASSaZ+FcAYGHCe/FmLnkwyaZ5
            },
            'demo': {
              bucket: 'mfx-v2-presentation-buyer-fe-demo',
              distribution_ids: SCRAMBLED:5sDIjMb/KLG45e8kGTKa9qo4imhoKh8Og9bsoTwAYI16KD3AO78pOxvrzqFtFNxYktyhOCrSyZg4dpGt
            },
            'dmd': {
              bucket: 'mfx-v2-presentation-buyer-fe-dmd',
              distribution_ids: SCRAMBLED:8+vhgNzJd/GgwPt3DgSi3pYbtaQteLC6vx/GJsbKOLRN9SecHxuzIOTUsAqEoO2RVNMAaLYHOwSDvJwi
            },
            'ftd': {
              bucket: 'mfx-v2-presentation-buyer-fe-ftd',
              distribution_ids: SCRAMBLED:88G7jJ78NpHG5cohTzPlzBHFoKssTiTQ7pJlpGrn32hvuG12+jUizDKEeQUBZgnsBYS091rrWBRKYzcz
            },
            'propagate': {
              bucket: 'mfx-v2-presentation-buyer-fe-propagate',
              distribution_ids: SCRAMBLED:y/X0hvPjEvfh4I8lKz2GyJxNzjG0hrkXkXplf2OxsmFOcob7k4qVS5HuTIbM3o7ZoRXEOz0ejgETCDU9
            },
            'rasi': {
              bucket: 'mfx-v2-presentation-buyer-fe-rasi',
              distribution_ids: SCRAMBLED:8v/bjoXCMIDD1f90ByW2+hMeMTdXU33Peqgoq5zSbzxQrOxmDMYMFebzw7O4sNZIZhDqeoqOLFZzRTrs
            },
            'tf1pro': {
              bucket: 'mfx-v2-presentation-buyer-fe-tf1pro',
              distribution_ids: SCRAMBLED:wMK0gcD3F7bKj+5COiec0/g8knXGs8AYntGsU2Ykbw4ZrIOMd9HV7zmOrmYVUeLFLacCNy2rMv8JIO7A
            },
            'studiocanal': {
              bucket: 'mfx-v2-presentation-buyer-fe-studiocanal',
              distribution_ids: SCRAMBLED:6NOtssjEOoXekNBSOx/j9GJvnIUOeUzhFKmR7FSYkERey4iydcRGswlGfwcC3moCNspcORpIBUo914XO
            },
            'bavaria': {
              bucket: 'mfx-v2-presentation-buyer-fe-bavaria',
              distribution_ids: SCRAMBLED:w4DM89bNLrXhy/lvMhW/8cNeO9c9ewt5V/m1XyiVAWDLId4DHVrEP92UZHMg1nik31dN3LzTxsqT2s3D
            },
            'mcg': {
              bucket: 'mfx-v2-presentation-buyer-fe-mcg',
              distribution_ids: SCRAMBLED:stbHsv3cCo/0xdZaSgPn+hrjw6odeHaRZxP1k9ICa3cgp6g4zKB+xuWwclPNukYshgK4qCNxECVJYhs9
            },
            'itv': {
              bucket: 'mfx-v2-presentation-buyer-fe-itv',
              distribution_ids: SCRAMBLED:0/Dt/tC1bK78kfhjKmGS8KwjAxyxVshv0GkwozeKEI5lVR3+IEoEyZ6Gf4xqwe/EW9UziYbtd4MDe4p7
            },
          },
        },
        'mpx-ui-old-gcui': {
          projects: {
            'dynamic-television': {
              bucket: 'mfx-v2-presentation-buyer-fe-dtv',
              distribution_ids: SCRAMBLED:+cj1jOn8BuzJ9ZIuCmWh7l47AMT0gqw1o+QhNZmBqUmGA4GC3FIWNxBhPu83qQc6BO57sdiUjKkBqazK
            },
            'e-one': {
              bucket: 'mfx-v2-presentation-buyer-fe-eone',
              distribution_ids: SCRAMBLED:+NvwmODicfX10vRuKCC79Q7h2z8MD5pohmqNRcA9EJRwG3sTDMAToJZOlvCLZoCKzXp6+wI4NVy6194J
            },
          },
        },
        'mpx-ui-orf': {
          projects: {
            'orf': {
              bucket: 'mfx-v2-presentation-buyer-fe-orf',
              distribution_ids: SCRAMBLED:vcnUjf3hMJ/R95IjMwCejtm4KdZU+DayL0yA+/WiDndeZR8MqruZ48yiOomXtRJ0QgcLLA3Fa/3H+u9V
            },
          },
        },
        'mpx-ui-nbcu': {
          projects: {
            'nbcu': {
              bucket: 'mfx-v2-presentation-buyer-fe-nbcu',
              distribution_ids: SCRAMBLED:xpfKpvvlGqqnzNcnDGSR4zlZyifYQe8VjehWApkNhwPio2tE2ZINTPovXBf4jHNlhURGpgG2Vbc9wGYl
            },
          },
        },
        'mpx-ui-lahm': {
          projects: {
            'lahm': {
              bucket: 'mfx-v2-presentation-buyer-fe-lahm',
              distribution_ids: SCRAMBLED:/M66j/jeaI7C7MpCPy6I9VL0HZH0wSJV7P/Bk+CcKVdr5MScEFCbQlv8gYuHb5fv2/zNs+MSQO3f2/Vm
            },
          },
        },
        'mfx-ui-tf1int': {
          projects: {
            'tf1int': {
              bucket: 'mfx-v2-presentation-buyer-fe-tf1int',
              distribution_ids: SCRAMBLED:vOvYkYfreqPkxshXBB6mwxVylSPFMJUdA4BSTBj11dmVQPM5sKradzYuQaq9btVShfuw5V4EaSYTRBA1
            },
          },
        },
        'mfx-ui-lionsgate': {
          projects: {
            'lionsgate': {
              bucket: 'mfx-v2-presentation-buyer-fe-lgt',
              distribution_ids: SCRAMBLED:suvPmtLVK4rk1PVDCwW+4URa/ziWbxG0AxjHptN9pvUP5BoO4f8kMfWiC49FyN7LophOQn/InmbfZmVy
            },
          },
        },
      },
    },
    mf_production: {
      environment: 'production',
      aws_profile: 'mf_production',
      branch: 'production',
      rollbar: SCRAMBLED:7ffrkeP2Ooz33N54OmOCjsVGYJ/JbZfj/0ILAbbVZHn+Qbn0eF9f+GwFt/heZfnFU7akpk8KYy9hZETqKIkDQVkR/OJAqHvlIbyoTG4sSYw=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      base_domain: "*.mediastore.app",
      endpoints: {
        um: "https://um.api.mediastore.app/v20140601",
        pm: "https://pm.api.mediastore.app/v20140601",
        am: "https://am.api.mediastore.app/v20140601",
        ac: "https://ac.api.mediastore.app/v20140601",
        sm: "https://sm.api.mediastore.app/v20140601",
        mc: "https://mc.api.mediastore.app/v20140601",
        jc: "https://jc.api.mediastore.app/v20140601",
        cc: "https://cc.api.mediastore.app/v20140601",
        tuco: "https://tuco.api.mediastore.app",
        pigeon: "https://pigeon.api.mediastore.app",
        viscacha: "https://viscacha.api.mediastore.app",
        reportURI: "https://mediafellows2production.report-uri.com/r/d/csp/enforce",
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
              distribution_ids: SCRAMBLED:8urJipq+EKa43M95Diel7TjGG0RTCqVEA7ffC4GOjttFjgwznVDfbySdQJQUkq4siFn1uXqqsVW2UPKGO/Msdu7/89vI4txmT6tZk76IGC3of/ok
            },
            'nbcu': {
              bucket: 'mfx-v2-production-admin-fe-nbcu',
              distribution_ids: SCRAMBLED:683z+vXQCaH5y4tHCyH/kD/elolMeqvdtkQblqSBsmR3HXn2hZ7JS4/EO4f9YNpjN+o0H6o63nR6yfuW0MR+6NiuxuZEfrVXxq8qinruIj+AfIp0
            },
            'dtv': {
              bucket: 'mfx-v2-production-admin-fe-dtv',
              distribution_ids: SCRAMBLED:wor189/fDrGiyNZFFhOK9sDzuuGdWPAFZkulGK69EKBz7BwViDw+vKpqatemB+RtBnImPdoQg7jEElIvVFGR+B0vTa9PYrFS2JnNYwJV0YnDKPrJ
            },
            'tf1pro': {
              bucket: 'mfx-v2-production-admin-fe-tf1pro',
              distribution_ids: SCRAMBLED:y8npr/i3KKLL1c9kOCaR2NQYN2f4TUrNzBk6yFP7kAbNcfKXnPLBTWE4VrfwuIBbjknaXEYHwj65iaDNu1Kx77cWWiIRZ2A5W8dFWsGkIyIOFopq
            },
            'orf': {
              bucket: 'mfx-v2-production-admin-fe-orf',
              distribution_ids: SCRAMBLED:2+raqcfVCZf59ed8PBuJ2DKVFXBGcCXeZsCOsQsaqQO2knVOeGpgqfV+JHXHQWbuX1QX+y37MSUvKic0/n6DqTpROtE8f/ZDyPF5CAO3tY0=
            },
            'lgt': {
              bucket: 'mfx-v2-production-admin-fe-lgt',
              distribution_ids: SCRAMBLED:3N7D5MDXBrGh4OtYRw6d+MIjIHYHpTluqDX7b0gHbZ+zqwO5nZzAnpiAQGQfjgCCKAuemuwoa4F7QLZ9VllEW8odhmwMuKmAreHVQfwHzfwDmiug
            },
            'itv': {
              bucket: 'mfx-v2-production-admin-fe-itv',
              distribution_ids: SCRAMBLED:uNPlkdT2N7bax4hxBgGJ1jVaT58NmMtndyN7tFY3ei7btGmuD7CkLGBhT4MzMv9MJ1EcXj75Wq3/RsM6
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
            'mcg': {
              bucket: 'mfx-v2-production-buyer-fe-mcg',
              distribution_ids: SCRAMBLED:4PvSv/nBM7/39ulCGDK7/Yyq56DHRBD84v10ROfDH49thP/VIHTlBZMrcvuItcO+nudMrsEX5VJTRSQT
            },
            'itv': {
              bucket: 'mfx-v2-production-buyer-fe-itv',
              distribution_ids: SCRAMBLED:wOjgmfThMqHj3e1QOAOb/w9ToJ1lngDgc1fQIfKQWtsMSKNBRXalqAVXr0QF/rnZQ8Gy5osFLD857Fuj
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
              distribution_ids: SCRAMBLED:xf7RvuD/aKKhzfEvOzOd/tJ9Ku95CsQ/Sqlr17AQgCkqQc1wttkQ7KH2DRrLUqEnk17KOS/26cFcq2ndF1rYTt+xmEYVDaErl3TkUEE/xgI=
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
              distribution_ids: SCRAMBLED:pcH4r97VNob31OUkMCHg9SEcVOJ//3xBN8Rw2KE23TeZ3yF5h8KG6ha4aOYHPP6aeGe4KwrerYNOLVw8RASQWLHtfTB8qBo6wbueefhbzqY=
            },
          },
        },
        'mfx-ui-tf1int': {
          projects: {
            'tf1int': {
              bucket: 'mfx-v2-production-buyer-fe-tf1int',
              distribution_ids: SCRAMBLED:6936pYb0ArT9zo8uKhmdiecOyvFTUWc0eA8ZFPfGR6OHxnbr7TGe+9Z/FwbMwuErj2X+4+p4cG8=
            },
          },
        },
        'mfx-ui-lionsgate': {
          projects: {
            'lionsgate': {
              bucket: 'mfx-v2-production-buyer-fe-lgt',
              distribution_ids: SCRAMBLED:2cLTp+n0L/7lku0jMCOEyqU7P1hmlV1rpoljaCVYaj4gQ2WCNSGIB5qAaPSIHlpQGfrHTSA9GIuntPYuKv9Cxd5HdGlm6dqBaUHmeoyerG+EkUpU
            },
          },
        },
        'mfx-ui-fox-demo': {
          projects: {
            'fox': {
              bucket: 'mfx-v2-production-buyer-fe-fyc', // demo10
              distribution_ids: SCRAMBLED:w/Xq+fvHNvb27Y9iKRu2/m7r6yNDM1CRbvvnCNE+U+k288PSKhzKPUygzitiMc5FdNoC0V3qZg8mdCjaJM4KRaJhaq5Fwi2J
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
