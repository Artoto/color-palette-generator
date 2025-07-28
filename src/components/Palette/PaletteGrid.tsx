import { motion, Variants } from "framer-motion";
import PaletteCard from "./PaletteCard";

interface paletteProps {
  name: string;
  primary: string;
  secondary: string;
  background: string;
  text: string;
  text2: string;
}

interface styleProps {
  style: string;
  palettes: paletteProps[];
}

interface PaletteGridProps {
  style: styleProps;
  selectedPalette: number;
  onPaletteSelect: (index: number) => void;
  onCopyColor: (color: string) => void;
}

interface paletteProps {
  name: string;
  primary: string;
  secondary: string;
  background: string;
  text: string;
  text2: string;
}

const PaletteGrid = ({
  style,
  selectedPalette,
  onPaletteSelect,
  onCopyColor,
}: PaletteGridProps) => {
  const containerVariants: Variants = {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      key={style.style}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        ชุดสี {style.style}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {style.palettes.map((palette: paletteProps, index: number) => (
          <PaletteCard
            key={index}
            palette={palette}
            index={index}
            isSelected={selectedPalette === index}
            onSelect={() => onPaletteSelect(index)}
            onCopyColor={onCopyColor}
            variants={itemVariants}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PaletteGrid;
