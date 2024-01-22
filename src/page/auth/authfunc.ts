import auth from '@react-native-firebase/auth';

const register = async (
  email: string,
  password: string,
  confPassword: string,
) => {
  try {
    if (!email || !password || !confPassword) {
      console.log('masuk');

      throw new Error('Mohon isi semua kolom');
    }
    if (password !== confPassword) {
      throw new Error('password tidak sama');
    }
    const authentication = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    return authentication;
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      throw new Error('Alamat email telah dipakai!');
    }

    if (error.code === 'auth/invalid-email') {
      throw new Error('Alamat email tidak valid!');
    }

    throw error;
  }
};

const login = async (email: string, password: string) => {
  try {
    if (!email || !password) {
      throw new Error('Email/Password tidak boleh kosong');
    }
    const authentication = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    return authentication;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const logout = async () => {
  await auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

export {register, login, logout};
