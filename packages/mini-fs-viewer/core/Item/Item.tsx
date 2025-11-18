import { FaFile, FaFolder } from 'react-icons/fa';
import styles from './Item.module.css';

interface ItemProps {
    name: string;
    type: 'file' | 'folder';
}

const icons: Record<ItemProps['type'], React.ReactNode> = {
    file: <FaFile />,
    folder: <FaFolder />
}

export const Item: React.FC<ItemProps> = ({
    name,
    type
}) => {

    const icon = icons[type];

    return (
        <div className={styles.item}>
            {icon && <div className={styles.type}>{icon}</div>}
            <div className={styles.name}>{name}</div>
        </div>
    )
}
