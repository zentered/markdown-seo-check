<p align="center">
  <img src="res/markdowncheck.png">
</p>

<p align="center">
  <a href="https://github.com/zentered/markdown-seo-check/actions/workflows/seocheck.yml"><img alt="Workflow Integration Test status" src="https://github.com/zentered/markdown-seo-check/actions/workflows/seocheck.yml/badge.svg"></a>
  <a href="https://github.com/zentered/markdown-seo-check/actions/workflows/test.yml"><img alt="Unit Test status" src="https://github.com/zentered/markdown-seo-check/actions/workflows/test.yml/badge.svg"></a>
  <a href="https://github.com/zentered/markdown-seo-check/actions/workflows/publish.yml"><img alt="Unit Test status" src="https://github.com/zentered/markdown-seo-check/actions/workflows/publish.yml/badge.svg"></a>
  <a href="https://semantic-release.gitbook.io/semantic-release/"><img alt="Semantic Release bagde" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg"></a>
  <a href="https://zentered.co"><img alt="Semantic Release bagde" src="https://img.shields.io/badge/>-Zentered-lightgrey?style=flat"></a>
</p>

# Markdown SEO Check

Validate markdown files with SEO best practices. Creates a pull request comment and fails if conditions are not met.

## Table of Contents

- [Usage](#usage)
- [Inputs](#inputs)
- [Outputs](#outputs)

## Usage

```yaml
- name: Markdown SEO Check
  uses: zentered/markdown-seo-check@v1.0.0
  with:
    max_title_length: 70
    max_description_length: 150
    max_slug_length: 100
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Inputs

| Name                     | Requirement | Default | Description                   |
| ------------------------ | ----------- | ------- | ----------------------------- |
| `max_title_length`       | required    | 70      | Maximum length of page title  |
| `max_description_length` | required    | 150     | Maximum length of description |
| `max_slug_length`        | required    | 100     | Maximum length of slug        |

## Outputs

![screenshot of github comment](res/output.png)

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md).

## License

See [LICENSE](LICENSE).
