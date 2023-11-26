'use client'

import { useEffect } from "react";
import { UserButton, useClerk } from "@clerk/nextjs";

const Page = () => {
  const { user } = useClerk();

  useEffect(() => {
    if (user) {
      const { id, username, emailAddresses } = user;
      const email = emailAddresses && emailAddresses.length > 0 ? emailAddresses[0] : null;
      console.log('User signed in:', {
        id,
        username,
        email,
      });
    }
  }, [user]);

  return (
    <div>
       <UserButton afterSignOutUrl="/signin"/>
    </div>
  );
};

export default Page;
