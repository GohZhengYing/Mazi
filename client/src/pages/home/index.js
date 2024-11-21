import { useState ,React, useEffect} from 'react';
import styles from '@/styles/component.module.css';
import Sidebar from '@/components/sidebar'
import { HStack, VStack, Box, Separator } from '@chakra-ui/react';

import Chatlist from '@/components/chatlist'
import Conversation from '@/layouts/home/Conversation';
import Settings from '@/components/home/Settings'
import Community from '@/components/home/Community'
import Contacts from '@/components/home/Contacts'
import retrieveMessages from '../../services/home/retrieveMessages'

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState([])
  const [receiverUsername, setReceiverUsername] = useState('')
  const [receiverEmail, setReceiverEmail] = useState('')
  const [senderEmail, setSenderEmail] = useState('')

  const handleSidebarToggle = (collapsed) => {
    setIsCollapsed(collapsed);
  };

  useEffect(()=>{
    async function loadmsg(){
      const res = await retrieveMessages('jy@gmail.com')
      setMessages(res.chat)
      setReceiverUsername('jy')
      setReceiverEmail('jy@gmail.com')
      setSenderEmail(localStorage.getItem('MaziEmail'))
  }

  loadmsg()
  },[])

  return (
      <HStack className={`${styles.container}`}  bgColor="white" h="100vh" w='100vw'>
      <Sidebar onToggle={handleSidebarToggle} isCollapsed={isCollapsed} setActiveTab={setActiveTab}/>
      <Box className={`${styles.content} ${isCollapsed ? styles.contentCollapsed : styles.contentExpanded}`} >
      <HStack h="100vh" gap="0">
      {activeTab === 'chat' && <Chatlist/>}
        {activeTab === 'contacts' && <Contacts/>}
        {activeTab === 'community' && <Community/>}
        {activeTab === 'settings' && <Settings/>}
      <Separator orientation="vertical" borderColor="white" size="sm"/>
      <Conversation messages={messages} receiverUsername={receiverUsername} receiverEmail={receiverEmail} senderEmail={senderEmail}/>
      </HStack>
      </Box>
    </HStack>
  );
}