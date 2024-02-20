/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }



  function bangladeshiNumber(num) {
    if (num.length === 13 && num.startsWith("+88")) {
        num = num.slice(3); // Remove the "+88" prefix
    }
    
    if (num.length !== 11 || !num.startsWith("01")) {
        return "invalid";
    }

    for (let i = 0; i < num.length; i++) {
        if (isNaN(num[i])) {
            return "invalid";
        }
    }

    const firstnum = parseInt(num[2]);

    if (firstnum < 3 || firstnum > 9) {
        return "invalid";
    }

    return "valid";
}

const numbers = ["01968642392", "+8801968642392"];

numbers.forEach(num => {
    console.log(`${num} ${bangladeshiNumber(num)}`);
});
