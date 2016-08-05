import webpack from "webpack";
import webpackProdConfig from "../webpack.config.prod.js";
import colors from "colors";

process.env.NODE_ENV = "production";

console.log("Generating minified bundle for production via Webpack. This will take a moment...");

webpack(webpackProdConfig).run((err, stats) => {
  if (err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log("Webpack genereted the following warnings: ".bold.yellow);
    jsonStats.warnings.map(warn => console.log(warn.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  //if we got this far, the build succeeded.
  console.log("Your app has been compiled in production mode and written to /dist. It's ready to roll".green);

  return 0;
});
