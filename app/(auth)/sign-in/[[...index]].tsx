import { SignIn } from '@clerk/nextjs';

const Page: React.FC<{}> = (props) => {
    return (
        <div className='flex h-full w-full items-center justify-center'>
            <SignIn
                path='/sign-in'
                routing='path'
                signUpUrl='/sign-up'
                appearance={{
                    elements: {
                        formFieldInput: 'bg-slate',
                        formFieldInputError: 'bg-slate',
                        card: 'bg-pure-white',
                        buttonPrimary: 'bg-orange hover:bg-orange-hover',
                    },
                    variables: {
                        colorPrimary: '#D87D4A',
                        colorTextSecondary: '#101010',
                    },
                }}
            />
        </div>
    );
};

export default Page;
