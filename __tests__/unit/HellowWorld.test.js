import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

// 自己写，不够灵活，不够全面
describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", async () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, { // 浅渲染，不考虑子组件； mount当前组件，子组件都渲染【集成测试使用】
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);// 类似jqery的方式使用
    expect(wrapper.findAll('.mmm').length).toBe(1);// 类似jqery的方式使用
    await wrapper.setProps({ msg: 'bar66' }); // 修改之后，必须是异步操作
    expect(wrapper.props('msg')).toEqual('bar66');// 类似jqery的方式使用
  });

  // 快照测试
  // 可以生成一个快照文件 HellowWorld.test.js.snap
  // 优点：组件的ui层变化可以一览无余
  it('组件渲染正常', () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, { // 浅渲染，不考虑子组件； mount当前组件，子组件都渲染【集成测试使用】
      propsData: { msg },
    });
    expect(wrapper).toMatchSnapshot();
  })
});

