import type { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>["items"][number];
// 导航栏配置项
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

export type Banner = {
    targetId: number | string;
    bigImageUrl: string;
    imageUrl: string;
    targetType: number | string;
    typeTitle: string;
    s_ctrp: number;
    url: number;
};

export type Data = {
    banners: Banner[];
    trp: {
        rule: string[];
    };
    code: number;
};

export interface PlaylistHot {
    tags: Tag[];
    code: number;
}

export interface Tag {
    playlistTag: PlaylistTag;
    activity:    boolean;
    usedCount:   number;
    hot:         boolean;
    category:    number;
    createTime:  number;
    position:    number;
    name:        string;
    id:          number;
    type:        number;
}

export interface PlaylistTag {
    id:             number;
    name:           string;
    category:       number;
    usedCount:      number;
    type:           number;
    position:       number;
    createTime:     number;
    highQuality:    number;
    highQualityPos: number;
    officialPos:    number;
}

export interface Personalized_res {
    hasTaste: boolean;
    code:     number;
    category: number;
    result:   Result[];
}

export interface Result {
    id:                    number;
    type:                  number;
    name:                  string;
    copywriter:            string;
    picUrl:                string;
    canDislike:            boolean;
    trackNumberUpdateTime: number;
    playCount:             number;
    trackCount:            number;
    highQuality:           boolean;
    alg:                   Alg;
}

export type Alg = "alg_high_quality";


export interface NewAlbum {
    code:   number;
    albums: Album[];
}

export interface Album {
    name:            string;
    id:              number;
    type:            Type;
    size:            number;
    picId:           number;
    blurPicUrl:      string;
    companyId:       number;
    pic:             number;
    picUrl:          string;
    publishTime:     number;
    description:     string;
    tags:            string;
    company:         string;
    briefDesc:       string;
    artist:          Artist;
    songs:           null;
    alias:           any[];
    status:          number;
    copyrightId:     number;
    commentThreadId: string;
    artists:         Artist[];
    paid:            boolean;
    onSale:          boolean;
    picId_str:       string;
    transNames?:     string[];
}

export interface Artist {
    name:         string;
    id:           number;
    picId:        number;
    img1v1Id:     number;
    briefDesc:    string;
    picUrl:       string;
    img1v1Url:    string;
    albumSize:    number;
    alias:        string[];
    trans:        Trans;
    musicSize:    number;
    topicPerson:  number;
    picId_str?:   string;
    img1v1Id_str: string;
    transNames?:  Trans[];
}

export type Trans = "" | "贾斯汀·比伯" | "魔力红";

export type Type = "专辑";
