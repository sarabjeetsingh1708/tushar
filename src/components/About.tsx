import { motion } from 'framer-motion';

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <h2 className="text-4xl font-bold mb-8 text-emerald-400">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="text-lg font-medium">Indraprastha Institute of Information Technology, Delhi</h4>
                <p className="text-emerald-400">B.Tech (CSD) | 2023 – 2027</p>
                
              </div>
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="text-lg font-medium">Little Flowers Public Sr. Sec. School</h4>
                <p className="text-emerald-400">CBSE Class XII | 2022</p>
                <p className="text-gray-300">Percentage: 94.5%</p>
                <p className="text-emerald-400">CBSE Class X | 2019</p>
                <p className="text-gray-300">Percentage: 88.8%</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Personal Info</h3>
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm space-y-2">
                <p><span className="text-emerald-400">Date of Birth:</span> June 1, 2004</p>
                <p><span className="text-emerald-400">Location:</span> East Gorakh Park, Shahdara, Delhi</p>
                <p><span className="text-emerald-400">Email:</span> tushar23561@iiitd.ac.in</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Interests</h3>
              <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm space-y-2">
                <p>• Latest technological advancements (AI, AR/VR, Web development, ML)</p>
                <p>• Mental health awareness and public welfare</p>
                <p>• Music, gardening, sketching, and reading</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;