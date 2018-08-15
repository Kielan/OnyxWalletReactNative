'use strict'
import userReducer from '../../js/store/reducers/user'
import * as actions from '../actions/posts/getPost'
import { UPDATE_POST_SUCCESS } from '../actions/posts/updatePost'
import expect from 'expect'
import { loginMockData } from '../mocks/loginMockData'

it('should push to the new screen', () => {
  const store = mockStore({
    rehydrated: false,
  });
  const navigation = { navigate: jest.fn() };

  expect(renderer.create(<Loading store={store} navigation={navigation} />)).toMatchSnapshot();
})
