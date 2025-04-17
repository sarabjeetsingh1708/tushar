import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Calendar } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-emerald-400"
        >
          Get in Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-emerald-400" />
                <a href="mailto:tushar23561@iiitd.ac.in" className="hover:text-emerald-400 transition-colors">
                  tushar23561@iiitd.ac.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="text-emerald-400" />
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-emerald-400" />
                <span>East Gorakh Park, Shahdara, Delhi - 110032</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-2 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;