import { motion } from "framer-motion";
import ColorCard from "../Color/ColorCard";
import ColorUsageGuide from "../Utils/ColorUsageGuide";
import { Eye } from "lucide-react";

interface paletteProps {
  name: string;
  primary: string;
  secondary: string;
  background: string;
  text: string;
  text2: string;
}

interface PaletteDetailsProps {
  palette: paletteProps;
  onCopyColor: (color: string) => void;
  onPreview: () => void;
}

const PaletteDetails = ({
  palette,
  onCopyColor,
  onPreview,
}: PaletteDetailsProps) => {
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-2xl shadow-xl p-8 mb-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">{palette.name}</h2>
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPreview}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>ดูตัวอย่าง</span>
          </motion.button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <ColorCard
          color={palette.primary}
          label="Primary Color"
          onCopy={onCopyColor}
        />
        <ColorCard
          color={palette.secondary}
          label="Secondary Color"
          onCopy={onCopyColor}
        />
        <ColorCard
          color={palette.background}
          label="Background"
          onCopy={onCopyColor}
        />
        <ColorCard
          color={palette.text}
          label="Text Color"
          onCopy={onCopyColor}
        />
      </div>

      <ColorUsageGuide />
    </motion.div>
  );
};

export default PaletteDetails;
