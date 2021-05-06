module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/css/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
