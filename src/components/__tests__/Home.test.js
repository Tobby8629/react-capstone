import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../Redux/store';
import Home from '../Home';

test('Home match snapshot', () => {
  const tree = renderer.create(<Provider store={store}><Home /></Provider>);
  expect(tree).toMatchSnapshot();
});
