"use client";

export default function signin() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border p-2">
        <input type="text" placeholder="username"></input>
        <input type="text" placeholder="password"></input>
        <button onClick={() => {}}>signin</button>
      </div>
    </div>
  );
}
