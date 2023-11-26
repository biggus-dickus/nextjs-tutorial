import { notFound } from 'next/navigation'

import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data'

import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import EditForm from '@/app/ui/invoices/edit-form'

type PropTypes = {
  params: { id: string }
}

export default async function Page({ params }: PropTypes) {
  const { id } = params
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ])

  if (!invoice) {
    notFound()
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditForm invoice={invoice} customers={customers} />
    </main>
  )
}
