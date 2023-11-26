'use client'

import { FormEvent, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type PropTypes = {
  placeholder: string
}

export default function Search({ placeholder }: PropTypes) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [search, setSearch] = useState(searchParams.get('query')?.toString() ?? '')

  const handleSearch = (term: string) => {
    if (term === searchParams.get('query')) return

    const qp = new URLSearchParams(searchParams)
    qp.set('page', '1')

    if (term) {
      qp.set('query', term)
    } else {
      qp.delete('query')
    }
    replace(`${pathname}?${qp.toString()}`)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearch(search)
  }

  return (
    <form className="relative flex flex-1 flex-shrink-0" onSubmit={handleSubmit}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        onBlur={() => handleSearch(search)}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
        type="search"
        value={search}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </form>
  )
}
