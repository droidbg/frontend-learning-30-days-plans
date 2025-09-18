import { bench, describe } from "vitest";


///////////////////////////Compare Array Sum Methods///////////////////////////
 
function sumLoop(arr: number[]) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) total += arr[i];
  return total;
}

// sum with reduce
function sumReduce(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0);
}

describe("Array Sum Performance", () => {
  const data = Array.from({ length: 1_000_000 }, (_, i) => i);

  bench("for loop sum", () => {
    sumLoop(data);
  });

  bench("reduce sum", () => {
    sumReduce(data);
  });
});

///////////////////////////String Reverse Methods///////////////////////////

function reverseSplit(str: string) {
    return str.split("").reverse().join("");
  }
  
  function reverseLoop(str: string) {
    let out = "";
    for (let i = str.length - 1; i >= 0; i--) {
      out += str[i];
    }
    return out;
  }
  
  describe("String reverse", () => {
    const text = "abcdefghij".repeat(1000);
  
    bench("split+reverse+join", () => {
      reverseSplit(text);
    });
  
    bench("for loop", () => {
      reverseLoop(text);
    });
  });


  ///////// JSON Parse vs. Manual Access///////////////////////////

  const bigObj = JSON.stringify({ id: 1, name: "test", nested: { x: 5, y: 10 } });

  describe("JSON parse vs manual", () => {
    bench("JSON.parse", () => {
      JSON.parse(bigObj);
    });
  
    bench("manual string access", () => {
      bigObj.includes("test");
    });
  });