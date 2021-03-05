import core from '@actions/core'
import matter from 'gray-matter'

function fails(frontmatter, elem, condition) {
  if (!frontmatter.data[elem]) {
    return true
  } else if (frontmatter.data[elem].length <= 0) {
    return true
  } else if (frontmatter.data[elem].length > condition) {
    return true
  }
}

export default function check(file) {
  const errors = []
  const conditions = []
  conditions.push({
    title: 'maxTitleLength',
    attribute: 'title',
    value: parseInt(core.getInput('max_title_length'))
  })
  conditions.push({
    title: 'maxDescriptionLength',
    attribute: 'description',
    value: parseInt(core.getInput('max_description_length'))
  })
  conditions.push({
    title: 'maxSlugLength',
    attribute: 'slug',
    value: parseInt(core.getInput('max_slug_length'))
  })

  const frontmatter = matter(file.content)

  if (
    !frontmatter ||
    !frontmatter.data ||
    Object.keys(frontmatter.data).length <= 0
  ) {
    core.info(`No valid frontmatter in ${file.name}`)
    return {
      file: file.name,
      ok: false
    }
  }

  for (const condition of conditions) {
    if (fails(frontmatter, condition.attribute, condition.value)) {
      const actual = frontmatter.data[condition.attribute]
        ? frontmatter.data[condition.attribute].length
        : 0
      errors.push({
        title: condition.title,
        attribute: condition.attribute,
        expected: condition.value,
        actual: actual
      })
    }
  }

  if (errors.length > 0) {
    return {
      file: file.name,
      ok: false,
      errors: errors
    }
  } else {
    return {
      file: file.name,
      ok: true
    }
  }
}
