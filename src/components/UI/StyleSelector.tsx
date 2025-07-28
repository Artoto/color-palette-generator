import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface paletteProps {
  name: string;
  primary: string;
  secondary: string;
  background: string;
  text: string;
  text2: string;
}

interface stylesProps {
  style: string;
  palettes: paletteProps[];
}

interface StyleSelectorProps {
  styles: stylesProps[];
  selectedStyle: number;
  onStyleChange: (index: number) => void;
}

const StyleSelector = ({
  styles,
  selectedStyle,
  onStyleChange,
}: StyleSelectorProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        เลือกสไตล์ของคุณ
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {styles.map((style, index) => (
          <motion.button
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onStyleChange(index)}
            className={`p-6 rounded-xl shadow-lg transition-all duration-300 ${
              selectedStyle === index
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl"
                : "bg-white text-gray-700 hover:shadow-xl"
            }`}
          >
            <div className="flex items-center justify-center mb-3">
              <Sparkles
                className={`w-6 h-6 ${
                  selectedStyle === index ? "text-white" : "text-indigo-600"
                }`}
              />
            </div>
            <h3 className="text-lg font-semibold">{style.style}</h3>
            <p
              className={`text-sm mt-2 ${
                selectedStyle === index ? "text-white/80" : "text-gray-500"
              }`}
            >
              {style.palettes.length} ชุดสี
            </p>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default StyleSelector;
