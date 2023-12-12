import { FC, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { PageLoader } from 'widgets/PageLoader'
import { LoginFormAsync } from '../LoginForm/LoginFormAsync'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <Suspense fallback={<PageLoader />}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
)
