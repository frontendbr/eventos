'use strict'

import React from 'react'

const MainFooter = () => (
  <footer className='footer' role='contentinfo'>
    <div className='footer-inner'>
      <div className='container-flex'>
        <div className='footer-inner--main'>
          <p>Esse projeto é uma iniciativa da organização {' '}
            <a href='https://github.com/frontendbr'>
              Front-End Brasil do Github.
            </a>
          </p>
        </div>
        <ul className='footer-inner--nav'>
          <li>
            <a
              className='btn-link'
              href='https://github.com/frontendbr/forum'
              title='Acesso nosso fórum'
            >
              Fórum
            </a>
          </li>
          <li>
            <a
              className='btn-link'
              href='https://github.com/frontendbr/forum'
              title='Publique ou encontre uma vaga'
            >
              Vagas
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className='footer-hold'>
      <div className='container'>
        <p>
          &copy; 2016 {' '}
          <a href='https://github.com/frontendbr/'>
            Front-End Brasil
          </a>
        </p>
      </div>
    </div>
  </footer>

)

export default MainFooter
