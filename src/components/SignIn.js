import React, { useState, useEffect } from "react";
import { Button, Input, Modal } from "@material-ui/core";
import { auth } from "../../firebase";
import ProjectUpload from "../ProjectUpload/ProjectUpload";



export default function SignInModal() {
    const classes = useStyles();
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [openSignIn, setOpenSignIn] = useState(false);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                //User Login
                setUser(authUser);
            } else {
                //User Logout
                setUser(null);
            }
        });
        return () => {
            unsubscribe();
            //perform some cleanup actions
        };
    }, [user]);

    const signIn = (event) => {
        event.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .catch((err) => alert(err.message));
        setOpenSignIn(false);
    };

    return (
        <div className={styles.container}>
            <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
                <div style={modalStyle} className={classes.paper}>
                    <form className={styles.app__signin}>
                        <Input
                            placeholder="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value.trim())}
                        />
                        <Input
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" onClick={signIn}>
                            LogIn
                        </Button>
                    </form>
                </div>
            </Modal>
            {user ? <ProjectUpload /> : null}
            <div className={styles.buttons}>
                {user ? (
                    <Button className={styles.button} onClick={() => auth.signOut()}>
                        Logout
                    </Button>
                ) : (
                    <Button className={styles.button} onClick={() => setOpenSignIn(true)}>
                        Sign In
                    </Button>
                )}
            </div>
        </div>
    );
}
