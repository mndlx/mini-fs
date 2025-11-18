import { useFs } from "mini-fs-core";
import { Item } from "../Item/Item";
import styles from './Tree.module.css';

export const Tree = () => {

    const { fs } = useFs();

    return (
        <div className={styles.tree}>
            {fs.map((files, i) => {
                return (
                    <Item type={files.type} name={files.name} />
                );
            })}
        </div>
    );
}
