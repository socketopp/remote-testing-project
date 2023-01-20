import { Roboto, Lora } from '@next/font/google';
import { Calendar } from 'tabler-icons-react';
import { useState } from 'react';
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: "500",
});
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
});

export default function Home() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const tabColor = '#22c55eff';
  const active = (tab) => tab === activeTab;

  function Tab({ icon, text, id }) {
    console.log('id', id);
    return (
      <li id={id} className="flex-1" onClick={() => setActiveTab(id)}>
        <div className="relative block p-4">
          <span
            className="absolute inset-x-0 -bottom-px h-px w-full transition ease-in duration-400"
            style={{ backgroundColor: active(id) ? tabColor : '' }}
          ></span>
          <div className="flex items-center justify-center">
            {icon}
            <span className="ml-3 text-sm font-medium text-gray-900"> {text} </span>
          </div>
        </div>
      </li>
    );
  }

  return (
    <>
        <section className="lg:pt-24 sm:pt-20 pt-10">
      <ul className="flex border-b border-gray-100">
        <Tab id="upcoming" text="Upcoming" icon={<Calendar size={24} strokeWidth={2} color={'black'} />} />
        <Tab id="past" text="Past" icon={<Calendar size={24} strokeWidth={2} color={'black'} />} />
        <Tab id="calendar" text="Calendar" icon={<Calendar size={24} strokeWidth={2} color={'black'} />} />
      </ul>
    </section>

    </>
  )
}
