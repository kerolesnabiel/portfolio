import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Code,
  CodeXml,
  Youtube,
  CircleFadingPlus,
} from "lucide-react";

const socials = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    link: "https://linkedin.com/in/kerolesnabil/",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    link: "https://github.com/kerolesnabiel",
  },
  {
    icon: <Code className="w-5 h-5" />,
    label: "LeetCode",
    link: "https://leetcode.com/u/kerolesnabil/",
  },
  {
    icon: <CodeXml className="w-5 h-5" />,
    label: "HackerRank",
    link: "https://hackerrank.com/kerolesnabil",
  },
  {
    icon: <CircleFadingPlus className="w-5 h-5" />,
    label: "TikTok",
    link: "https://tiktok.com/@kerolesnabiel",
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    label: "Instagram",
    link: "https://instagram.com/kerolesnabiel",
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    label: "Facebook",
    link: "https://facebook.com/kerolesnabiel",
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    label: "X (Twitter)",
    link: "https://x.com/kerolesnabiel",
  },
  {
    icon: <Youtube className="w-5 h-5" />,
    label: "Youtube",
    link: "https://youtube.com/@kerolesnabiell",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Let’s Connect
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 max-w-2xl mx-auto">
          Feel free to reach out or follow me on any of the platforms below.
        </p>
        <div className="text-orange-400 mb-8">
          <Mail className="inline-block w-5 h-5 mr-2" />
          <a href="mailto:kerolesnabiel@gmail.com" className="hover:underline">
            kerolesnabiel@gmail.com
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-gray-100 px-4 py-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition"
            >
              {social.icon}
              <span className="text-sm font-medium">{social.label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
