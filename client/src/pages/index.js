import { Provider } from "@/components/ui/provider"
import { theme } from '../theme/index.js';
import { WelcomePage } from '@/components/WelcomePage';


export default function Home() {
  return (
      <Provider theme={theme}>
        <WelcomePage/>
    </Provider>
  );
}
