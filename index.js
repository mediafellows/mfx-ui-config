const {merge, trim, reduce, isPlainObject, pullAll} = require('lodash')
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
    "*.amazonaws.com",
    "*.chime.aws",
    "wss://*.chime.aws",
    "*.hotjar.com",
    "wss://*.hotjar.com",
    "*.google-analytics.com",
    "*.theoplayer.com",
    "api.rollbar.com",
    "*.mediastore.click",
    "*.mediastore-staging.com",
    "*.mediastore-presentation.com",
    "*.mediastore-production.com",
    "wss://*.mediastore.click",
    "wss://*.mediastore-staging.com",
    "wss://*.mediastore-presentation.com",
    "wss://*.mediastore-production.com",
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
    "*.amazonaws.com",
    "*.google-analytics.com",
    "maps.gstatic.com",
    "maps.googleapis.com",
    "licensing.theoplayer.com",
  ],
  'media-src': [
    "'self'",
    "blob:",
    "*.{{base_domain}}",
    "*.amazonaws.com",
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
    "*.amazonaws.com",
    "*.theoplayer.com",
  ],
  'frame-src': [
    "'self'",
    "https://www.google.com/recaptcha/api2/",
    "https://vars.hotjar.com/",
    "*.amazonaws.com",
    "*.theoplayer.com",
  ],
};

