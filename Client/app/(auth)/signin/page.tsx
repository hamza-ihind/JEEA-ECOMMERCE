import { SignIn } from "@clerk/nextjs"
const page = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <SignIn redirectUrl={"/"} signUpUrl={"signup"} />
    </div>
  )
}

export default page
