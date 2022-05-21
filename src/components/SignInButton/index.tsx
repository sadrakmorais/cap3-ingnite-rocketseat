import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
import { signIn, signOut, useSession } from 'next-auth/react';

export function SignInButton() {

  const { data: session } = useSession();

  return session ? (
    <button
      type='button'
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <div className={styles.avatar}>
        <img src={session.user.image} alt={`Imagem do usuário ${session.user.name}`} />
      </div>
      {session.user.name}
      <FiX color='#737380' className={styles.closeButton} />
    </button>
  ) : (
    <button
      type='button'
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub
        color="#EBA417"
      />
      Sign in with github
    </button>
  )

}