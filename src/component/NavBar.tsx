import React from "react";
import { Layout, ConfigProvider, Menu, Button } from "antd";
import type { MenuProps } from "antd";
import Search from "./Search";
type MenuItem = Required<MenuProps>["items"][number];
import { useNavigate, useLocation } from "react-router";
const { Header } = Layout;
const theme = {
  components: {
    Menu: {
      horizontalItemSelectedColor: "#fff",
      horizontalItemSelectedBg: "black",
      itemColor: "#ccc",
      itemHoverColor: "#fff",
      horizontalItemHoverBg: "black",
      darkItemColor: "#ccc",
      darkItemHoverColor: "#1890ff",
      darkItemSelectedColor: "#1890ff",
      darkItemBg: "#242424",
      darkSubMenuItemBg: "#242424",
      activeBarBorderWidth: 0,
      activeBarHeight: 0,
    },
    Input: {
      activeBorderColor: "#ccc",
      hoverBorderColor: "#ccc",
    },
    Button: {
      defaultGhostBorderColor: "#ccc",
      defaultHoverBorderColor: "#fff",
      defaultGhostColor: "#ccc",
      defaultHoverColor: "#fff",
      textTextColor: "#ccc",
      textTextHoverColor: "#fff",
    },
  },
};
const theme2 = {
  components: {
    Menu: {
      horizontalItemSelectedColor: "#fff",
      horizontalItemSelectedBg: "#00000050",
      itemColor: "#fff",
      itemHoverColor: "#fff",
      horizontalItemHoverBg: "#00000050",
      darkItemColor: "#fff",
      darkItemHoverColor: "#1890ff",
      darkItemSelectedColor: "#1890ff",
      darkItemBg: "#242424",
      darkSubMenuItemBg: "#242424",
      activeBarBorderWidth: 0,
      activeBarHeight: 0,
    },
  },
};
export default function NavBar({
  options,
}: {
  options: { items: MenuItem[]; active_key: string }[];
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSelect = (e: { key: string }) => {
    navigate(`/${e.key}`);
  };
  const handleSelect2 = (e: { key: string }) => {
    navigate(`${location.pathname}/${e.key}`);
  };
  return (
    <>
      <ConfigProvider theme={theme}>
        <Header className="bg-#242424 text-center text-#fff p-inline-48 h-70px lh-70px overflow-hidden">
          <div className=" m-auto flex justify-center items-center w-1200px">
            <img
              src="/icons/logo/topbar.png"
              alt="网易云音乐"
              className="mr-10px"
            />
            <Menu
              mode="horizontal"
              items={options[0].items}
              className="bg-#242424"
              onSelect={handleSelect}
              defaultSelectedKeys={[options[0].active_key]}
            />
            <Search className="w-180px m-10px" />
            <Button ghost className="rounded-2xl">
              创作者中心
            </Button>
            <Button className="hover-underline" type="text">
              登录
            </Button>
          </div>
        </Header>
      </ConfigProvider>
      {options[1] && (
        <ConfigProvider theme={theme2}>
          <Header className="bg-#C20C0C  p-inline-48 h-40px lh-40px overflow-hidden">
            <div className="m-auto  w-1200px">
              <Menu
                className="ml-250px bg-#C20C0C"
                mode="horizontal"
                items={options[1].items}
                defaultSelectedKeys={[options[1].active_key]}
                onSelect={handleSelect2}
              />
            </div>
          </Header>
        </ConfigProvider>
      )}
    </>
  );
}
