'use strict'

const initialState = {
  months: {
    icon: { id: 'date', label: 'Data' },
    label: 'Escolha um mês',
    options: [
      { text: 'Escolha um mês', value: '' },
      { text: 'Janeiro', value: 'Janeiro' },
      { text: 'Fevereiro', value: 'Fevereiro' },
      { text: 'Março', value: 'Março' }
    ]
  },

  state: {
    icon: { id: 'location', label: 'Estado' },
    label: 'Escolha um estado',
    options: [
      { text: 'Escolha um estado', value: '' },
      { text: 'São Paulo', value: 'São Paulo' },
      { text: 'Acre', value: 'Acre' },
      { text: 'Paraná', value: 'Paraná' }
    ]
  },

  searchField: ''
}

const filter = (state = initialState, action) => {
  return state
}

export default filter
