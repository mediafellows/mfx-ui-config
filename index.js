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
        "attachments-companion": "https://attachments-companion-cf.lambda.mediastore.dev",
        imgResizer: "https://img-resizer.api.mediastore.dev",
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
    },
    nbcu_production: {
      environment: 'production',
      aws_profile: 'nbcu_production',
      branch: 'production',
      rollbar: SCRAMBLED:uozQgfzRNKbek8V1ERPm7PQsaN8ukeOwxeWsX/qzJNNKjEYLG03DRb7sd+bkh/d3ifEC/z/WnbOyj3KFU/hgNgHpq6hFESimdxR7gqTvGzM=
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
