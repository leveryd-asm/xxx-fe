'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
  POC_API: '"' + process.env.POC_API + '/api"',
  SOC_API: '"' + process.env.SOC_API + '/api"',
})
