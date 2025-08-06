import { Layout } from "antd";
const { Footer: AtnFooter } = Layout;
const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
export default function Footer() {
  return <AtnFooter style={footerStyle}>
    footer  
  </AtnFooter>;
}
