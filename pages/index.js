import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  console.log(router)
  return (
    <Layout
      title="What is Mindhive?"
      route={router.route}
    >
      <img src="/contents/what-is-mindhive.png" alt="What is Mindhive?" style={{ maxWidth: '100%' }} />
    </Layout>
  )
}