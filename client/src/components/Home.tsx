import {
  FireIcon,
  HomeIcon,
  TrendingUpIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import PostFeed from "./PostFeed";
import { SideNav } from "./SideNavigation";
import TrendingSection from "./TrendingSection";
import WhoToFollow from "./WhoToFollow";

const user = {
  name: "Chelsea Hagon",
  email: "chelseahagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Popular", href: "#", icon: FireIcon, current: false },
  {
    name: "Communities",
    href: "#",
    icon: UserGroupIcon,
    current: false,
  },
  {
    name: "Trending",
    href: "#",
    icon: TrendingUpIcon,
    current: false,
  },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const communities = [
  { name: "Movies", href: "#" },
  { name: "Food", href: "#" },
  { name: "Sports", href: "#" },
  { name: "Animals", href: "#" },
  { name: "Science", href: "#" },
  { name: "Dinosaurs", href: "#" },
  { name: "Talents", href: "#" },
  { name: "Gaming", href: "#" },
];
const tabs = [
  { name: "Recent", href: "#", current: true },
  { name: "Most Liked", href: "#", current: false },
  { name: "Most Answers", href: "#", current: false },
];
const questions = [
  {
    id: "81614",
    likes: "29",
    comments: "11",
    author: {
      name: "Dries Vincent",
      imageURL:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "December 9 at 11:43 AM",
    datetime: "2020-12-09T11:43:00",
    title:
      "What would you have done differently if you ran Jurassic Park?",
    body:
      "\n          <p>\n            Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.\n          </p>\n          <p>\n            Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;\n          </p>\n        ",
  },

  {
    id: "12381614",
    likes: "129",
    comments: "211",
    author: {
      name: "Dries Vincent",
      imageURL:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "December 9 at 11:43 AM",
    datetime: "2020-12-09T11:43:00",
    title: "What the hell is wrong with society?",
    body:
      "\n          <p>\n            Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.\n          </p>\n          <p>\n            Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;\n          </p>\n        ",
  },
  // More questions...
];
const whoToFollow = [
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
const trendingPosts = [
  {
    id: "1",
    user: {
      name: "Floyd Miles",
      imageUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    body:
      "What books do you have on your bookshelf just to look smarter than you actually are?",
    comments: 291,
  },
];

export const Home = () => {
  return (
    <div className="py-10">
      <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <SideNav />
        <PostFeed data={questions} />
        <aside className="hidden xl:block xl:col-span-4">
          <div className="sticky top-4 space-y-4">
            <WhoToFollow whoToFollow={whoToFollow} />
            <TrendingSection trendingPosts={trendingPosts} />
          </div>
        </aside>
      </div>
    </div>
  );
};
