import { request } from "../../../../tools/request/index";
type banner_type = 0 | 1 | 2 | 3;
import type { Data } from "../../../../ts/Type/component/Swiper";
// 获取轮播图
export const get_banners =  (type: banner_type = 0): Promise<Data> => {
  return  request<Data>({
    url: "/banner",
    method: "get",
    params: { type },
  });
};

// 获取热门歌单分类
export const get_hot_playlist_categories =  () => {
  return  request({
    url: "/playlist/hot",
    method: "get",
  });
};

//推荐歌单
export const get_recommend_playlist =  (limit:number) => {
  return  request({
    url: "/personalized",
    method: "get",
    params: {
      limit,
    },
  });
};
