// import test from "ava";
import { ping } from "../dist/main";

test("ping", () => {
  expect(ping()).toBe("pong");
});
