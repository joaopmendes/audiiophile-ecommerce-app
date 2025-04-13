import { PropsWithChildren } from 'react';

export const AppWrapper: React.FC<PropsWithChildren<{}>> = (props) => {
    return <section className={'app-wrapper flex h-full min-h-screen w-full flex-col'}>{props.children}</section>;
};
