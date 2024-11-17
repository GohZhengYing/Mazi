import React,{useState,useEffect} from 'react'
import api from '../services/API'
import {useRouter} from 'next/router'
import LoadingPage from '@/components/loading/LoadingPage'

const Validate = (props) => {
    const router  = useRouter()
    const [validUser,setValidUser] = useState(false)
    const [childComponent,setChildComponent] = useState(<LoadingPage/>)
    useEffect(()=>{
        async function auth(){
            try {
                const response = await api.get('/auth',
                    {
                        headers:{
                            Authorization:`Bearer ${localStorage.getItem('MaziToken')} ${localStorage.getItem('MaziEmail')}`
                        }
                    })
                    if(response.data.status){
                        
                        setValidUser(true)
                    }
                    else{
                        router.push('/login')
                    }
            } catch (error) {
                console.log(error)
            }

    validUser? setChildComponent(props.children) :setChildComponent(<LoadingPage/>)
        }

        auth()

        
    },[validUser])
    return(
        childComponent
    )

}

export default Validate