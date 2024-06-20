import { UserMenu } from '@Components/Navigation/Header';
import { UserFavorite } from '@Components/Navigation/Header/UI/UserFavorite';
import Link from 'next/link';

export const Header = () => {
    return (
        <header className="bg-white">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex gap-x-12">
                    <Link
                        href="/"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Home
                    </Link>

                    <Link
                        href="/posts"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Posts
                    </Link>
                </div>
                <div className="flex flex-1 justify-end items-center gap-4">
                    <UserMenu />
                    <UserFavorite />
                </div>
            </nav>
        </header>
    );
};
