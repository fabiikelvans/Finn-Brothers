import React, {useEffect, useState} from 'react';


interface Props {
    title?: string;
    bordered? : boolean | undefined;
    icon? : any;
    loading?: boolean;
    onClick?: () => void;

}

function Button({ title, bordered, icon, loading, onClick } : Props) {

    return (
        <button
        className='main-button'
        onClick={onClick}
        >
            <span className="icon">{icon}</span>
            <span>
                {loading ? "Loading..." : title}
            </span>
        </button>
    );
}

export default Button;