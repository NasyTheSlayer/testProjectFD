import {Providers} from './providers';
import NavBar from '@/components/NavBar';
import {ReactNode} from "react";

export const metadata = {
  title: 'Train Schedule App',
  description: 'Find train schedules and book tickets easily and quickly.',
};

export default function RootLayout({children}: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
