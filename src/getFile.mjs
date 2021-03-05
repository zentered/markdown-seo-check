import fetch from 'node-fetch'

function getErrorText(res) {
  try {
    return res.text()
  } catch (err) {
    return res.statusText
  }
}

async function getError(res, path) {
  const errorText = await getErrorText(res)
  const error = new Error(
    `GitHub raw download error (${path} - ${res.status}): ${errorText}`
  )

  error.status = res.status
  error.headers = res.headers.raw()

  return error
}

async function getRawFileFromGitHub(rawUrl) {
  const options = {}
  if (process.env.GITHUB_TOKEN) {
    options.headers = {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    }
  }
  const res = await fetch(rawUrl, options)
  if (res.ok) return res.text()
  throw await getError(res, rawUrl)
}

export default async function getFile(file) {
  let rawUrl = file.raw_url.replace(
    'https://github.com',
    'https://raw.githubusercontent.com'
  )
  rawUrl = rawUrl.replace('/raw/', '/')

  return {
    name: file.filename,
    content: await getRawFileFromGitHub(rawUrl)
  }
}
