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

import { FaFacebook, FaGoogle } from "react-icons/fa"

export default function RegiserForm({ translates }: { translates: any }) {




  const handleSignupWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Signed in
        // setIsLoading(false);
        console.log(result)

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
    <div className="form-card">
      <div className="form-card-controls">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label"> {translates.username} </label>
            <input type="email" className="form-control" id="exampleFormControlInput1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">{translates.email}</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">{translates.password}</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">{translates['confirm-password']}</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" />
          </div>
          <button type="button" onClick={handleSignupWithFacebook} className="btn btn-primary"> <FaFacebook /> {translates['facebook-login']}</button>
          <button type="button" className="btn btn-light"> <FaGoogle /> {translates['google-login']}</button>

        </form>
      </div>
      <div className="form-card-ui"></div>

    </div>


  </>
}