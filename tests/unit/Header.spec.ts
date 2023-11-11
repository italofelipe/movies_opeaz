import { mount, createLocalVue, Wrapper } from '@vue/test-utils';
import Vuex from 'vuex';
import HeaderComponent from '@/components/Header/Header.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('HeaderComponent', () => {
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      actions: {
        fetchData: jest.fn()
      }
    });

    wrapper = mount(HeaderComponent, {
      localVue,
      store
    });
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('initializes with empty inputValue', () => {
    expect(wrapper.vm.inputValue).toBe('');
  });

  it('resets inputValue to an empty string after calling searchMovie', async () => {
    await wrapper.setData({ inputValue: 'Inception' });
    await wrapper.vm.searchMovie();

    expect(wrapper.vm.inputValue).toBe('');
  });
});
