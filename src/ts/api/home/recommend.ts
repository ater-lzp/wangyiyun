import { request } from "@/tools/request/index";
type banner_type = 0 | 1 | 2 | 3;
import type { Data, PlaylistHot,Personalized_res,NewAlbum} from "@/ts/type/index";
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
  return  request<PlaylistHot>({
    url: "/playlist/hot",
    method: "get",
  });
};

//推荐歌单
export const get_recommend_playlist =  (limit:number) => {
  return  request<Personalized_res>({
    url: "/personalized",
    method: "get",
    params: {
      limit,
    },
  });
};

// 新碟上架 
export const get_new_album =  () => {
  return  request<NewAlbum>({
    url: "/album/newest",
    method: "get"
  });
};

