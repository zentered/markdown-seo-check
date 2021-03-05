/* eslint-disable node/no-unsupported-features/es-syntax */
import listFiles from '../src/listFiles.mjs'

jest.mock('../src/getFile.mjs', () => {
  return jest.fn().mockResolvedValue({
    name: 'test.mdx',
    content: 'hello'
  })
})
jest.mock('@actions/github', () => {
  return {
    context: {
      payload: {
        pull_request: {
          number: 1
        }
      }
    },
    getOctokit: jest.fn().mockImplementation(() => {
      return {
        pulls: {
          listFiles: jest.fn().mockImplementation(() => {
            return {
              data: [
                {
                  filename: 'test.mdx',
                  raw_url: 'https://github.com/test/test/raw/123/test.md'
                }
              ]
            }
          })
        }
      }
    })
  }
})

test('listFiles() should get the list of changed markdown files in a PR', async () => {
  const files = await listFiles()
  expect(files).toEqual([{ content: 'hello', name: 'test.mdx' }])
})
