import React from 'react'

import styles from './Pagination.module.css'

import { usePagination } from '../../../hooks/usePagination'

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = usePagination(totalPages)

  return (
    <div className={styles.page__wrapper}>
      {pagesArray.map(p => (
        <span
          key={p}
          className={page === p ? `${styles.page} ${styles.page__current}` : `${styles.page}`}
          onClick={() => changePage(p)}>
          {p}
        </span>
      ))}
    </div>
  )
}

export default Pagination
