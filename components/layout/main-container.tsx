import { PropsWithChildren } from 'react';

export const MainContainer: React.FC<PropsWithChildren<{}>> = (props) => {
    return <main>{props.children}</main>;
};
