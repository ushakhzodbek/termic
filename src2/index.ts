import Cli from "../src/core";
import Colors from "./colors";
import Styler from "../src/styler";
import { color } from "./ansi";

/**
 * @example
 *
 * cli.println(styler.italic.crossedout("Hello World", null, colors.red));
 *
 * cli.println(styler.italic.underline("Hello World"));
 *
 * cli.println(styler.italic.underline.select("Hello World", null, colors.blue));
 *
 */

export const cli = new Cli();
export const colors = new Colors();
export const styler = Styler;

cli.println(styler.underline("Hello"));
cli.println("Test 1");
console.log("Test 2");
