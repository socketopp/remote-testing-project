import { Roboto, Lora } from '@next/font/google';

const roboto = Roboto({
  variable: '--font-roboto',
  weight: "700",
});
const lora = Lora({
  variable: '--font-lora',
});

export default function Home() {
  return (
    <>
    <p className={`${lora.variable}`}> Continue with Facebook</p>

    </>
  )
}
