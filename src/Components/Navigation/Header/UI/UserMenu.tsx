export const UserMenu = () => {
    const getRandomPastelColor = () => {
        // returns random pastel color

        const r = Math.floor(Math.random() * 127 + 128);
        const g = Math.floor(Math.random() * 127 + 128);
        const b = Math.floor(Math.random() * 127 + 128);
        return `rgb(${r}, ${g}, ${b})`;
    };

    return (
        <div
            className={
                'flex justify-center align-middle b-rad rounded-full p-2 h-10 w-10'
            }
            style={{ backgroundColor: getRandomPastelColor() }}
        >
            {/*Іван Бобровський*/}
            <p className={'text-md leading-1'}>І Б</p>
        </div>
    );
};
