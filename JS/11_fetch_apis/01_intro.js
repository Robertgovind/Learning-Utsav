// const getButton = document.querySelector("#get-fact");
// const factText = document.querySelector("#fact-text");

// getButton.addEventListener("click", () => {
//   getApiData();
// });

let URL = "https://cat-fact.herokuapp.com/facts";

const getApiData = async () => {
  console.log("Getting api data ... ");
  let res = await fetch(URL);
  let data = await res.json();
  factText.innerText = data[0].text;
};

getApiData();
