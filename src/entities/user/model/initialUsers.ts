import { User } from "./types";

export const DEFAULT_AVATAR_URL =
  "https://api.dicebear.com/8.x/bottts-neutral/svg?seed=Sophie";

export const INITIAL_USERS: User[] = [
  {
    id: 1,
    creationDate: "30.04.24 00:00:01",
    avatar: DEFAULT_AVATAR_URL,
    lastName: "Морская Пехота",
    firstName: "Наталья",
    secondName: "",
    email: "kstatitiuvolen@gmail.com",
    about: "Стартуем!",
  },
  {
    id: 2,
    creationDate: "29.04.24 00:00:02",
    avatar: DEFAULT_AVATAR_URL,
    lastName: "Холмс",
    firstName: "Шерлок",
    secondName: "",
    email: "elementarno@watson.com",
    about: "Простой русский парень",
  },
  {
    id: 3,
    creationDate: "28.04.24 00:00:03",
    avatar: DEFAULT_AVATAR_URL,
    lastName: "Макс",
    firstName: "Лунько",
    secondName: "",
    email: "maxoldgood@gmail.com",
    about: "",
  },
];
