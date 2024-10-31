import { ModalContent } from "../atoms/Modal-content";
import { Modal } from "../molecules/Modal";

interface ConfirmModalPRops {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export const ConfirmModal = ({ message, onConfirm, onCancel }: ConfirmModalPRops) => {
    return (
        <Modal $onClick={onCancel}>
            <ModalContent $onClick={(e) => e.stopPropagation()}>
                <h2>{message}</h2>
                <div>
                    <button onClick={onConfirm}>Yes</button>
                    <button onClick={onCancel}>No</button>
                </div>
            </ModalContent>
        </Modal>
    );
}