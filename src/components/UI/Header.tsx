import { motion } from "framer-motion";
import { Palette } from "lucide-react";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <div className="flex items-center justify-center mb-4">
        <Palette className="w-8 h-8 text-indigo-600 mr-3" />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Color Palette Matcher
        </h1>
      </div>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        ค้นหาชุดสีที่เหมาะสมสำหรับเว็บไซต์และแอปพลิเคชันของคุณ
        ด้วยการออกแบบที่ทันสมัยและสวยงาม
      </p>
    </motion.div>
  );
};

export default Header;
