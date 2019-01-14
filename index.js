function theBeatlesPlay(a, b) {
  var sentences = []
  for (var i = 0; i < b.length; i++) {
  sentences.push(`${a[i]} plays ${b[i]}`);
  }
  return sentences
}

function johnLennonFacts(a) {
  var i = 0
<<<<<<< HEAD
  var newList = [];
  while (i < a.length) {
    var newFact = a.slice(i, i + 1) + "!!!";
    newList.push(newFact);
    i++;
  }
  return newList;
=======
  while (i < a.length) {
    var newThing = a.push("!!!");
    i++;
  }
  return newThing;
>>>>>>> 6aa8fd1e9d2808e0ad8def928a0689d262a1ee3f
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15)
  return array
}