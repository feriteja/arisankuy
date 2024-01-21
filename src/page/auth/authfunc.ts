import auth from '@react-native-firebase/auth';

const register = async (
  email: string,
  password: string,
  confPassword: string,
) => {
  try {
    if (password !== confPassword) {
      throw new Error("password doesn't match");
    }
    const authentication = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    return authentication;
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      throw 'That email address is already in use!';
    }

    if (error.code === 'auth/invalid-email') {
      throw 'That email address is invalid!';
    }

    throw error;
  }
};

const login = async (email: string, password: string) => {
  try {
    const authentication = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    return authentication;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  await auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

export {register, login, logout};
