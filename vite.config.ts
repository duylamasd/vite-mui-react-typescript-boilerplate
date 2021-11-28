import { defineConfig, UserConfigExport, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const config: UserConfigExport = ({ mode }) => {
  const appEnv = loadEnv(mode, process.cwd(), "SERVER_");

  return {
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: /^@mui\/icons-material\/(.*)/,
          replacement: "@mui/icons-material/esm/$1",
        },
      ],
    },
    envPrefix: "APP_",
    server: {
      port: parseInt(appEnv.SERVER_PORT || "3000"),
    },
  };
};

export default defineConfig(config);
