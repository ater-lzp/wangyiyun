import { Layout } from "antd";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import Body from "./component/Body";
import type { MenuProps } from "antd";
import { option } from "./ts/Type/component/NavBar";
import { Outlet } from "react-router";
type MenuItem = Required<MenuProps>["items"][number];

const option2: { active_key: string; items: MenuItem[] } = {
  active_key: "1",
  items: [
    {
      label: "推荐",
      key: "1",
    },
    {
      label: "排行榜",
      key: "2",
    },
    {
      label: "歌单",
      key: "3",
    },
    {
      label: "播客",
      key: "4",
    },
    {
      label: "歌手",
      key: "5",
    },
    {
      label: "新碟上架",
      key: "6",
    },
  ],
};
option.active_key = "home";
option2.active_key = "1";
const options = [option, option2];

function App() {
  return (
    <>
      <Layout>
        <NavBar options={options}></NavBar>
        <Body>
          <Outlet />
        </Body>
        <Footer></Footer>
      </Layout>
    </>
  );
}

export default App;
