const fs = require("fs-extra")

function reportJSON({ specs, reporterConfig, log, chalk }) {
  const specType = reporterConfig.depth && reporterConfig.depth.toLowerCase() === "grouped"
    ? "groupedSpecs"
    : "flatSpecs"

  fs.outputFileSync(reporterConfig.output, JSON.stringify(specs[specType], null, "  "))

  log.log(`   ${chalk.blue("JSON Report:")} ${reporterConfig.output}`)

  return specs
}

module.exports = reportJSON
