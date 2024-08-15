export interface Config {
  apiUrl: string;

  makeApiUrl: (path: string, base?: string) => string; // updated for multiple url support
}

const apiUrl = process.env.API_BASE_URL || "https://dummyjson.com";

const config: Config = {
  apiUrl,
  makeApiUrl: (path: string, base: string = apiUrl) => {
    // clean up
    console.log("main: ", base + path);
    return base + path;
  },
};

export default config;
