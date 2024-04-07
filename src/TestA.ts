import axios from "axios";
const testA = (number: number): string => {
  console.log(number, axios);
  return "num is " + number;
};

export default testA;
