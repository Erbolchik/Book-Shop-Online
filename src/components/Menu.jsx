import { Menu, Popup, List, Button, Image } from 'semantic-ui-react'
import React from 'react'


const CartComponent = ({ title, image, id, removeFromCart }) => (
    <List selection divided verticalAlign="middle">
        <List.Item>
            <List.Content floated="right">
                <Button onClick={removeFromCart.bind(this,id)} color='red'>Удалить</Button>
            </List.Content>
            <Image avatar src={image} />
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
)

const MenuComponent = ({ totalPrice, count, items }) => (
    <Menu>
        <Menu.Item
            name='title'>
            Магазин книг
         </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item
                name='totalPrice'>
                Итого: &nbsp; <b> {totalPrice}</b>&nbsp;тг
            </Menu.Item>
            <Popup
                trigger={
                    <Menu.Item name='cart'> Корзина (<b> {count} </b>)</Menu.Item>
                }
                content={items.map(book => <CartComponent {...book} />)}
                on="click"
                hideOnScroll
            />
        </Menu.Menu>
    </Menu>
)

export default MenuComponent
