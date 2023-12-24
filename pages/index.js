import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetAllAPIsPathFixed } from './get-all-apis.mjs'


export async function getServerSideProps() {
	//get all api paths
	const apipaths = GetAllAPIsPathFixed();

  // var apipaths = [];

	//return all api paths
	return {
		props: {
			apipaths
		}
	}
//   return {
//     props: { data }, // will be passed to the page component as props
//   }
}


export default function Home( { apipaths } ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dental Clinic Backend</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is Backend project for SE104.N11
        </h1>

        <p className={styles.description}>
          Get started by adding {' '}
          <code className={styles.code}>api path below</code>
          behind the URL to get the API.
        </p>

		{/* one p tag for each one in apispath */}
		{apipaths.map((path, index) => (
			<p className={styles.code} key={index}>{path}</p>
		))}

      </main>

    </div>
  )
}
