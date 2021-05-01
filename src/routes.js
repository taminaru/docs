import Home from "./routes/home.svelte";
import NotFound from "./routes/notFound.svelte";
// test routing page
import Test from "./pages/test.svelte";

export default {
  // home page
  "/": Home,
  // test page for router testing
  "/test": Test,
  // The catch-all route must always be last
  "*": NotFound,
};
