export const Courses = [
  {
    "image": "black_image.png",
    "category": "Ibyapa",
    "name": "Ibyapa",
    "price": "850/-",
    "rating": 4.2,
    "students": 7830,
    "likes": 200
  },
  {
    "image": "black_image.png",
    "category": "Web Development",
    "name": "Fullstack Web Dev",
    "price": "950/-",
    "rating": 4.5,
    "students": 12000,
    "likes": 320
  },
  {
    "image": "black_image.png",
    "category": "Data Science",
    "name": "Data Science Bootcamp",
    "price": "1200/-",
    "rating": 4.8,
    "students": 5400,
    "likes": 450
  },
  {
    "image": "black_image.png",
    "category": "Digital Marketing",
    "name": "Marketing Mastery",
    "price": "600/-",
    "rating": 4.3,
    "students": 8800,
    "likes": 150
  },
  {
    "image": "black_image.png",
    "category": "Graphic Design",
    "name": "Design Fundamentals",
    "price": "700/-",
    "rating": 4.6,
    "students": 6000,
    "likes": 220
  }
]
export const nameYearArray = [
  { name: "Alice", year: 2020 },
  { name: "Bob", year: 2019 },
  { name: "Charlie", year: 2021 },
  { name: "Diana", year: 2022 },
  { name: "Ethan", year: 2020 },
  { name: "Fiona", year: 2023 },
  { name: "George", year: 2019 },
  { name: "Hannah", year: 2021 },
  { name: "Ian", year: 2022 },
  { name: "Jack", year: 2020 },
  { name: "Karen", year: 2023 },
  { name: "Liam", year: 2021 },
  { name: "Mia", year: 2019 },
  { name: "Noah", year: 2020 },
  { name: "Olivia", year: 2022 }
];

export const Category = [{
  name: "Graphic Design",
  Image: "3.jpeg",

},
{
  name: "3D Design",
  Image: "2.jpeg",

}
  ,
{
  name: "Web Development",
  Image: "4.jpeg",

}
  ,
{
  name: "SEO & Marketing",
  Image: "1.jpeg",

}
  ,
{
  name: "Personal Development",
  Image: "6.jpeg",

}
  ,
{
  name: "Finance & Accounting",
  Image: "5.jpeg",

}
  ,
{
  name: "Office Productivity",
  Image: "7.jpeg",

}
  ,
{
  name: "HR Management",
  Image: "8.jpeg",

}


]

export const images = {
  '1.jpeg': require('../../../assets/Cat/1.jpeg'),
  '2.jpeg': require('../../../assets/Cat/2.jpeg'),
  '3.jpeg': require('../../../assets/Cat/3.jpeg'),
  '4.jpeg': require('../../../assets/Cat/4.jpeg'),
  '5.jpeg': require('../../../assets/Cat/5.jpeg'),
  '6.jpeg': require('../../../assets/Cat/6.jpeg'),
  '7.jpeg': require('../../../assets/Cat/7.jpeg'),
  '8.jpeg': require('../../../assets/Cat/8.jpeg'),
};


// notification

const notificationsData = [
  {
    id: '1',
    title: 'New Category Course!',
    message: 'New the 3D Design Course is Available.',
    icon: 'grid-outline',
    backgroundColor: '#EAF3FF',
    date: 'Today',
  },
  {
    id: '2',
    title: 'New Category Course!',
    message: 'New the 3D Design Course is Available.',
    icon: 'school-outline',
    backgroundColor: '#D4E6FF',
    date: 'Today',
  },
  {
    id: '3',
    title: 'Today’s Special Offers',
    message: 'You have made a Course Payment.',
    icon: 'pricetag-outline',
    backgroundColor: '#EAF3FF',
    date: 'Today',
  },
  {
    id: '4',
    title: 'Credit Card Connected!',
    message: 'Credit Card has been Linked!',
    icon: 'credit-card',
    backgroundColor: '#EAF3FF',
    date: 'Yesterday',
  },
  {
    id: '5',
    title: 'Account Setup Successful!',
    message: 'Your Account has been Created.',
    icon: 'user-check',
    backgroundColor: '#EAF3FF',
    date: 'Nov 20, 2022',
  },
];

export const courseData = {
  courseId: "1",
  title: "Intro to Programming",
  lessons: [
    {
      lessonId: "1",
      title: "Introduction",
      sections: [
        { sectionId: "1", title: "Welcome", content: "Welcome to the world of programming! This is your first step." },
        { sectionId: "2", title: "Programming Basics", content: "Let's cover some basics that will set you up for success." }
      ]
    },
    {
      lessonId: "2",
      title: "Variables and Data Types",
      sections: [
        { sectionId: "1", title: "What is a Variable?", content: "Variables are used to store data. They form the backbone of programming." },
        { sectionId: "2", title: "Understanding Data Types", content: "Data types determine the kind of data we can store in variables." }
      ]
    }
  ],
  quiz: [
    {
      questionId: "1",
      question: "What is a variable?",
      options: ["A way to store data", "A type of loop", "An operating system"],
      correctAnswer: "A way to store data"
    },
    {
      questionId: "2",
      question: "Define data type.",
      options: ["A way to sort data", "A category of data", "An IDE"],
      correctAnswer: "A category of data"
    }
  ]
};
