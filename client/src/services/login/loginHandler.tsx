import router from 'next/router'
import api from '../API'

async function loginHandler(email,password){
    try {
      const response = await api.post('/user/login',{
        email:email,
        password:password
      })
      console.log(response.data)
      localStorage.setItem('MaziToken',response.data.token)
      localStorage.setItem('MaziEmail',email)
      router.push('/home')
    } catch (error) {
      console.log(error)
    }

}

export default loginHandler