import { useLayoutEffect, useState, useRef } from "react";
import Swiper from "../../../component/Swiper";
import type { SwiperRef } from "../../../component/Swiper";
import { get_banners } from "../../../ts/api/home/recommend/index";
import type { Banner } from "../../../ts/Type/component/Swiper";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import RecommedCard from "../../../component/RecommedCard";
const hot_recommend = {
  title: "热门推荐",
  url: "",
  color: "black",
  size: "20px",
  items: [
    { title: "华语", url: "", size: "15px", color: "#666" },
    { title: "流行", url: "", size: "15px", color: "#666" },
    { title: "摇滚", url: "", size: "15px", color: "#666" },
    { title: "民谣", url: "", size: "15px", color: "#666" },
    { title: "电子", url: "", size: "15px", color: "#666" },
  ],
};
const new_album = { title: "新碟上架", url: "", color: "black", size: "20px" };
const toplist = { title: "榜单", url: "", color: "black", size: "20px" };
export default function Recommend() {
  const [dataList, set_dataList] = useState<Banner[]>([]);
  useLayoutEffect(() => {
    get_banners(0)
      .then((res) => {
        set_dataList(res.banners);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const swiper_ref = useRef<SwiperRef>(null);
  return (
    <>
      {/* 轮播图 */}
      <div className="w-100% h-300px  flex items-center justify-center">
        <LeftOutlined
          onClick={() => swiper_ref.current?.prev()}
          className="font-size-40px text-white size-40px"
        />
        <div className="w-1000px flex border-x-solid border-x-1px border-x-gray">
          <div className="w-750px h-300px">
            <Swiper
              ref={swiper_ref}
              height="300"
              width="800"
              datalist={dataList}
            />
          </div>
          <div className="w-250px h-300px bg-blue">下载客户端</div>
        </div>
        <RightOutlined
          onClick={() => swiper_ref.current?.next()}
          className="font-size-40px text-white size-40px"
        />
      </div>
      {/* 推荐 */}
      <div className="w-100%">
        <div className="w-1000px flex m-auto border-x-solid border-x-1px border-x-gray bg-white">
          <div className="w-750px h-600px border-1px ">
            {/* 热门推荐 */}
            <RecommedCard className="mb-20px" title={hot_recommend}>
             
            </RecommedCard>
            {/* 新碟上架 */}
            <RecommedCard className="mb-20px" title={new_album}>
              你好啊
            </RecommedCard>
            {/* 榜单 */}
            <RecommedCard className="mb-20px" title={toplist}>
              你好啊
            </RecommedCard>
          </div>
          <div className="w-250px bg-blue h-600px"></div>
        </div>
      </div>
    </>
  );
}
