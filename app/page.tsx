import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">
      <div className="">
        TODO APPLICATION
        <br />
        <Link className="text-3xl border m-2" rel="stylesheet" href="signin">
          Signin for todo
        </Link>
        <br />
        <Link className="text-3xl border m-2" rel="stylesheet" href="signup">
          Signup for todo
        </Link>
      </div>
    </div>
  );
}
