import testA from "./TestA.ts";

export const testB = (...params: any) => {
  testA(10);
  console.log(params);
};

export let testBB = "testBB";
