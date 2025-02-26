import Image from "next/image";
import logo from '@/assets/logo.svg';

export default function Logo() {
  return (
    <div className='w-[36px] h-[36px]'>
      <Image src={logo} alt='logo' width={24} height={24}/>
    </div>
  )
}