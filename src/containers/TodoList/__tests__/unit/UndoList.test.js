import { shallowMount } from "@vue/test-utils";
import UndoList from "../../components/UndoList.vue";
import { findTestWrapper } from '@/utils/testUtils.js'

describe('UndoList 组件', () => {
  it('list 参数为[], count值应该为0，且列表无内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [] }
    });
    const countElem = findTestWrapper(wrapper, 'count');
    const listItems = findTestWrapper(wrapper, 'item');
    expect(countElem.at(0).text()).toEqual('0');
    expect(listItems.length).toEqual(0);
  })

  it('list 参数为[1, 2, 3], count值应该为3，且列表无内容, 切存在删除按钮', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [
        { status: "div", value: 1 },
        { status: "div", value: 2 },
        { status: "div", value: 3 },
      ] }
    });
    const countElem = findTestWrapper(wrapper, 'count');
    const listItems = findTestWrapper(wrapper, 'item');
    const deleteButtons = findTestWrapper(wrapper, 'delete-button');
    expect(countElem.at(0).text()).toEqual('3');
    expect(listItems.length).toEqual(3);
    expect(deleteButtons.length).toEqual(3);
  })

  it('list 删除按钮被点击时，向外触发删除事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [
        { status: "div", value: 1 },
        { status: "div", value: 2 },
        { status: "div", value: 3 },
      ] }
    });
    const deleteButton = findTestWrapper(wrapper, 'delete-button').at(1);
    deleteButton.trigger('click');
    expect(wrapper.emitted().delete).toBeTruthy();
    expect(wrapper.emitted().delete[0][0]).toBe(1);
  })

  it('list 列表项被点击，向外触发 status 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [
        { status: "div", value: 1 },
        { status: "div", value: 2 },
        { status: "div", value: 3 },
      ] }
    });
    const deleteButton = findTestWrapper(wrapper, 'item').at(1);
    deleteButton.trigger('click');
    expect(wrapper.emitted().status).toBeTruthy();
    expect(wrapper.emitted().status[0][0]).toBe(1);
  })

  it('list 列表项显示一个输入框，两个正常列表内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [
        { status: "div", value: 1 },
        { status: "input", value: 2 },
        { status: "div", value: 3 },
      ] }
    });
    const input = findTestWrapper(wrapper, 'input');
    expect(input.at(0).element.value).toBe('2');
    expect(input.length).toEqual(1);
  })

  it('输入框失去焦点时，向外触发 reset 事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [
        { status: "div", value: 1 },
        { status: "input", value: 2 },
        { status: "div", value: 3 },
      ] }
    });
    const inputElem = findTestWrapper(wrapper, 'input').at(0);
    inputElem.trigger('blur');
    expect(wrapper.emitted().reset).toBeTruthy();
  })

  it('输入框变化时，向外触发 change 事件，更新输入框值', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [
        { status: "div", value: 1 },
        { status: "input", value: 2 },
        { status: "div", value: 3 },
      ] }
    });
    const inputElem = findTestWrapper(wrapper, 'input');
    inputElem.trigger('change', {
      value: '2',// div 变成 input的一瞬间的变化，不是修改内容的变化，注意区分
      index: 1,
    });
    expect(wrapper.emitted().change).toBeTruthy();
    console.log('888:', wrapper.emitted().change)
    expect(wrapper.emitted().change[0][0]).toEqual({
      value: '2', // 数据类型应为输入框原因改变了！！！
      index: 1,
    });
  })
});







