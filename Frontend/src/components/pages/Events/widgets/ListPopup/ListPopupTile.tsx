import React, {ReactNode} from "react";

interface ListPopupTileProps {
    children?: ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const ListPopupTile = ({children, onClick}: ListPopupTileProps) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: 'white',
                border: 'none',
                borderRadius: 30,
                color: 'black',
                width: '100%',
                minHeight: 62,
                fontSize: 27,
                fontWeight: 400,
                lineHeight: 32.4 / 30,
                textAlign: 'center',
                margin: '18px 0px'
            }}
        >
            {children}
        </button>
    );
}
