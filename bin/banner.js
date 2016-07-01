const shell = require("shelljs"),
      {description, homepage, license, name, version} = JSON.parse(shell.cat("package.json"));

module.exports = `/*
  ${name} v${version}
  ${description}
  Copyright (c) 2016 D3plus - ${homepage}
  @license ${license}
*/`;
