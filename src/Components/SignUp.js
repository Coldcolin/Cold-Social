import React from 'react'
import styled from "styled-components"

const SignUp = () => {
    return (
        <Container>
            <Wrapper>
                <Card>
                    <Image/>
                    <Button htmlFor="pix">Upload</Button>
                    <input type="file" id="pix" style={{display: "none"}}/>
                    <Name placeholder="Name"/>
                    <PhoneNumber placeholder="Phone Number"/>
                    <Email placeholder="Email"/>
                    <Password placeholder="Password"/>
                    <Confirm placeholder="Confirm Password"/>
                    <Submit>Submit</Submit>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default SignUp

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
`
const Image = styled.div`
    width: 150px;
    height: 150px;
    border-radius:50%;
    background-color: grey;
    border: 1px solid black;
    margin: 20px;
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
const PhoneNumber = styled.input`
    width: 400px;
    height: 30px;
    border-radius: 10px;
    outline: none;
    border: none;
    margin: 10px;
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
const Confirm = styled.input`
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
const Button = styled.label`
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

    :hover{
        cursor: pointer;
        box-shadow: 15px 14px 28px rgba(0,0,0,0.25), 0px 10px 10px rgba(0,0,0,0.22);
        transition: all 400ms;
        background-color: #3C2F20;
    }
`
//https://console.firebase.google.com/u/0/project/our-first-project-a3202/firestore/indexes/single-field?create_exemption=Cltwcm9qZWN0cy9vdXItZmlyc3QtcHJvamVjdC1hMzIwMi9kYXRhYmFzZXMvKGRlZmF1bHQpL2NvbGxlY3Rpb25Hcm91cHMvU29jaWFsQXBwL2ZpZWxkcy90eXBlEAIaCAoEdHlwZRAB