import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPaintBrush,
  FaFlag,
  FaDumbbell,
  FaPrayingHands,
  FaUserGraduate,
  FaChessBoard,
} from 'react-icons/fa';

const events = [
  {
    title: 'Varli Art',
    description: 'Students display traditional Warli artwork using natural and cultural themes.',
    icon: <FaPaintBrush className="text-pink-600 text-3xl mb-3" />,
    image: '/assets/va.jpg',
  },
  {
    title: 'Independence Day Celebration',
    description: 'Flag hoisting, patriotic performances, and speeches by students and teachers.',
    icon: <FaFlag className="text-red-600 text-3xl mb-3" />,
    image: '/assets/in.jpg',
  },
  {
    title: 'Sports Day',
    description: 'Track and field events, games, and prize distribution for house competitions.',
    icon: <FaDumbbell className="text-orange-500 text-3xl mb-3" />,
    image: '/assets/sp.jpg',
  },
  {
    title: 'Yoga Day',
    description: 'Morning yoga session to promote wellness and healthy lifestyle practices.',
    icon: <FaPrayingHands className="text-green-600 text-3xl mb-3" />,
    image: '/assets/y.jpg',
  },
  {
    title: 'Gandhi Jayanthi & Ambedkar Jayanthi',
    description: 'Tributes through speeches, cleanliness drives, and awareness activities.',
    icon: <FaUserGraduate className="text-gray-700 text-3xl mb-3" />,
    image: '/assets/gaa.jpg',
  },
  {
    title: 'Carrom Competition',
    description: 'Indoor competition encouraging strategic thinking and fun.',
    icon: <FaChessBoard className="text-purple-600 text-3xl mb-3" />,
    image: '/assets/ca.jpg',
  },
];

const Events = () => {
  return (
    <section className="bg-blue-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-slate-800 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Events and Celebrations
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border hover:border-blue-400 hover:bg-blue-50 transform transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                {event.icon}
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{event.title}</h3>
                <p className="text-gray-700 text-sm">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;