/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ContentList from './contentList'
import { ArticleList } from './contentList.stories'

configure({ adapter: new Adapter() })
describe('All list', () => {
  const wrapper = mount(
    <ContentList typeList='AllList' titleList='All List' articleList={ArticleList} />
  )
  it("have a title 'All list'", () => {
    expect(wrapper.find('p').at(0).text()).toEqual('All List')
  })
  it('Render all the elements of my array', () => {
    const ArticleSize = ArticleList.length
    expect(wrapper.find('ul').children()).toHaveLength(ArticleSize)
  })
  it('The elements that are in buyList do not appear with the state AllListBuyList', () => {
    // nungun elemnto de la lista puede tener fa-times
    const nodos = wrapper.find('svg').map((nodo) => nodo.exists('.fa-times'))
    expect(nodos).not.toContain(true)
  })
  it('at the end appear the items that are in the buy list', () => {
    const lengthFilterArticleBuyList = ArticleList.filter(
      (article) => article.State === 'buyList'
    ).length
    const lengthArticles = ArticleList.length
    // comprobar si mis X ultimos productos tiene el icono que tien que tener
    const lastArticleList = wrapper
      .find('li')
      .slice(lengthArticles - lengthFilterArticleBuyList, lengthArticles)
    const nodos = lastArticleList.map((nodo) => nodo.exists('.bg-light'))

    expect(nodos).not.toContain(false)
  })
})

describe('Buy List', () => {
  const wrapper = mount(
    <ContentList titleList='Lista Compra' typeList='BuyList' articleList={ArticleList} />
  )
  it('have a title Lista Compra', () => {
    expect(wrapper.find('p').at(0).text()).toEqual('Lista Compra')
  })
  it('alone show the element what is in the Buy list', () => {
    // iterar sobre todos los elemento y que ninguno sea diferente a = svg fa-times
    const nodos = wrapper
      .find('div')
      .filter('.text-danger')
      .map((nodo) => nodo.find('svg').exists('.fa-times'))
    expect(nodos).not.toContain(false)
  })
  it('Show all product buy list', () => {
    const buyListSize = ArticleList.filter((article) => article.State === 'buyList').length
    expect(wrapper.find('li')).toHaveLength(buyListSize)
  })
})
