import { ReactNode } from 'react';
import Navbar from './navbar';

export default function Layout({ children }: { children: ReactNode }) {
    return <>
        <Navbar />
        <div>{children}</div>
    </>;
}