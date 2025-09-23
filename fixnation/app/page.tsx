import Image from "next/image";
import { AppProps } from 'next/app';
import TopBar from '@/app/components/TopBar';
import BottomBar from "./components/BottomBar";
export default fixnation;



function fixnation({  }: AppProps) {
  return (
    <>
      <TopBar />
      <BottomBar />
      
    </>
    
  );
}


