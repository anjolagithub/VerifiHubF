<script>
    import { ethers } from 'ethers';

    let isConnecting = false;
    let errorMessage = "";
    let walletAddress = "";

    async function connectWallet() {
        if (window.ethereum) {
            try {
                isConnecting = true;
                // Request account access
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                walletAddress = await signer.getAddress(); // Get the connected wallet address
                console.log("Connected as:", walletAddress);
                errorMessage = ""; // Clear any previous error message
            } catch (error) {
                console.error("Error connecting wallet:", error);
                errorMessage = "Failed to connect wallet. Please try again.";
            } finally {
                isConnecting = false;
            }
        } else {
            alert("Please install MetaMask!");
        }
    }
</script>

<div class="p-4">
    <h1 class="text-xl font-bold">Connect Your Wallet</h1>

    {#if isConnecting}
        <p>Connecting...</p>
    {:else}
        {#if walletAddress}
            <p>Connected as: <strong>{walletAddress}</strong></p>
            <button class="bg-green-500 text-white px-4 py-2 mt-2" disabled>Wallet Connected</button>
        {:else}
            <button on:click={connectWallet} class="bg-blue-500 text-white px-4 py-2 mt-2">Connect Wallet</button>
        {/if}
    {/if}

    {#if errorMessage}
        <p class="text-red-500 mt-2">{errorMessage}</p>
    {/if}
</div>
