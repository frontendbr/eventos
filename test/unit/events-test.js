'use strict'

import React from 'react'
import { renderToString } from 'react-dom/server'
import test from 'tape'
import $ from 'whacko'

test('test React DOM example', (assert) => {
  const html = renderToString(<div>Hey!</div>)
  assert.equal($(html).text(), 'Hey!')
  assert.end()
})
