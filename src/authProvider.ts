// import { AuthProvider, HttpError } from "react-admin";
// import data from "./users.json";

// /**
//  * This authProvider is only for test purposes. Don't use it in production.
//  */
// export const authProvider: AuthProvider = {
//   login: ({ username, password }) => {
//     const user = data.users.find(
//       (u) => u.username === username && u.password === password
//     );

//     if (user) {
//       // eslint-disable-next-line no-unused-vars
//       let { password, ...userToPersist } = user;
//       localStorage.setItem("user", JSON.stringify(userToPersist));
//       return Promise.resolve();
//     }

//     return Promise.reject(
//       new HttpError("Unauthorized", 401, {
//         message: "Invalid username or password",
//       })
//     );
//   },
//   logout: () => {
//     localStorage.removeItem("user");
//     return Promise.resolve();
//   },
//   checkError: () => Promise.resolve(),
//   checkAuth: () =>
//     localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
//   getPermissions: () => {
//     return Promise.resolve(undefined);
//   },
//   getIdentity: () => {
//     const persistedUser = localStorage.getItem("user");
//     const user = persistedUser ? JSON.parse(persistedUser) : null;

//     return Promise.resolve(user);
//   },
// };

// export default authProvider;



// in src/authProvider.js
import { hostname } from 'os';
const authProvider = {
  login: ({ username, password }) =>  {
      const request = new Request(import.meta.env.VITE_SIMPLE_REST_URL + '/admin/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: new Headers({ 'Content-Type': 'application/json' }),
      });
      return fetch(request)
          .then(response => {
              if (response.status < 200 || response.status >= 300) {
                  throw new Error(response.statusText);
              }
              return response.json();
          })
          .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth));
                location.reload()
          })
          .catch((err) => {
              throw new Error('username or password error')
          });
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
        localStorage.removeItem('auth');
        return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  checkAuth: () => localStorage.getItem('auth')
        ? Promise.resolve()
        : Promise.reject(),
  logout: () => {
      localStorage.removeItem('auth');
      return Promise.resolve();
  },
  getIdentity: () => {
    try {
        const { id, fullName, avatar } = JSON.parse(localStorage.getItem('auth'));
        return Promise.resolve({ id, fullName, avatar });
    } catch (error) {
        return Promise.reject(error);
    }
  },
  getPermissions: () => {
      // Required for the authentication to work
      return Promise.resolve();
  },
  // ...
};

export default authProvider;

