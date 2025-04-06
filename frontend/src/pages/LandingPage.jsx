import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { RocketIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl font-extrabold text-indigo-800 mb-4 flex items-center justify-center gap-2">
          <RocketIcon className="w-10 h-10 text-indigo-600 animate-bounce" />
          TaskPilot
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          TaskPilot is your all-in-one CRM solution to manage users, tasks,
          notifications, and performance analytics with real-time updates and
          a seamless interface.
        </p>
        <div className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-indigo-600 text-white rounded-2xl text-lg shadow-md hover:bg-indigo-700 transition"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-indigo-600 text-indigo-700 rounded-2xl text-lg hover:bg-indigo-50 transition"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16 max-w-4xl w-full bg-white shadow-xl rounded-2xl p-8"
      >
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
          🚀 Why TaskPilot?
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-left space-y-2">
          <li>Role-based dashboards for Admin, Manager, and Employee</li>
          <li>Real-time task updates and notifications</li>
          <li>Performance analytics and reporting tools</li>
          <li>Responsive UI with modern design</li>
          <li>Secure user authentication with JWT</li>
        </ul>
      </motion.div>
    </main>
  );
}
