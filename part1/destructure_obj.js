
const band = {
    bandName: "led zepptin",
    famousSong: "stairway to heaven",
    year:1998,
    place:"kashmir"
};
// const bandName = band["bandName"];
// let {bandName:var1,famousSong:var2} = band;
let {bandName:var1,famousSong:var2,...rest} = band;
 
console.log(rest)