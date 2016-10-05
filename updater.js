#!/usr/bin/env node

'use strict'

const spawn = require('child_process').spawn
const pkg = require('./package.json')
const { dependencies, devDependencies } = pkg

const installDependencies = (deps, command) => spawn(
  'npm', [ 'install', command, ...Object.keys(deps) ],
  { stdio: 'inherit' }
)

installDependencies(dependencies, '--save')
installDependencies(devDependencies, '--save-dev')
