# Page

MVC 的概念讨论的比较多，这里不具体追根溯源，我们来讨论一个落地的实践。对本章而言，实际上重要的概念是 V-View，C-Controller，M 比较复杂，暂时不深入讨论。技术上来说还有一个重要的概念即 “路由 Route”，他对应的是 Url。

从业务上说，我们命名一个虚拟的概念 “页面 Page”，我们以 Page 作为拆分需求的一个基本单位，在典型的情况下，一个 Page 对应一个需求 Story，如果我们做敏捷，那么每个 Page 是可以快速开发上线的，也就是说可以一旦开发完成就上线，根据开发进度，可以三天上一次，也可以一天上一次。尽管在实践中我们会固定比如两周作为一个迭代，这纯粹是因为工程管理上的需要，并且导致一个迭代中可能包含多个 Page。但理论上说，Page 是非常独立和基本的一个拆分需求的单位。

Page 和 Url 基本上是一一对应的，你可以想象 Url 即是一个 Page 的名字，就好比接口设计对于后端代码的意义一样。Url 是应用和用户之间的一个约定，并且一旦约定完成/上线，那么约定再不可更改，遇到需求变更，只能尽量兼容，或直接设计新的页面。更实际的说法是 Page 和 Route 是一一对应的，因为可能出现参数待填充的 Route。

来看一个具体的例子，如果我们想管理一个博客：

| Page       | Url                       | Route                   |
|------------|---------------------------|-------------------------|
| 博客文章管理 | /blog/article-dashboard   | /blog/article-dashboard |
| 一片博客文章 | /blog/an-attractive-title | /blog/:slug             |

现在让我们重新审视本章的标题，实际在谈的应该变成了 Page - Router - Controller。如果再本章的示例代码中我们不考虑单页应用，那么 Page 和 View 基本上是一一对应的。即 Page/View - Router - Controller。但是 Page 是全教程贯穿始终的一个最重要的概念，所以后面我们可能更多的用 Page 这个词。

接下来我们演示一下一个最简单和基础的 P-R-C 架构代码应该是什么样子。首先你需要一个 MVC 框架，在 Node 生态圈，应该是 Express/Koa/Egg，我们选用 Egg 作为演示。类比而言，在 Java，应该是 Spring MVC；在 .NET 应该是 .NET MVC；在 python 应该是 django/Flask；在 Ruby 应该是 Rails。

首先你需要一个 `router` 管理全部的路由映射关系：

```javascript
// app/router.js
router.get('/', controller.view.index);
```

然后你需要一个 `view-controller` 的一个具体的 `index` 方法来承接这个请求；典型的情况下，他会返回一个字符串，这个字符串即 html 页面的名字，MVC 框架会根据一定的约定去一个文件夹里找这个 html。在我们的例子里，这个 html 是 `app/view/index.html`，其中 `app/view` 是约定的位置。

```javascript
class ViewController {
  async index() {
    const { ctx } = this;
    await ctx.render('index.html');
  }
}
```

大部分情况下，我们需要做动态的页面，即会被后端填充的动态的数据填充的页面。所以我们会需要一个模板引擎，在例子中我们用到的是 nunjunk，关于模板引擎的详细待后续文章。

以上你会得到一个 `page`。由此再次可以看出 Page/页面 是一个虚拟的概念，并没有实际的代码能严格对应上来，他指的是一系列架构和代码得到的一个结果，被实现的一个需求。

* [SPM / Standard Page Modal](./spm/)
