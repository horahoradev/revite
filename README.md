This is a fork of [Revite](https://github.com/revoltchat/revite) that I've ~~butchered~~modified to suit Horahora's needs. Credit for developing the original software goes to the [many contributors](https://github.com/revoltchat/revite/graphs/contributors), most notably [insertish](https://github.com/insertish). If you have any questions or concerns about what I've done, you may contact me at Otoman#6721 on Discord, [my email](horahora1567@gmail.com) or anywhere else you happen to find me. Thank you for your work!

My changes are summarized below:

### 10-30-22:
- I removed browser detection from the login operation (may need this later, we'll see), and removed credentials and friendly_name from the payload to the /auth/session/login endpoint
- I removed the various authentication-related routes except for the default login path, removed the email/password form (replaced with a Button which invokes the login operation) from the login page in order to provide (bad) SSO from my other application, [Horahora](https://github.com/horahoradev/horahora). With these changes, users login once to Horahora, and then can navigate to the chat and press the big SSO login button, and they'll be logged into their Revolt account.
- removed typecheck and port exposure from Dockerfile
- modified this README to provide attribution and comply with the terms of the license

# Revite

## Description

This is the web client for Revolt, which is also available live at [app.revolt.chat](https://app.revolt.chat).

## Pending Rewrite

The following code is pending a partial or full rewrite:

-   `src/components`: components are being migrated to [revoltchat/components](https://github.com/revoltchat/components)
-   `src/styles`: needs to be migrated to [revoltchat/components](https://github.com/revoltchat/components)
-   `src/lib`: this needs to be organised

## Stack

-   [Preact](https://preactjs.com/)
-   [Vite](https://vitejs.dev/)

## Submodule Hint

This project contains submodules. Run `git submodule init` after you clone this repository to initialize the submodules.
It is also recommended to run `git submodule update` after you pull from upstream.

## Resources

### Revite

-   [Revite Issue Board](https://github.com/revoltchat/revite/issues)
-   [Google Drive Folder with Screenshots](https://drive.google.com/drive/folders/1Ckhl7_9OTTaKzyisrWHzZw1hHj55JwhD)

### Revolt

-   [Revolt Project Board](https://github.com/revoltchat/revolt/discussions) (Submit feature requests here)
-   [Revolt Testers Server](https://app.revolt.chat/invite/Testers)
-   [Contribution Guide](https://developers.revolt.chat/contributing)

## Quick Start

Get revite up and running locally.

```
git clone --recursive https://github.com/revoltchat/revite
cd revite
yarn
yarn build:deps
yarn dev
```

You can now access the client at http://local.revolt.chat:3000.

## CLI Commands

| Command                                 | Description                                  |
| --------------------------------------- | -------------------------------------------- |
| `yarn pull`                             | Setup assets required for Revite.            |
| `yarn dev`                              | Start the Revolt client in development mode. |
| `yarn build`                            | Build the Revolt client.                     |
| `yarn build:deps`                       | Build external dependencies.                 |
| `yarn preview`                          | Start a local server with the built client.  |
| `yarn lint`                             | Run ESLint on the client.                    |
| `yarn fmt`                              | Run Prettier on the client.                  |
| `yarn typecheck`                        | Run TypeScript type checking on the client.  |
| `yarn start`                            | Start a local sirv server with built client. |
| `yarn start:inject`                     | Inject a given API URL and start server.     |
| `yarn lint \| egrep "no-literals" -B 1` | Scan for untranslated strings.               |

## License

Revite is licensed under the [GNU Affero General Public License v3.0](https://github.com/revoltchat/revite/blob/master/LICENSE).
