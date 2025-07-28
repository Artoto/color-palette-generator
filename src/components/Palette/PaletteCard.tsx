import { motion, Variants } from "framer-motion";
import ColorCard from "../Color/ColorCard";

interface paletteProps {
  name: string;
  primary: string;
  secondary: string;
  background: string;
  text: string;
  text2: string;
}

interface PaletteCardProps {
  palette: paletteProps;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
  onCopyColor: (color: string) => void;
  variants: Variants;
}

const PaletteCard = ({
  palette,
  index,
  isSelected,
  onSelect,
  onCopyColor,
  variants,
}: PaletteCardProps) => {
  return (
    <motion.div
      key={index}
      variants={variants}
      whileHover={{ y: -5 }}
      onClick={onSelect}
      className={`p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ${
        isSelected ? "ring-4 ring-indigo-500 shadow-2xl" : "hover:shadow-xl"
      }`}
      style={{ background: palette.background }}
    >
      <h3 className="text-xl font-bold mb-4" style={{ color: palette.text }}>
        {palette.name}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        <ColorCard
          color={palette.primary}
          label="Primary"
          size="small"
          onCopy={onCopyColor}
        />
        <ColorCard
          color={palette.secondary}
          label="Secondary"
          size="small"
          onCopy={onCopyColor}
        />
      </div>
      <div className="mt-3 text-xs" style={{ color: palette.text }}>
        คลิกเพื่อดูรายละเอียด
      </div>
    </motion.div>
  );
};

export default PaletteCard;
