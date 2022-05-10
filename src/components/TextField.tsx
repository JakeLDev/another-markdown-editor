import React, { useState, useRef } from 'react'

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob:string) => void;
    person?: Person;
};

export const TextField: React.FC<Props> = ({text}) => {

    const [count, setCount] = useState<number | null>(5);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            {text}
            <input ref={inputRef}/>
        </div>
    );
};