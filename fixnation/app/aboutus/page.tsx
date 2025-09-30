import Image from "next/image";
import { AppProps } from 'next/app';
import TopBar from '@/app/components/header';
import BottomBar from '@/app/components/footer';
import { JSX } from "react";
import fixnation from "../page";

function AboutUs({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <TopBar />
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1940,
          aspectRatio: "475 / 375",
          margin: "0 auto",
          maxHeight: "-111px",
        }}
      >
        <Image
          src="/images/kitty.jpg"
          alt="kitty"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 1940px) 100vw, 1940px"
        />
      </div>
      <BottomBar />
      
    </>
    
  );
}

export default AboutUs;