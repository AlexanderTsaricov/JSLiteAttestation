function ex1() {
  const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
  };
  for (const key in numbers) {
    if (numbers[key] >= 3) {
      console.log(numbers[key]);
    }
  }
}

function getCommentsData(comments) {
  let resultText = "";
  for (let index = 0; index < comments.length; index++) {
    resultText += `UserID: ${comments[index].userId}\n`;
    resultText += `Test: ${comments[index].text}\n`;
    resultText += `Likes: ${comments[index].rating.likes}\n`;
    resultText += `Dislikes: ${comments[index].rating.dislikes}\n`;
    resultText += "+++++++++++++++++++++\n";
  }
  return resultText;
}

function ex2() {
  const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
      {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
          likes: 10,
          dislikes: 2, // вывести это число
        },
      },
      {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
          likes: 3,
          dislikes: 1,
        },
      },
    ],
  };
  console.log(
    `Autor post: ${post.author}, comments data:\n\n${getCommentsData(
      post.comments
    )}`
  );
}

function ex3() {
  const products = [
    {
      id: 3,
      price: 200,
    },
    {
      id: 4,
      price: 900,
    },
    {
      id: 1,
      price: 1000,
    },
  ];

  products.forEach((element) => {
    console.log(`id ${element.id}, price ${element.price}`);
    element.price = element.price * 0.85;
    console.log(`price with discount: ${element.price}`);
  });
}

function ex4() {
  const products = [
    {
      id: 3,
      price: 127,
      photos: ["1.jpg", "2.jpg"],
    },
    {
      id: 5,
      price: 499,
      photos: [],
    },
    {
      id: 10,
      price: 26,
      photos: ["3.jpg"],
    },
    {
      id: 8,
      price: 78,
    },
  ];
  const filtredProducts = products.filter((products) => {
    if (products.photos === undefined) {
        return false;
    }
    if (products.photos.length > 0) {
        return true
    }
    return false;
  });
  console.log(filtredProducts);
  const sortProducts = products.sort((a, b) => {
    if (a.price > b.price) return 1;
    if (a.price == b.price) return 0;
    return -1;
  });
  console.log(sortProducts);
}

function ex5() {
    const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
    const enRuWeek = {}
    for (let index = 0; index < en.length; index++) {
        enRuWeek[en[index]] = ru[index];
    }
    console.log(enRuWeek);
}