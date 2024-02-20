function bangladeshiNumber(num) {
  if (num.length !== 11 || num.slice(0, 2) !== "01") {
    return "invalid";
  }
  for (let i = 0; i < num.length; i++) {
    if (isNaN(num[i])) {
      return "invalid";
    }
  }
  const firstnum = parseInt(num[2]);
  //   console.log(parseInt(num[2]));
  if (firstnum < 3 || firstnum > 9) {
    return "invalid";
  }
  return "valid";
}

const number = ["01968642392"];
number.forEach((pnumber) => {
  console.log(`${pnumber} ${bangladeshiNumber(pnumber)}`);
});
