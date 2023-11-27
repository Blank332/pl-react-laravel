import React, { useState } from 'react';
import { ArrowPathIcon, ClockIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Pendataan Daring',
    description: 'Pendataan lebih Fleksible karena dapat diakses kapan saja dan dimana saja dan secara daring.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Pendataan Aman',
    description: 'Pendataan lebih aman karena tersimpan di awan dengan keamanan yang terjaga dan dilengkapi dengan backup.',
    icon: LockClosedIcon,
  },
  {
    name: 'Pendataan Simpel',
    description: 'Pendataan lebih mudah karena hanya memerlukan beberapa input dan klik saja.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Pendataan Real-Time',
    description: 'Pendataan lebih cepat karena data yang tersimpan secara Real-Time dan bisa diakses kapanpun dengan dengan syarat terkoneksi jaringan',
    icon: ClockIcon,
  }
];

const Guest = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`bg-${darkMode ? 'gray-800' : 'white'} py-24 sm:py-16`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Software Engineering SMKN 1 Cimahi</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pembangunan Library
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Projek kerja sama Program Keahlian Rekayasa Perangkat Lunak dengan Instansi Sekolah di SMKN 1 Cimahi yaitu Perpustakaan
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Tombol Tema */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full"
        >
          {darkMode ? 'Tema Terang' : 'Tema Gelap'}
        </button>
      </div>
    </div>
  );
};

export default Guest;
