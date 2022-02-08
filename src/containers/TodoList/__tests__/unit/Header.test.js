import { shallowMount } from "@vue/test-utils";
import Header from "../../components/Header.vue";
import { findTestWrapper } from '@/utils/testUtils.js'

describe('Header 组件', () => {
  it('样式发生改变，需做提示', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper).toMatchSnapshot();
  })

  it('输入框存在', () => {
    const wrapper = shallowMount(Header);
    const input = findTestWrapper(wrapper, 'input');
    expect(input.exists()).toBe(true);
  })

  it('输入框初始值内容为空', () => {
    const wrapper = shallowMount(Header);
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe('');
  })

  it('输入框值发生变化，数据应该跟着变', () => {
    const wrapper = shallowMount(Header);
    const input = findTestWrapper(wrapper, 'input');
    input.setValue('dell lee');
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe('dell lee');
  })

  it('输入框输入回车，无内容，无反应', () => {
    const wrapper = shallowMount(Header);
    const input = findTestWrapper(wrapper, 'input');
    input.setValue('');
    input.trigger('keyup.enter');
    expect(wrapper.emitted().add).toBeFalsy();
  })

  it('输入框输入回车时，有内容时，向外触发事件, 同时清空输入框内容', () => {
    const wrapper = shallowMount(Header);
    const input = findTestWrapper(wrapper, 'input').at(0);
    input.setValue('has content');
    input.trigger('keyup.enter');
    expect(wrapper.emitted().add).toBeTruthy();
    expect(wrapper.vm.$data.inputValue).toBe('');
  })
});






