function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("resutl: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => vold) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

//type void and undefined in function

function voidfn(): void {
  // doesnt have return or return nothing
}

function undeffn(): undefined {
  // return nothing
  return;
}

// let combineValues: Function;

let combineValues: (a: number, b: number) => number; // is function takes two number args and return nubmer

// combineValues = printResult;

combineValues = add;
console.log(combineValues(2, 9));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
