import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Home from '../Home';
import store from '../Redux/store';

test('Home match snapshot', () => {
  const tree = renderer.create(<Provider store={store}><Home /></Provider>);
  expect(tree).toMatchSnapshot();
});
