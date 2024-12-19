import { useRouter } from "expo-router";
import React, {useEffect} from "react";

import UserButton from "../../components/common/Button";
import Navbar from "../../components/common/Navbar";
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
    <div>
      <Navbar />
      <div className="items-center justify-items-center">
        <p>Home Page web</p>
        <UserButton
          type="primary"
          title="Logout"
          customStyles={{width: '6rem'}}
          onPress={() => router.replace("/")}
        />
      </div>
    </div>
  );
}
