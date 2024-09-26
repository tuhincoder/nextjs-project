import Counter from '@/components/Counter/Counter';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    console.log('hello world');
    // throw new Error();

    return (
        <div>

            <Counter />
            <Link href={'/about'}>
                <button className="btn btn-primary">about</button>
            </Link>
            <Link href={'/contact'}>
                <button className="btn btn-primary">Contact</button>
            </Link>
        </div>
    );
};

export default HomePage;