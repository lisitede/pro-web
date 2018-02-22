MVC 框架
==

MVC 的概念讨论的比较多，这里不具体追根溯源，我们来讨论一个落地的实践。

首先你需要一个 MVC 框架，在 Node 生态圈，应该是 Express/Koa/Egg，我们选用 Egg 作为演示。类比而言，在 Java，应该是 Spring MVC；在 .NET 应该是 .NET MVC；在 python 应该是 django/Flask；在 Ruby 应该是 Rails。

对本章而言，实际上重要的概念是 V-View，C-Controller，M 比较复杂，暂时不深入讨论。技术上来说还有一个重要的概念即 “路由 Route”，他对应的是 Url。

从业务上说，我们命名一个虚拟的概念 “页面 Page”，我们以 Page 作为拆分需求的一个基本单位，在典型的情况下，一个 Page 对应一个需求的 Story，如果我们做敏捷，那么每个 Page 是可以快速开发上线的，也就是说可以一旦开发完成就上线，根据开发进度，可以三天上一次，也可以一天上一次。尽管在实践中我们会固定比如两周作为一个迭代，这纯粹是因为工程管理上的需要，因此一个迭代中可能会包含多个 Page。但理论上说，Page 是非常独立和基本的一个拆分单位。

Page 和 Url 基本上是一一对应的，你可以想想说 Url 即是一个 Page 的名字，就好比接口设计对于后端代码的意义一样。Url 是应用和用户之间的一个约定，并且一旦约定完成/上线，那么约定再不可更改，遇到需求变更，只能尽量兼容，或直接设计新的页面。更实际的说法是 Page 和 Route 是一一对应的，因为可能出现参数待填充的 Route。

我们来看一些具体的例子，设想一个树状结构的文件管理，如果我们参考 RESTFUL 的命名规范，Route 可能类似于：

错误的例子：

| Page                              | Url                    | Route               |
------------------------------------------------------------------------------------
| 项目列表                           | /projects              | /projects            |
| 编号为 1 的项目的详情                | /projects/1            | /projects/:projectId |
| 编号为 1 的项目的工作簿列表           | /projects/1/workbooks  | /projects/:projectId/workbooks |
| 编号为 1 的项目的编号为 2 的工作簿详情 | /projects/1/workbooks/2 | /projects/:projectId/workbooks/:workbookId |

然而在现实中，你常常不能容忍让用户点这么多层才能到达他想要的东西，你应该尽可能的平铺你的信息，让结构扁平化，所以实际的需求变成 Page 可能是：

正确的例子：

| Page       | Url                | Route              |
--------------------------------------------------------
| 项目文件管理 | /project-dashboard | /project-dashboard |

希望以上的例子能很明显的解释 Page 和 RESTFUL 的不同之处。

现代的前端架构中，我们常常会去做 “单页应用 SPA”，注意这里的 “单页” 和 Page 完全是两回事。你应该忽视单页这两个字，重音落在应用上，把他视作一个应用。比如 `/app/#/project-dashboard`，app 即应用，而和上面的例子一样 `/project-dashboard` 才是 Page。

那么让我们重新审视本章的标题，我们实际再谈的应该变成了 Page - Router - Controller。如果再本章的示例代码中我们不考虑单页应用，那么 Page 和 View 基本上是一一对应的。即 Page/View - Router - Controller。但是 Page 是全教程贯穿始终的一个最重要的概念，所以后面我们可能更多的用 Page 这个词。

接下来我们演示一下一个最简单和基础的 PRC 架构代码应该是什么样子。
