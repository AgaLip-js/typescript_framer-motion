import { useState} from 'react'

function UseStateComponent({number}: {number: number}){
    // array of numbers
    const [arr, setArr] = useState<number[]>([]);
    const [name, setName] = useState<string | null>(null);

    return (
        <div>
            <div>
                <button onClick={()=> setArr([
                    ...arr,
                    arr.length + number,
                ])}>Add to array</button>
                {JSON.stringify(arr)}
            </div>
            <div>
                <button onClick={()=> setName('jack')}>Set Name</button>
                {JSON.stringify(name)}
            </div>
        </div>
    )
}

export default UseStateComponent;