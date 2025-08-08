import { useLayoutEffect, useState, useRef } from "react";
import Swiper from "../../../component/Swiper";
import type { SwiperRef } from "../../../component/Swiper";
import {
  get_banners,
  get_hot_playlist_categories,
  get_recommend_playlist,
} from "../../../ts/api/home/recommend/index";
import type { Banner } from "../../../ts/Type/component/Swiper";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import RecommedCard from "../../../component/RecommedCard";
import List from "../../../component/List";
import { Carousel } from "antd";

const new_album = { title: "新碟上架", url: "", color: "black", size: "20px" };
const toplist = { title: "榜单", url: "", color: "black", size: "20px" };
export default function Recommend() {
  // 轮播图
  const [banners, set_banners] = useState<Banner[]>([]);
  const [hotPlaylistCategories, set_hotPlaylistCategories] = useState<any[]>(
    []
  );
  const [playlist, set_playlist] = useState<any[]>([]);
  useLayoutEffect(() => {
    Promise.all([getBanners(), getHotPlaylistCategories(), getPlaylist()]);
  }, []);

  // 获取轮播图数据
  const getBanners = async (type:   0|1|2|3=0) => {
    try {
      const res = await get_banners(type);      
      set_banners(res.banners);
    } catch (error) {
      console.log(error);
    }
  };
  // 获取热门歌单分类
  const getHotPlaylistCategories = async () => {
    try {
      const res = await get_hot_playlist_categories();
      const items = res.tags?.map((item: any) => ({
        title: item.name,
        ...item,
        size: "15px",
        color: "#666",
      }));
      items.length = 5;
      set_hotPlaylistCategories({
        title: "热门推荐",
        url: "",
        color: "black",
        size: "20px",
        items,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // 获取歌单列表
  const getPlaylist = async () => {
    try {
      const res = await get_recommend_playlist(8 );      
      set_playlist(res.result);
    } catch (error) {
      console.log(error);
    }
  };
  const swiper_ref = useRef<SwiperRef>(null);
  return (
    <>
      <div className="w-100%">
        {/* 轮播图 */}
        <div className="m-auto w-1080px flex justify-between items-center">
          <LeftOutlined
            onClick={() => swiper_ref.current?.prev()}
            className="font-size-40px text-white size-40px"
          />
          <div className="w-1000px flex border-x-solid border-x-1px border-x-gray">
            <div className="w-749px h-300px bg-red">
              <Swiper
                ref={swiper_ref}
                height="300px"
                width="749px"
                datalist={banners}
              />
            </div>
            <div className="w-250px h-300px border-l-1px border-l-gray border-l-solid  ">
              下载客户端
            </div>
          </div>
          <RightOutlined
            onClick={() => swiper_ref.current?.next()}
            className="font-size-40px text-white size-40px"
          />
        </div>
        {/* 推荐 */}
        <div className="w-1080px m-auto">
          <div className="w-1000px flex m-auto border-x-solid border-x-1px border-x-gray bg-white">
            <div className="w-750px  border-1px ">
              {/* 热门推荐 */}
              <RecommedCard className="mb-20px" title={hotPlaylistCategories}>
                <List className="w-100% h-450px" row={2} col={4}>
                  {playlist?.map((item) => (
                    <div className=" px-20px" key={item.id}>
                      <div className=" mt-20px w-140px h-140px m-auto relative">
                        <div className="w-100% flex justify-between bg-#00000050 absolute bottom-0">
                          <span>播放量</span> <span>播放</span>{" "}
                        </div>
                      </div>
                      <span> {item.name} </span>
                    </div>
                  ))}
                </List>
              </RecommedCard>
              {/* 新碟上架 */}
              <RecommedCard className="mb-20px" title={new_album}>
                <div className="h-190px m-20px flex justify-center items-center bg-#f5f5f5 border-solid border-gray border-1px">
                  <LeftOutlined />
                  <Carousel
                    className="w-650px h-150px"
                    draggable={true}
                    dots={false}
                  >
                    <List row={1} col={5} className=" w-100% h-150px"></List>
                  </Carousel>
                  <RightOutlined />
                </div>
              </RecommedCard>
              {/* 榜单 */}
              <RecommedCard className="mb-20px" title={toplist}>
                你好啊
              </RecommedCard>
            </div>
            <div className="w-250px border-l-1px  border-l-gray border-l-solid "></div>
          </div>
        </div>
      </div>
    </>
  );
}
