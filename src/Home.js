import React from "react";
import { useParams } from 'react-router-dom';



const Home=()=> {
  const { slug } = useParams();
  const StyleSheet={
    width:"100vw",
    height:"100vh",
    backgroundColor: slug==="1"?"#FF2E63":"#08D9D6",
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column"
  }

  return (
    
    <div style={StyleSheet}>
      <h2>Home View</h2>
      <h3>{slug}</h3>
      <p>在React中使用React Router v6 的指南</p>
    </div>
  );
}
export default Home;