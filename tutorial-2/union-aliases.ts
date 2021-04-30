type Combinable = number | string;
type ConversionTyper = "text" | "number";
function combine(
  n1: Combinable,
  n2: number | string,
  conversion: ConversionTyper
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    conversion === "number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  //   if (conversion === "number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
  return result;
}

const combinedAge = combine(30, 26, "number");
console.log(combinedAge);

const combinedStringAge = combine("30", "26", "text");
console.log(combinedStringAge);

const combinedNames = combine("Tyler", "Nam", "text");
console.log(combinedNames);
