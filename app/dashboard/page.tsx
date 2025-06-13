'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Dashboard.module.css';
import {
  FaUserFriends,
  FaVideo,
  FaMapMarkedAlt,
  FaBrain,
  FaBell,
  FaUserCircle,
  FaFireAlt,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

const dashboardLinks = [
  { icon: <FaUserFriends />, label: 'Matches', link: '/matches' },
  { icon: <FaVideo />, label: 'Reels', link: '/reels' },
  { icon: <FaMapMarkedAlt />, label: 'Event Map', link: '/heatmap-graph' },
  { icon: <FaBrain />, label: 'AI Chatbot', link: '/chatbot' },
];

const initialLeaderboard = [
  { name: 'Aarav Kumar', streak: 7, avatar: 'https://i.pravatar.cc/40?img=1' },
  { name: 'Lina Ahmed', streak: 6, avatar: 'https://i.pravatar.cc/40?img=2' },
  { name: 'Mohamed Ali', streak: 5, avatar: 'https://i.pravatar.cc/40?img=3' },
];

export default function DashboardPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [streakLeaderboard, setStreakLeaderboard] = useState(initialLeaderboard);

  useEffect(() => {
    const interval = setInterval(() => {
      setStreakLeaderboard((prev) =>
        prev.map((user) => ({
          ...user,
          streak: user.streak + Math.floor(Math.random() * 2),
        }))
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative min-h-screen bg-cover bg-center px-4 py-8 md:px-16 transition-colors duration-300"
      style={{
        backgroundImage: `url(${darkMode ? '/partners/dashboarddark.jpg' : '/partners/dashlight.jpg'})`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
        <FaUserCircle className={`text-4xl ${darkMode ? 'text-purple-100' : 'text-purple-700'}`} />
        <h1
          className={`text-3xl md:text-4xl font-bold text-center ${
            darkMode ? 'bg-black bg-clip-text text-purple-200' : 'text-purple-800'
          }`}
        >
          NetworkQY Dashboard
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <FaSun className="text-2xl text-yellow-300" />
          ) : (
            <FaMoon className="text-2xl text-purple-800" />
          )}
        </button>
      </div>

      {/* Welcome Message */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className={`text-2xl font-semibold ${darkMode ? 'text-purple-200' : 'text-purple-900'}`}>
          Hey Aarav!
        </h2>
        <p className={`${darkMode ? 'text-gray-200' : 'text-gray-600'} mt-2 text-sm`}>
          Let’s build your network and boost your streak 🔥
        </p>
      </div>

      {/* Tip of the Day (Hover to Expand) */}
<div className={`${styles.card} ${darkMode ? styles.cardDark : styles.cardLight}`}>
  <div className={styles.border}></div>

  <div className={styles.content}>
    <div className={styles.logo}>
      <div
        className={
          styles.logo1 +
          ' ' +
          (darkMode ? styles.tipTextDark : styles.tipTextLight)
        }
      >
        Hover for a tip!
      </div>
      <div className={styles.logo2}></div>
    </div>

    <div
      className={
        styles.logoBottomText +
        ' ' +
        (darkMode ? styles.tipTextDark : styles.tipTextLight)
      }
    >
      Send 1 message today and double your chances of a meaningful connection!
    </div>
  </div>
</div>

      
<br/>
      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto mb-14">
  {[{ label: 'Matches', count: 12 }, { label: 'Views', count: 58 }, { label: 'Requests', count: 9 }].map(
    (item, index) => (
      <motion.div
        key={index}
        className={styles.metricCard}
        whileHover={{ scale: 1.02 }}
      >
        <div className={styles.metricCount}>{item.count}</div>
        <div className={styles.metricTitle}>{item.label}</div>
      </motion.div>
    )
  )}
</div>


      {/* Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-6xl mx-auto mb-14">
        {dashboardLinks.map((item, index) => (
          <Link href={item.link} key={index}>
            <motion.div
        className={styles.cardFancy} // ← Use your Uiverse class
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className={`${darkMode ? 'text-purple-200' : 'text-purple-700'} text-3xl mb-2`}
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 4 }}
        >
          {item.icon}
        </motion.div>
              <div className="text-sm font-medium">{item.label}</div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
