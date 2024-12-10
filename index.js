const {merge, trim, reduce, isPlainObject, pullAll} = require('lodash')
const {execSync} = require('child_process')
const {existsSync} = require('fs')

// Content security policy (CSP)
// Documented at https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Content-Security-Policy
const defaultCSP = {
  'default-src': [
    "'self'"
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
    "*.pallycon.com",
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
    "data:",
    "blob:",
    "*.{{base_domain}}",
    "*.amazonaws.com",
    "*.mediastore-staging.com",
    "*.mediastore-presentation.com",
    "*.mediastore-production.com",
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
        "cc-new": "http://cc-new-api.mediastore-staging.com",
        cal: 'https://cal.api.mediastore.dev',
        producer: 'https://producer-api.mediastore-staging.com',
        deliveries: "https://deliveries-api.mediastore-staging.com",
        tuco: "https://tuco-api.mediastore-staging.com",
        pigeon: "https://pigeon.api.mediastore.dev",
        pigeon2: "https://pigeon2.mediastore.click",
        cms: "https://cms-api.mediastore-staging.com",
        viscacha: "https://viscacha.api.mediastore.dev",
        companion: "https://companion-api.mediastore-staging.com",
        "companion-eu": "https://companion-eu-api.mediastore-staging.com",
        "attachments-companion": "https://companion-attachment-api.mediastore-staging.com",
        imgResizer: "https://img-resizer.api.mediastore.dev",
        mediabench: "https://app.mediabench.dev",
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
        "cc-new": "https://cc-new-api.mediastore-staging.com",
        cal: "https://cal.api.mediastore.dev",
        deliveries: "https://deliveries-api.mediastore-staging.com",
        producer: 'https://producer-api.mediastore-staging.com',
        tuco: "https://tuco.api.mediastore.dev",
        pigeon: "https://pigeon.api.mediastore.dev",
        pigeon2: "https://pigeon2.mediastore.click",
        cms: "https://cms-api.mediastore-staging.com",
        viscacha: "https://viscacha.api.mediastore.dev",
        companion: "https://companion-api.mediastore-staging.com",
        "companion-eu": "https://companion-eu-api.mediastore-staging.com",
        "attachments-companion": "https://companion-attachment-api.mediastore-staging.com",
        imgResizer: "https://img-resizer.api.mediastore.dev",
        mediabench: "https://app.mediabench.dev",
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
        companion: "https://companion-api.mediastore-presentation.com",
        "companion-eu": "https://companion-eu-api.mediastore-presentation.com",
        "attachments-companion": "https://companion-attachment-api.mediastore-presentation.com",
        imgResizer: "https://img-resizer.api.mediastore.review",
        mediabench: "https://app.mediabench.dev",
        mediacentral: "https://app.mediabench.dev",
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
        companion: "https://companion-api.mediastore-production.com",
        "companion-eu": "https://companion-eu-api.mediastore-production.com",
        "attachments-companion": "https://companion-attachment-api.mediastore-production.com",
        imgResizer: "https://img-resizer.api.mediastore.app",
        mediacentral: "https://app.mediabench.app",
        mediabench: "https://app.mediabench.app",
      },
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
