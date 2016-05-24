'use strict'

import React from 'react'

const footerLinks = [{
  href: 'https://github.com/frontendbr/forum',
  title: 'Acesso nosso fórum',
  content: 'Fórum'
}, {
  href: 'https://github.com/frontendbr/vagas',
  title: 'Publique ou encontre uma vaga',
  content: 'Vagas'
}]

const MainFooter = () => (
  <footer className='footer' role='contentinfo'>
    <div className='footer-inner'>
      <div className='container-flex'>
        <div className='footer-inner--main'>
          <p>Esse projeto é uma iniciativa da organização {' '}
            <a href='https://github.com/frontendbr'>
              Front-End Brasil do GitHub.
            </a>
          </p>
        </div>
        <ul className='footer-inner--nav'>
          {footerLinks.map(({ href, title, content }) => (
            <li>
              <a className='btn-link' href={href} title={title}>
                {content}
              </a>
            </li>
          ))}
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
