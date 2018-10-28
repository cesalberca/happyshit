import { browser } from 'webextension-polyfill-ts'

browser.runtime.onInstalled.addListener(() => {
  browser.storage.sync.set({ color: '#3aa757' }).then(() => {
    console.log('The color is green.')
  })
})
