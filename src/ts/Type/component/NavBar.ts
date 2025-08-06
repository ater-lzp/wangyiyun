import type { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>["items"][number];

export const options: { items: MenuItem[] } = {
  items: [
    {
      label: "发现音乐",
      key: "home",
      children: [
        {
          label: "推荐",
          key: "recommend",
        },
        {
          label: "排行榜",
          key: "toplist",
        },
        {
          label: "歌单",
          key: "playlist",
        },
        {
          label: "播客",
          key: "djradio",
        },
        {
          label: "歌手",
          key: "artist",
        },
        {
          label: "新碟上架",
          key: "album",
        },
      ]
    },
    {
      label: "我的音乐",
      key: "my_music",
    },
    {
      label: "关注",
      key: "subscribe",
    },
    {
      label: "商城",
      key: "shop",
    },
    {
      label: "音乐人",
      key: "singer",
    },
    {
      label: "云推歌",
      key: "music_recommend",
    },
    {
      label: "下载客户端",
      key: "download",
    },
  ],
};
