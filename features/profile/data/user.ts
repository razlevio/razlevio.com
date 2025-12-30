import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Raz",
  lastName: "Levi",
  displayName: "Raz Levi",
  username: "razlevio",
  gender: "male",
  pronouns: "he/him",
  bio: "I get computers ‘puting",
  flipSentences: [
    "I get computers ‘puting",
    "Full Stack Engineer",
    "Interests include 🎾, 🕹️, 📈, 📱, 👨‍💻, 🥊, 🏎️, ⛷️, 🎨, 🍷, ⌚",
    "Analyst and Investor",
    "Entrepreneur",
  ],
  address: "Tel Aviv, Israel",
  phoneNumber: "", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "", // base64 encoded
  website: "https://razlevio.com",
  jobTitle: "Full Stack Engineer",
  jobs: [
    {
      title: "Full Stack Engineer",
      company: "Israel National Digital Agency",
      website: "https://www.gov.il/",
    },
    {
      title: "Founder and CTO",
      company: "COYA",
      website: "https://coya.gg",
    },
  ],
  about: `
Experienced full-stack engineer and founder based in 🇮🇱 Tel Aviv. Currently cooking at Israel National Digital Agency while leading as Founder & CTO at [COYA](https://coya.gg). I turn complex challenges into elegant solutions - whether architecting systems, leading teams, or shipping products from 0 → 1.

Interests include 🎾, 🕹️, 📈, 📱, 🥊, 🏎️, ⛷️, 🎨, ☕️, 🍷, ⌚. I'm told I have strong opinions on espresso, stronger positions in tech stocks, a respectable forehand, and an irrational love for anything that goes fast.

Always building.
  `,
  avatar: "/avatar.png",
  ogImage: "/banner.png",
  namePronunciationUrl: "/audio/razlevio.mp3",
  keywords: ["razlevio", "raz levi", "raz levio"],
  dateCreated: "2020-01-01", // YYYY-MM-DD
};
