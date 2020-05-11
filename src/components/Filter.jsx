import React from 'react'
import { Menu, Input } from 'semantic-ui-react'

const Filter = ({ setFilter, filterBy, searchQuery,setSearchQuery}) => {

  return (
    <Menu Menu>
      <Menu.Item
        active={filterBy === 'all'}
        onClick={() => setFilter('all')}
      >Все</Menu.Item>
      <Menu.Item
        active={filterBy === 'price_high'}
        onClick={() => setFilter('price_high')}
      >Цена(Дорогие)</Menu.Item>
      <Menu.Item
        active={filterBy === 'price_low'}
        onClick={() => setFilter('price_low')}
      >Цена(Дешевые)</Menu.Item>
      <Menu.Item
        active={filterBy === 'author'}
        onClick={() => setFilter('author')}
      >Автор</Menu.Item>
      <Menu.Item>
        <Input icon="search"
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Поиск по книгам..." />
      </Menu.Item>
    </Menu>
  )
}



export default Filter