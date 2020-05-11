import { Menu } from 'semantic-ui-react'
import React from 'react'



const MenuComponent = () => (
    <Menu>
        <Menu.Item
            name='browse'
        >
            Магазин книг
    </Menu.Item>

        <Menu.Item
            name='submit'
        >
            Итого <b> 0 </b>тг
    </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item
                name='signup'
            >
                Корзина <b> 0 </b>тг
      </Menu.Item>

        </Menu.Menu>
    </Menu>
)

export default MenuComponent
