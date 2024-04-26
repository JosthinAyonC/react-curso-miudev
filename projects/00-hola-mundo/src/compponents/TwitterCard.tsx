import { useState } from 'react';

// useState nos permite manejar el estado de un componente funcional
// por ejemplo si queremos manejar un estado de un componente funcional
// esto se lo conocen como **HOOKS**

function TwitterFollowCard({ children, username, initialIsFollowing, onFollow }:
    { children: string, username: string, initialIsFollowing: boolean, onFollow: (username: string) => void }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Following' : 'Follow';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
        onFollow(username);
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/${username}`}
                    alt="avatar" />
                <div className="tw-followCard-info">
                    <strong className="tw-followCard-strong">{children}</strong>
                    <span
                        className="tw-followCard-infoUserName">@{username}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}

export { TwitterFollowCard };