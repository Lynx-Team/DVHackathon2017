# Project on DVHackathon2017

## Installation
1. Install truffle, an ethereum client, firebase module. For local development, try EthereumJS TestRPC.
    ```bash
    npm install -g truffle # Version 3.0.5+ required.
    npm install -g ethereumjs-testrpc
    npm install --save firebase
    ```
2. Clone or download repository.
    ```bash
    git clone [repo]
    ```

3. Install the node dependencies.
    ```bash
    npm install
    ```

4. Compile and migrate the contracts.
    ```bash
    truffle compile
    truffle migrate
    ```
5. Run the webpack server for front-end hot reloading. For now, smart contract changes must be manually recompiled and migrated.
    ```bash
    npm run start
    ```
    
6. To build the application for production, use the build command. A production build will be in the build_webpack folder.
    ```bash
    npm run build
    ```
