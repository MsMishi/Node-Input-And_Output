const fs = require('fs')
const reverseIt = fs.readFileSync('/dev/stdin')
  .toString()
  .split('')
  .reverse()
  .join('')
process.stdout.write(reverseIt)
