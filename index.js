
if (process.env.NODE_ENV === "production") {
  module.exports =  require("./dist/datetime.lib.min.js");
} else {
  module.exports =  require("./dist/datetime.lib.js");
}

