import { SignIn } from '@clerk/nextjs';

const SignInPage: React.FC<{}> = (props) => {
    return (
        <div className='m-auto flex h-full w-full items-center justify-center'>
            <SignIn />
        </div>
    );
};

export default SignInPage;
