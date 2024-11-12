import { useState ,React} from 'react';
import styles from '../../styles/component.module.css';
import Sidebar from '../../components/sidebar'
import ChatList from '../../components/page'
import Conversation from '../../layouts/home/Conversation'
import { Provider } from "../../components/ui/provider"
import { HStack } from '@chakra-ui/react';

export default function Page() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed) => {
    setIsCollapsed(collapsed);
  };
  return (
    <Provider>
    <div className={`container ${styles.container}`}>
      <Sidebar onToggle={handleSidebarToggle} isCollapsed={isCollapsed} />
      <HStack>
      <ChatList />
      <Conversation/>
      </HStack>
      <div className={`${styles.content} ${isCollapsed ? styles.contentCollapsed : styles.contentExpanded}`}>
      {/* <ChatList /> */}
      </div>
    </div></Provider>
  );
}