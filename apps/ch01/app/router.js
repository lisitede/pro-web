module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.view.index);
};
