import leftpad from "leftpad";
import { randomQuote } from "cookie-monster";
import { what } from "./omg.ts";

function run() {
  document.cookie = "name=chocolate-chip";
  console.log(location.host, document.cookie);
  console.log(leftpad(randomQuote(), 50, "🍪"));
  console.log(what)
}
run();
