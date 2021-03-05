import github from '@actions/github'
import getFile from './getFile.mjs'

export default async function files() {
  const context = github.context
  const pullNumber = context.payload.pull_request.number

  const octokit = github.getOctokit(process.env.GITHUB_TOKEN)
  const { data: list } = await octokit.pulls.listFiles({
    ...context.repo,
    pull_number: pullNumber
  })

  const mdx = list.filter(
    (f) => f.filename.endsWith('.md') || f.filename.endsWith('.mdx')
  )
  const filePromises = mdx.map(getFile)
  return Promise.all(filePromises)
}
