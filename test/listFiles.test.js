/* eslint-disable node/no-unsupported-features/es-syntax */
import listFiles from '../src/listFiles.mjs'

jest.mock('@actions/core', () => {
  return {
    getInput: jest
      .fn()
      .mockReturnValueOnce('{*.md,*.mdx}')
      .mockReturnValueOnce('*exclude*')
  }
})

jest.mock('../src/getFile.mjs', () => {
  return jest.fn().mockResolvedValue({
    name: 'test.md',
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
        rest: {
          pulls: {
            listFiles: jest.fn().mockImplementation(() => {
              return {
                data: [
                  {
                    filename: '/exclude/index.md',
                    raw_url: 'https://github.com/test/test/raw/123/exclude.md'
                  },
                  {
                    filename: 'test.md',
                    raw_url: 'https://github.com/test/test/raw/123/test.md'
                  },
                  {
                    filename: '/include/index.mdx',
                    raw_url: 'https://github.com/test/test/raw/123/index.mdx'
                  },
                  {
                    filename: '/include/blog.md',
                    raw_url: 'https://github.com/test/test/raw/123/blog.md'
                  }
                ]
              }
            })
          }
        }
      }
    })
  }
})

test('listFiles() should get the list of changed markdown files in a PR', async () => {
  const files = await listFiles()
  expect(files).toHaveLength(3)
  expect(files[0]).toEqual({ content: 'hello', name: 'test.md' })
})
