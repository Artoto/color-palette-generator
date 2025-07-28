import { AnimatePresence, motion } from "framer-motion";
import PreviewWebsite from "../Preview/PreviewWebsite";

interface paletteProps {
  name: string;
  primary: string;
  secondary: string;
  background: string;
  text: string;
  text2: string;
}

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  palette: paletteProps;
}

const PreviewModal = ({ isOpen, onClose, palette }: PreviewModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          className="max-w-4xl w-full max-h-[90vh] overflow-auto rounded-2xl shadow-2xl"
          style={{ background: palette.background }}
          onClick={(e) => e.stopPropagation()}
        >
          <PreviewWebsite palette={palette} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PreviewModal;
