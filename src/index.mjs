import core from '@actions/core'
import github from '@actions/github'
import checkMarkdownFile from './seocheck.mjs'
import listFiles from './listFiles.mjs'
import comment from './comment.mjs'

async function run() {
  const octokit = github.getOctokit(process.env.GITHUB_TOKEN)
  const context = github.context
  let hasErrors = false

  try {
    core.info(`Starting Markdown SEO Check ...`)
    const files = await listFiles()
    core.info('files')
    core.info(files)
    const results = files.map(checkMarkdownFile).filter((i) => i.file)
    core.info('results')
    core.info(results)
    hasErrors = results.filter((r) => r.errors && r.errors.length > 0)
    const message = comment(results)
    core.info('message')
    core.info(message)
    if (message && message.length > 0) {
      await octokit.issues.createComment({
        ...context.repo,
        issue_number: context.payload.number,
        body: `SEO Check: \n\n${message}`
      })
    }

    if (hasErrors && hasErrors.length > 0) {
      core.warning(hasErrors)
      core.setFailed('Check failed.')
    }
  } catch (error) {
    core.error(error)
    core.setFailed(error.message)
  }
}

run()
