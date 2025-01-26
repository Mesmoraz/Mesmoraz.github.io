module.exports = function(eleventyConfig) {

    // Create a collection called "posts" from all .md files in /posts
    eleventyConfig.addCollection("posts", function(collectionApi) {
      return collectionApi.getFilteredByGlob("posts/*.md");
    });
  
    // Copy styles to output folder
    eleventyConfig.addPassthroughCopy("styles");
  
    // Return configuration overrides (optional)
    return {
      dir: {
        input: ".",
        includes: "_includes",
        output: "_site"
      },
      // If you want to specify a markdown template engine etc.:
      // markdownTemplateEngine: "njk",
    };
  };
  