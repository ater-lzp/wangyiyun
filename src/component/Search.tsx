import type { ComponentProps } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function Search(props: ComponentProps<typeof Input>) {
  return (
    <Input type="text" prefix={<SearchOutlined />} placeholder="音乐/视频/电台/用户" {...props} />
  );
}
