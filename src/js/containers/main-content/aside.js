'use strict'

import React from 'react'

const Aside = () => (
  <aside className='disclaimer'>
    <div className='disclaimer-inner'>
      <h2 className='title'>
        Conhece algum evento de Front-End que não está listado?
      </h2>
      <a
        href='https://github.com/frontendbr/eventos/issues'
        className='btn'
        aria-label='Anunciar Evento'
        title='Anuncie seu evento'>
        Anunciar Evento
      </a>
    </div>
  </aside>

)

export default Aside
