import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const root = document.createElement('div');
    root.className = 'root';
    document.body.appendChild(root);
    new Vue({
      render: (h) =>
        h(HelloWorld, {
          props: {
            mag: 'dell lee'
          }
        })
    }).$mount('.root');
    console.info(document.body.innerHTML);
  });
});

// import { shallowMount } from "@vue/test-utils";
// const msg = "new message";
// const wrapper = shallowMount(HelloWorld, {
//   propsData: { msg },
// });
// expect(wrapper.text()).toMatch(msg);
