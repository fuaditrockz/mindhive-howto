import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  console.log(router)
  return (
    <Layout
      title="Setting up your account"
      route={router.route}
    >
      <div style={{
          width: 1200,
          height: 400,
          backgroundColor: 'rgba(0,0,0,0.3)'
        }}>
        <img src="/contents/setting-up-your-account/1.png" alt="What is Mindhive?" style={{ maxWidth: '100%' }} />
        <div style={{
          width: 1100,
          height: 400,
          backgroundColor: 'rgba(0,0,0,0.3)',
          position: 'absolute'
        }}>

        </div>
      </div>
    </Layout>
  )
}