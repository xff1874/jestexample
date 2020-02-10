import React, { Component } from 'react';
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import TodoList from "../src/react-todo-list";
import { Button } from 'antd';


//预处理

const setup = () => {
    const props = {
        list: ['first', 'second'],
      deleteTodo: jest.fn()
    }
    const sWrapper = shallow(<TodoList {...props} />)
    const mWrapper = mount(<TodoList {...props} />)
    return {
      props,
      sWrapper,
      mWrapper
    }
  }


describe('todolist', () => {
  const { sWrapper, mWrapper, props } = setup()

  it("找到antd的Button组件", () => {
    expect(sWrapper.find('Button').length).toBe(2)
  })

  
})

