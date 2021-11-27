import { defineConfig, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";

const config: UserConfigExport = {
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@mui\/icons-material\/(.*)/,
        replacement: "@mui/icons-material/esm/$1",
      },
    ],
  },
};

export default defineConfig(config);
