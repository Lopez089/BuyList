import React from 'react'
import { storiesOf } from '@storybook/react'
import ItemArticulo from './itemArticulo'

export const itemAllList = {
  Product: 'Tomate',
  State: 'AllList'
}

export const itemAllListBuyList = {
  Product: 'Patata',
  State: 'buyList'
}

export const itemBuyList = {
  Product: 'Zanahorias',
  State: 'buyList'
}

storiesOf('Item Articulos', module)
  .addDecorator((story) => <div style={{ padding: '3rem 15rem' }}>{story()}</div>)
  .add('All list', () => (
    <ItemArticulo typeList='AllList' Product={itemAllList.Product} State={itemAllList.State} />
  ))
  .add('All list buy list', () => (
    <ItemArticulo
      typeList='AllList'
      Product={itemAllListBuyList.Product}
      State={itemAllListBuyList.State}
    />
  ))
  .add('All buy list', () => (
    <ItemArticulo typeList='BuyList' Product={itemBuyList.Product} State={itemBuyList.State} />
  ))
