var ghpages = require("gh-pages");
var sets = require("./private/settings.json");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/taminaru/docs", // Update to point to your repository
    user: {
      name: "ThatGuyJamal", // update to use your name
      email: `${sets.EMAIL}`, // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
