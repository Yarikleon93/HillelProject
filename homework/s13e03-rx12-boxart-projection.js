// Получите id, title, и 150x200 box art _url_ для каждого видео

// Вы уже выбирали данные из структуры в два уровня глубиной,
// пора пробовать три!
// Допустим, вместо одной обложки, каждый фильм содержит
// набор изображений с разными размерами и url.
// Результатом этого задания должен быть массив объектов,
// содержащих { id, title, boxart },
// где в boxart должен быть _url_ картинки 150x200px.

// Попробуем решить эту задачу используя только map, flat и find
// Запрещается обращаться к элементам массива по индексам т.е.
// var itemInArray = movieLists[0]; - противозаконно.

const movieLists = [
  {
    name: "Instant Queue",
    videos : [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxarts": [
          { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
          { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxarts": [
          { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
          { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ]
  },
  {
    name: "New Releases",
    videos: [
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxarts": [
          { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
          { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxarts": [
          { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
          { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
          { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ]
  }
];

// Используйте .map, .find и .flat для получения данных, в формате представленном ниже.
// (мы делали функцию аналогичную методу .flat в s07e03 и называли ее concat - она разворачивает массив массивов в плоский массив)
// [
//   {"id": 675465, "title": "Fracture", "boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
//   {"id": 65432445, "title": "The Chamber", "boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
//   {"id": 654356453, "title": "Bad Boys", "boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
//   {"id": 70111470, "title": "Die Hard", "boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
// ];

const result = movieLists // закончите выражение!

console.log(result);
