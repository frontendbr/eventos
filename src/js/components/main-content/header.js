'use strict'

import React from 'react'
import LazyImg from '../lazy-img'

const Header = () => (
      <header className='wellness'>
          <h1 className='title'>Encontre eventos de Front-End em todo o Brasil</h1>

          <section className='banner'>
              <div className='banner-main'>
                  <a className='banner-box' href='inner.html' title='Conferência CSS Brasil dia 20 de Maio'>
                      <LazyImg src='http://www.conferenciacssbrasil.com.br/build/img/css-brasil.png' alt='Conferência CSS Brasil' />
                      <h2 className='title'>Conferência CSS Brasil <span className='date'>20 - Maio</span></h2>
                  </a>
              </div>

              <div className='banner-aside'>
                  <a className='banner-box' href='inner.html' title='Front in Sampa dia 20 de Maio'>
                      <h2 className='title'>Front in Sampa <span className='date'>20 - Maio</span></h2>
                  </a>
                  <a className='banner-box' href='inner.html' title='Meetup CSS dia 20 de Maio'>
                      <h2 className='title'>Meetup CSS <span className='date'>20 - Maio</span></h2>
                  </a>
              </div>

              <div className='banner-aside'>
                  <a className='banner-box' href='inner.html' title='BrazilJS dia 20 de Maio'>
                      <h2 className='title'>BrazilJS <span className='date'>20 - Maio</span></h2>
                  </a>
                  <a className='banner-box' href='inner.html' title='FrontUX dia 20 de Maio'>
                      <h2 className='title'>Front UX <span className='date'>20 - Maio</span></h2>
                  </a>
              </div>
          </section>

          <nav className='filter'>
              <div className='form-select'>
                  <svg className='icon' aria-hidden='true' aria-label='Data'><use xlinkHref='svg/icons.svg#date' /></svg>
                  <label className='sr-only'>Escolha um mês</label>
                  <select>
                      <option>Escolha um mês</option>
                      <option>Janeiro</option>
                      <option>Fevereiro</option>
                      <option>Março</option>
                  </select>
              </div>

              <div className='form-select'>
                  <svg className='icon' aria-hidden='true' aria-label='Local'><use xlinkHref='svg/icons.svg#location' /></svg>
                  <label className='sr-only'>Escolha um estado</label>
                  <select>
                      <option>Escolha um estado</option>
                      <option>São Paulo</option>
                      <option>Acre</option>
                      <option>Paraná</option>
                  </select>
              </div>

              <div className='search'>
                  <input className='form-control' type='search' placeholder='Busque por palavras chaves' />
                  <button className='search-btn' type='submit' role='button'><svg className='icon' aria-hidden='true' aria-label='Search'><use xlinkHref='svg/icons.svg#search' /></svg></button>
              </div>
          </nav>
      </header>

)

export default Header
