const routes = [
  {
    name: "/users",
    middleware: "./user-routes"
  },
];

module.exports = app => {
  routes.forEach(route => {
    app.use(route.name, require(route.middleware));
  });
};
