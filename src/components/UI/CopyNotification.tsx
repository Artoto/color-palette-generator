import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

interface CopyNotificationProps {
  copiedColor: string;
}

const CopyNotification = ({ copiedColor }: CopyNotificationProps) => {
  return (
    <AnimatePresence>
      {copiedColor && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2"
        >
          <Check className="w-4 h-4" />
          <span>คัดลอก {copiedColor} แล้ว!</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CopyNotification;
