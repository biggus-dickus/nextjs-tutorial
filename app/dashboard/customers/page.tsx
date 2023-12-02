import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Customers',
}

export default async function CustomersPage() {
  return (
    <h1>Customers</h1>
  )
}
