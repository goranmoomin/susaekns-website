import "../styles/app.sass";

import { useState } from "react";
import { Box, Form } from "react-bulma-components";

function MyApp({ Component, pageProps }) {
    let [password, setPassword] = useState("");
    let isAuthorized = password == "susaekns";
    if (!isAuthorized) {
        return (
            <Box style={{ maxWidth: 240, margin: "auto" }}>
                <Form.Field>
                    <Form.Label>Password</Form.Label>
                    <Form.Control>
                        <Form.Input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Control>
                </Form.Field>
            </Box>
        );
    }
    return <Component {...pageProps} />;
}

export default MyApp;
