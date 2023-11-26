'use client'

import { currentUser } from '@clerk/nextjs';
 
export default async function Page() {
  const user = await currentUser();
 console.log( "user",user);
  if (!user) return <div>Not logged in</div>;
 
  return <div>Hello {user?.lastName}</div>;
}