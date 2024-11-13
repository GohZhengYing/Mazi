import { useState ,React} from 'react';
import styles from '../../styles/component.module.css';
import Sidebar from '../../components/sidebar'
import HomePage from '../../components/HomePage'
import { Provider } from "../../components/ui/provider"
import { HStack, VStack, Box } from '@chakra-ui/react';

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed) => {
    setIsCollapsed(collapsed);
  };
  return (
    <Provider>
    <HStack className={`${styles.container}`}  bg="#ABCDEF" h="100vh">
      <Sidebar onToggle={handleSidebarToggle} isCollapsed={isCollapsed} />

      <Box className={`${styles.content} ${isCollapsed ? styles.contentCollapsed : styles.contentExpanded}`} >
        <HomePage />
      </Box>
    </HStack></Provider>
  );
}