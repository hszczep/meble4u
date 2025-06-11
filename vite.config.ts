import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [ 
    // svgr({
    //   include: '**/*.svg',
    //   svgrOptions: {
    //     exportType: 'named',
    //     ref: true,
    //     svgo: false,
    //     titleProp: true,
    //   },
    // }),
    tailwindcss(), 
    reactRouter(), 
    tsconfigPaths()
  ],
});
