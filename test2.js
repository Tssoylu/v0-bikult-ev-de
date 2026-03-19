const fs = require("fs"); const t = fs.readFileSync("test.html", "utf8"); const m = t.match(/https?:\/\/[a-zA-Z0-9.\/\-\_]+(?:\.png|\.jpg|\.jpeg)/gi); if(m) console.log([...new Set(m)]);
