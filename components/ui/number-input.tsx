'use client';
type NumberInputProps = {
    value: number;
    setValue: (value: number) => void | React.Dispatch<React.SetStateAction<number>>;
    min?: number;
    max?: number;
    increment?: number;
};
export const NumberInput: React.FC<NumberInputProps> = ({ value, setValue, min = -999, max = 999, increment }) => {
    const isMin = value === min;
    const isMax = value === max;
    const add = () => {
        if (isMax) return;
        setValue(value + 1);
    };
    const remove = () => {
        if (isMin) return;

        setValue(value - 1);
    };

    return (
        <div className='flex h-12 w-32 items-center justify-around bg-gray'>
            <button onClick={() => remove()} disabled={isMin} className={'cursor-pointer text-h6 text-orange'}>
                -
            </button>
            <p className='text-h6'>{value}</p>
            <button onClick={() => add()} disabled={isMax} className={'cursor-pointer text-h6 text-orange'}>
                +
            </button>
        </div>
    );
};