const config = {
  envs: {
    development: {
      environment: 'development',
      rollbar: SCRAMBLED:0onKpPXzAYH/48xsOiWg0vczdrVg87dAoW+wBQtjqB39Q4nuhr44F0aYlDH2yEJ7gz79h252MlBIGskaIp6WHg5HHtdLNgsiFD1GWzyExpw=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      branch: 'master',
      base_domain: "mediastore.dev",
      endpoints: {
        um: "https://um.api.mediastore.dev",
        pm: "https://pm.api.mediastore.dev",
        po: "https://po-api.mediastore-staging.com",
        am: "https://am.api.mediastore.dev",
        ac: "https://ac.api.mediastore.dev",
        sm: "https://sm.api.mediastore.dev",
        mc: "https://mc.api.mediastore.dev",
        jc: "https://jc.api.mediastore.dev",
        cc: "https://cc.api.mediastore.dev",
        cal: 'https://cal.api.mediastore.dev',
        producer: 'https://producer-api.mediastore-staging.com',
        deliveries: "https://deliveries-api.mediastore-staging.com",
        tuco: "https://tuco-api.mediastore-staging.com",
        pigeon: "https://pigeon.api.mediastore.dev",
        pigeon2: "https://pigeon2.mediastore.click",
        cms: "https://cms-api.mediastore-staging.com",
        viscacha: "https://viscacha.api.mediastore.dev",
        companion: "https://companion-cf.lambda.mediastore.dev",
        "companion-eu": "https://companion-cf.lambda-eu.mediastore.dev",
        "attachments-companion": "https://attachments-companion-cf.lambda.mediastore.dev",
        imgResizer: "https://img-resizer.api.mediastore.dev",
        mediabench: "https://app.mediabench.dev",
      },
      repos: {
        'mpx-ui-admin': {
          projects: {
            'generic': { },
            'lahm': { },
            'nbcu': { },
            'dtv': { },
            'tf1pro': { },
            'bavaria': { },
            'orf': { },
            'itv': { },
            'ref': { },
            'eone': { },
            'lgt': { },
            'mipjunior': { },
            'mipjunior': { },
            'mipdoc': { },
            'mipcom': { },
            'miptv': { },
          },
        },
      },
    },
    mf_staging: {
      environment: 'staging',
      aws_profile: 'mf_staging',
      branch: 'master',
      rollbar: SCRAMBLED:/NO1hp62Jq7K6MlCNjuhzfJjY31L9Kxfm2QIsUqkoKDYl/Q1Nb6m+d2AW4N4ik7R5EKaGML9K/BOaPrilxFZU2ER8ZmlQz6J2+SIhLjNI3A=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      base_domain: "mediastore.dev",
      endpoints: {
        um: "https://um.api.mediastore.dev",
        pm: "https://pm.api.mediastore.dev",
        po: "https://po-api.mediastore-staging.com",
        am: "https://am.api.mediastore.dev",
        ac: "https://ac.api.mediastore.dev",
        sm: "https://sm.api.mediastore.dev",
        mc: "https://mc.api.mediastore.dev",
        jc: "https://jc.api.mediastore.dev",
        cc: "https://cc.api.mediastore.dev",
        cal: "https://cal.api.mediastore.dev",
        deliveries: "https://deliveries-api.mediastore-staging.com",
        producer: 'https://producer-api.mediastore-staging.com',
        tuco: "https://tuco.api.mediastore.dev",
        pigeon: "https://pigeon.api.mediastore.dev",
        pigeon2: "https://pigeon2.mediastore.click",
        cms: "https://cms-api.mediastore-staging.com",
        viscacha: "https://viscacha.api.mediastore.dev",
        companion: "https://companion-cf.lambda.mediastore.dev",
        "companion-eu": "https://companion-cf.lambda-eu.mediastore.dev",
        "attachments-companion": "https://attachments-companion-cf.lambda.mediastore.dev",
        imgResizer: "https://img-resizer.api.mediastore.dev",
        mediabench: "https://app.mediabench.dev",
      },
      repos: {
        'mpx-ui-admin': {
          projects: {
            'generic': {
              bucket: 'mfx-v2-staging-admin-fe-generic',
              distribution_ids: SCRAMBLED:4df6utTDNpKl4eVxDxqHgz9XtBGcGPPELHYUhBDlmuSVBICilazZZMVohQGq9a+Hpa0hQeEAskP7Peym
            },
            'bavaria': {
              bucket: 'mfx-v2-staging-admin-fe-bavaria',
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
              bucket: 'mfx-v2-staging-admin-fe-ref', // to be deleted later
              distribution_ids: SCRAMBLED:zPXB88OzMoCi/vVbPSGG6s0mnytGAzpO8mLJueqPk3RqkiYcwzoxLyuHSyTDJiBHomTzJyNxPXia+iP5
            },
            'eone': {
              bucket: 'mfx-v2-staging-admin-fe-eone',
              distribution_ids: SCRAMBLED:vdvUsfzQDo/AycRRNgOYiHtCTy95R4Jvdu5wUj8RN8yAUDjGpH+0NOz0SxNJMi62dQM1Wel6kIeWqeOu
            },
            'mipjunior': {
              bucket: 'mfx-v2-staging-admin-fe-mipjunior',
              distribution_ids: SCRAMBLED:7P32kvi/C47ix/V0NRqA/7jtP/aQgJ5cxEil295bWWzpwiLrarCMQijOBxrmUl19sZTNleGHj84W4WP7
            },
            'mipdoc': {
              bucket: 'mfx-v2-staging-admin-fe-mipdoc',
              distribution_ids: SCRAMBLED:xI3hvv3XC/HZ3I1OEQeC79qchrNd37yvGmBRurl7SdJdXMovQHL8YZ12hmtcq+m4SMT1bAda/f7A90GL
            },
            'mipcom': {
              bucket: 'mfx-v2-staging-admin-fe-mipcom',
              distribution_ids: SCRAMBLED:yd/P/YbWFYjbzO93DwKT47AgUVmOuNjzH7U4FvtUa5EIgwjqAD3XTTFgKCOoZilAmkuWrhB6Z5/zfB8w
            },
            'miptv': {
              bucket: 'mfx-v2-staging-admin-fe-miptv',
              distribution_ids: SCRAMBLED:oe7xpN/+N7LW08pZOB2fj+cBKWUaBS8h9ZrlvTgScUocURMtxWf7IVSO8x5vjmJYP8mcqshTKI1GX7i4
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
            'pxl': {
              bucket: 'mfx-v2-staging-buyer-fe-pxl',
              distribution_ids: SCRAMBLED:y+vmvObyco6qx89VEwGk+NrkJi452vlU5RgbMcMLjRtWZj8XgqysjTIyMV4+IV/gMc7fQ0hfF8d5XY1p
            },
            'imagica': {
              bucket: 'mfx-v2-staging-buyer-fe-imagica',
              distribution_ids: SCRAMBLED:+t3BhPDEEKKr14heTyfo/Epvfnm9qB7Wj0yiP6xeEekRpQ14F3tGr2/QZPNQpvVZQBS4B2DIz18ys9G3
            },
            'california': {
              bucket: 'mfx-v2-staging-buyer-fe-california',
              distribution_ids: SCRAMBLED:u9vaoeaxAI7nwIpeLjm/y+nL8UqIYSXgZ6E93NLvKebzH6vepy9Md9liZjs452Fc4SZ3/00Nt+vwRxYq
            },
            'newen': {
              bucket: 'mfx-v2-staging-buyer-fe-newen',
              distribution_ids: SCRAMBLED:zdvtpYXHO6jY3vdREQ+3jy2BbEI2difOuO+ZU9drqQU8XQMyqVq4z8YNtKfBnCXXx196VLJsE4S6H6Tc
            },
            'filmrise': {
              bucket: 'mfx-v2-staging-buyer-fe-filmrise',
              distribution_ids: SCRAMBLED:4d3aoNPSe4K85tA5HS+80duxG8q7ecUj+tD0Nk/ih7tiimaODPtNrKXtbjJdLZIwSDTkPNsKKBGbEQ+Z
            },
            'mipjunior': {
              bucket: 'mfx-v2-staging-buyer-fe-mipjunior',
              distribution_ids: SCRAMBLED:odXGg4PBDv/1zd9lKRmb1o/114iGeo6sTGBYEklJ25L/76iS2hnTh9KVfHqclCrlSilFMejX+ILXApvi
            },
            'mipdoc': {
              bucket: 'mfx-v2-staging-buyer-fe-mipdoc',
              distribution_ids: SCRAMBLED:xIvNpOvuE6zL/c91LCG+jyfG+MhAixv9QbwhV4xTtX29LIVcYCPoG0w8GqGFXE0wkO/tRsGnp8WIo893
            },
            'mipcom': {
              bucket: 'mfx-v2-staging-buyer-fe-mipcom',
              distribution_ids: SCRAMBLED:0+vzoNSyKr3Ry9hUMSyD717HzqSOo60pbnlrdTlJ37w8YNBJjVbdZez470GTHfOKTnEgr1QDs8pMD1If
            },
            'miptv': {
              bucket: 'mfx-v2-staging-buyer-fe-miptv',
              distribution_ids: SCRAMBLED:s9T3mPbqe4Cm3IsiTAeC8qPqt5ebczGCUGCrIIIPAzrTT9JqASPYUbtFB9+gAZkxUivvCtsfX135oY1+
            },
            'iemmys': {
              bucket: 'mfx-v2-staging-buyer-fe-iemmys',
              distribution_ids: SCRAMBLED:vMnxudbRd/Td3uhVBgel8f6imUlLoQiVjhsYjshlU24pKheEkI+1TC1g9xbRqUPqtfXqWjnuZlTjos+B
            },
          },
        },
        'mfx-ui-gcui2': {
          projects: {
            'mfx': {
              bucket: 'mfx-v2-staging-buyer-fe-mfx',
              distribution_ids: SCRAMBLED:0OC3kYT3NZ34w9pyLi6K+bwDiA7W+2QmFDwned3V0nqmqTnMMsiCS/I+SHFtERg20azc+vWeqiW913I0
            },
            'trial': {
              bucket: 'mfx-v2-staging-buyer-fe-trial',
              distribution_ids: SCRAMBLED:/dDJg9bFB4LU3IhQMiS+1j8MQgXXPJTTjQ53XeSxBNed722gmqZRDR9E7wHRPBe/YoQVpuJLzc7Vslz2
            },
            'tiff': {
              bucket: 'mfx-v2-staging-buyer-fe-tiff',
              distribution_ids: SCRAMBLED:2cH4oMnKe4HK7thYLjT/43QrNVsQ2kKt+pKjIlBbobhUvZ8LYLbj1b3T40YFujBStjLlePckr4J6Rs3S
            },
            'redarrow': {
              bucket: 'mfx-v2-staging-buyer-fe-redarrow',
              distribution_ids: SCRAMBLED:su/FuOSyCLLfnY5iCQCK1dr75XuStyqDKO65/d1CiIJXkn/EImlZw4o8zNFjJJEfu9LMsD3XSNu0yTgn
            },
            'televisa': {
              bucket: 'mfx-v2-staging-buyer-fe-televisa',
              distribution_ids: SCRAMBLED:w/utht32G4b98vRvSTyW3ebHxQu9mho8mVaP9tOa+WuAIEpemiEL0GcOJYU3ckjQ8k8/M5xJwwsOFelH
            },
          }
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
        'mfx-ui-mcentral': {
          projects: {
            'mcentral': {
              bucket: 'mfx-v2-staging-buyer-fe-mcentral',
              distribution_ids: SCRAMBLED:xN7g++X0LbXZ4fhcPwbojyknmiZaWMSmHBYC3A07Eh8iG/1lFxG3JRGKzcRezZ5U20hP9jUk3/72f2QeKmv0gEV4OWWxh/jflWHk716Gn3PFMGIfk06xNfN53bCyXaJypXO9E+7R4wVvZDiEjDo7BTlpMjTJzMyR7kxjWiCWJESRPI57KLLnIVIbPE6Jq56K
            },
          },
        },
        'mfx-ui-admin-v3': {
          projects: {
            'generic': {
              bucket: 'mfx-v2-staging-admin3-fe-generic', // for mfx, mcentral, iemmys, trial1 - trial10 (demo sites)
              distribution_ids: SCRAMBLED:x+ytufTEDb/H3MVeNBSB+OYQB4XQTYY45XJBWSB7JhMNnDX632SWgIvOEPSPRMnynReAuroC94rZq70x
            },
            'itvstudios': {
              bucket: 'mfx-v2-staging-admin3-fe-itvstudios',
              distribution_ids: SCRAMBLED:vfb1u//ucqjdxvxMDSW0yolhJXupVtrE/Vhc6AKeR5q6UVUYlYGLHsLAsodZKhIATmtKf9K7tWgznOtf
            },
            'newen': {
              bucket: 'mfx-v2-staging-admin3-fe-newen',
              distribution_ids: SCRAMBLED:5Nnxst3vDv7rx/tGSQDgiOS/3taWiGjXQ4JLtJbl93tKz9iJ2MtEH3d36sh6Qx+qMSTRdU3YwxrfS09t
            },
            'redarrow': {
              bucket: 'mfx-v2-staging-admin3-fe-redarrow',
              distribution_ids: SCRAMBLED:vovGvtLEe7PrzOd6P2O18uoA3UOyfSWtjVsOYQiyXFYZzjC1vrG3u4xfSbz+92u+5+SaZfPSd5Wh6ykK
            },
            'tiff': {
              bucket: 'mfx-v2-staging-admin3-fe-tiff',
              distribution_ids: SCRAMBLED:zsG1m4a2C6rbyttvNwTp0e4kBRXPS90/a0+n5pGLd92ghJMKo+Qaco8rPooGKvFcFprBSGvjzpXd8r99
            },
            'televisa': {
              bucket: 'mfx-v2-staging-admin3-fe-televisa',
              distribution_ids: SCRAMBLED:5fXN/MiwNfegwslVVTKUkNXpXUmKdXRGn6idUG6kV5bN/8eYZs2ReViDXEAyWnQVcSkXiDrj70Xj04q6
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
        'mfx-ui-itvstudios': {
          projects: {
            'itvstudios': {
              bucket: 'mfx-v2-staging-buyer-fe-itvstudios',
              distribution_ids: SCRAMBLED:49basoTAG5/c/ehcCCeU8ms8IswPPoIuO5FHoDL4fwa5Ru5hott3kEaS8BRiJNIlVfHRPMLJWwWEEj4+
            }
          },
        },
      },
    },
    mf_presentation: {
      environment: 'presentation',
      aws_profile: 'mf_presentation',
      branch: 'presentation',
      rollbar: SCRAMBLED:sozm5P6/Gou498hsGzmg7uCboDr83oIua7+wYH0WNGEtuKrWcxJcx+LTr0hwa0uGE6woaUq2ljWqezuQN3NJJrndaYKXsloY4fO4Q7Esf4M=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      base_domain: "mediastore.review",
      endpoints: {
        um: "https://um.api.mediastore.review",
        pm: "https://pm.api.mediastore.review",
        po: "https://po-api.mediastore-presentation.com",
        am: "https://am.api.mediastore.review",
        ac: "https://ac.api.mediastore.review",
        sm: "https://sm.api.mediastore.review",
        mc: "https://mc.api.mediastore.review",
        jc: "https://jc.api.mediastore.review",
        cc: "https://cc.api.mediastore.review",
        cal: "https://cal.api.mediastore.review",
        deliveries: "https://deliveries-api.mediastore-presentation.com",
        producer: 'https://producer-api.mediastore-presentation.com',
        tuco: "https://tuco.api.mediastore.review",
        pigeon: "https://pigeon.api.mediastore.review",
        pigeon2: "https://pigeon2.mediastore-presentation.com",
        cms: "https://cms-api.mediastore-presentation.com",
        viscacha: "https://viscacha.api.mediastore.review",
        companion: "https://companion-cf.lambda.mediastore.review",
        "companion-eu": "https://companion-cf.lambda-eu.mediastore.review",
        "attachments-companion": "https://attachments-companion-cf.lambda.mediastore.review",
        imgResizer: "https://img-resizer.api.mediastore.review",
        mediabench: "https://app.mediabench.dev",
        mediacentral: "https://app.mediabench.dev",
      },
      repos: {
        'mpx-ui-admin': {
          projects: {
            'generic': {
              bucket: 'mfx-v2-presentation-admin-fe-generic',
              distribution_ids: SCRAMBLED:wPPSmt/Ac4vFyPl0TBWE1mBQNEtxAA6AugltvROINSsOAUlAcTrPsqgyjQqjykD3W5oNN4p7iEEIwB5N
            },
            'bavaria': {
              bucket: 'mfx-v2-presentation-admin-fe-bavaria',
              distribution_ids: SCRAMBLED:5Nz04N7OKJ+m7IpwBG6Y1ob2xHeYJigZe1ygM16NZQdjeiuDVwp4AYZ3RKKMMREEMoMrMx57+QLUk6jk
            },
            'lahm': {
              bucket: 'mfx-v2-presentation-admin-fe-lahm',
              distribution_ids: SCRAMBLED:4NC3koOyNKXLwo9HC2Od6oGJ9vZHsF41hrZGId7eIKQRsoXVPoA6K6c9hwmp+2aFOI7KoP3wZEXTOKUc
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
              bucket: 'mfx-v2-presentation-admin-fe-ref', // to be deleted later
              distribution_ids: SCRAMBLED:xO/EnP/zL/Hklo9EFhyJ/5lTiSVfVj0bJ0an9lgUzD9Xmcg/nZZcUs+nzYIwl94FifY2nU4CqwgqOeJR
            },
            'eone': {
              bucket: 'mfx-v2-presentation-admin-fe-eone',
              distribution_ids: SCRAMBLED:/OjbrfW3J5Xf1MtdChmzzBWwNhI5fatOND1176sg4Rno7s9e1rDL5OSLD/YK/y4AsFQd3mbrMR8NERmP
            },
            'mipcom': {
              bucket: 'mfx-v2-presentation-admin-fe-mipcom',
              distribution_ids: SCRAMBLED:2NfGmeXpc//l4+1bGwC37k1lhYhRKHDwpi/S8706iGDY34L8Xah5eHZYDUuxi++VTMEHI6hLodoCD/R9
            },
            'mipdoc': {
              bucket: 'mfx-v2-presentation-admin-fe-mipdoc',
              distribution_ids: SCRAMBLED:wozAgob8L6qjw4hlChem2JKGLjU5QnGIOQg16NISWEhp16blB7c/feTXpyMoywY55M/Q5YxmDzFQARt3
            },
            'mipjunior': {
              bucket: 'mfx-v2-presentation-admin-fe-mipjunior',
              distribution_ids: SCRAMBLED:wI76n/vIELO4w4tlJ2bk6HJzfStXRuZpoqseOBPkawTuDTeP4jSP6QQm1nuWfk7edceDqaOWP1GciWiM
            },
            'miptv': {
              bucket: 'mfx-v2-presentation-admin-fe-miptv',
              distribution_ids: SCRAMBLED:38HXnsTxJqih09J8OBSR6+OEcxjL8S+1GK5JAa5LOAloOqMB9bIk6h7tpZclNbi/ky3dgYJ1wOCjaGEB
            },
          },
        },
        'mpx-ui-gcui': {
          projects: {
            'base2': {
              bucket: 'mfx-v2-presentation-buyer-fe-mpx',
              distribution_ids: SCRAMBLED:8oHQmf+3Apb94dt3TxWJyh+zbtHffNC5vnXehpW6/5VjmgjSIdlERlyASSaZ+FcAYGHCe/FmLnkwyaZ5
            },
            'mfx': {
              bucket: 'mfx-v2-presentation-buyer-fe-mfx',
              distribution_ids: SCRAMBLED:7/bV/57OIf7Wj4skSS7m7oo1H6/SlI4In/J02Ug972l/xLKoseqwbNjhFIoe/46mFoNw4SQFL2ho9yo1
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
            'pxl': {
              bucket: 'mfx-v2-presentation-buyer-fe-pxl',
              distribution_ids: SCRAMBLED:4svgivrWAYrxl9x0DHmk2N8IwBCo7jNdfRsIYII0x0B4+N1wN6yWoqwYm5yC1uq5VTDRAWjSdMr7A0Ji
            },
            'imagica': {
              bucket: 'mfx-v2-presentation-buyer-fe-imagica',
              distribution_ids: SCRAMBLED:uP71uNf+KJPey8cuSDyfiNzCkiOSRYsA3/cHnxpspUwrtTz5jhbW9TGgNwzqplWJ6MXxoUo+d8rSPYTM
            },
            'california': {
              bucket: 'mfx-v2-presentation-buyer-fe-california',
              distribution_ids: SCRAMBLED:z422/YHecbSrlo5sPxC+zNuJFO8y54+VcVIuA5sZrVo7vESA9JLZB+eRuzDn4sIOJEUKdOen8IpbM37p
            },
            'newen': {
              bucket: 'mfx-v2-presentation-buyer-fe-newen',
              distribution_ids: SCRAMBLED:zcDqjdDzBrLp5c5DDhC/7S2DS3EOdX7gjYRsMYisWkV8Ql9I1b/agGLpouGEFxx+iyXNRDqNVlVFg31E
            },
            'filmrise': {
              bucket: 'mfx-v2-presentation-buyer-fe-filmrise',
              distribution_ids: SCRAMBLED:ydXHiP3OG/Xyy9x8SmGT3zI2fAvP6TJ7oqAIsEQiR7ohzMy+4F27Y+RqFHXUVV1ngMC19MrAgaPTWSEv
            },
            'mipdoc': {
              bucket: 'mfx-v2-presentation-buyer-fe-mipdoc',
              distribution_ids: SCRAMBLED:5N7F84j8GYOk7fpCLQye1+17BtoX910DAZ3BFHAAfyFDuNu7UuAhUZN3WqVc3G51dAjBK++ed9udtE4U
            },
            'mipcom': {
              bucket: 'mfx-v2-presentation-buyer-fe-mipcom',
              distribution_ids: SCRAMBLED:wOzR8ub+c//C3O1ZNTql0hubqnqGMHIU9UWQlk2o05iCnH+hcHyBmeiDb5VynA2mBY7I8w4VbksAfluZ
            },
            'mipjunior': {
              bucket: 'mfx-v2-presentation-buyer-fe-mipjunior',
              distribution_ids: SCRAMBLED:xdnhgdjWOYrh4PVYShXp0sqXkfjJ1deZCWBMWNVCGXkkRJVySPBWr2U8hdy88rn3OCLo/LmXhu+pSyNw
            },
            'miptv': {
              bucket: 'mfx-v2-presentation-buyer-fe-miptv',
              distribution_ids: SCRAMBLED:vdPnuOHjBP/p8oxTPzTj1h+XsFkVnwUZfmrDquUFgu1Mp9txQHp+1fgQwkt+sAccnvDgsUDvlYEGCfvM
            },
            'iemmys': {
              bucket: 'mfx-v2-presentation-buyer-fe-iemmys',
              distribution_ids: SCRAMBLED:7463oejyJbPG589SDm+V7BorcJ9PP1GdL+43/rrjUQ/3jCAbz0gzLOGIZ2hDlAR5v8LyN9QI7EMEwrRt
            },
          },
        },
        'mfx-ui-gcui2': {
          projects: {
            'mfx': {
              bucket: 'mfx-v2-presentation-buyer-fe-mfx',
              distribution_ids: SCRAMBLED:7/bV/57OIf7Wj4skSS7m7oo1H6/SlI4In/J02Ug972l/xLKoseqwbNjhFIoe/46mFoNw4SQFL2ho9yo1
            },
            'trial': {
              bucket: 'mfx-v2-presentation-buyer-fe-trial',
              distribution_ids: SCRAMBLED:/IGwgvy3dpDY4fRlBDG2zG17HDxlLPhx8J8MgA7oyxKqOGALkSE4VmGsXD47yPnFY4aBV+RJ9HeNzuya
            },
            'tiff': {
              bucket: 'mfx-v2-presentation-buyer-fe-tiff',
              distribution_ids: SCRAMBLED:surmudDKaLLZzNhuPB6oydQWEvhKgYoevqHixpvqSL9Ofs0jcgRmtP33Da4uDlfjUlnAbDLmZYnzIiJF
            },
            'redarrow': {
              bucket: 'mfx-v2-presentation-buyer-fe-redarrow',
              distribution_ids: SCRAMBLED:0+3LrsjRIYum64xQURu5lNDkNq4+S1ZUEDJtzDKWJ3xxE1+DK5OQh5ZIbsQAHuDb8aBSvhqt+Zxwy1Vu
            },
            'televisa': {
              bucket: 'mfx-v2-presentation-buyer-fe-televisa',
              distribution_ids: SCRAMBLED:2sv3+/nvNZbXwdp1Jznk3M044q6l8zuu3V0FyVlftImTWFlcinnOpYJhm35g/qbkoMkem2PdlUiktYDi
            },
          }
        },
        'mfx-ui-orf': {
          projects: {
            'orf': {
              bucket: 'mfx-v2-presentation-buyer-fe-orf',
              distribution_ids: SCRAMBLED:vcnUjf3hMJ/R95IjMwCejtm4KdZU+DayL0yA+/WiDndeZR8MqruZ48yiOomXtRJ0QgcLLA3Fa/3H+u9V
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
        'mfx-ui-admin-v3': {
          projects: {
            'generic': {
              bucket: 'mfx-v2-presentation-admin3-fe-generic', // for mfx, iemmys, trial1 - trial10 (demo sites)
              distribution_ids: SCRAMBLED:xMva4MDzdY7R3uhFLQbhw5nUfKrFILLnGodXas+Uq3zifWV+tP5wXVkk49wMQleaEpUfefvmpdTOo0pi
            },
            'itvstudios': {
              bucket: 'mfx-v2-presentation-admin3-fe-itvstudios',
              distribution_ids: SCRAMBLED:uPXl/4HWOrG80OxAOCSz6yhFyAHbkknb5nfwcENrtmGc0u7GuTPevaSjyv1zV0ZCzz0qUDynVvQ/7fAy
            },
            'newen': {
              bucket: 'mfx-v2-presentation-admin3-fe-newen',
              distribution_ids: SCRAMBLED:wYu0nIXsEL7Cy81gNgbj/+KnXGRSqrz+rGHcQsCfO7GJgHeqzHC3DWHwWQFQmUszLRWpaouDSp+8mWVJ
            },
            'redarrow': {
              bucket: 'mfx-v2-presentation-admin3-fe-redarrow',
              distribution_ids: SCRAMBLED:/u3jqvXSepG4woRwKSWxynVWaC7BLoQERBjgmKOAbe3+Xm6i0sh07Au/CTNvQEE2vzoOHUscuvKaNP9z
            },
            'tiff': {
              bucket: 'mfx-v2-presentation-admin3-fe-tiff',
              distribution_ids: SCRAMBLED:xfXznZ60Oob88vByLTvmkF3D5/ESJvRvuZvYBG2NuaicWc06LJtjd71wglN5iC/ze2K3GlRER2iDKUFZ
            },
            'televisa': {
              bucket: 'mfx-v2-presentation-admin3-fe-televisa',
              distribution_ids: SCRAMBLED:+uDY/4XJKorSy95CKz231jJv5F/wwWOAuN786mxMcsNK1FpMJUDWiH9LfD5jyu9T2fOvRJfMiFfvd6X2
            },
          },
        },
        'mfx-ui-eone': {
          projects: {
            'eone': {
              bucket: 'mfx-v2-presentation-buyer-fe-eone',
              distribution_ids: SCRAMBLED:+NvwmODicfX10vRuKCC79Q7h2z8MD5pohmqNRcA9EJRwG3sTDMAToJZOlvCLZoCKzXp6+wI4NVy6194J
            },
          },
        },
        'mfx-ui-itvstudios': {
          projects: {
            'itvstudios': {
              bucket: 'mfx-v2-presentation-buyer-fe-itvstudios',
              distribution_ids: SCRAMBLED:88+zjdO+ELLqj+5iGC6h63XjIENd3ZE5/bq/3vPvFJ9t2KHPuhSctlDpcSlR4xaA5F33Zvm92wu1Rk7C
            },
          },
        },
      },
    },
    mf_production: {
      environment: 'production',
      aws_profile: 'mf_production',
      branch: 'production',
      rollbar: SCRAMBLED:2/T2hODeL6vi5+dBKyyB2GjokvH2JpjIzUuBXyB7tZvwmVVDMxcF4IHQPC8kXK9hWxdnrZKeMSkl91GRJUXUQewE8ZDGYKI5xqFpUo7eQ0Q=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      base_domain: "mediastore.app",
      endpoints: {
        um: "https://um.api.mediastore.app",
        pm: "https://pm.api.mediastore.app",
        po: "https://po-api.mediastore-production.com",
        am: "https://am.api.mediastore.app",
        ac: "https://ac.api.mediastore.app",
        sm: "https://sm.api.mediastore.app",
        mc: "https://mc.api.mediastore.app",
        jc: "https://jc.api.mediastore.app",
        cc: "https://cc.api.mediastore.app",
        cal: "https://cal.api.mediastore.app",
        deliveries: "https://deliveries-api.mediastore-production.com",
        producer: 'https://producer-api.mediastore-production.com',
        tuco: "https://tuco.api.mediastore.app",
        pigeon: "https://pigeon.api.mediastore.app",
        pigeon2: "https://pigeon2.mediastore-production.com",
        cms: "https://cms-api.mediastore-production.com",
        viscacha: "https://viscacha.api.mediastore.app",
        companion: "https://companion-cf.lambda.mediastore.app",
        "companion-eu": "https://companion-cf.lambda-eu.mediastore.app",
        "attachments-companion": "https://attachments-companion-cf.lambda.mediastore.app",
        imgResizer: "https://img-resizer.api.mediastore.app",
        mediacentral: "https://app.mediabench.app",
        mediabench: "https://app.mediabench.app",
      },
      repos: {
        'mpx-ui-admin': {
          projects: {
            'generic': {
              bucket: 'mfx-v2-production-admin-fe-generic',
              // Cloudfront distribution ids for (in this order): generic (mediastore.app domains), california, dmd, relativity, ftd:
              distribution_ids: SCRAMBLED:wZfyusHvMLXii+tYGyDm4QUWTtsGl8BMqkzuAstrASeZVRvHpqHKYOrfwGasjGg0knyaCnCEZNaytcQI+XpSMD/HZEPM9rLcSJbFwP3NiZ2VYJQh/sAzcBceEL3PVr9CFJTkFXvKfeUOckybrcl6b8GxuDdwaiCOkiToGDKoSOhT9EhRf5IeOgk2nYCdyDRUMQnCnMo5l+n2mXfH
            },
            'bavaria': {
              bucket: 'mfx-v2-production-admin-fe-bavaria',
              distribution_ids: SCRAMBLED:vfH35PmzAvfx7vpUTSyJjEnO8tFrjNinEN54J+TV7oTFfnijUkcsRxnnOX2iasEJDPSsFOq6Vh62LVlVV12/bSloXVQKGJx2Pr74NR6HttUKvWFX
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
              bucket: 'mfx-v2-production-admin-fe-ref', // delete later
              distribution_ids: SCRAMBLED:w+njpcjcKoPU0I9cMjWHlJ2pTL5j0EPxRETeNmJmjTTo8T5RF+BczQCnXe/NEitJKddwaos95lwLbtI5
            },
            'eone': {
              bucket: 'mfx-v2-production-admin-fe-eone',
              distribution_ids: SCRAMBLED:yf3VpMb3duzB4PhyFxeo85w6N9WtnRl/4vOes42gBcqivoTkrG03a1uFgBBeqrIpt72BFMM27KDOAtzQqeM3b/8YIJx092Lp0Dd+9uWGqMICa3lx
            },
            'mipcom': {
              bucket: 'mfx-v2-production-admin-fe-mipcom',
              distribution_ids: SCRAMBLED:vvb0svixIY3KzY5cJzSj6FVITR2z/hhDfkQYgiJZVCltyyH3gW692ArQ8Mcc+O3PsA+rbBhs/uqFUIBf1Svmgk7LvEH1mMHqbNOsEHD8DvykStaW
            },
            'mipdoc': {
              bucket: 'mfx-v2-production-admin-fe-mipdoc',
              distribution_ids: SCRAMBLED:2sHO+NvPLavyleo5CBGK/cowPywVvO15wNBbp1LbT/PtsY3lt5YxVQkeIMq1wlFBL1i5R+syf3ebq3VTeHIOFEO4KPPITzOdw6byiSqPZomLClgu
            },
            'mipjunior': {
              bucket: 'mfx-v2-production-admin-fe-mipjunior',
              distribution_ids: SCRAMBLED:7fC3pMPndJ399Nl7HzuHj4Tk5Ma3B7fSW4qvtS85TwUo0zirU3YZ1czePrqoce8wB+N0aI0Ha0uK5ex4z6gxuPc5I6nDVI7QUbdom9z7PslJtIF/
            },
            'miptv': {
              bucket: 'mfx-v2-production-admin-fe-miptv',
              distribution_ids: SCRAMBLED:zdXTusTCeq/m04Q9Fzio41hpd3r1TcuN6hCjFIITsHZtmp8CxD0eeqj3k/j/l6AtLNtT2w7xjjeMJ1YfOmWqj1WSX93bi++rGeDb66jvaaL66zNx
            },
          },
        },
        'mpx-ui-gcui': {
          projects: {
            'base2': {
              bucket: 'mfx-v2-production-buyer-fe-mpx',
              distribution_ids: SCRAMBLED:uODqpZrgJrb/1PlyRzyI6WxlY1WiwKfkf7PtTfEWD5nHij3SXiSCHvy025Ikq1dBPrlHhgLNCnQpRYpj
            },
            'mfx': {
              bucket: 'mfx-v2-production-buyer-fe-mfx',
              distribution_ids: SCRAMBLED:7frwqcfoBr6g4MhdPBH/kKhq6SEQtRHBVvPlWXsGojphRU/5d3J1HeZ5Yewl4t1QgUHw61DVoDeBbIMF
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
              distribution_ids: SCRAMBLED:udv6ksCxc4zR5vVGCCac6g9qGHmmuTdGwoBWTCu99c/Jo0bXDOU8LrbbDY0PyiBx9aHNAD8v5JS/beY0wI+Ii5ARYZN4iXK1OcWTu5e4sGbiurC2
            },
            'itvstudios': {
              bucket: 'mfx-v2-production-buyer-fe-itvstudios',
              distribution_ids: SCRAMBLED:utnOusi/D5LV7u5MFjiIjjrT1WH/jFXtcLwysT0Fv/n0qJm+emC+5ZT0OtxrbBWhzvIGmRXIOLoeefaK+vyek89i8JclxPdwEe6yQcmcNaqASuZw
            },
            'pxl': {
              bucket: 'mfx-v2-production-buyer-fe-pxl',
              distribution_ids: SCRAMBLED:0P74mIHjIYP/nfZZOGO2jQsZpVts4UDh4o+2Nnf0KyGQxbZBlMp6GtuZ4f2Rn5H/hbPK/cH/a4iZxb0G
            },
            'imagica': {
              bucket: 'mfx-v2-production-buyer-fe-imagica',
              distribution_ids: SCRAMBLED:+4z2hsXWd63ii/5XJhWY6cVyjBMhHA6gzSeZCjneGxucnz0+jqptHdk7XjBlaiO9eYUqi/48/zbdu0gD
            },
            'california': {
              bucket: 'mfx-v2-production-buyer-fe-california',
              distribution_ids: SCRAMBLED:vf61mPS0FYvR6opCLRWC6TBYkJ1sFmfwboWv1y+00/X6LrwNWbIOEHhieGVvdeEqP1/1bx0btewxg44Y
            },
            'newen': {
              bucket: 'mfx-v2-production-buyer-fe-newen',
              distribution_ids: SCRAMBLED:8trtrcnOIZK44YRQPy+9yohnLfjfOEYPVXPre2FWrZukGYvIX6ylkE2V18Uj52FZ257otD3rI4Efexn0g+WASsZwK2IvUYlbZLWcm3xjaxzh8Qhf
            },
            'filmrise': {
              bucket: 'mfx-v2-production-buyer-fe-filmrise',
              distribution_ids: SCRAMBLED:2tPV/uu0B6i83exsBDee4fJdZ/7fX/F4hD+xq1OF1WDgXKmGfoUNiDxNNLy2qkwTq54idrLghXohkCCRYhDE4Iozb64ZO4jbrKArIudAzFaqrrwX
            },
            'mipcom': {
              bucket: 'mfx-v2-production-buyer-fe-mipcom',
              distribution_ids: SCRAMBLED:34H1+/7pLPbp1+d/TByS2NRfit6RZLphUR0lHJjXm5X+oFErjLnBc0FNX2aweE/i6Hk9gPMzGJ3ivqIYIgEXltvwQWQhH9PR60Xidj+go/M7HSAb
            },
            'mipdoc': {
              bucket: 'mfx-v2-production-buyer-fe-mipdoc',
              distribution_ids: SCRAMBLED:4t62k9npGqz7kvZ3NQGaihaH6AuWoyI/dTq8g6EaFo60Dk+T/MjKIKM6lB22tBpkuCH/HiCO7EqYTxKzx+zPLKCmNCmNvWqOC6+PS6ksAo4Qvz4Q
            },
            'mipjunior': {
              bucket: 'mfx-v2-production-buyer-fe-mipjunior',
              distribution_ids: SCRAMBLED:vYm2s9e/evWrwM8uHWG46ixm1KSOm1CP+TI+9E6463O0eihMMzaoSPSMcgH1ERXM7He3iwEeCiFjHFiAWluF09kB/HVBt718zwPUt62OCgrnGsaz
            },
            'miptv': {
              bucket: 'mfx-v2-production-buyer-fe-miptv',
              distribution_ids: SCRAMBLED:wsrlrIbgK5HwwY9vLReo3hNE0neXi0J0KK1f1EGhT7duD1k6aekb3V5xlg52NsGsBhTSvQnfHIG01XVwQIJZAtuEdSYQJJAEjk6J7r3knBiBsOX5
            },
            'iemmys': {
              bucket: 'mfx-v2-production-buyer-fe-iemmys',
              distribution_ids: SCRAMBLED:/u7bk+nTOZD49PhBDBiH6UR+qwR5Sf8lneyGw4ycaErvssXFlRbIe8KkXLCe2UAo6YXDn+cbvyt0cQ/rdC18+E22XlOlqQm1nq5+xw8OFkvQCSkP
            },
          },
        },
        'mfx-ui-gcui2': {
          projects: {
            'mfx': {
              bucket: 'mfx-v2-production-buyer-fe-mfx',
              distribution_ids: SCRAMBLED:7frwqcfoBr6g4MhdPBH/kKhq6SEQtRHBVvPlWXsGojphRU/5d3J1HeZ5Yewl4t1QgUHw61DVoDeBbIMF
            },
            'trial': {
              bucket: 'mfx-v2-production-buyer-fe-trial',
              distribution_ids: SCRAMBLED:svLTiOnIe6S8kd4nTDmy8RUpTc68ob4WdVIkrd9xRt3wzAjTbhdoJ0CeouZ4xMKlHuHHZTBoPDZDlAaV
            },
            'tiff': {
              bucket: 'mfx-v2-production-buyer-fe-tiff',
              distribution_ids: SCRAMBLED:0/DI8uPjEvPh14ROGhP/6ZNYkAN3fdp+wWjB7t9jZsKk5EdE001J2n7aMObOfx9CeRF5BxWcu0RP4sig
            },
            'redarrow': {
              bucket: 'mfx-v2-production-buyer-fe-redarrow',
              distribution_ids: SCRAMBLED:+NC6j4L/cpO4x8l+EhGozIGBgtx4DWeGncFH4V9zQb9tRIHlLtj5qU4a0TkhCygSkTUjkovosf7fJiqCHy54E03nPY/wmrjWiM34Arkf5HpVHO7u
            },
            'televisa': {
              bucket: 'mfx-v2-production-buyer-fe-televisa',
              distribution_ids: SCRAMBLED:+u3hp+jWBZ3c4NhDTWCa2qYOTPDCfslbbK3qqiFZIM+eCJl3wvZkB0XWWraPEXM3LcQGTY6VmYxK+L+RI2vns0pygQxpVnm8jccz2OvtBz4GMkP6
            },
          }
        },
        'mfx-ui-orf': {
          projects: {
            'orf': {
              bucket: 'mfx-v2-production-buyer-fe-orf',
              distribution_ids: SCRAMBLED:xf7RvuD/aKKhzfEvOzOd/tJ9Ku95CsQ/Sqlr17AQgCkqQc1wttkQ7KH2DRrLUqEnk17KOS/26cFcq2ndF1rYTt+xmEYVDaErl3TkUEE/xgI=
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
        'mfx-ui-admin-v3': {
          projects: {
            'generic': {
              bucket: 'mfx-v2-production-admin3-fe-generic', // for mfx, iemmys, trial1 - trial10 (demo sites)
              distribution_ids: SCRAMBLED:uJPXgtLxBvT45vInDBCgyNaqTwZ+7lyX6e+nCufao/ZBV+ZLqWXaXVa1JMiIYwep5ZiORs3J0XFqLOft
            },
            'itvstudios': {
              bucket: 'mfx-v2-production-admin3-fe-itvstudios',
              distribution_ids: SCRAMBLED:8o3N5MHCD6uqj9xaGxGx8MoXuJfR2X1LZOH1JFJKNcegh4/8Vy8cH2pMwGWhFnOtNwEpzLqzfQR1DV+AqcPW6wVWhlXf8NTUsU+OP6dVBN9E3PKh
            },
            'newen': {
              bucket: 'mfx-v2-production-admin3-fe-newen',
              distribution_ids: SCRAMBLED:8+LAnoPTCrWkk498Hy+X7s3vwdFeDrzYuSZtRO7KMfP01Q4c3G1F1Sr1Ba4KHlwaSAR5dDpn21kyJMpt/Lsg330QTwUwGmC/3vuURFHD02fJJyz2
            },
            'redarrow': {
              bucket: 'mfx-v2-production-admin3-fe-redarrow',
              distribution_ids: SCRAMBLED:ufzjruizGqXC0/FcDwWl/hyQzxZQmacEH0eZS4L020HAEYdRq3NGR63EvCyTlBGd3cofWpRCz8rRL0Zdl0z5yK+Wb0Gl7q2VfNHUEzS27XpFfC/w
            },
            'tiff': {
              bucket: 'mfx-v2-production-admin3-fe-tiff',
              distribution_ids: SCRAMBLED:s9DtktDtEqyhzup7J3mo/C7RLLHC+9KohVm+IGQxqjak3VTBPogKLhvJNFqZhxO4ZPbTp41XmuEFRo5A
            },
            'televisa': {
              bucket: 'mfx-v2-production-admin3-fe-televisa',
              distribution_ids: SCRAMBLED:wNLGiom2e5TLwYxPVQ+Y83Zao3vDLA1hnrZ69jzpcJjzUk5/sBbFtEfIAHUdymIBhmJSfrQGx38oHUArh6H2PpZ1c6YZMFdGRc1Zv1iph6Mbwbvb
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
        'mfx-ui-itvstudios': {
          projects: {
            'itvstudios': {
              bucket: 'mfx-v2-production-buyer-fe-itvstudios',
              distribution_ids: SCRAMBLED:utnOusi/D5LV7u5MFjiIjjrT1WH/jFXtcLwysT0Fv/n0qJm+emC+5ZT0OtxrbBWhzvIGmRXIOLoeefaK+vyek89i8JclxPdwEe6yQcmcNaqASuZw
            }
          },
        },
      },
    },
    nbcu_preprod: {
      environment: 'presentation',
      aws_profile: 'nbcu_preprod',
      branch: 'presentation',
      rollbar: SCRAMBLED:6/DXmsG/d4zdwYhaExG8ypzUIJSSCG7qhLH3wV+jyi2r4yZ54kmW7eLWwsQnB6dDXDD2AEB732vjJNGJURpl30UJEZVhtuA48Uv8MlwmPHc=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      base_domain: "nbcupassport-preprod.com",
      endpoints: {
        um: "https://um.api.nbcupassport-preprod.com",
        pm: "https://pm.api.nbcupassport-preprod.com",
        po: "https://po.api.nbcupassport-preprod.com",
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
      rollbar: SCRAMBLED:2s33o8L2MfDL0JIhMDPj+Qa1FDargdHtv5KVdWKYh3xC7gag3CoHEqqvO0m83KGCsjWoOabArgdsiz4xu/lmNO3G7TcXhvPairQPaI/S7V0=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      base_domain: "nbcupassport.com",
      endpoints: {
        um: "https://um.api.nbcupassport.com",
        pm: "https://pm.api.nbcupassport.com",
        po: "https://po.api.nbcupassport.com",
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
      rollbar: SCRAMBLED:sozm5P6/Gou498hsGzmg7uCboDr83oIua7+wYH0WNGEtuKrWcxJcx+LTr0hwa0uGE6woaUq2ljWqezuQN3NJJrndaYKXsloY4fO4Q7Esf4M=
      slack_url: SCRAMBLED:+N73mfv8bJSlj4V0KBHm1bMFRbiMsdp6fupYudNds5+7+UIAgbQUFUTjSYfjaaFUk+2adwNFWgE5TgJOHI6+Aa4y6lD7dSjaxD3Gycrhnz2b0wVgUprNVR/8GWIgs9TFe36AnVBcTXROF9GL2I7+tMEPGkF8rghN1MWxMjZ/8vWuaCL/b4Y4CASKpBMFePJzBM363Q==
      base_domain: "mediastore.app",
      endpoints: {
        um: "https://um.api.mediastore.app",
        pm: "https://pm.api.mediastore.app",
        po: "https://po-api.mediastore-production.com'",
        am: "https://am.api.mediastore.app",
        ac: "https://ac.api.mediastore.app",
        sm: "https://sm.api.mediastore.app",
        mc: "https://mc.api.mediastore.app",
        jc: "https://jc.api.mediastore.app",
        cc: "https://cc.api.mediastore.app",
        deliveries: "https://deliveries-api.mediastore-production.com",
        producer: 'https://producer-api.mediastore-production.com',
        tuco: "https://tuco.api.mediastore.app",
        pigeon: "https://pigeon.api.mediastore.app",
        viscacha: "https://viscacha.api.mediastore.app",
        imgResizer: "https://img-resizer.api.mediastore.app",
        mediacentral: "https://app.mediabench.app",
        mediabench: "https://app.mediabench.app",
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
        'mfx-ui-lionsgate': {
          projects: {
            'lionsgate': {
              bucket: 'mfx-v2-presentation-test-fe-lgt',
              distribution_ids: SCRAMBLED:2o+2utnccLHB0fVmDB3/0PcyJd/xYHdFqS+bPAt/IaqyprbVlGdNWKYpOX1r76/LU6MUL2y35WwNgm+R
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
    contentSecurityPolicy: (baseDomain, additions, removals) => {
      return reduce(defaultCSP, (acc, value, key) => {
        const list = additions && additions[key] ? value.concat(additions[key]) : value.slice();

        if (removals && removals[key]) {
          pullAll(list, removals[key]);
        }

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
