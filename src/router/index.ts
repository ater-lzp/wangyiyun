import { lazy } from "react";
import { createHashRouter, redirect } from "react-router";

const router = createHashRouter([
  {
    path: "/",
    Component: lazy(() => import("../App")),
    children: [
      {
        index: true,
        loader: () => redirect("/home")  // 使用索引路由重定向
      },
      {
        path: 'home',
        Component: lazy(() => import("../view/home/index")),
        children: [
          {
            index: true,
            loader: () => redirect("/home/recommend")
          },
          {
            path: "recommend",
            Component: lazy(() => import("../view/home/view/recommend")),
          },
          {
            path: "album",
            Component: lazy(() => import("../view/home/view/album")),
          },
          {
            path: "artist",
            Component: lazy(() => import("../view/home/view/artist")),
          },
          {
            path: "djradio",
            Component: lazy(() => import("../view/home/view/djradio")),
          },
          {
            path: "playlist",
            Component: lazy(() => import("../view/home/view/playlist")),
          },
          {
            path: "toplist",
            Component: lazy(() => import("../view/home/view/toplist")),
          },
        ]
      },
      // ... 其他路由保持不变
      {
        path: "my_music",
        Component: lazy(() => import("../view/my_music/index"))
      },
      {
        path: "subscribe",
        Component: lazy(() => import("../view/subscribe/index"))
      },
      {
        path: "shop",
        Component: lazy(() => import("../view/shop/index"))
      },
      {
        path: "singer",
        Component: lazy(() => import("../view/singer/index"))
      },
      {
        path: "music_recommend",
        Component: lazy(() => import("../view/music_recommend/index"))
      },
      {
        path: "download",
        Component: lazy(() => import("../view/download/index"))
      },
    ],
  },
]);

export default router;