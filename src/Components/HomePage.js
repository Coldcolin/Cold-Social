import React from "react"
import styled from "styled-components"
import logo from "./Images/setting-512x512-675843.png"
import {NavLink} from "react-router-dom"


const HomePage = ()=>{
    
    return(
        <Container>
            <Wrapper>
                <Card>
                    <Well>Welcome to ColdSocial!</Well>
                    <Show src={logo} alt=""/>
                    <Buts>
                        <Log>
                            <span>Already Have an Account?</span>
                            <Hit bg to="/Login">Login</Hit>
                        </Log>
                        <Sign>
                        <span>Don't Have an Account Yet?</span>
                        <Hit to="/SignUp">Sign Up</Hit>
                        </Sign>
                    </Buts>
                </Card>
            </Wrapper>
        </Container>
    )
}
export default HomePage

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
`
const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
`
const Card = styled.div`
    width: 599px;
    height: 400px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3);;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Well = styled.div`
    font-size: 40px;
    color: white;
    font-family: poppins;
    font-weight: Bold;
    flex: 1;
`
const Buts = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;
`
const Log = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        font-size: 20px;
        font-weight: bold;
        color: white;
    }
`
const Sign = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        font-size: 20px;
        font-weight: bold;
        color: white;
    }
`
const Hit = styled(NavLink)`
    width: 100px;
    height: 30px;
    color: white;
    background-color: ${({bg})=>(bg? "#C0893E": "#423257")};
    border-radius: 5px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transform: scale(1);
    transition: all 350ms;
    text-decoration: none;

    :hover{
        cursor: pointer;
        transform: scale(1.002);
        box-shadow: rgba(0,0,0, 0.4) 2px 2px;
        transition: all 350ms;
    }
`
const Show = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
`