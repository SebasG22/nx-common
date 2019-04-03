import { LoginLoaded } from './login.actions';
import {
  LoginState,
  Entity,
  initialState,
  loginReducer
} from './login.reducer';

describe('Login Reducer', () => {
  const getLoginId = it => it['id'];
  let createLogin;

  beforeEach(() => {
    createLogin = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Login actions ', () => {
    it('should return set the list of known Login', () => {
      const logins = [createLogin('PRODUCT-AAA'), createLogin('PRODUCT-zzz')];
      const action = new LoginLoaded(logins);
      const result: LoginState = loginReducer(initialState, action);
      const selId: string = getLoginId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = loginReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
