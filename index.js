const {merge, trim, reduce, isPlainObject} = require('lodash')
const {execSync} = require('child_process')
const {existsSync} = require('fs')

// Content security policy (CSP)
// Documented at https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Content-Security-Policy
const defaultCSP = {
  'default-src': [
    "'none'"
  ],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    "https://cdnjs.cloudflare.com/ajax/libs/rollbar.js/",
    "https://www.google.com/recaptcha/",
    "https://www.google-analytics.com",
    "maps.googleapis.com",
    "*.googletagmanager.com",
    "*.gstatic.com",
    "*.theoplayer.com",
    "*.hotjar.com",
  ],
  'style-src': [
    "'self'",
    "'unsafe-inline'",
    "fonts.googleapis.com",
    "cdn.linearicons.com",
    "*.typekit.net",
    "*.theoplayer.com",
  ],
  'connect-src': [
    "'self'",
    "blob:",
    "https://*.{{base_domain}}",
    "wss://*.{{base_domain}}",
    "*.s3-accelerate.amazonaws.com",
    "*.s3.amazonaws.com",
    "*.chime.aws",
    "wss://*.chime.aws",
    "*.hotjar.com",
    "wss://*.hotjar.com",
    "*.google-analytics.com",
    "*.theoplayer.com",
    "api.rollbar.com",
  ],
  'font-src': [
    "'self'",
    "data:",
    "fonts.googleapis.com fonts.gstatic.com",
    "use.typekit.net",
    "cdn.linearicons.com",
  ],
  'img-src': [
    "'self'",
    "data:",
    "blob:",
    "*.{{base_domain}}",
    "*.s3-accelerate.amazonaws.com",
    "*.s3.amazonaws.com",
    "*.google-analytics.com",
    "maps.gstatic.com",
    "maps.googleapis.com",
    "licensing.theoplayer.com",
  ],
  'media-src': [
    "'self'",
    "blob:",
    "*.{{base_domain}}",
    "*.s3-accelerate.amazonaws.com",
    "*.s3.amazonaws.com",
  ],
  // child-src is deprecated and worker-src / frame-src should be used instead, but some older browsers still rely on child-src
  'child-src': [
    "blob:"
  ],
  'worker-src': [
    "'self'",
    "data:",
    "blob:",
    "*.theoplayer.com",
  ],
  'object-src': [
    "'self'",
    "*.s3-accelerate.amazonaws.com",
    "*.s3.amazonaws.com",
  ],
  'frame-src': [
    "'self'",
    "https://www.google.com/recaptcha/api2/",
    "https://vars.hotjar.com/",
    "*.s3-accelerate.amazonaws.com",
    "*.s3.amazonaws.com",
  ],
};

