/* eslint-disable node/no-unsupported-features/es-syntax */
import check from '../src/seocheck.mjs'

jest.mock('@actions/core', () => {
  return {
    getInput: jest.fn().mockReturnValue('10')
  }
})

const validMd = `---
title: hello
description: world
slug: hello
---

content`

const errMd = `---
title: this is too long for this test
description: event longer description that will err
slug: much-too-long-indeed
---

content`

const toml = `+++
title = "hello"
description = "world"
slug = "hello"
+++

content`

test('check() should validate seo requirements', () => {
  const actual = check({ name: 'test.md', content: validMd })
  expect(actual).toEqual({ file: 'test.md', ok: true })
})

test('check() work with TOML', () => {
  const actual = check({ name: 'toml.md', content: toml })
  expect(actual).toEqual({ file: 'toml.md', ok: true })
})

test('check() should error on missing seo requirements', () => {
  const actual = check({ name: 'test.md', content: errMd })
  expect(actual).toEqual({
    file: 'test.md',
    ok: false,
    errors: [
      {
        title: 'maxTitleLength',
        attribute: 'title',
        expected: 10,
        actual: 30
      },
      {
        title: 'maxDescriptionLength',
        attribute: 'description',
        expected: 10,
        actual: 38
      },
      {
        title: 'maxSlugLength',
        attribute: 'slug',
        expected: 10,
        actual: 20
      }
    ]
  })
})
