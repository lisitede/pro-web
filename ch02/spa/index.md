# SPA

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
