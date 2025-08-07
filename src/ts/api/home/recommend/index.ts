import { request } from "../../../../tools/request/index";
type banner_type = 0 | 1 | 2 | 3;
import type { Data } from "../../../../ts/Type/component/Swiper";
export const get_banners = async (type: banner_type = 0): Promise<Data> => {
  try {
    const res = request({
      url: "/banner",
      method: "get",
      params: { type },
    });
    return res as unknown as Data;
  } catch (error) {
    return error as unknown as Data;
  }
};
