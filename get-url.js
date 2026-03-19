const fs = require("fs"); 
const text = fs.readFileSync("test.html", "utf8");
const matches = text.match(/https?:\/\/[a-zA-Z0-9.\/\-_]+(png|jpg|jpeg|svg|webp)/g);
if (matches) {
  const unique = [...new Set(matches)];
  console.log(unique.filter(u => u.toLowerCase().includes("logo") || u.toLowerCase().includes("bikult")));
}
