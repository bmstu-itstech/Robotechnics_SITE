import React from "react";
import closeIcon from "../../../../assets/icons/close.svg";
import backIcon from "../../../../assets/icons/back.svg";

interface ListPopupProps {
    onClose?: () => void,
    onBack?: () => void
    title?: React.ReactNode,
    children?: React.ReactNode,
}

export const ListPopup = ({onClose, title, children, onBack}: ListPopupProps) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 200,
            }}
        >
            {onBack !== undefined ? <button
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    position: 'absolute',
                    top: 80 / 1080 * window?.innerHeight,
                    left: 1023 / 1900 * window?.innerWidth,
                    zIndex: 500,
                    width: 100,
                    height: 100,
                    justifyContent: 'end',
                }}
                onClick={onBack}
            >
                <img
                    style={{
                        width: 70,
                        height: 70,
                        // objectFit: 'cover',
                        userSelect: 'none',
                    }}
                    src={backIcon}
                    alt='menu'
                />
            </button> : null}
            <button
                style={{
                    position: 'absolute',
                    top: 0,
                    right: '50%',
                    bottom: 0,
                    left: 0,
                    cursor: 'default',
                    backgroundColor: 'black',
                    opacity: 0.7,
                    border: 'none',
                    content: ''
                }}
                onClick={onClose}
            />
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: '50%',
                    backgroundColor: 'red',
                    padding: '135px 117px',
                }}
            >
                <h3
                    style={{
                        textTransform: 'uppercase',
                        color: "white",
                        fontSize: 45,
                        fontWeight: 900,
                        lineHeight: 45 / 45,
                        textAlign: 'center',
                        marginBottom: 20,
                    }}
                >{title}</h3>
                <div
                    style={{
                        overflow: 'scroll',
                        height: '100%',
                    }}
                >
                    {children}
                </div>
            </div>
            <button
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    position: 'absolute',
                    top: 80 / 1080 * window?.innerHeight,
                    right: 100 / 1900 * window?.innerWidth,
                    zIndex: 500,
                    width: 100,
                    height: 100,
                    justifyContent: 'end',
                }}
                onClick={onClose}
            >
                <img
                    style={{
                        objectFit: 'none',
                        userSelect: 'none',
                    }}
                    src={closeIcon}
                    alt='menu'
                />
            </button>

        </div>
    );
}


