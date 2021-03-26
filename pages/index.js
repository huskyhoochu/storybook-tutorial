import Image from 'next/image'
import { Wow } from '../component/Wow'

function Home() {
return (
    <>
        <h1>My Homepage</h1>
        <Image
        src="/logo.png"
        alt="Picture of the author"
        width={128}
        height={128}
        />
        <p>Welcome to my homepage!</p>
        <Wow primary={true}>hello</Wow>
    </>
    )
}

export default Home

