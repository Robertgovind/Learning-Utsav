let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];


console.log(companies);
// 1.Remove the first company from the array
companies.shift();
console.log(companies);

// 2.Remove Uber and add Ola in its place
companies.splice(2,1,"Ola");
console.log(companies);

// 3.Add Amazon at the end
companies.push("Amazon");
console.log(companies);