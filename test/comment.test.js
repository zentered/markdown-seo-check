/* eslint-disable node/no-unsupported-features/es-syntax */
import comment from '../src/comment.mjs'

test('comment() should create a github issue comment', () => {
  const actual = comment([
    { file: 'test.md', ok: true },
    {
      file: 'err.md',
      ok: false,
      errors: [
        {
          title: 'testTitle',
          attribute: 'testAttr',
          actual: 10,
          expected: 5
        }
      ]
    }
  ])
  expect(actual).toContain(':white_check_mark:')
  expect(actual).toContain(':small_red_triangle:')
})
