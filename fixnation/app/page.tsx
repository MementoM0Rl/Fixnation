import Image from "next/image";
import { AppProps } from 'next/app';
import TopBar from '@/app/components/header';
import BottomBar from '@/app/components/footer';
export default fixnation;



function fixnation({ Component, pageProps }: AppProps) {
  return (
    <><>
      <TopBar />
      <BottomBar />
    </><img src="/images/silly-kebby.jpg" className="w-300 h-150" /></>
  );
}


