console.log("HEYA ");
const url = "https://api.imgflip.com/get_memes";

axios
  .get(url)
  .then((response) => {
    console.log("response:", response.data.data.memes);
  })
  .catch((error) => {
    console.log(error);
  });
