import { mount } from "@vue/test-utils";
import TodoList from "../../TodoList.vue";
import { findTestWrapper } from "@/utils/testUtils.js";
import store from "../../../../store";

// 每个it都会调用一次，类似初始化
beforeEach(() => {
  jest.useFakeTimers() // 如果有异步时间，测试用例使用jest的模拟时间，缩短时间
})
/**
 * 第六大集
 * 集成测试对针对用户操作而定制，业务流程不改变，集成测试就有效，对业务数据解耦
*/
// 失败
// it(`
// 1 用户会在header输入框输入内容
// 2 用户会点击回车按钮
// 3 列表项应该增加用户输入内容的列表
// `, () => {
//   const wrapper = mount(TodoList, { store }); // 深度渲染
//   const inputElem = findTestWrapper(wrapper, "header-input").at(0);
//   const content = "Dell lee";
//   inputElem.setValue(content);
//   inputElem.trigger("change");
//   // inputElem.trigger("input");
//   inputElem.trigger("keyup.enter");
//   // console.log(inputElem) // Wrapper { selector: '[data-test="header-input"]' }
//   const listItems = findTestWrapper(wrapper, "list-item");
//   // console.log(listItems.length) // 0
//   // expect(listItems.length).toBe(1); // 没有通过
//   // expect(listItems.at(0).text()).toContain(content); // 没有通过
//   // expect(input.at(0).element.value).toBe('2');
//   // expect(listItems.length).toEqual(1);
// });

// 异步测试 失败
/**
 * 测试时，会自动查找最近的__mock__ 目录 axios.js 文件
 * 1 使用远程接口，速度慢，未必已经开发好
 * 2 超过 5s 的测试用例通不过
*/
// it(`
// 1 用户进入页面时，请求远程数据
// 3 列表应该展示远程返回的数据
// `, () => {
//   const wrapper = mount(TodoList, { store }); // 深度渲染

//   wrapper.vm.$nextTick(() => {
//     const listItems = findTestWrapper(wrapper, "list-item");
//     // console.log(77, listItems, listItems.length)
//     expect(listItems.length).toBe(2);
//   })
// });

// 定时器的 失败
it(`
1 用户进入页面时，等待 5s
3 列表应该展示远程返回的数据
`, () => {
  const wrapper = mount(TodoList, { store }); //

  expect(setTimeout).toHaveBeenCalledTimes(1); // 自动调用jest的狗子
  jest.runAllTimers() // 配合上面的一块使用

  // setTimeout(() => {
  //   const listItems = findTestWrapper(wrapper, "list-item");
  //   // console.log(77, listItems, listItems.length)
  //   expect(listItems.length).toBe(2);
  //   done()
  // }, 4500)

    wrapper.vm.$nextTick(() => {
    const listItems = findTestWrapper(wrapper, "list-item");
    console.log(77, listItems, listItems.length)
    expect(listItems.length).toBe(2);
  })
});
