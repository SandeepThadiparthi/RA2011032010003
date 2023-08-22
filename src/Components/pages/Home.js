import React from "react";
import Navbar from "../Navbar";
import Trains from "../Trains";

import styled from "styled-components";
const Division  = styled.div`
padding : 40px;
`
export default function Home() {
    return <>
        <Navbar />
        <Division>
        <Trains />
        </Division>
       
    </>
};