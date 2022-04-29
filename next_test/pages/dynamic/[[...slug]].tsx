import { useRouter } from 'next/router';

export default function Home() {
    const path = useRouter();
    return (
        <div>{path.asPath}</div>
    )
}
