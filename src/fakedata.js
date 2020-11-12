const fakedata = [{
    "id": 1,
    "course": {
      "name": "Artificial Intelligence",
      "price": 12.09,
      "enrolled": 2430,
      "image": "https://miro.medium.com/max/1200/1*PvjBTPY5KvtJoSoCUipzWw.jpeg",
      "date": "01/05/2021"
    },
    "university": "Astrahan State Academy",
    "instructor": {
      "name": "Cristionna Vagg",
      "image": "https://robohash.org/velitbeataevelit.png?size=50x50&set=set1"
    }
  }, {
    "id": 2,
    "course": {
      "name": "Machine Learning",
      "price": 24.76,
      "enrolled": 2921,
      "image": "https://miro.medium.com/max/848/1*M9le42saJxWlOYyYvhKtPA.jpeg",
      "date": "14/04/2021"
    },
    "university": "Al-Batterjee Medical College",
    "instructor": {
      "name": "Estrellita McGaffey",
      "image": "https://robohash.org/quoveroqui.png?size=50x50&set=set1"
    }
  }, {
    "id": 3,
    "course": {
      "name": "Deep Learning",
      "price": 10.73,
      "enrolled": 4640,
      "image": "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fbernardmarr%2Ffiles%2F2018%2F10%2FAdobeStock_179912599-1-1200x797.jpg",
      "date": "08/08/2021"
    },
    "university": "Tokyo University of Information Sciences",
    "instructor": {
      "name": "Paolo Cathie",
      "image": "https://robohash.org/estsuscipitullam.png?size=50x50&set=set1"
    }
  }, {
    "id": 4,
    "course": {
      "name": "Data Mining",
      "price": 26.84,
      "enrolled": 1630,
      "image": "https://miro.medium.com/max/3840/0*IrJj4kqeyIylbhI4.png",
      "date": "01/06/2021"
    },
    "university": "Université d'Abomey-Calavi (UAC)",
    "instructor": {
      "name": "Cissy De Malchar",
      "image": "https://robohash.org/nontemporequi.png?size=50x50&set=set1"
    }
  }, {
    "id": 5,
    "course": {
      "name": "Data Structure",
      "price": 8.49,
      "enrolled": 1929,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTO1Qx4nFhitY1UXz_OrtmSUY6lCcSMktUU3w&usqp=CAU",
      "date": "07/08/2021"
    },
    "university": "Sri Lanka Institute of Advanced Technical Education",
    "instructor": {
      "name": "Aubrey Desouza",
      "image": "https://robohash.org/voluptatevoluptatemsapiente.png?size=50x50&set=set1"
    }
  }, {
    "id": 6,
    "course": {
      "name": "Algorithms",
      "price": 20.95,
      "enrolled": 1611,
      "image": "https://miro.medium.com/max/1200/1*CWM5omSsQVUpMREJwHQUzQ.jpeg",
      "date": "05/03/2021"
    },
    "university": "Universidade Federal do Espírito Santo",
    "instructor": {
      "name": "Jolene Eisikowitz",
      "image": "https://robohash.org/nihilfugitqui.png?size=50x50&set=set1"
    }
  }, {
    "id": 7,
    "course": {
      "name": "Web Development",
      "price": 15.04,
      "enrolled": 4527,
      "image": "https://www.aigtechnologies.in/images/slides/web-development.jpg",
      "date": "27/09/2021"
    },
    "university": "Houdegbe North American University Benin",
    "instructor": {
      "name": "Levey Somerbell",
      "image": "https://robohash.org/molestiasnampossimus.png?size=50x50&set=set1"
    }
  }, {
    "id": 8,
    "course": {
      "name": "Introduction to C",
      "price": 14.68,
      "enrolled": 3427,
      "image": "https://nareshit.com/wp-content/uploads/2018/08/C-Programming-online-training-nareshit.jpg",
      "date": "26/07/2021"
    },
    "university": "Institute of Teachers Education, Sultan Mizan",
    "instructor": {
      "name": "Trude Tezure",
      "image": "https://robohash.org/optiovoluptatemaccusamus.png?size=50x50&set=set1"
    }
  }, {
    "id": 9,
    "course": {
      "name": "Discrete Mathematics",
      "price": 12.49,
      "enrolled": 1128,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu2G1daS89HM3qtA9ao_Lqmv9kdIcfXRiwJg&usqp=CAU",
      "date": "14/05/2021"
    },
    "university": "Universitas Sumatera Utara",
    "instructor": {
      "name": "Cordie Baythrop",
      "image": "https://robohash.org/natusomnisvoluptas.png?size=50x50&set=set1"
    }
  }, {
    "id": 10,
    "course": {
      "name": "Computer Networking",
      "price": 22.29,
      "enrolled": 2154,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLzqNYjBjmMSU1nGIUQjX4eXJVE6s7y-nYdQ&usqp=CAU",
      "date": "22/03/2021"
    },
    "university": "Northern Jiaotong University",
    "instructor": {
      "name": "Neile Evangelinos",
      "image": "https://robohash.org/vitaeetiure.png?size=50x50&set=set1"
    }
  }, {
    "id": 11,
    "course": {
      "name": "Object Oriented Programming",
      "price": 25.96,
      "enrolled": 3014,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdGP8UXLdKqXtHPYitxxRKOA9zgJfNTkD7HQ&usqp=CAU",
      "date": "24/11/2020"
    },
    "university": "Iceland University of Education",
    "instructor": {
      "name": "Peri Dowbekin",
      "image": "https://robohash.org/estdoloribussed.png?size=50x50&set=set1"
    }
  }, {
    "id": 12,
    "course": {
      "name": "Compiler Design",
      "price": 5.92,
      "enrolled": 1702,
      "image": "https://st4.depositphotos.com/4177785/30973/v/1600/depositphotos_309732476-stock-illustration-compiler-concept-icon-software-development.jpg",
      "date": "03/11/2021"
    },
    "university": "Universidad Autónoma de Occidente",
    "instructor": {
      "name": "Waylon Kirkby",
      "image": "https://robohash.org/illoatconsequatur.png?size=50x50&set=set1"
    }
  }, {
    "id": 13,
    "course": {
      "name": "Operating Systems",
      "price": 5.64,
      "enrolled": 4731,
      "image": "https://safebytes.com/wp-content/uploads/2016/10/OperatingSystem-min.jpg",
      "date": "27/09/2021"
    },
    "university": "Josai International University",
    "instructor": {
      "name": "Carling Leverage",
      "image": "https://robohash.org/porroaccusantiumiste.png?size=50x50&set=set1"
    }
  }, {
    "id": 14,
    "course": {
      "name": "Database Systems",
      "price": 5.89,
      "enrolled": 4983,
      "image": "https://www.expertware.net/nowuiassets/img/blog/blogpage/data-base-refresh-process.jpg",
      "date": "03/04/2021"
    },
    "university": "Ecole Supérieure de Commerce de Reims",
    "instructor": {
      "name": "Chanda Ferras",
      "image": "https://robohash.org/quosedunde.png?size=50x50&set=set1"
    }
  }, {
    "id": 15,
    "course": {
      "name": "Advanced Database Systems",
      "price": 19.02,
      "enrolled": 3589,
      "image": "https://thumbs.dreamstime.com/b/database-18820966.jpg",
      "date": "11/09/2021"
    },
    "university": "University of Basrah",
    "instructor": {
      "name": "Fons Gorgl",
      "image": "https://robohash.org/quisenimqui.png?size=50x50&set=set1"
    }
  }];

  export default fakedata;