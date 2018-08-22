'use strict'

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it(':ios: shows splash screen and then login', async () => {
  //  await elementById(testIDs.COMPLEX_LAYOUT_BUTTON).tap()
  //  await elementById(testIDs.EXTERNAL_COMPONENT_IN_STACK).tap()
    await expect(element(by.label('animateLoginLabel'))).toBeVisible()
  })
})
