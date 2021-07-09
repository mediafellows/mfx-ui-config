[![JS CI tests](https://github.com/mediafellows/mfx-ui-config/actions/workflows/validate.yml/badge.svg)](https://github.com/mediafellows/mfx-ui-config/actions/workflows/validate.yml)

# mfx-ui-config

## install

* `yarn add @mediafellows/mfx-ui-config`
* install & configure https://github.com/dbldots/scrambler

## checkout current config

this should be run very often, at least before

* every deploy
* before you first run a build, e.g. development server

to update to the latest config

## usage

### import

```javascript
// NOT @mediafellows/mfx-ui-config!
// (as this contains the encrypted values only)
import config from 'mfx-ui-config'
```

### example

```javascript
import config from 'mfx-ui-config'

const envConfig = config.env(<YOUR-ENV-HERE>)
const projectConfig = envConfig.fetch(`repos.mfx-ui-tf1int.projects.tf1int`)
const awsProfile = envConfig.fetch('aws_profile')
...
```

## Modifying the config
For modifying the config file you need to install [scramber](https://github.com/dbldots/scrambler) to decrypt encrypted sections. Then edit the index.js file.

Also it's good to check syntax after editing using the `yarn test` task that validates the index.js file.
