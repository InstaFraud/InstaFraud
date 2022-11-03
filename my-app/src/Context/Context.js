import React, { useEffect, useState } from 'react'
import Posts from './MockData/UsersData'

const InstFraudContext = React.createContext();

const InstFraudProvider=({children})=> {
    const [InstUsers, setInstaUsers] = useState([]);
    const [userPosts, setUserPosts] = useState([])    //mockdata
    const [registerClicked, setRegisterClicked] = useState(false)
    const [isTwittClicked, setIsTwittClicked] = useState(false)
    const [readmoreClicked, setreadmoreClicked] = useState(false) //to toggle read more btn
    const [likeAmount, setLikeAmount] = useState(0)
    const [likeCliked, setLikedClicked] = useState(false)
    const [imageViewClicked, setImageViewClicked] = useState(false)
    const [viewClickedPost,setViewClickedPost]= useState([])

    const toggleReadmoreText=()=>{
        setreadmoreClicked(prevState=>!prevState)
    }
    const viewImagehandler =(PostId) =>{
      const clickedPost =  userPosts.filter((singlepost)=> PostId===singlepost.id)
      setViewClickedPost(clickedPost)
      setImageViewClicked(true)
    }

    const fetchLikeClickhandeler= (postid)=>{
      // const likes = fetch(`https://inst.com ${postid}`)
      const likes =200
      setLikeAmount(likes)
    }

   const LikeClickhandeler=()=>{
     if(likeCliked){
      setLikeAmount(likeAmount - 1)
      setLikedClicked(false)
    }else{
      setLikeAmount(likeAmount + 1)
      setLikedClicked(true)
    }
   }
    

    useEffect(()=>{
      setUserPosts(Posts)
    },[userPosts])
   
    useEffect(()=>{
      fetchLikeClickhandeler()
    },[])
    
  return (
        <InstFraudContext.Provider value={{
                InstUsers,
                userPosts,
                setInstaUsers,
                registerClicked, 
                setRegisterClicked,
                isTwittClicked,
                setIsTwittClicked,
                readmoreClicked,
                toggleReadmoreText,
                likeAmount,
                LikeClickhandeler,
                viewImagehandler,
                viewClickedPost,
                imageViewClicked,
                setImageViewClicked,
            }}>
                {children}
        </InstFraudContext.Provider>
  )
}

export {InstFraudContext, InstFraudProvider}