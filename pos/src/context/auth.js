import { useContext } from 'react';
import { loginContext } from './context';
import { When } from 'react-if';

export default function Auth(props) {
  const login = useContext(loginContext);

  const isLoggedIn = login.loggedIn;
  const can = login.canDo(props.capability);

  return <When condition={isLoggedIn && can}>{props.children}</When>;
}
