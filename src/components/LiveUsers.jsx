// src/components/LiveUsers.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; // Firebase config import karo
import { ref, onValue, onDisconnect, set, push, serverTimestamp, remove } from 'firebase/database';
import './LiveUsers.css'; // Iske liye CSS bhi banayenge

const LiveUsers = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // 'activeUsers' hamare database ka woh hissa hai jahan hum active users store karenge
    const activeUsersRef = ref(db, 'activeUsers');

    // Step 1: Jaise hi component load ho, ek naya unique user entry add karo
    const currentUserRef = push(activeUsersRef);
    set(currentUserRef, { online: true, timestamp: serverTimestamp() });

    // Step 2: Sabse Zaroori - onDisconnect hook set karo
    // Iska matlab hai: "Agar yeh user achanak se disconnect ho jaaye (tab band kar de),
    // to Firebase, iski entry ko database se hata dena."
    onDisconnect(currentUserRef).remove();

    // Step 3: Real-time mein active users ki ginti suno
    const unsubscribe = onValue(activeUsersRef, (snapshot) => {
      // Jab bhi 'activeUsers' me kuch badlega, yeh function chalega
      const count = snapshot.exists() ? snapshot.size : 0;
      setUserCount(count);
    });

    // Step 4: Cleanup function
    // Jab component unmount ho (user page se chala jaaye), to uski entry hata do
    return () => {
      remove(currentUserRef);
      unsubscribe();
    };
  }, []); // Yeh useEffect sirf ek baar chalega

  return (
    <div className="live-users-container">
      <span className="live-dot"></span>
      <span>{userCount} Active</span>
    </div>
  );
};

export default LiveUsers;