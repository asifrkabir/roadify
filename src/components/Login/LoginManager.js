import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import auth from '../../firebase.init';

export const signInUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

export const newUserWithEmailAndPassword = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserName(name);
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

const updateUserName = name => {
    updateProfile(auth.currentUser, {
        displayName: name
    }).then(() => {
        console.log('username updated successfully');
    }).catch((error) => {
        console.log(error);
    });
}

export const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
        .then((result) => {
            // console.log(result);
            // const { displayName, email, photoURL } = result.user;
            // const signedInUser = {
            //     isSignedIn: true,
            //     name: displayName,
            //     email: email,
            //     photo: photoURL,
            //     success: true
            // };
            // return signedInUser;
            return result.user;
        }).catch((error) => {
            console.log(error);
            console.log(error.message);
        });
}