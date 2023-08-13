"use client";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  getAdditionalUserInfo
} from "firebase/auth";

import { auth } from "@/firebase/Firebase";
import { db } from "@/firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";

export default async function Page() {
  const handleSignupWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Signed in
        // setIsLoading(false);

        const user = result.user;
        const { isNewUser }: any = getAdditionalUserInfo(result);

        console.log("FIREBASE LOG", {
          result, user, isNewUser
        })


        if (isNewUser) {
          const userRef = doc(db, "users", user.uid);
          setDoc(userRef, {
            activeDevice: false,
            addLink: true,
            addProfileImage: false,
            address: "",
            backgroundImage: "",
            bio: "",
            captureLead: false,
            color: "white",
            company: "",
            email: user.email,
            id: user.uid,
            image: user.photoURL,
            imageQR: "",
            jobTitle: "",
            language: "ar",
            logoImage: "",
            name: user.displayName,
            password: "",
            pay: false,
            scanQR: false,
            shareProfile: false,
            token: "",
          }).then(async () => {
            // add user id
            await setDoc(doc(db, "link", user.uid), {
              id: user.uid,
            });
          });
        }
        // navigate(`/user/profile/${user.uid}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // setIsLoading(false);
        // setError(errorMessage);
      });
  }

  return <>
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <button onClick={handleSignupWithFacebook} className="btn btn-primary"> Login With Facebook </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
}