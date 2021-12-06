import Head from "next/head";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import GitHub from "../components/Icons/GitHub";

import { colors } from "../styles/theme";

import { loginWithGitHub } from "../firebase/client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "../firebase/client";

export default function Home() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    onAuthStateChanged(user=>setUser(user));
  }, []);

  const handleClick = () => {
    loginWithGitHub()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Head>
        <title>tweet this </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <section>
          <img src='/images.png' width={100} height={100} /> 
          {/* barra y el nombre del archivo en el source cunado el archivo esta en públic */}
          <h1>Tweet This</h1>
          <h2>Talk about development with developers</h2>
          <div>
  
            {user ===
              null && (
                <Button onClick={handleClick}>
                  <GitHub fill={"white"} width={24} height={24} />
                  <span>Login with github</span>
                </Button>
              )}

            {user && user.avatar && (
              <div>
                <img src={user.avatar} width={60} height={60}/>
                <strong>{user.username}</strong>
              </div>
            )}
          </div>
        </section>
      </AppLayout>
      <style jsx>{`
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }
        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 0;
        }
        h2 {
          color: ${colors.secondary};
          font-size: 21px;
          margin: 0;
        }
        div {
          margin-top: 16px;
        }
      `}</style>
    </div>
  );
}
