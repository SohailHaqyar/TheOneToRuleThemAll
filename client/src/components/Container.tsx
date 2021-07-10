import { motion } from "framer-motion";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toggleTheme } from "../helpers/toggleTheme";
import { isTokenValid } from "../isTokenExpired";
import { Avatar } from "./Avatar";
import { MainButton } from "./Buttons/MainButton";
import { SideNav } from "./SideNavigation/SideNavigation";
import { Timer } from "./Timer";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: "0",
    transition: { delay: 0.2, duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: {
      transition: { ease: "easeInOut", duration: 0.2 },
    },
  },
};
const today = new Date();
export const Container: React.FC = ({ children }) => {
  const {
    currentUser: { user, isAuth },
  } = useAuth();
  const history = useHistory();

  const [timerHours, setTimerHours] = useState<any>("00");
  const [timerMinutes, setTimerMinutes] = useState<any>("00");
  const [timerSeconds, setTimerSeconds] = useState<any>("00");

  let interval: any = useRef();

  const startTimer = () => {
    const countDownDate = new Date(
      JSON.parse(localStorage.getItem("nextPostDate")!)
    ).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = countDownDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval();
    };
  });
  return (
    <div>
      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <SideNav />
          <motion.main
            className="lg:col-span-10 xl:col-span-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
          </motion.main>

          <aside
            className="lg:col-span-4 xl:col-span-3"
            style={{ display: isTokenValid() ? "block" : "none" }}
          >
            <div className="sticky top-4">
              <div className="bg-white w-full flex flex-col items-center py-4 dark:bg-dracula-700 dark:text-white">
                <Avatar
                  src={
                    user?.imageUrl
                      ? user.imageUrl
                      : "https://miro.medium.com/max/1200/1*cLQUX8jM2bMdwMcV2yXWYA.jpeg"
                  }
                  rounded
                  size="lg"
                />
                <h2 className="mt-4 text-xl  font-light capitalize">
                  {user?.username}
                </h2>

                <h4 className="my-1 text-gray-600 text-sm dark:text-gray-200">
                  {user?.email}
                </h4>
                <MainButton
                  type="button"
                  onClick={() => {
                    history.push(`/user/${user?.id}`);
                  }}
                >
                  View Profile
                </MainButton>
                <div className="mb-2 mt-1">
                  <MainButton onClick={toggleTheme} type="button">
                    Switch Mode
                  </MainButton>
                </div>
              </div>

              {timerHours !== "00" && (
                <div className="bg-white w-full mt-2 p-4 dark:bg-dracula-700 dark:text-white">
                  <h1 className="text-center mb-4 text-lg">
                    You can post again in
                  </h1>
                  <Timer type="Hours" value={timerHours} />
                  <Timer type="Minutes" value={timerMinutes} />
                  <Timer type="Seconds" value={timerSeconds} />
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
