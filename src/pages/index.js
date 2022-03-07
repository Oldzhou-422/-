import Tabbar from '@/components/Tabbar';
import { StoreProvider } from "think-react-store"
import * as store from '@/store';
/* import ErrorBoundary from '@/components/ErrorBoundary'; */
import { useLocation } from 'umi';
import './index.less';
export default function IndexPage(props) {
  const location = useLocation();
  const path = ['/', '/home', '/user', '/order'];
  return (
      <StoreProvider store={store}>
        {props.children}
        <Tabbar
          show={path.includes(location.pathname)}
          pathname={location.pathname}
        ></Tabbar>
      </StoreProvider>
  );
}
