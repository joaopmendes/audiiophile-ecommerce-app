import { PropsWithChildren } from 'react';

export const AppWrapper: React.FC<PropsWithChildren<{}>> = (props) => {
    return <section className={'h-full min-h-screen w-full'}>{props.children}</section>;
};
