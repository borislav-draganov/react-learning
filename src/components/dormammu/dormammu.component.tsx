import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const DormammuComponent: FC = () => {
    const params = useParams<{
        count: string;
    }>();
    const [count, setCount] = useState<number>(1);

    useEffect(() => {
        const count = parseInt(params.count, 10);

        if (!Number.isNaN(count) && count > 0) {
            setCount(count);
        } else {
            setCount(1);
        }
    }, []);

    return (
        <>
            {Array.from({ length: count }, (v, i) => i).map((it, idx) => (
                <div style={{ textAlign: 'center' }} key={idx}>
                    <h1>Dormammu, I've come to bargain</h1>
                </div>
            ))}
        </>
    );
};
