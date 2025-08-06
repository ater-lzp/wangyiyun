import { lazy } from "react";
import { createHashRouter } from "react-router";
const router = createHashRouter([
  {
    path: "/",
    Component: lazy(() => import("../App")),
    children: [
      {
        index: true,
        Component: lazy(() => import("../view/home/index")),
        children:[
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
      
    ],
  },
]);
export default router;
