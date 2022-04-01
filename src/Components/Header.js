import React from "react"
import styled from "styled-components"
import logo from "./Images/setting-512x512-675843.png"
import {useNavigate} from "react-router-dom"

const Header =()=>{
    const navigate = useNavigate()
    
    return(
        <Container>
            <Wrapper>
                <Logo src={logo} alt="" 
                onClick={()=>{
                    navigate("/")
                }}/>
                
            </Wrapper>
        </Container>
    )
}
export default Header

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #473664;
    box-shadow: rgba(0, 0,0, 0.4) 0px  10px;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`
const Logo = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
    align-items: center;
    margin-top: 5px;
    :hover{
        cursor: pointer;
    }
`