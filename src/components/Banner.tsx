import { motion } from "motion/react";

const Banner = () => {
  return (
    <section className="container grid place-items-center px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className= "text-4xl font-bold text-white mb-4">
            <span className="block ">Hi, I'm</span>
            <span className="block text-4xl md:text-6xl font-bold text-orange-600">Keroles Nabil</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Software Engineer | Backend Developer
            <span className="block text-orange-500">.NET/Node.js</span>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="grid place-items-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-orange-600 shadow-2xl">
            <img
              src="/src/assets/images/profile.jpeg"
              alt="Keroles Nabil"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
