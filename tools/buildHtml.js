import fs from "fs";
import cheerio from "cheerio";
import color from "colors";

fs.readFile("src/index.html", "utf8", (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup); // in jQuery we don't need to do this because it operates on the one, baked-in DOM

  $("head").prepend("<link rel='stylesheet' href='styles.css'>");

  fs.writeFile("dist/index.html", $.html(), "utf8", (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("index.html written to /dist".green);
  });
});
