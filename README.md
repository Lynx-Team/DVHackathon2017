# Project on DVHackathon2017

## Installation
1. Install truffle and an ethereum client. For local development, try EthereumJS TestRPC.
    ```javascript
    npm install -g truffle // Version 3.0.5+ required.
    npm install -g ethereumjs-testrpc
    ```
2. Clone or download repository.
    ```javascript
    git clone [repo]
    ```

3. Install the node dependencies.
    ```javascript
    npm install
    ```

4. Compile and migrate the contracts.
    ```javascript
    truffle compile
    truffle migrate
    ```
5. Run the webpack server for front-end hot reloading. For now, smart contract changes must be manually recompiled and migrated.
    ```javascript
    npm run start
    ```
    
6. To build the application for production, use the build command. A production build will be in the build_webpack folder.
    ```javascript
    npm run build
    ```
