'use client';
import { HashLoader } from 'react-spinners';
import { LoaderSizeProps } from 'react-spinners/helpers/props';

type SpinnerProps = LoaderSizeProps;
const Spinner: React.FC<SpinnerProps> = ({ ...props }) => {
    return <HashLoader {...props} />;
};
Spinner.displayName = 'React Spinner';

export { Spinner };
