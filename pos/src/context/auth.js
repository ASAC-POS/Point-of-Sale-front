import { useContext } from 'react';
import { LoginContext } from './context';
import { When } from 'react-if';

export default function Auth(props) {
  const login = useContext(LoginContext);

  const isLoggedIn = login.loggedIn;
  const can = login.canDo(props.capability);

  return <When condition={isLoggedIn && can}>{props.children}</When>;
}
