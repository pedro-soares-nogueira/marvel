import axios from "axios";
import md5 from "md5";

const baseURL = "http://gateway.marvel.com/v1/public";
const privateKey = "b64b13b35b9650b0597a8fa60e6b5497cfac20b3";
const publicKey = "116c3ab0e15b79bb6c80e9681213a7b1";

const timestemp = Number(new Date());
const hash = md5(timestemp + privateKey + publicKey);

export const getComics = async () => {
  try {
    const response = await axios.get(
      `${baseURL}/comics?ts=${timestemp}&apikey=${publicKey}&hash=${hash}`
    );

    return response.data.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getCharacters = async () => {};
