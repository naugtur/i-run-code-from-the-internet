import leftpad from "leftpad";
import { randomQuote } from "cookie-monster";
import { reaction } from "./omg.ts";

function run() {
  // This is my cookie
  document.cookie = "name=chocolate-chip";
  console.log(location.host, document.cookie);

  // These are my dependencies
  console.log(leftpad(randomQuote(), 50, "🍪"));

  // This just proves webpack still does its thing
  console.log(reaction)
}
run();
