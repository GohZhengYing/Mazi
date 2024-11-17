import { useState ,React} from 'react';
import styles from '@/styles/component.module.css';
import Sidebar from '@/components/sidebar'
import { HStack, VStack, Box } from '@chakra-ui/react';

import Chatlist from '@/components/chatlist'
import Conversation from '@/layouts/home/Conversation';
import Settings from '@/components/home/Settings'
import Community from '@/components/home/Community'
import Contacts from '@/components/home/Contacts'

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleSidebarToggle = (collapsed) => {
    setIsCollapsed(collapsed);
  };

  const [activeTab, setActiveTab] = useState('chat');

  return (
      <HStack className={`${styles.container}`}  bgColor="white" h="100vh" w='100vw'>
      <Sidebar onToggle={handleSidebarToggle} isCollapsed={isCollapsed} setActiveTab={setActiveTab}/>
      <Box className={`${styles.content} ${isCollapsed ? styles.contentCollapsed : styles.contentExpanded}`} >
      <HStack h="100vh">
      {activeTab === 'chat' && <Chatlist/>}
        {activeTab === 'contacts' && <Contacts/>}
        {activeTab === 'community' && <Community/>}
        {activeTab === 'settings' && <Settings/>}
      
      <Conversation/>
      </HStack>
      </Box>
    </HStack>
  );
}