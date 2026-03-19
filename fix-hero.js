const fs = require("fs"); 
const glob = [
  "app/projekte/deutsches-kinderhilfswerk/page.tsx", 
  "app/projekte/auf-leben/page.tsx", 
  "app/projekte/mia-frauen/page.tsx", 
  "app/projekte/komm-an-nrw/page.tsx", 
  "app/projekte/mia-maenner/page.tsx", 
  "app/projekte/zukunftpaket-2023/page.tsx", 
  "app/sprachkurse/deutsch-als-fremdsprache/page.tsx", 
  "app/sprachkurse/englisch/page.tsx", 
  "app/sprachkurse/tuerkisch/page.tsx"
];
glob.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, "utf8");
    content = content.replace(/<PageHero[\s\S]*?\/>/g, function(match) {
      let m = match.replace(/description=/g, "subtitle=");
      m = m.replace(/breadcrumbs=\{[\s\S]*?\}/g, ""); 
      m = m.replace(/,\s*}/g, "}");
      return m;
    });
    fs.writeFileSync(f, content);
  }
});
