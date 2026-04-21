let x = 1000
let result = "";
switch (x) {
    case 100: result = "hundreds";
        break;
    case 1000: result = "thousands";
        break;
    case 10000: result = "ten thousand";
        break;
    default: result = "invalid data";
        break;
}
console.log(result);