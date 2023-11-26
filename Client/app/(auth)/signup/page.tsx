import { SignUp } from "@clerk/nextjs"
const page = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <SignUp redirectUrl={"/signin"} signInUrl="/signin"/>
    </div>
  )
}

export default page
