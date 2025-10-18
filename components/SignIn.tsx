import {signIn} from "@/lib/auth-client";

export default function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn.email({
          email: formData.get("email") as string,
          password: formData.get("password") as string,
        });
      }}
    >
      <label>
        Email
        <input name="email" type="email"/>
      </label>
      <label>
        Password
        <input name="password" type="password"/>
      </label>
      <button>Sign In</button>
    </form>
  )
}
