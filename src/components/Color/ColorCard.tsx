import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

interface ColorCardProps {
  color: string;
  label: string;
  size?: "large" | "small";
  onCopy: (color: string) => void;
  copiedColor?: string;
}

const ColorCard = ({
  color,
  label,
  size = "large",
  onCopy,
  copiedColor,
}: ColorCardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCopy(color);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`relative cursor-pointer rounded-2xl shadow-xl overflow-hidden group ${
        size === "large" ? "h-32" : "h-20"
      }`}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />

      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="text-white text-sm font-medium flex items-center justify-between">
          <span>{label}</span>
          {copiedColor === color ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </div>
        <div className="text-white/80 text-xs font-mono">{color}</div>
      </div>
    </motion.div>
  );
};

export default ColorCard;
