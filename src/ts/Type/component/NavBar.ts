import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const option: { active_key: string; items: MenuItem[] } = {
  active_key: "",
  items: [
    {
      label: "发现音乐",
      key: "home",
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
