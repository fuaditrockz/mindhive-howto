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

    </Layout>
  )
}