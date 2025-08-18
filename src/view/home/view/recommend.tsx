import { useLayoutEffect, useState, useRef } from "react";
import Swiper from "@/component/Swiper";
import type { SwiperRef } from "@/component/Swiper";
import {
  get_banners,
  get_hot_playlist_categories,
  get_recommend_playlist,
  get_new_album
} from "@/ts/api";
import type { Banner, Album, Result } from "@/ts/type";
import { LeftOutlined, RightOutlined, PlayCircleOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import RecommedCard from "@/component/RecommedCard";
import List from "@/component/List";
import { Carousel } from "antd";

const CARD_CONFIG = [
  { key: "hot", title: "热门推荐" },
  { key: "recommend", title: "个性化推荐" },
  { key: "new_album", title: "新碟上架" },
  { key: "toplist", title: "榜单" }
];

function PlaylistList({ playlist }: { playlist: Result[] }) {
  return (
    <List className="w-100% h-450px" row={2} col={4}>
      {playlist.map(item => (
        <div className="px-20px" key={item.id}>
          <div className="mt-20px w-140px h-140px m-auto relative">
            <img src={item.picUrl} alt="" width="100%" height="100%" />
            <div className="w-100% flex justify-between bg-#00000050 absolute bottom-0 color-white px-10px">
              <span><CustomerServiceOutlined className="mr-5px" />{item.playCount}</span>
              <span title="播放"><PlayCircleOutlined className="hover-color-red" /></span>
            </div>
          </div>
          <span className="whitespace-nowrap">{item.name}</span>
        </div>
      ))}
    </List>
  );
}

function AlbumList({ albums }: { albums: Album[][] }) {
  return (
    <Carousel className="w-650px h-150px" draggable dots={false}>
      {albums.map((items, i) => (
        <List row={1} col={5} className="w-100% h-150px" key={i}>
          {items.map(x => (
            <div key={x.id}>
              <div className="flex flex-col items-start justify-between w-80%">
                <div className="w-100% h-100px relative flex flex-col items-center">
                  <div className="w-100px h-100px border-rd-50% bg-black absolute left-15px z0"></div>
                  <div className="w-90px h-90px border-1px border-solid border-gray absolute left-16px top-5px z1"></div>
                  <img src={x.blurPicUrl} width="100px" height="100px" className="z2 relative" />
                </div>
                <div className="font-size-12px flex flex-col items-start">
                  <span className="whitespace-nowrap w-90%">{x.name}</span>
                  <span className="whitespace-nowrap">
                    {x.artists.map((artist, i) => (
                      <span key={i} className="mr-5px">{artist.name}</span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </List>
      ))}
    </Carousel>
  );
}

export default function Recommend() {
  const [banners, set_banners] = useState<Banner[]>([]);
  const [hotPlaylistCategories, set_hotPlaylistCategories] = useState<any>({});
  const [playlist, set_playlist] = useState<Result[]>([]);
  const [albums, set_albums] = useState<Album[][]>([]);
  const swiper_ref = useRef<SwiperRef>(null);

  useLayoutEffect(() => {
    Promise.all([get_banners(), getNewAlbum(), getBanners(), getHotPlaylistCategories(), getPlaylist()])
  }, []);

  const getBanners = async (type: 0 | 1 | 2 | 3 = 0) => {
    try {
      const res = await get_banners(type);
      set_banners(res.banners);
    } catch (error) {
      console.log(error);
    }
  };

  const getHotPlaylistCategories = async () => {
    try {
      const res = await get_hot_playlist_categories();
      const items = res.tags.map((item: any) => ({
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

  const getPlaylist = async () => {
    try {
      const res = await get_recommend_playlist(8);
      set_playlist(res.result);
    } catch (error) {
      console.log(error);
    }
  };

  const getNewAlbum = async (items: number | string = 5) => {
    try {
      const res = await get_new_album();
      const chunkSize = Number(items) || 5;
      const chunkedAlbums: Album[][] = [];
      for (let i = 0; i < res.albums.length; i += chunkSize) {
        chunkedAlbums.push(res.albums.slice(i, i + chunkSize));
      }
      set_albums(chunkedAlbums);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
          <div className="w-250px h-300px border-l-1px border-l-gray border-l-solid flex items-center justify-center">
            下载客户端
          </div>
        </div>
        <RightOutlined
          onClick={() => swiper_ref.current?.next()}
          className="font-size-40px text-white size-40px"
        />
      </div>
      {/* 推荐区块 */}
      <div className="w-1080px m-auto">
        <div className="w-1000px flex m-auto border-x-solid border-x-1px border-x-gray bg-white">
          <div className="w-750px border-1px">
            <RecommedCard className="mb-20px" title={hotPlaylistCategories}>
              <PlaylistList playlist={playlist} />
            </RecommedCard>
            <RecommedCard className="mb-20px" title={{ title: "新碟上架", url: "", color: "black", size: "20px" }}>
              <div className="h-190px m-20px flex justify-center items-center bg-#f5f5f5 border-solid border-gray border-1px">
                <LeftOutlined />
                <AlbumList albums={albums} />
                <RightOutlined />
              </div>
            </RecommedCard>
            <RecommedCard className="mb-20px" title={{ title: "榜单", url: "", color: "black", size: "20px" }}>
              你好啊
            </RecommedCard>
          </div>
          <div className="w-250px border-l-1px border-l-gray border-l-solid"></div>
        </div>
      </div>
    </div>
  );
}