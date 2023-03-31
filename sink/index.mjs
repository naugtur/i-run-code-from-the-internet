import { spawnSync } from "child_process";
import { createServer } from "http";

createServer((req, res) => {
  const payload = req.url.slice(1);
  console.log("payload", payload);
  spawnSync("zenity", ["--error", `--text=${payload}`, "--title=PWND!"], {
    stdio: "inherit",
  });
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end();
}).listen(1337);

createServer((req, res) => {
  const body = [];
  req
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      const payload = Buffer.concat(body).toString();
      console.log("body", payload);
      spawnSync("zenity", ["--info", `--text=${payload}`], {
        stdio: "inherit",
      });
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end();
    });
}).listen(8080);
