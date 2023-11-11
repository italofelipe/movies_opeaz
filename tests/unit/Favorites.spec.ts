import { mount, createLocalVue } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import Favorites from '@/components/Favorites/Favorites.vue';
import { Movie } from '@/types';
import favoriteMovies from '../mocks/mock';

const localVue = createLocalVue();

localVue.use(Vuex);
describe('Favorites.vue', () => {
  let wrapper;
  let store: Store<{
    errorFetchingData: boolean;
    favoriteMovies: Movie[];
    isLoading: boolean;
    selectedMovie: Movie | null;
    isAlertVisible: boolean;
  }>;

  beforeEach(() => {
    store = new Vuex.Store({
      getters: {
        getFavoriteMovies: () => favoriteMovies
      },
      mutations: {
        setSelectedMovieByImdbId: jest.fn()
      }
    });
  });

  it('renders the component', () => {
    wrapper = mount(Favorites, {
      store,
      localVue
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('The component renders a carousel of favorite movies', () => {
    wrapper = mount(Favorites, {
      store,
      localVue
    });

    // Assert
    expect(wrapper.find('.flicking-panel').exists()).toBe(true);
    expect(wrapper.findAll('.flicking-panel')).toHaveLength(2);
  });
});
