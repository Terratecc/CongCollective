const Card = () => {
    return (
       <div>
           Test
       </div>
    
    )
}
export default Card


{/* async () => {
        loading = true;

        // Close mobile menu
        if (typeof open !== 'undefined') {
            open = false;
        }

        const providerOptions = {
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    infuraId: 'e9926eac6b434ed981dbe20085966e8b'
                }
            }
        };

        const web3Modal = new Web3Modal({
            network: 'mainnet',
            cacheProvider: false,
            providerOptions,
            theme: 'dark'
        });

        try {
            const instance = await web3Modal.connect();

            const web3Provider = new ethers.providers.Web3Provider(instance);

            const web3 = await new Web3(web3Provider.provider);

            // Fetch nonce
            const message = (await axios.get(loginSignatureUrl)).data;

            const signer = web3Provider.getSigner();

            const address = await signer.getAddress();

            const signature = await web3.eth.personal.sign(message, address);

            let response = await axios.post(loginUrl, {
                'address': address,
                'signature': signature,
            });

            window.location.href = redirectUrl;

        } catch(e) {
                    }

        loading = false;
    } */}