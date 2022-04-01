import React from "react"
import styled from "styled-components"

const LogIn =()=>{
    return(
        <Container>
            <Wrapper>
                <Card>
                    <span> Welcome Back</span>
                    <Name placeholder="User name"/>
                    <Email placeholder="Email"/>
                    <Password placeholder="Password"/>
                    <Submit>Submit</Submit>
                </Card>
            </Wrapper>
        </Container>
    )
}
export default LogIn

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
    height: 600px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3);;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span{
        font-size: 30px;
        color: white;
        font-weight: bold;
    }
`
const Name = styled.input`
    width: 400px;
    height: 30px;
    border-radius: 10px;
    outline: none;
    border: none;
    margin: 10px;
    display: flex;
    padding-left: 10px;
`

const Email = styled.input`
    width: 400px;
    height: 30px;
    border-radius: 10px;
    outline: none;
    border: none;
    margin: 10px;
    padding-left: 10px;
`
const Password = styled.input`
    width: 400px;
    height: 30px;
    border-radius: 10px;
    outline: none;
    border: none;
    margin: 10px;
    padding-left: 10px;
`

const Submit = styled.button`
    width: 200px;
    height: 40px;
    background-color: #795E40;
    color: white;
    border-radius:5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    transition: all 350ms ;
    outline: none;
    border: none;

    :hover{
        cursor: pointer;
        box-shadow: 15px 14px 28px rgba(0,0,0,0.25), 0px 10px 10px rgba(0,0,0,0.22);
        transition: all 400ms;
        background-color: #3C2F20;
    }
`
