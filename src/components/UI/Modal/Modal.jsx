import React from 'react'

import styles from './Modal.module.css'

const Modal = ({ children, visible, setVisible }) => {
  const rootStyles = [styles.modal]

  if (visible) rootStyles.push(styles.active)

  return (
    <div className={rootStyles.join(' ')} onClick={() => setVisible(false)}>
      <div className={styles.modalContent} onClick={event => event.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
