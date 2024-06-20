'use client';

import { useState, useRef, useEffect } from 'react';
import { RootState } from '@Types/Redux';
import { FavoriteIconButton } from '@Components/Buttons/FavoriteIconButton';
import { removePostFromFeatureList } from '@Store/User/UserReducer';
import { useAppDispatch, useAppSelector } from '@/Store';
import './UserFavorite.css';

export const UserFavorite = () => {
    const dispatch = useAppDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const favoriteList = useAppSelector(
        (state: RootState) => state.user.favorite
    );
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null); // Обновление типа

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={'relative h-fit'}>
            <FavoriteIconButton
                ref={buttonRef}
                handleClick={() => setIsMenuOpen(!isMenuOpen)}
                inactiveTitle={'Список улюбленого'}
            />
            <div
                ref={menuRef}
                className={
                    'flex flex-col gap-2 absolute right-0 min-w-60 p-4 border rounded-xl shadow-md bg-white'
                }
                style={{
                    top: 'calc(100% + 10px)',
                    opacity: isMenuOpen ? 1 : 0,
                    visibility: isMenuOpen ? 'visible' : 'hidden',
                    transition: '.3s',
                }}
                tabIndex={0}
            >
                {favoriteList.length > 0 ? (
                    favoriteList?.map((favorite, index) => (
                        <>
                            <div
                                key={index}
                                className={
                                    'flex gap-5 justify-between items-start py-2.5 px-5 min-w-80'
                                }
                            >
                                <div>{favorite.postTitle}</div>
                                <div
                                    className={
                                        'removeFromFavoriteBtn cursor-pointer'
                                    }
                                    onClick={() =>
                                        dispatch(
                                            removePostFromFeatureList(
                                                favorite.postId
                                            )
                                        )
                                    }
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M20.7804 3.21888C20.8502 3.28854 20.9056 3.37131 20.9435 3.46243C20.9813 3.55354 21.0007 3.65122 21.0007 3.74988C21.0007 3.84853 20.9813 3.94621 20.9435 4.03733C20.9056 4.12844 20.8502 4.21121 20.7804 4.28088L4.28039 20.7809C4.13956 20.9217 3.94855 21.0008 3.74939 21.0008C3.55022 21.0008 3.35922 20.9217 3.21839 20.7809C3.07756 20.64 2.99844 20.449 2.99844 20.2499C2.99844 20.0507 3.07756 19.8597 3.21839 19.7189L19.7184 3.21888C19.7881 3.14903 19.8708 3.09362 19.9619 3.05581C20.0531 3.018 20.1507 2.99854 20.2494 2.99854C20.348 2.99854 20.4457 3.018 20.5368 3.05581C20.628 3.09362 20.7107 3.14903 20.7804 3.21888Z"
                                            fill="#1E2025"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M3.21839 3.21888C3.14854 3.28854 3.09313 3.37131 3.05532 3.46243C3.01751 3.55354 2.99805 3.65122 2.99805 3.74988C2.99805 3.84853 3.01751 3.94621 3.05532 4.03733C3.09313 4.12844 3.14854 4.21121 3.21839 4.28088L19.7184 20.7809C19.8592 20.9217 20.0502 21.0008 20.2494 21.0008C20.4485 21.0008 20.6396 20.9217 20.7804 20.7809C20.9212 20.64 21.0003 20.449 21.0003 20.2499C21.0003 20.0507 20.9212 19.8597 20.7804 19.7189L4.28039 3.21888C4.21072 3.14903 4.12796 3.09362 4.03684 3.05581C3.94572 3.018 3.84804 2.99854 3.74939 2.99854C3.65074 2.99854 3.55305 3.018 3.46194 3.05581C3.37082 3.09362 3.28806 3.14903 3.21839 3.21888Z"
                                            fill="#1E2025"
                                        />
                                    </svg>
                                </div>
                            </div>
                            {favoriteList.length - 1 !== index && <hr />}
                        </>
                    ))
                ) : (
                    <div>Не додано жодної статті</div>
                )}
            </div>
        </div>
    );
};
