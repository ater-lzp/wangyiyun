import React from 'react'
import {  Layout } from "antd";
const {  Content } = Layout;
const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
  };
  
export default function Body({ children }: { children?: React.ReactNode }) {
  return (
    <Content style={contentStyle}>{children}</Content>
  )
}
