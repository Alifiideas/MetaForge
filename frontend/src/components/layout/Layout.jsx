import Sidebar from "../layout/Sidebar";
import Topbar from "../layout/Topbar";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import "./Layout.css";

function Layout({ tokens = 50, plan = "Free" }) {
  const location = useLocation();

  return (
    <div className="layout">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="layout-main">
        <Topbar tokens={tokens} plan={plan} />

        <motion.main
          key={location.pathname}   // 🔑 important
          className="layout-content"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
}

export default Layout;

