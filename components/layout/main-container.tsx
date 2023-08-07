import { PropsWithChildren } from 'react';

export const MainContainer: React.FC<PropsWithChildren<{}>> = (props) => {
    return <main className={'main-container'}>{props.children}</main>;
};
