import { motion } from "framer-motion";

interface paletteProps {
  name: string;
  primary: string;
  secondary: string;
  background: string;
  text: string;
  text2: string;
}

interface PreviewWebsiteProps {
  palette: paletteProps;
}

const PreviewWebsite = ({ palette }: PreviewWebsiteProps) => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div
            className="w-8 h-8 rounded-lg shadow-lg"
            style={{ backgroundColor: palette.primary }}
          />
          <h1 className="text-2xl font-bold" style={{ color: palette.text }}>
            Your Website
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6 nav-menu">
          <ul className="nav-ul">
            {["Home", "About", "Services", "Contact"].map((item, key) => (
              <li className="nav-li" key={item}>
                <a
                  href="#"
                  className={`hover:opacity-80 transition-opacity`}
                  style={{ color: palette.text }}
                >
                  {item}
                  <span
                    className={`${key === 0 ? `active` : ``} `}
                    style={{ backgroundColor: palette.text }}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ color: palette.text }}
        >
          Beautiful Design
        </h2>
        <p className="text-xl mb-8 opacity-80" style={{ color: palette.text }}>
          Experience the perfect color harmony in your projects
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full  font-semibold"
          style={{ backgroundColor: palette.primary, color: palette.text }}
        >
          Get Started
        </motion.button>
      </div>

      {/* Content Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-6 rounded-xl shadow-lg"
            style={{ backgroundColor: palette.secondary }}
          >
            <div
              className="w-12 h-12 rounded-lg mb-4"
              style={{ backgroundColor: palette.primary }}
            />
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: palette.text2 }}
            >
              Feature {i}
            </h3>
            <p className="opacity-80" style={{ color: palette.text2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewWebsite;
