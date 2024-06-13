let pronouns = ["he", "she", "it", "la"];
let adjectives = ["happy", "sad", "angry", "cueva"];
let nouns = ["dog", "cat", "mouse", "delTio"];
let extensions = [".com", ".net", ".us", ".io"];

const names = [];

for (const pronoun of pronouns) {
  for (const adj of adjectives) {
    for (const noun of nouns) {
      for (const extension of extensions) {
        let domainName = pronoun + adj + noun;
        if (domainName.endsWith(extension.replace(".", ""))) {
          domainName = domainName.slice(
            0,
            domainName.length - extension.replace(".", "").length
          );
        }
        names.push(`${domainName}${extension}`);
      }
    }
  }
}

console.log(names);
