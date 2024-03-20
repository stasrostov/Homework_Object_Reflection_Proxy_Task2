import { loadUser, saveUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

describe('loadUser', () => {
  test('should call httpGet with the correct URL and return parsed data', () => {
    const userId = 1;
    const userData = { id: userId, name: 'John Doe', email: 'john@example.com' };
    const responseData = JSON.stringify(userData);
    const expectedUrl = `http://server:8080/users/${userId}`;

    httpGet.mockReturnValue(responseData);

    const user = loadUser(userId);

    expect(httpGet).toHaveBeenCalledWith(expectedUrl);
    expect(user).toEqual(userData);
  });
});

describe('saveUser', () => {
  test('should throw an error with "Unimplemented"', () => {
    expect(() => saveUser()).toThrow('Unimplemented');
  });
});
