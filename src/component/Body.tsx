import React from 'react'
import {  Layout } from "antd";
const {  Content } = Layout;
const contentStyle: React.CSSProperties = {
  };
  
export default function Body({ children }: { children?: React.ReactNode }) {
  return (
    <Content style={contentStyle}>{children}</Content>
  )
}
