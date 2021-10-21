import { useContext, useState, FormEvent } from "react";
import { VscGithubInverted, VscSignOut } from "react-icons/vsc";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";
import styles from "./style.module.scss";

export function SendMessageForm() {
    const { user, signOut } = useContext(AuthContext);

    const [message, setMessage] = useState("");
    const [confirmation, setConfirmation] = useState(false);

    async function handleSendMessage(event: FormEvent) {
        event.preventDefault();

        if (!message.trim()) {
            return;
        }

        await api.post("messages", { message });

        await setConfirmation(true);

        await setInterval(() => {
            setConfirmation(false);
        }, 1500);

        setMessage("");
    }

    return (
        <div className={styles.sendMessageFormWrapper}>
            {confirmation ? <span className={styles.toast}>Mensagem enviada com sucesso</span> : ""}
            <span className={styles.seal} />
            <button className={styles.signOutButton} onClick={signOut}>
                <VscSignOut size="32" />
            </button>

            <header className={styles.userInformation}>
                <div className={styles.userImage}>
                    <img src={user?.avatar_url} alt={user?.name} />
                </div>
                <strong className={styles.userName}>{user?.name}</strong>
                <span className={styles.userGithub}>
                    <VscGithubInverted size="16" />
                    {user?.login}
                </span>
            </header>

            <form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
                <label htmlFor="message">Mensagem</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Qual sua expectativa para o evento"
                    onChange={(event) => setMessage(event.target.value)}
                    value={message}
                />
                <button type="submit">Enviar mensagem</button>
            </form>
        </div>
    );
}
