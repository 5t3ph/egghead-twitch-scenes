module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/css/");

  eleventyConfig.addFilter("printJs", (js) => {
    return JSON.stringify(js);
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
