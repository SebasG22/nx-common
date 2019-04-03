import { Entity, LoginState } from './login.reducer';
import { loginQuery } from './login.selectors';

describe('Login Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getLoginId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createLogin = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      login: {
        list: [
          createLogin('PRODUCT-AAA'),
          createLogin('PRODUCT-BBB'),
          createLogin('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Login Selectors', () => {
    it('getAllLogin() should return the list of Login', () => {
      const results = loginQuery.getAllLogin(storeState);
      const selId = getLoginId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedLogin() should return the selected Entity', () => {
      const result = loginQuery.getSelectedLogin(storeState);
      const selId = getLoginId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = loginQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = loginQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
