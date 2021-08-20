import { version } from "../dist/main";
import pkg from "../package.json";

test("version", () => {
  expect(version).toBe(pkg.version);
});
