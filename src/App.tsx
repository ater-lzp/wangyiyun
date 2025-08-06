import { Layout } from "antd";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import Body from "./component/Body";
import type { MenuProps } from "antd";
import { options } from "./ts/Type/component/NavBar";
import { Outlet } from "react-router";
type MenuItem = Required<MenuProps>["items"][number];


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
