import { SignUp } from '@clerk/nextjs';

const SignUpPage: React.FC<{}> = (props) => {
    return (
        <div className='m-auto flex h-full w-full items-center justify-center'>
            <SignUp />
        </div>
    );
};

export default SignUpPage;
