import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Picture from "./Images/pexels-photo-1365795.jpeg"
import { useNavigate } from "react-router-dom"
import { onSnapshot, collection, query, where, collectionGroup} from "firebase/firestore"
import { db } from "../base"

const ViewsPage = ()=>{
    const navigate= useNavigate()
    const [data, setData] = useState([])
    const [comment, setComment] = useState([])
    const [details, setDetails] = useState([])
    const colData = collection(db, "SocialApp")
    const colComment = collection(db, "Comments")
    const colDetails = collection(db, "Details")
    const q = query(collectionGroup(db, "SocialApp"), where("type", "==", "Comments"))
    const getData = async ()=>{
        onSnapshot(colData, (snapshot)=>{
            const store = []
            snapshot.forEach((doc)=>{
                store.push({...doc.data(), id: doc.id})
            })
            setData(store)
        })
        console.log(data)
    }
    const getComment = async ()=>{
        onSnapshot(colComment, (snapshot)=>{
            const store = []
            snapshot.forEach((doc)=>{
                store.push({...doc.data(), id: doc.id})
            })
            setComment(store)
        })
        console.log(comment)
    }
    const getDetails = async ()=>{
        onSnapshot(colDetails, (snapshot)=>{
            const store = []
            snapshot.forEach((doc)=>{
                store.push({...doc.data(), id: doc.id})
            })
            setDetails(store)
        })
        console.log(details)
    }
    useEffect(()=>{
        getData();
        getComment();
        getDetails()
    }, [])
    return(
        <Container>
            <Wrapper>
            <AddPost onClick={()=>{ navigate("/Add")}}>Add Post</AddPost>
               {
                   data?.map((props, id) =>(
                    <Contents key={id}>
                    <Post>
                        <Image src={props.image}/>
                        <Description>{props.Description}</Description>
                    </Post>
                    {
                        comment?.map((props, id)=>(
                            <Comments key={id}>
                        <Avatar src={Picture} />
                        <User>
                        <Talk>{props.comment}</Talk>
                       {
                           details?.map((props, id)=>(
                            <Details key={id}>
                            <Name>{props.Name}</Name>
                            <Number>{props.Email}</Number>
                        </Details>
                           ))
                       }
                        </User>
                    </Comments>
                        ))
                    }
                </Contents>
                   ))
               }
            </Wrapper>
        </Container>

    )
}
export default ViewsPage

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px)
    display: flex;
    justify-content: center;
    padding:  50px 150px;
`
const Wrapper = styled.div`
    width: 80%;
    min-height: calc(100vh - 70px);
    background-color: rgba(124, 88, 47, 0.4);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: flex-start;
    padding-top: 20px;
`
const Contents = styled.div`
    width: 80%;
    height: auto;
    background-color: rgba(0,0,0,0.22);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
`
const Post = styled.div`
    width: 90%;
    background-color: rgba(51, 38, 46, 0.4);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Image = styled.img`
    width: 90%;
    border-radius: 10px;
    object-fit: cover;
    margin: 10px;
`
const Description = styled.div`
    width: 90%;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.22);
    margin: 5px;
    color: white;
`
const Comments = styled.div`
    width: 90%;
    background-color: rgba(126, 90, 45, 0.5);
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 10px;
`
const User = styled.div`
    width: calc(100% - 50px);
`
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: blue;
    color: white;
    margin: 5px;
    object-fit: cover;
`
const Talk = styled.div`
    width: 90%;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.22);
    margin: 5px;
    color: white;
`
const Details = styled.div`
    width: width: calc(100% - 50px);
    display: flex;
    justify-content: space-around;
    background-color: rgba(0,0,0,0.22);
    color: white;
`
const Name = styled.div``
const Number = styled.div``
const AddPost = styled.div`
    width: 200px;
    height: 40px;
    background-color: #795E40;
    color: white;
    border-radius:5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 350ms ;

    :hover{
        cursor: pointer;
        box-shadow: 15px 14px 28px rgba(0,0,0,0.25), 0px 10px 10px rgba(0,0,0,0.22);
        transition: all 400ms;
        background-color: #3C2F20;
    }
`