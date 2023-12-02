import { clsx } from 'clsx'
import Link from 'next/link'

import { lusitana } from '@/app/ui/fonts'

interface Breadcrumb {
  label: string
  href: string
  active?: boolean
}

export default function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
  const total = breadcrumbs.length

  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className={clsx(lusitana.className, 'flex text-xl md:text-2xl')}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(breadcrumb.active ? 'text-gray-900' : 'text-gray-500')}
          >
            {index < total - 1 ? (
              <>
                <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                <span className="mx-3 inline-block">/</span>
              </>
            ) : (
              breadcrumb.label
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
