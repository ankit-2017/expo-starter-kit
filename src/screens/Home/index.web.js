import { useRouter } from "expo-router";
import React, {useEffect} from "react";

import UserButton from "../../components/common/Button";
import { useSelector, useDispatch } from 'react-redux'
import { setWelcomeText } from '../../store/slices/welcomeSlice'

export default function Home() {

  const dispatch = useDispatch()
  const homeState = useSelector(state => state.welcome)
  useEffect(() => {
    console.log('called!')
    dispatch(setWelcomeText('hello Expo1'))
  }, [])
  console.log('homeState=>', homeState)
  const router = useRouter();
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Home Page web</p>
      <UserButton title="Logout" onPress={() => router.replace("/")} />
    </div>
  );
}
