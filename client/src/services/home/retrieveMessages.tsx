import api from '../API'

async function retrieveMessages(receiverEmail){
    try {
      const response = await api.patch('/messages',{
        receiverEmail,
        senderEmail:localStorage.getItem('MaziEmail')
      },     
      {
        headers:{
            Authorization:`Bearer ${localStorage.getItem('MaziToken')} ${localStorage.getItem('MaziEmail')}`
        }
    })
      return response.data

    } catch (error) {
      console.log(error)
    }

}

export default retrieveMessages