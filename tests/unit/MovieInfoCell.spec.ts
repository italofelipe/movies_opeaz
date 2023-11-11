import { mount } from '@vue/test-utils';
import MovieInfoComponentCell from '@/components/MovieInfoCell/MovieInfoCell.vue';

describe('MovieInfoComponent', () => {
  it('renders attribute and value', async () => {
    const attribute = 'Release Year';
    const value = '2022';

    const wrapper = mount(MovieInfoComponentCell, {
      propsData: { attribute, value }
    });

    expect(wrapper.exists()).toBe(true);

    expect(wrapper.find('.font-weight-bold').text()).toBe(`${attribute}:`);
    expect(wrapper.find('.info-wrapper-value').text()).toBe(value);

    wrapper.destroy();
  });
});
