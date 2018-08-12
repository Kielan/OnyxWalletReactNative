'use strict'
import userReducer from '../../js/store/reducers/user'
import * as actions from '../actions/posts/getPost'
import { UPDATE_POST_SUCCESS } from '../actions/posts/updatePost'
import expect from 'expect'
import { loginMockData } from '../mocks/loginMockData'

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle LOGIN_REQUEST', () => {
    const startAction = {
      type: actions.LOGIN_REQUEST
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(userReducer({}, startAction)).toEqual({})
  })

  it('should handle LOGIN_SUCCESS', () => {
    const successAction = {
      type: actions.LOGIN_SUCCESS,
      post: getPostMock.data, // important to pass correct payload, that's what the tests are for ;)
    }
    expect(userReducer({}, successAction)).toEqual(getPostMock.data)
  })

  it('should handle UPDATE_POST_SUCCESS', () => {
    const updateAction = {
      type: UPDATE_POST_SUCCESS,
      post: getPostMock.data,
    };
    expect(reducer({}, updateAction)).toEqual(loginMockData.data)
  })
})
