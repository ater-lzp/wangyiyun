import { Layout } from "antd";
import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import Body from "@/component/Body";
import { options } from "@/ts/type/index";
import { Outlet } from "react-router";


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
