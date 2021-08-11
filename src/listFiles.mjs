import core from '@actions/core'
import github from '@actions/github'
import getFile from './getFile.mjs'
import globToRegExp from 'glob-to-regexp'

export default async function files() {
  const context = github.context
  const pullNumber = context.payload.pull_request.number
  const includes = core.getInput('includes')
  const excludes = core.getInput('excludes')

  const octokit = github.getOctokit(process.env.GITHUB_TOKEN)
  const { data: list } = await octokit.rest.pulls.listFiles({
    ...context.repo,
    pull_number: pullNumber
  })

  const mdx = list.filter((f) => {
    const reIncluded = globToRegExp(includes, { extended: true })
    const reExcluded = globToRegExp(excludes, { extended: true })

    return (
      reIncluded.test(f.filename) === true &&
      reExcluded.test(f.filename) === false
    )
  })

  const filePromises = mdx.map(getFile)
  return Promise.all(filePromises)
}
