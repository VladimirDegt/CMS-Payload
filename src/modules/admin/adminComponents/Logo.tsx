import Image from "next/image";
import logo from '@/assets/logo.svg';

export default function Logo() {
  return (
    <div>
      <Image src={logo} alt='logo' className='w-50'/>
    </div>
  )
}