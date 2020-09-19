import Head from 'next/head'
import CustomNavbar from '../components/CustomNavbar'
import InputTextComponent from '../components/word-counter/InputTextComponent'


const Home = () => {

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <CustomNavbar/>

            <InputTextComponent/>
        </>
    )
}

export default Home