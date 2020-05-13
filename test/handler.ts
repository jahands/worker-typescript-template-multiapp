import { expect } from 'chai'
import { handleExample } from '../src/apps/example/example'

describe('handler returns response with request method', () => {
  const methods = [
    'GET',
    'HEAD',
    'POST',
    'PUT',
    'DELETE',
    'CONNECT',
    'OPTIONS',
    'TRACE',
    'PATCH',
  ]
  methods.forEach(method => {
    it(method, async () => {
      let event = new FetchEvent('fetch', { request: (new Request('/', { method })) })
      const result = await handleExample(event)
      const text = await result.text()
      expect(text).to.include(method)
    })
  })
})
