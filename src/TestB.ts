import testA from "./TestA";

export const testB = (...params: any) => {
  testA(10);
  console.log(params);
};

export let testBB = "testBB";
