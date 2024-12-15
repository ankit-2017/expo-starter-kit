import { Link, Slot } from "expo-router";
import React from "react";

import Styles from "./style.module.css";
export default () => {
  return (
    <div style={{ flex: 1 }}>
      <div className={Styles.container}>
        <header className={Styles.headerWeb}>
          <div className={Styles.leftSection}>
            <Link href="/page1">Brand Name</Link>
          </div>
          <div className={Styles.rightSection}>
            <Link href="/home">Services</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/Levels">Level</Link>
            <Link href="/Setting">Setting</Link>
          </div>
        </header>
      </div>
      <Slot />
    </div>
  );
};