const config = {
  envs: {
    development: {
      environment: 'development',
      rollbar: SCRAMBLED:3Orxmf7EcInqytNaSmSg+e2QxahxN9bK3gjLcn8nNR/RpfHPqIQpGnCTI6ZXZ6z6ev4G4GTuwp3x08vE/AhR2MY6PlL0xpDS6MbcUczBig0=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      branch: 'master',
      base_domain: "mediastore.dev",
      endpoints: {
        um: "https://um.api.mediastore.dev",
        pm: "https://pm.api.mediastore.dev",
        am: "https://am.api.mediastore.dev",
        ac: "https://ac.api.mediastore.dev",
        sm: "https://sm.api.mediastore.dev",
        mc: "https://mc.api.mediastore.dev",
        jc: "https://jc.api.mediastore.dev",
        cc: "https://cc.api.mediastore.dev",
        tuco: "https://tuco.api.mediastore.dev",
        pigeon: "https://pigeon.api.mediastore.dev",
        viscacha: "https://viscacha.api.mediastore.dev",
        companion: "https://companion-cf.lambda.mediastore.dev",
        "companion-eu": "https://companion-cf.lambda-eu.mediastore.dev",
        imgResizer: "https://img-resizer.api.mediastore.dev",
      },
      repos: {
        'mpx-ui-admin': {
          projects: {
            'generic': { },
            'lahm': { },
            'nbcu': { },
            'dtv': { },
            'tf1pro': { },
            'orf': { },
            'itv': { },
            'ref': { },
            'eone': { },
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
      base_domain: "mediastore.dev",
      endpoints: {
        um: "https://um.api.mediastore.dev",
        pm: "https://pm.api.mediastore.dev",
        am: "https://am.api.mediastore.dev",
        ac: "https://ac.api.mediastore.dev",
        sm: "https://sm.api.mediastore.dev",
        mc: "https://mc.api.mediastore.dev",
        jc: "https://jc.api.mediastore.dev",
        cc: "https://cc.api.mediastore.dev",
        tuco: "https://tuco.api.mediastore.dev",
        pigeon: "https://pigeon.api.mediastore.dev",
        viscacha: "https://viscacha.api.mediastore.dev",
        imgResizer: "https://img-resizer.api.mediastore.dev",
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
            'ref': {
              bucket: 'mfx-v2-staging-admin-fe-ref',
              distribution_ids: SCRAMBLED:zPXB88OzMoCi/vVbPSGG6s0mnytGAzpO8mLJueqPk3RqkiYcwzoxLyuHSyTDJiBHomTzJyNxPXia+iP5
            },
            'eone': {
              bucket: 'mfx-v2-staging-admin-fe-eone',
              distribution_ids: SCRAMBLED:vdvUsfzQDo/AycRRNgOYiHtCTy95R4Jvdu5wUj8RN8yAUDjGpH+0NOz0SxNJMi62dQM1Wel6kIeWqeOu
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
            'rasi': {
              bucket: 'mfx-v2-staging-buyer-fe-rasi',
              distribution_ids: SCRAMBLED:zonhuYbqdezg9vB1DCGcg08cj70rbwVMfpxamm14V6rB8XljsOY6I3XGNX/bG7LvaxHwkVh+Swz5aSBI
            },
            'tf1pro': {
              bucket: 'mfx-v2-staging-buyer-fe-tf1pro',
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
            'dtv': {
              bucket: 'mfx-v2-staging-buyer-fe-dtv',
              distribution_ids: SCRAMBLED:woq7+NDABpHZi+pEJBuY4vgaipxLJjpcYFVwlsX1VDyK1bi7Evz60qxg8KsCUnhhHgRQ0N+IExae1jiR
            },
            'relativity': {
              bucket: 'mfx-v2-staging-buyer-fe-relativity',
              distribution_ids: SCRAMBLED:wPLou4X3Gv/E1Yl9M2+4/a/ZeX4jXjZY9/zkFJisS42ebe+0MdJmgQZt4PRVWAa82cuMr8dPs8eWYiUo
            },
            'itvstudios': {
              bucket: 'mfx-v2-staging-buyer-fe-itvstudios',
              distribution_ids: SCRAMBLED:49basoTAG5/c/ehcCCeU8ms8IswPPoIuO5FHoDL4fwa5Ru5hott3kEaS8BRiJNIlVfHRPMLJWwWEEj4+
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
        'mfx-ui-orf': {
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
        'mfx-ui-eone': {
          projects: {
            'eone': {
              bucket: 'mfx-v2-staging-buyer-fe-eone',
              distribution_ids: SCRAMBLED:zOjo+57NFaGl/NhdSDmD9znPP9h4LnPtnNo4PnTHDyIj8PWGjjgS9+Qy+zq/FMIe4x1qbb+TBF8ce3Kq
            }
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
      base_domain: "mediastore.review",
      endpoints: {
        um: "https://um.api.mediastore.review",
        pm: "https://pm.api.mediastore.review",
        am: "https://am.api.mediastore.review",
        ac: "https://ac.api.mediastore.review",
        sm: "https://sm.api.mediastore.review",
        mc: "https://mc.api.mediastore.review",
        jc: "https://jc.api.mediastore.review",
        cc: "https://cc.api.mediastore.review",
        tuco: "https://tuco.api.mediastore.review",
        pigeon: "https://pigeon.api.mediastore.review",
        viscacha: "https://viscacha.api.mediastore.review",
        imgResizer: "https://img-resizer.api.mediastore.review",
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
            'ref': {
              bucket: 'mfx-v2-presentation-admin-fe-ref',
              distribution_ids: SCRAMBLED:xO/EnP/zL/Hklo9EFhyJ/5lTiSVfVj0bJ0an9lgUzD9Xmcg/nZZcUs+nzYIwl94FifY2nU4CqwgqOeJR
            },
            'eone': {
              bucket: 'mfx-v2-presentation-admin-fe-eone',
              distribution_ids: SCRAMBLED:/OjbrfW3J5Xf1MtdChmzzBWwNhI5fatOND1176sg4Rno7s9e1rDL5OSLD/YK/y4AsFQd3mbrMR8NERmP
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
            'rasi': {
              bucket: 'mfx-v2-presentation-buyer-fe-rasi',
              distribution_ids: SCRAMBLED:8v/bjoXCMIDD1f90ByW2+hMeMTdXU33Peqgoq5zSbzxQrOxmDMYMFebzw7O4sNZIZhDqeoqOLFZzRTrs
            },
            'tf1pro': {
              bucket: 'mfx-v2-presentation-buyer-fe-tf1pro',
              distribution_ids: SCRAMBLED:wMK0gcD3F7bKj+5COiec0/g8knXGs8AYntGsU2Ykbw4ZrIOMd9HV7zmOrmYVUeLFLacCNy2rMv8JIO7A
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
            'dtv': {
              bucket: 'mfx-v2-presentation-buyer-fe-dtv',
              distribution_ids: SCRAMBLED:+cj1jOn8BuzJ9ZIuCmWh7l47AMT0gqw1o+QhNZmBqUmGA4GC3FIWNxBhPu83qQc6BO57sdiUjKkBqazK
            },
            'relativity': {
              bucket: 'mfx-v2-presentation-buyer-fe-relativity',
              distribution_ids: SCRAMBLED:xsi6gMapNanyxc9HS2Pp1sXw3CBHI9L9wAQXs1xtnJwcmOGAk87o7U4fMO2RVupTQ/97d7eQHDkSQO8I
            },
            'itvstudios': {
              bucket: 'mfx-v2-presentation-buyer-fe-itvstudios',
              distribution_ids: SCRAMBLED:88+zjdO+ELLqj+5iGC6h63XjIENd3ZE5/bq/3vPvFJ9t2KHPuhSctlDpcSlR4xaA5F33Zvm92wu1Rk7C
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
        'mfx-ui-orf': {
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
    mf_presentation_nbcu_prod_testing: {
      environment: 'presentation',
      aws_profile: 'mf_presentation',
      branch: 'presentation',
      rollbar: SCRAMBLED:vPftp+vPM6zHxddOGTqD+jm4+nD1PAUfSvvvr/MnTAH71Ua3w2pWe9YgAWi/qmhVDboPVW4XTNuhPfwkQJZSJsKf9c+lzK5SUmMJoWA90s4=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      base_domain: "nbcupassport.com",
      endpoints: {
        um: "https://um.api.nbcupassport.com",
        pm: "https://pm.api.nbcupassport.com",
        am: "https://am.api.nbcupassport.com",
        ac: "https://ac.api.nbcupassport.com",
        sm: "https://sm.api.nbcupassport.com",
        mc: "https://mc.api.nbcupassport.com",
        jc: "https://jc.api.nbcupassport.com",
        cc: "https://cc.api.nbcupassport.com",
        tuco: "https://tuco.api.nbcupassport.com",
        pigeon: "https://pigeon.api.nbcupassport.com",
        viscacha: "https://viscacha.api.nbcupassport.com",
        imgResizer: "https://img-resizer.api.nbcupassport.com",
      },
      repos: {
        'mpx-ui-admin': {
          projects: {
            'nbcu': {
              bucket: 'mfx-v2-presentation-admin-fe-nbcu-production-test',
              distribution_ids: SCRAMBLED:we7Sjdj/Iarl6ughLn28zupSs6E/74HmFWb/kBRxq4JIpvOEn9gi2Upibv4Zazko4IlAGuljGQ0CSDoG
            }
          }
        },
        'mpx-ui-nbcu': {
          projects: {
            'nbcu': {
              bucket: 'mfx-v2-presentation-buyer-fe-nbcu-production-test',
              distribution_ids: SCRAMBLED:uvzvut7AN4nHnfhjMWeA0u/Z2eVrxvVKEzlIRkCzduFCefNpNtsezcEDJnvEkQNRggFA1ISD9lizQvD5
            }
          }
        }
      }
    },
    mf_production: {
      environment: 'production',
      aws_profile: 'mf_production',
      branch: 'production',
      rollbar: SCRAMBLED:7ffrkeP2Ooz33N54OmOCjsVGYJ/JbZfj/0ILAbbVZHn+Qbn0eF9f+GwFt/heZfnFU7akpk8KYy9hZETqKIkDQVkR/OJAqHvlIbyoTG4sSYw=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      base_domain: "mediastore.app",
      endpoints: {
        um: "https://um.api.mediastore.app",
        pm: "https://pm.api.mediastore.app",
        am: "https://am.api.mediastore.app",
        ac: "https://ac.api.mediastore.app",
        sm: "https://sm.api.mediastore.app",
        mc: "https://mc.api.mediastore.app",
        jc: "https://jc.api.mediastore.app",
        cc: "https://cc.api.mediastore.app",
        tuco: "https://tuco.api.mediastore.app",
        pigeon: "https://pigeon.api.mediastore.app",
        viscacha: "https://viscacha.api.mediastore.app",
        imgResizer: "https://img-resizer.api.mediastore.app",
      },
      repos: {
        'mpx-ui-admin': {
          projects: {
            'generic': {
              bucket: 'mfx-v2-production-admin-fe-generic',
              // Cloudfront distribution ids for (in this order): generic (mediastore.app domains), ftd, rasi, dmd, bavaria:
              distribution_ids: SCRAMBLED:5/3p/ejSNLamlMxbORip/IEb9uNzbFCqpOB9I7EfOnEI3IKjkITtc5KUfG1ygB3wr6zi9bt9n6SUOw/oJwUVBVpclvOC3Tp+9kLZMAJ/hC0Q76ecvpkl8TmnCmucIdWk+RARBxznlXlf5K7Fs/Ep50aaX6r3hG22A/1jsnnfK0ksMzrPVYMUaeBLKwE55bYr8+NEnWsxut5Hk0RTl8EvQD6KAPn+PbkflzIvbKIqOIx2a1DQ
            },
            'lahm': {
              bucket: 'mfx-v2-production-admin-fe-lahm',
              distribution_ids: SCRAMBLED:8urJipq+EKa43M95Diel7TjGG0RTCqVEA7ffC4GOjttFjgwznVDfbySdQJQUkq4siFn1uXqqsVW2UPKGO/Msdu7/89vI4txmT6tZk76IGC3of/ok
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
            'ref': {
              bucket: 'mfx-v2-production-admin-fe-ref',
              distribution_ids: SCRAMBLED:w+njpcjcKoPU0I9cMjWHlJ2pTL5j0EPxRETeNmJmjTTo8T5RF+BczQCnXe/NEitJKddwaos95lwLbtI5
            },
            'eone': {
              bucket: 'mfx-v2-production-admin-fe-eone',
              distribution_ids: SCRAMBLED:yf3VpMb3duzB4PhyFxeo85w6N9WtnRl/4vOes42gBcqivoTkrG03a1uFgBBeqrIpt72BFMM27KDOAtzQqeM3b/8YIJx092Lp0Dd+9uWGqMICa3lx
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
            'rasi': {
              bucket: 'mfx-v2-production-buyer-fe-rasi',
              distribution_ids: SCRAMBLED:z8z1rfS+J4Oh6tQvHS+9zomEhvUfhP+RtBJWnQV6VxIeN9mRDHRzi1110EWiA4aWc0cRlRGFQdiszGXzWD7LZEoc9fMbTHD+YAptXnU2OTNkWlDS
            },
            'tf1pro': {
              bucket: 'mfx-v2-production-buyer-fe-tf1pro',
              distribution_ids: SCRAMBLED:xtr1s8vJFon28o98HDGnydSMq2FYynkUIV3FoWCWr1E0wzt7/gS9gXF7CYKfeGuvM3kA+Bb38G6S19N/CNMrrc1cr4jFeIXgSh3YOW6WHJHYE5YL
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
            'dtv': {
              bucket: 'mfx-v2-production-buyer-fe-dtv',
              distribution_ids: SCRAMBLED:34nWhtLRN7Pgi/kuCSac3EV6VvCpKQKZS5mEf726YJd94wPBHl+b8pGnSs5IWVE+JnsJqQvYV5Z0AmPXRiPA+YhAjngpj7YFjeXeVrOCuljhV3eF
            },
            'relativity': {
              bucket: 'mfx-v2-production-buyer-fe-relativity',
              distribution_ids: SCRAMBLED:/JPmh+DNBY/57IU5GWLl74/tL3Far+hUngYuyQ5Ffd+upHBi8AsZ7oZuZf0k/wWXIcioukDXQM9Yq4eO
            },
            'itvstudios': {
              bucket: 'mfx-v2-production-buyer-fe-itvstudios',
              distribution_ids: SCRAMBLED:5ejQjNzIK6Sn5fBVEDSa9NSVlT7ORH1Nds1Gd1lEn/SHSklLwr9BOhDPUjvn5oWT52H0hqNBOvuOidzh
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
        'mfx-ui-orf': {
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
        'mfx-ui-eone': {
          projects: {
            'eone': {
              bucket: 'mfx-v2-production-buyer-fe-eone',
              distribution_ids: SCRAMBLED:+OLBpPvhDPHk9sV6DxSFiAYZSaRPNiv1OKng1JphN0HS8J+iXfdKxTbjV/CxjaVgFbK+wMwe+XoJXXqPzek1m6TJUn7mU6yh8D6eql4/i5E=
            }
          },
        },
      },
    },
    nbcu_preprod: {
      environment: 'presentation',
      aws_profile: 'nbcu_preprod',
      branch: 'presentation',
      rollbar: SCRAMBLED:8vfgpPrlLa/Wz+xjDwy72IjTZA8UylQmFpW3hQoLYe/gTTkSI51JssdfofZ3Su+pJB9YT3zRwZJhl9xfxNpa0a2qbdixmpGFqlcTkQFYbK4=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      base_domain: "nbcupassport-preprod.com",
      endpoints: {
        um: "https://um.api.nbcupassport-preprod.com",
        pm: "https://pm.api.nbcupassport-preprod.com",
        am: "https://am.api.nbcupassport-preprod.com",
        ac: "https://ac.api.nbcupassport-preprod.com",
        sm: "https://sm.api.nbcupassport-preprod.com",
        mc: "https://mc.api.nbcupassport-preprod.com",
        jc: "https://jc.api.nbcupassport-preprod.com",
        cc: "https://cc.api.nbcupassport-preprod.com",
        tuco: "https://tuco.api.nbcupassport-preprod.com",
        pigeon: "https://pigeon.api.nbcupassport-preprod.com",
        viscacha: "https://viscacha.api.nbcupassport-preprod.com",
        imgResizer: "https://img-resizer.api.nbcupassport-preprod.com",
      },
      repos: {
        'mpx-ui-nbcu': {
          projects: {
            'nbcu': {
              bucket: 'mfx-v2-nbcu-preprod-buyer-fe-nbcu',
              distribution_ids: SCRAMBLED:z9S2j/LUMJLHxdxARh3lgvNVBRpTIUYalIZHS4Zv0nEksGbDkHohf4n54dQmB1I9XcCcIDXbTFgncFkw
            },
          },
        },
        'mpx-ui-admin': {
          projects: {
            'nbcu': {
              bucket: 'mfx-v2-nbcu-preprod-admin-fe-nbcu',
              distribution_ids: SCRAMBLED:3MvJjsXEF6G8yc9HEie9/px0KkWBQkPanuS4VfBdTOJz70esuUmFA9dhxMa3peOX9VS37T6Bi+jCBwjy
            },
          }
        }
      }
    },
    nbcu_production: {
      environment: 'production',
      aws_profile: 'nbcu_production',
      branch: 'production',
      rollbar: SCRAMBLED:uozQgfzRNKbek8V1ERPm7PQsaN8ukeOwxeWsX/qzJNNKjEYLG03DRb7sd+bkh/d3ifEC/z/WnbOyj3KFU/hgNgHpq6hFESimdxR7gqTvGzM=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      base_domain: "mediastore.app",
      endpoints: {
        um: "https://um.api.mediastore.app",
        pm: "https://pm.api.mediastore.app",
        am: "https://am.api.mediastore.app",
        ac: "https://ac.api.mediastore.app",
        sm: "https://sm.api.mediastore.app",
        mc: "https://mc.api.mediastore.app",
        jc: "https://jc.api.mediastore.app",
        cc: "https://cc.api.mediastore.app",
        tuco: "https://tuco.api.mediastore.app",
        pigeon: "https://pigeon.api.mediastore.app",
        viscacha: "https://viscacha.api.mediastore.app",
        imgResizer: "https://img-resizer.api.mediastore.app",
      },
      repos: {
        'mpx-ui-nbcu': {
          projects: {
            'nbcu': {
              bucket: 'mfx-v2-nbcu-production-buyer-fe-nbcu',
              distribution_ids: SCRAMBLED:+9KwrNq1F5/j05ZnCxOB+CLgpkWryMYRL71K3r3iu0MrUJDXf04YMz/U6/ry2Ih9cK4zCJsyS/27WuAS
            },
          },
        },
        'mpx-ui-admin': {
          projects: {
            'nbcu': {
              bucket: 'mfx-v2-nbcu-production-admin-fe-nbcu',
              distribution_ids: SCRAMBLED:xfy3+vzqKYjm85J/GzC/8X6VfkWW863k9jeXR9s/RtO0FalzeyClO4UqTdlALLIF0dH9EBgDYcyGtw+A
            },
          }
        }
      }
    },
    mf_test: {
      environment: 'production',
      aws_profile: 'mf_presentation',
      branch: 'production',
      rollbar: SCRAMBLED:+vzVvfn2AOjm49NxSxm8kITJ5aHwis8UaCi9vHcsFCRmbks28d2E5+f4M0GfIL/e8tWvbSUwh3kVThAH8xX0vaxOCB3AfgXSgUlXXbkoP9Y=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      base_domain: "mediastore.app",
      endpoints: {
        um: "https://um.api.mediastore.app",
        pm: "https://pm.api.mediastore.app",
        am: "https://am.api.mediastore.app",
        ac: "https://ac.api.mediastore.app",
        sm: "https://sm.api.mediastore.app",
        mc: "https://mc.api.mediastore.app",
        jc: "https://jc.api.mediastore.app",
        cc: "https://cc.api.mediastore.app",
        tuco: "https://tuco.api.mediastore.app",
        pigeon: "https://pigeon.api.mediastore.app",
        viscacha: "https://viscacha.api.mediastore.app",
        imgResizer: "https://img-resizer.api.mediastore.app",
      },
      repos: {
        'mpx-ui-gcui': {
          projects: {
            'dtv': {
              bucket: 'mfx-v2-presentation-test-fe-dtv',
              distribution_ids: SCRAMBLED:7uzKrtq+aLLDxetwOw6z7N1JoNVXsiuOXsw0gkaRMOojysKEOdMNnlLqRrTC2wmgjD1rUXx6Wx4MgYHo
            },
          },
        },
        'mfx-ui-eone': {
          projects: {
            'eone': {
              bucket: 'mfx-v2-presentation-test-fe-eone',
              distribution_ids: SCRAMBLED:4eDXiea1Iqnd79FgSBSd0U/jM5U4TirRDLLGWPYI1XUp0O54sxvh8pDGk0cuqajjNRUnS2X9Hsf3wgNd
            }
          },
        },
        'mfx-ui-orf': {
          projects: {
            'orf': {
              bucket: 'mfx-v2-presentation-test-fe-orf',
              distribution_ids: SCRAMBLED:v9O2qeDIDoH20NdjNzmi7NP2zetyfxyEegxL70gt8E36e0X4b5IM+OF38TKNGHLSE9wkJXpZjYjwBLWb
            },
          },
        },
      },
    },
  }
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
