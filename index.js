const fs = require("fs-extra")

function reportJSON({ specs, reporterConfig, log }) {
  const specType = reporterConfig.depth && reporterConfig.depth.toLowerCase() === "grouped"
    ? "groupedSpecs"
    : "flatSpecs"

  fs.outputFileSync(reporterConfig.output, JSON.stringify(specs[specType], null, "  "))

  log.infoValue("JSON Report", reporterConfig.output)

  return specs
}

module.exports = {
	result: reportJSON
}
