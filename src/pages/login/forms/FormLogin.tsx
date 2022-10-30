import { clientController } from "../../../controllers/client/ClientController";
import { Button } from "@revoltchat/ui";

export function FormLogin() {
    return <Button onClick={clientController.login}>Login (HORAHORA BAD SSO)</Button>;
}
