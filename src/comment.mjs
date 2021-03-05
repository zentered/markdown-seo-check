export default function comment(results) {
  let str = ''
  results.forEach((r) => {
    str += `\n${r.ok ? ':white_check_mark:' : ':x:'}: ${r.file}`
    if (r.errors) {
      r.errors.map((e) => {
        str += `\n- :small_red_triangle: **${e.title}**: _${e.attribute}_ has **${e.actual}** characters. Should be less than **${e.expected}**`
      })
      str += '\n\n'
    }
  })
  return str.toString()
}
