const newReleases = [
  {
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
    "bookmark": []
  },
  {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
    "bookmark": [{ id: 432534, time: 65876586 }]
  },
  {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
    "bookmark": []
  },
  {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
    "bookmark": [{ id: 432534, time: 65876586 }]
  }
];

const getGoodReleasesIds = function() {
  // ------------ INSERT CODE HERE! -----------------------------------
  // Используйте методы filter и map в цепочке (method chaining - запомните термин!) , чтобы получить id всех видео
  // с рейтингом 5.0

  return newReleases // закончите это выражение
  // ------------ INSERT CODE HERE! -----------------------------------
  // Если не получается сделать за 15 минут прочтите эту статью (ENG)
  // https://gomakethings.com/chaining-array-methods-in-vanilla-js/
}

// Ожидаемый вывод:
// [ 654356453, 675465 ]
console.log(getGoodReleasesIds());
