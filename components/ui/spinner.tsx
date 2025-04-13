'use client';
import { cn } from '@/lib/utils';
import { HashLoader } from 'react-spinners';
import { LoaderSizeProps } from 'react-spinners/helpers/props';

type SpinnerProps = LoaderSizeProps;
const Spinner: React.FC<SpinnerProps> = (props) => {
    return <HashLoader {...props} className={cn(props.className, '')} />;
};
Spinner.displayName = 'React Spinner';

export { Spinner };
