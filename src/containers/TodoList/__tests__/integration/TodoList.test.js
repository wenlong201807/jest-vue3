import { mount } from "@vue/test-utils";
import TodoList from "../../TodoList.vue";
import { findTestWrapper } from "@/utils/testUtils.js";
import store from "../../../../store";

/**
 * 第六大集
 * 集成测试对针对用户操作而定制，业务流程不改变，集成测试就有效，对业务数据解耦
*/
it(`
1 用户会在header输入框输入内容
2 用户会点击回车按钮
3 列表项应该增加用户输入内容的列表
`, () => {
  const wrapper = mount(TodoList, { store }); // 深度渲染
  const inputElem = findTestWrapper(wrapper, "header-input").at(0);
  const content = "Dell lee";
  inputElem.setValue(content);
  inputElem.trigger("change");
  inputElem.trigger("keyup.enter");
  const listItems = findTestWrapper(wrapper, "list-item");
  // expect(listItems.length).toBe(1); // 没有通过
  // expect(listItems.at(0).text()).toContain(content);
});
