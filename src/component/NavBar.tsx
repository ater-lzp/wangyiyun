import { useRef, useMemo } from "react";
import { Layout, ConfigProvider, Menu, Button } from "antd";
import Search from "./Search";
import { useNavigate, useLocation } from "react-router";
import type { MenuItem } from "../ts/Type/component/NavBar";

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

export default function NavBar(
  {
    options
  }: { options: { items: MenuItem[] } }
) {
  const first = useRef("home")
  const navigate = useNavigate();
  const location = useLocation();

  // 使用 useMemo 优化路径计算
  const { firstActive, secondActive } = useMemo(() => {
    const paths = location.pathname.split('/').filter(Boolean);
    const firstPath = paths[0] || '';
    const secondPath = paths[1] || '';

    return {
      firstActive: firstPath ? [firstPath] : [],
      secondActive: secondPath ? [secondPath] : []
    };
  }, [location.pathname]);

  const current_item = useMemo(() =>
    options.items.find(item => item?.key === firstActive[0]) as MenuItem & { children: MenuItem[] }
    , [options.items, firstActive])

  const handleSelect = (e: { key: string }) => {
    first.current = e.key;
    navigate(`/${e.key}`);
  };

  const handleSelect2 = (e: { key: string }) => {
    navigate(`/${first.current}/${e.key}`);
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
              items={options.items.map((item: MenuItem) => {
                const { children, ...item2 } = item as MenuItem & { children: MenuItem[] };
                return item2 as MenuItem;
              })}
              className="bg-#242424"
              onSelect={handleSelect}
              selectedKeys={firstActive}
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
      {current_item?.children && (
        <ConfigProvider theme={theme2}>
          <Header className="bg-#C20C0C  p-inline-48 h-40px lh-40px overflow-hidden">
            <div className="m-auto  w-1200px">
              <Menu
                className="ml-250px bg-#C20C0C"
                mode="horizontal"
                items={current_item?.children}
                selectedKeys={secondActive}
                onSelect={handleSelect2}
              />
            </div>
          </Header>
        </ConfigProvider>
      )}
    </>
  );
}