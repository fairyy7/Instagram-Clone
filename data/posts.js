import { Users } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://i.pinimg.com/736x/74/d8/f4/74d8f4930130863679e2b9568cd00f87.jpg",
    user: Users[0].user,
    likes: 490,
    caption: "Hello World! Check out my new setup 🤩",
    profile_picture: Users[0].image,
    isLiked: false,
    comments: [
      { user: "bella", comment: "wow! this build look fire" },
      {
        user: "jackson",
        comment: "this is a second comment",
      },
    ],
  },

  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwJFI-u6rbsbQD7wmRRissPMqeAChkokH0Q&usqp=CAU",
    user: Users[1].user,
    likes: 990,
    isLiked: false,
    caption: "At the lakeside",
    profile_picture: Users[1].image,
    comments: [
      {
        user: "zayn",
        comment: "beautiful",
      },
    ],
  },

  {
    imageUrl:
      "https://images.pexels.com/photos/13457837/pexels-photo-13457837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    user: Users[3].user,
    likes: 100,
    isLiked: false,
    caption: "Morning",
    profile_picture: Users[3].image,
    comments: [
      {
        user: "gigi",
        comment: "Good Day!",
      },
    ],
  },
];
