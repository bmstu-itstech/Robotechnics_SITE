import React from "react";

interface ListPopupProps {
    onClose?: () => void
    title?: React.ReactNode,
    children?: React.ReactNode,
}

export const ListPopup = ({onClose, title, children}: ListPopupProps) => {
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
        </div>
    );
}


