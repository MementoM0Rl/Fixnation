import Image from "next/image";
import { AppProps } from 'next/app';
import TopBar from '@/app/components/header';
import BottomBar from '@/app/components/footer';
import { JSX } from "react";
export default fixnation;



function fixnation({ Component, pageProps }: AppProps): JSX.Element {
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
          src="/images/silly-kebby.jpg"
          alt="Silly Kebby"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 1870px) 100vw, 1870px"
        />
      </div>
      <BottomBar />
      
    </>
    
  );
}


