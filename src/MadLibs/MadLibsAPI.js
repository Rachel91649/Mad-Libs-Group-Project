const words = {
  nouns: [
    "lamp",
    "show",
    "hand",
    "home",
    "arm",
    "volleyball",
    "cobweb",
    "mint",
    "act",
    "society"
  ],
  verbs: [
    "pour",
    "trip",
    "peck",
    "slap",
    "strengthen",
    "push",
    "tap",
    "transport",
    "cheer",
    "command"
  ],
  adjectives: [
    "rightful",
    "creepy",
    "standing",
    "ten",
    "frightening",
    "drunk",
    "six",
    "future",
    "incredible",
    "wicked"
  ]
};

const getListNoun = () => words.nouns;
//console.log(getListNoun())

const getListVerb = () => words.verbs;

//console.log(getListVerb())

const getListAdjective = () => words.adjectives;
//console.log(getListAdjective())

export default {
  getListNoun,
  getListVerb,
  getListAdjective
};




// import axios from "axios";

// const getRandomNoun = () => axios.get("http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&sortBy=count&sortOrder=desc&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5");

// const getRandomVerb = () => axios.get("http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=verb-transitive&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&sortBy=count&sortOrder=desc&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5");

// const getRandomAdjective = () => axios.get("http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=adjective&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&sortBy=count&sortOrder=desc&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5");

// export default {
//   getRandomNoun,
//   getRandomVerb,
//   getRandomAdjective
// };
