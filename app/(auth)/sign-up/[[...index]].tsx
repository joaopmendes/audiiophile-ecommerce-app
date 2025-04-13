import { SignUp } from '@clerk/nextjs';

const Page: React.FC<{}> = (props) => {
    return (
        <div className='flex h-full w-full items-center justify-center'>
            <SignUp />
        </div>
    );
};

export default Page;
