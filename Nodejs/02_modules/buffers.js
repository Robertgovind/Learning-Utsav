const buffer = new Buffer.from("Govind ");

console.log(buffer);  // contains equivalent hex values
console.log(buffer.toJSON());
console.log(buffer.toString());

buffer.write("Kumar");
console.log(buffer);  // contains equivalent hex values
console.log(buffer.toJSON());
console.log(buffer.toString());
