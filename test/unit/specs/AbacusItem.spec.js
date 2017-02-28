import Vue from 'vue'
import AbacusItem from 'src/components/AbacusItem.js'

describe('AbacusItem.js', ()=> {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><div><ul></AbacusItem></ul></div></div>',
      components: { AbacusItem }
    }).$mount()
    expect(vm.$el.querySelector('.ab-item h6').textContent).toBe('test')
  })
})
