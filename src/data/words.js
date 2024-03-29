const generateRandomWord = (length) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let consonants = "bcdfghjklmnpqrstvwxyz";
  let word = "";

  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      word += consonants.charAt(Math.floor(Math.random() * consonants.length));
    } else {
      word += vowels[Math.floor(Math.random() * vowels.length)];
    }
  }

  return word;
};

const getWords = () => {
  let results = [];

  for (let count = 0; count < 1000; ++count) {
    let len = Math.floor(Math.random() * 8 + 3);

    results.push(generateRandomWord(len));
  }

  return new Promise((resolve, reject) => {
    resolve(results);
  });
};

export default getWords;
