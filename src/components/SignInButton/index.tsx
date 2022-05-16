import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
export function SignInButton() {

  const isLogged = true;

  return isLogged ? (
    <button
      type='button'
      className={styles.signInButton}
    >
      <FaGithub
        color="#04B361"
      />
      Zadraki
      <FiX color='#737380' className={styles.closeButton} />
    </button>
  ) : (
    <button
      type='button'
      className={styles.signInButton}
    >
      <FaGithub
        color="#EBA417"
      />
      Sign in with github
    </button>
  )

}