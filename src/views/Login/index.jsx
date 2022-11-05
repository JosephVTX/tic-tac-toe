import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fingerprintjs from "@fingerprintjs/fingerprintjs";
import { useAtom } from "jotai";
import { userAtom } from "../../store";

export const Login = () => {
  const [user, setUser] = useAtom(userAtom);
  const [nickname, setNickname] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user])

  const login = async (e) => {
    e.preventDefault();
    const fp = await fingerprintjs.load();
    const id = await fp.get().then((result) => result.visitorId);
    setUser({ nickname, id })
  }

  return <form onSubmit={login}>
    <h1>Login</h1>
    <input type="text" value={nickname} onChange={e=>setNickname(e.target.value)} />
    <button type="submit">Entrar</button>
  </form>;
};
