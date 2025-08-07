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
