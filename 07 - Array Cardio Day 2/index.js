var currentTime = new Date()
var thisYear = currentTime.getFullYear()

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  console.log(people.some((x) => (thisYear - x.year) >= 19))
  console.log(people.every((x) => (thisYear - x.year) >= 19))
  
  commentIndex = comments.findIndex((x) => x.id == 823423)
  comments.splice(commentIndex, 1)
  console.log(comments)
